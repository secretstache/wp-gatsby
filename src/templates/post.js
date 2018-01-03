import React from 'react'
import { Card } from 'antd'

export default ({ data }) => {
  return (
    <Card>
      <h1>{data.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
    </Card>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: wordpressPost(slug: { eq: $slug }) {
      id
      content
      title
      slug
    }
  }
`
