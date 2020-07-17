import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'

import './index.css'

export default () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allContentfulBlog(
          limit: 9
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              slug
              title
              category {
                id
                title
              }
              featuredImage {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className="home">
          <div className="home__content">
            {data.allContentfulBlog.edges.map(edge => (
              <div
                key={edge.node.id}
                className="home__card"
                style={{
                  backgroundImage: `linear-gradient(
                    to bottom, 
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`,
                }}
                onClick={() => navigate(`/blog/${edge.node.slug}`)}
              >
                {edge.node.category.map(category => (
                  <p className="card__category">{category.category}</p>
                ))}
                <p className="card__title">{edge.node.title}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }}
  />
)
