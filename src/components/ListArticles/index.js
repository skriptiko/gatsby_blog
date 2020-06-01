import { graphql, StaticQuery } from "gatsby"
import { List } from "antd"
import Article from "../Article"
import React from "react"

import useListArticlesQuery from "../../utils/useListArticlesQuery"

export default () => {
  const { data } = useListArticlesQuery()

  const edges = data?.allContentfulArticle?.edges

  return (
    <List>
      {edges.map(({ node }) => (
        <List.Item key={node.id}>
          <Article content={node} />
        </List.Item>
      ))}
    </List>
  )
}
