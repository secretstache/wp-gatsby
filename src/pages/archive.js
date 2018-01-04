import React from 'react'
import Link from 'gatsby-link'
import { List } from 'antd'

export default ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data.posts.edges}
      bordered
      renderItem={({ node }) => (
        <List.Item style={{ backgroundColor: 'white' }}>
          <Link to={node.slug}>{node.title}</Link>
        </List.Item>
      )}
    />
  )
}

export const query = graphql`
  query archiveQuery {
    posts: allWordpressPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
