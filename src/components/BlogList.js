import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import PostLink from "./PostLink"

const BlogList = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "DD-MMM-YYYY")
              path
              title
            }
          }
        }
      }
    }
  `)

  const Posts = pageQuery.allMarkdownRemark.edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

const StyledBlogList = styled(BlogList)`
  div {
    flex-direction: column;
    padding: 3rem 3rem;
  }
  ,
  a {
    color: black;
  }
`

export default StyledBlogList
