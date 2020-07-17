import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'

import './index.css'

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        allContentfulBlog(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              slug
              title
              shortDescription
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
      const post = data.allContentfulBlog.edges[0]
      return (
        <header
          className="header"
          style={{
            backgroundImage: `url(${post.node.featuredImage.fluid.src})`,
          }}
        >
          <div key={post.node.id} className="header__section">
            <div />
            <div className="header__content">
              <div className="header__info">
                <h1 className="header__title">{post.node.title}</h1>
                <p className="header__subtitle">{post.node.shortDescription}</p>
                <button
                  onClick={() => navigate(`/blog/${post.node.slug}`)}
                  className="btn__med"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </header>
      )
    }}
  />
)
