# Query benchmark

Stress tests creating lots of queries.

Defaults to building a site with 5k pages split evenly amongst 10 types. Set the `NUM_PAGES` environment variable to change the number of pages, and `NUM_TYPES` to change the number of types they're split over. E.g to create a site with 5 types, each with 200 pages, do `NUM_TYPES=5 NUM_PAGES=1000 gatsby build`

## Activity Summary

With activity updates<br>
| Queries | Static HTML |
| 12.476 s | 4.170 s |
| 13.538 s | 3.981 s |
| 13.190 s | 4.802 s |
| 12.780 s | 4.976 s |

Without activity updates<br>
| Queries | Static HTML |
| 4.181 s | 4.236 s |
| 4.289 s | 4.518 s |
| 4.262 s | 4.327 s |
| 4.158 s | 4.051 s |

The version with activity is 1 second per 1.000 queries slower.

## Activity on

```
❯ yarn run:activity-on

```

Run 01

```
success open and validate gatsby-configs - 0.026 s
10000
success load plugins - 0.399 s
success onPreInit - 0.018 s
success delete html and css files from previous builds - 0.024 s
success initialize cache - 0.027 s
success copy gatsby files - 0.051 s
success onPreBootstrap - 0.031 s
success source and transform nodes - 0.781 s
success Add explicit types - 0.017 s
success Add inferred types - 0.087 s
success Processing types - 0.078 s
success building schema - 0.254 s
success createPages - 2.729 s
success createPagesStatefully - 0.081 s
success onPreExtractQueries - 0.017 s
success update schema - 0.498 s
success extract queries from components - 0.070 s
success write out requires - 0.055 s
success write out redirect data - 0.017 s
success onPostBootstrap - 0.021 s
⠀
info bootstrap finished - 10.223 s
⠀
success run static queries - 0.024 s
success Building production JavaScript and CSS bundles - 4.812 s
success Rewriting compilation hashes - 0.080 s
success run page queries - 12.476 s — 10001/10001 804.73 queries/second
success Building static HTML for pages - 4.170 s — 10001/10001 2622.78 pages/second
info Done building in 32.054165297 sec

✨  Done in 37.11s.
```

Run 02

```
success open and validate gatsby-configs - 0.034 s
10000
success load plugins - 0.416 s
success onPreInit - 0.017 s
success delete html and css files from previous builds - 0.026 s
success initialize cache - 0.023 s
success copy gatsby files - 0.041 s
success onPreBootstrap - 0.026 s
success source and transform nodes - 0.858 s
success Add explicit types - 0.018 s
success Add inferred types - 0.078 s
success Processing types - 0.076 s
success building schema - 0.250 s
success createPages - 3.115 s
success createPagesStatefully - 0.097 s
success onPreExtractQueries - 0.047 s
success update schema - 0.558 s
success extract queries from components - 0.068 s
success write out requires - 0.061 s
success write out redirect data - 0.020 s
success onPostBootstrap - 0.018 s
⠀
info bootstrap finished - 9.127 s
⠀
success run static queries - 0.027 s
success Building production JavaScript and CSS bundles - 4.630 s
success Rewriting compilation hashes - 0.092 s
success run page queries - 13.538 s — 10001/10001 741.43 queries/second
success Building static HTML for pages - 3.981 s — 10001/10001 2736.19 pages/second
info Done building in 31.683101977 sec

✨  Done in 36.61s.

```

Run 03

```

success open and validate gatsby-configs - 0.025 s
10000
success load plugins - 0.415 s
success onPreInit - 0.018 s
success delete html and css files from previous builds - 0.026 s
success initialize cache - 0.024 s
success copy gatsby files - 0.047 s
success onPreBootstrap - 0.030 s
success source and transform nodes - 0.814 s
success Add explicit types - 0.016 s
success Add inferred types - 0.093 s
success Processing types - 0.076 s
success building schema - 0.260 s
success createPages - 2.821 s
success createPagesStatefully - 0.117 s
success onPreExtractQueries - 0.055 s
success update schema - 0.580 s
success extract queries from components - 0.068 s
success write out requires - 0.064 s
success write out redirect data - 0.018 s
success onPostBootstrap - 0.024 s
⠀
info bootstrap finished - 9.561 s
⠀
success run static queries - 0.025 s
success Building production JavaScript and CSS bundles - 5.185 s
success Rewriting compilation hashes - 0.068 s
success run page queries - 13.190 s — 10001/10001 760.96 queries/second
success Building static HTML for pages - 4.802 s — 10001/10001 2302.02 pages/second
info Done building in 33.131790012 sec

✨  Done in 38.02s.

```

Run 04

```
success open and validate gatsby-configs - 0.031 s
10000
success load plugins - 0.381 s
success onPreInit - 0.017 s
success delete html and css files from previous builds - 0.027 s
success initialize cache - 0.024 s
success copy gatsby files - 0.046 s
success onPreBootstrap - 0.023 s
success source and transform nodes - 0.746 s
success Add explicit types - 0.016 s
success Add inferred types - 0.066 s
success Processing types - 0.067 s
success building schema - 0.234 s
success createPages - 2.620 s
success createPagesStatefully - 0.067 s
success onPreExtractQueries - 0.016 s
success update schema - 0.463 s
success extract queries from components - 0.062 s
success write out requires - 0.061 s
success write out redirect data - 0.018 s
success onPostBootstrap - 0.018 s
⠀
info bootstrap finished - 9.902 s
⠀
success run static queries - 0.019 s
success Building production JavaScript and CSS bundles - 4.700 s
success Rewriting compilation hashes - 0.075 s
success run page queries - 12.780 s — 10001/10001 785.69 queries/second
success Building static HTML for pages - 4.976 s — 10001/10001 2153.84 pages/second
info Done building in 32.708803272 sec

✨  Done in 38.56s.
```

## off

```
❯ yarn run:activity-off
```

### Run 01

```
success open and validate gatsby-configs - 0.047 s
10000
success load plugins - 0.433 s
success onPreInit - 0.020 s
success delete html and css files from previous builds - 0.022 s
success initialize cache - 0.030 s
success copy gatsby files - 0.049 s
success onPreBootstrap - 0.033 s
success source and transform nodes - 0.882 s
success Add explicit types - 0.022 s
success Add inferred types - 0.115 s
success Processing types - 0.073 s
success building schema - 0.303 s
success createPages - 2.808 s
success createPagesStatefully - 0.070 s
success onPreExtractQueries - 0.017 s
success update schema - 0.493 s
success extract queries from components - 0.069 s
success write out requires - 0.057 s
success write out redirect data - 0.015 s
success onPostBootstrap - 0.018 s
⠀
info bootstrap finished - 9.335 s
⠀
success run static queries - 0.019 s
success Building production JavaScript and CSS bundles - 4.547 s
success Rewriting compilation hashes - 0.066 s
success run page queries - 4.181 s
success Building static HTML for pages - 4.236 s
info Done building in 22.691154558 sec

```

### Run 02

```
success open and validate gatsby-configs - 0.048 s
10000
success load plugins - 0.497 s
success onPreInit - 0.031 s
success delete html and css files from previous builds - 0.039 s
success initialize cache - 0.029 s
success copy gatsby files - 0.069 s
success onPreBootstrap - 0.029 s
success source and transform nodes - 1.480 s
success Add explicit types - 0.021 s
success Add inferred types - 0.125 s
success Processing types - 0.144 s
success building schema - 0.417 s
success createPages - 4.529 s
success createPagesStatefully - 0.165 s
success onPreExtractQueries - 0.023 s
success update schema - 0.704 s
success extract queries from components - 0.081 s
success write out requires - 0.077 s
success write out redirect data - 0.019 s
success onPostBootstrap - 0.027 s
⠀
info bootstrap finished - 13.262 s
⠀
success run static queries - 0.022 s
success Building production JavaScript and CSS bundles - 6.357 s
success Rewriting compilation hashes - 0.062 s
success run page queries - 4.289 s
success Building static HTML for pages - 4.518 s
info Done building in 28.87589898 sec
```

### Run 03

```
success open and validate gatsby-configs - 0.021 s
10000
success load plugins - 0.383 s
success onPreInit - 0.019 s
success delete html and css files from previous builds - 0.024 s
success initialize cache - 0.021 s
success copy gatsby files - 0.047 s
success onPreBootstrap - 0.022 s
success source and transform nodes - 0.768 s
success Add explicit types - 0.022 s
success Add inferred types - 0.067 s
success Processing types - 0.066 s
success building schema - 0.229 s
success createPages - 2.746 s
success createPagesStatefully - 0.060 s
success onPreExtractQueries - 0.020 s
success update schema - 0.471 s
success extract queries from components - 0.066 s
success write out requires - 0.051 s
success write out redirect data - 0.018 s
success onPostBootstrap - 0.016 s
⠀
info bootstrap finished - 9.140 s
⠀
success run static queries - 0.019 s
success Building production JavaScript and CSS bundles - 4.703 s
success Rewriting compilation hashes - 0.068 s
success run page queries - 4.262 s
success Building static HTML for pages - 4.327 s
info Done building in 22.808230445 sec
```

### Run 04

```
success open and validate gatsby-configs - 0.033 s
10000
success load plugins - 0.245 s
success onPreInit - 0.024 s
success delete html and css files from previous builds - 0.023 s
success initialize cache - 0.022 s
success copy gatsby files - 0.041 s
success onPreBootstrap - 0.030 s
success source and transform nodes - 0.777 s
success Add explicit types - 0.019 s
success Add inferred types - 0.071 s
success Processing types - 0.066 s
success building schema - 0.225 s
success createPages - 2.625 s
success createPagesStatefully - 0.071 s
success onPreExtractQueries - 0.019 s
success update schema - 0.457 s
success extract queries from components - 0.068 s
success write out requires - 0.060 s
success write out redirect data - 0.016 s
success onPostBootstrap - 0.020 s
⠀
info bootstrap finished - 7.924 s
⠀
success run static queries - 0.018 s
success Building production JavaScript and CSS bundles - 4.600 s
success Rewriting compilation hashes - 0.066 s
success run page queries - 4.158 s
success Building static HTML for pages - 4.051 s
info Done building in 21.113741965 sec
```
