import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "./styles.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header siteTitle="title" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 600,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout