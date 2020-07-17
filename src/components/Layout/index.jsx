import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, Link } from 'gatsby'
import { Layout as Wrapper, Avatar } from 'antd'
import { DingtalkOutlined } from '@ant-design/icons'

import Nav from '../Nav'
import './index.css'

const { Content, Footer, Sider } = Wrapper

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <Wrapper style={{ height: "100%" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
        <div className="logo" style={{ textAlign: 'center' }}>
          <Link to={'/'}>
            <Avatar
              size={64}
              icon={<DingtalkOutlined />}
              style={{ background: 'transparent' }}
            />
          </Link>
        </div>
        <Nav />
      </Sider>
      <Wrapper style={{ height: "100%" }}>
        <Content>{children}</Content>
      </Wrapper>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
