import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle {
        edges {
          node {
            title
            author {
              name
              avatar {
                file {
                  url
                }
              }
            }
            banner {
              file {
                url
              }
            }
            text {
              text
            }
            id
          }
        }
      }
    }
  `)
  return { data }
}
