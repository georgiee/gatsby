const _ = require(`lodash`)
const faker = require(`faker`)
const fs = require(`fs`)
console.log(process.env.NUM_PAGES)
const NUM_PAGES = parseInt(process.env.NUM_PAGES || 5000, 10)

const NUM_TYPES = parseInt(process.env.NUM_TYPES || 1, 10)

function newTypeName() {
  return _.capitalize(_.camelCase(faker.lorem.word()))
}

let types = []

// Create NUM_PAGES nodes, split over NUM_TYPES types. Each node has
// the bare minimum of content
exports.sourceNodes = ({ actions: { createNode } }) => {
  for (let i = 0; i < NUM_TYPES; i++) {
    types.push(newTypeName())
  }
  // Create markdown nodes
  const pagesPerType = NUM_PAGES / NUM_TYPES

  let step = 0

  _.forEach(types, typeName => {
    for (let i = 0; i < pagesPerType; i++) {
      step++
      const id = `${typeName}${step.toString()}`
      createNode({
        id,
        parent: null,
        children: [],
        internal: {
          type: typeName,
          nestedId: id,
          content: faker.lorem.word(),
          contentDigest: step.toString(),
        },
      })
    }
  })
}

// Total hack. It would be nice if we could programmatically generate
// graphQL per component. But in the meantime, we just generate the
// actual component js file with the graphql
function createPageTemplateJs() {
  return `
import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <div>
      <h1>Not much ey</h1>
    </div>
  )
}

`
}

function allTypeQuery(typeName) {
  return `
{
  all${typeName}(sort: { fields: [id] }) {
    edges {
      node {
        id
      }
    }
  }
}
`
}

// Create template in .cache for the received type
function createTemplateFile(typeName) {
  const templateSrc = createPageTemplateJs()
  const templateFilename = `./.cache/${typeName}Template.js`
  fs.writeFileSync(templateFilename, templateSrc)
  return templateFilename
}

// Create node for the received type
async function createNode(graphql, typeName) {
  const result = await graphql(allTypeQuery(typeName))
  return result.data[`all${typeName}`].edges
}

// Create page for each type
exports.createPages = async ({ actions, graphql }) => {
  for (let i = 0; i < types.length; i++) {
    const typeName = types[i]
    const templateFilename = createTemplateFile(typeName)
    const edges = await createNode(graphql, typeName)
    _.forEach(edges, ({ node }) => {
      actions.createPage({
        path: `/${typeName}/${node.id}/`,
        component: require.resolve(templateFilename),
        context: {
          id: node.id,
          useQueryIndex: true,
        },
      })
    })
  }
}
