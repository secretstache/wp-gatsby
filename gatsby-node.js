const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              title
              excerpt
            }
          }
        }
      }
    `).then(({ data }) => {
      data.allWordpressPost.edges.map(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })
}
