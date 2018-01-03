import React from 'react'
import Link from 'gatsby-link'
import { Card } from 'antd'

const IndexPage = ({ data }) => {
  return (
    <div>
      {data.posts.edges.map(({ node }) => (
        <Card key={node.id} style={{ marginBottom: '18px' }}>
          <h2>
            <Link to={node.slug}>{node.title}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </Card>
      ))}
    </div>
  )
}

export const query = graphql`
  query allPostQuery {
    posts: allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default IndexPage
