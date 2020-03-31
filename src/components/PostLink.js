import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <h2>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </h2>
)

export default PostLink
