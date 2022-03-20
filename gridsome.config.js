// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const postCSSPlugins = [require(`tailwindcss`)(),require(`autoprefixer`)]

if (process.env.NODE_ENV === 'production') { postCSSPlugins.push(require(`postcss-clean`)) }

module.exports = {
    siteName: 'leininger.tech',
    plugins: [
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'work/**/*.md',
          typeName: 'WorkItems',
          remark: {
            plugins: [
                '@gridsome/remark-prismjs'
            ]
          }
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'words/**/*.md',
          typeName: 'Posts',
          remark: {
            plugins: [
                '@gridsome/remark-prismjs'
            ]
          }
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'lists/**/*.md',
          typeName: 'ListItems',
          remark: {
            plugins: [
                '@gridsome/remark-prismjs'
            ]
          }
        }
      },

    ],
    transformers: {
      remark: {
        plugins: [
          [
            "remark-autolink-headings",
            {
              behavior: "wrap",
              linkProperties: {
                ariaHidden: "true",
                tabIndex: -1,
              },
            },
          ],
        ],
      },
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: postCSSPlugins,
            },
        },
    },
}
