import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.posts.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.slug}>{node.title}</Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
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
