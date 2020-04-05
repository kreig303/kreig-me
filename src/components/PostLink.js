import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <h2>
    &bull;&nbsp;
    <Link to={post.frontmatter.path} className="blog-list">
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </h2>
)

export default PostLink
