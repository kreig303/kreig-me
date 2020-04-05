import React from 'react'

import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <Seo
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
