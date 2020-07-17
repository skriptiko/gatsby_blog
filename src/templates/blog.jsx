import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import './blog.css'
import footer from '../images/general-footer-image.jpg'

const BlogTemplate = props => {
  return (
    <Layout>
      <div className="blog">
        <div className="blog__header">
          <div
            className="blog__hero"
            style={{
              backgroundImage: `linear-gradient(
            to top, 
            rgba(0,0,0,0.3) 0%,
            rgba(0,0,0,0.9) 50%,
            rgba(0,0,0,1) 100%,
            url(${props.data.contentfulBlog.featuredImage.fluid.src})`,
            }}
          >
            <div className="blog__info">
              <h1 className="blog__title">{props.data.contentfulBlog.title}</h1>
            </div>
          </div>
        </div>
        <div className="blog__wrapper">
          <div className="blog__content">
            <div
              dangerouslySetInnerHTML={{
                __html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogTemplate($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      id
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`
