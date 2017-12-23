import React from 'react'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>{data.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
    </div>
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
