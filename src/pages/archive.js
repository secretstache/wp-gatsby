import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      {data.posts.edges.map(({ node }) => {
        return (
          <div>
            <Link to={node.slug}>{node.title}</Link>
          </div>
        )
      })}
    </div>
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
