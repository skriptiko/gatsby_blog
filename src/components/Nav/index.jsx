import { Menu } from 'antd'
import React from 'react'
import { CarOutlined, EditOutlined } from '@ant-design/icons'

const Nav = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="2" icon={<CarOutlined />}>
        Blog
      </Menu.Item>
      <Menu.Item key="1" icon={<EditOutlined />}>
        Contact
      </Menu.Item>
    </Menu>
  )
}

export default Nav
