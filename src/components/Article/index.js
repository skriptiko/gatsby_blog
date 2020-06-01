import React from "react"
import { Card, Avatar } from "antd"

const Article = ({ content }) => {
  const { title, text, banner, author } = content

  const bannerUrl = banner?.file?.url
  const avatarUrl = author?.avatar?.file?.url
  const description = text?.text

  return (
    <Card cover={<img alt={title} src={bannerUrl} />}>
      <Card.Meta
        avatar={<Avatar src={avatarUrl} />}
        title={title}
        description={description}
      />
    </Card>
  )
}

export default Article
