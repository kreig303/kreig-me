import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  console.log(`keywords: ${frontmatter.keywords}`)
  console.log(`title: ${frontmatter.title}`)
  const siteKeywords = [
    `gatsby`,
    `application`,
    `react`,
    `kreig zimmerman`,
    `kreig.me`,
    `blog`,
  ]
  const postKeywords = [...siteKeywords, ...frontmatter.keywords]
  // TODO: build out the clases for `blog-post*` family
  console.log(`postKeywords: ${postKeywords}`)
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={postKeywords} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.subtitle}</h2>
          <h3>{frontmatter.date}</h3>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        keywords
      }
    }
  }
`
