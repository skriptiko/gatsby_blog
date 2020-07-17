const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogRequest = `
   {
     allContentfulBlog (
       sort: { fields: [createdAt], order: DESC })
     {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `

  const blog = await makeRequest(graphql, blogRequest)

  blog.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog.jsx`),
      context: {
        id: node.id,
      },
    })
  })
}
