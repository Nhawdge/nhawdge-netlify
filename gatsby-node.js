const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve("src/templates/blog.jsx")

  return graphql(`
  {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          html
          frontmatter {
            date
            title
            tags
            type
          }
          wordCount {
            words
          }
        }
      }
    }
  }
  
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let urlpath = `/blog/${node.frontmatter.title
        .toLowerCase()
        .split(" ")
        .join("-")}`

      createPage({
        path: urlpath,
        component: blogPostTemplate,
        context: { node },
      })
    })
  })
}
