import React from "react"
import PropTypes from "prop-types"
import { PageHeader } from "antd"
import { DingdingOutlined } from "@ant-design/icons"

const Header = () => (
  <header>
    <PageHeader
      className="site-page-header"
      title="Title"
      subTitle="This is a subtitle"
      avatar={{
        icon: <DingdingOutlined style={{ fontSize: "35px", color: "#000" }} />,
        style: { background: "transparent" },
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
