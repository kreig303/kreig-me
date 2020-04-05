import React from 'react'

import BlogList from '../components/BlogList'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `kreig zimmerman`,
        `kreig.me`,
        `blog`,
      ]}
    />
    <BlogList />
  </Layout>
)

export default IndexPage
