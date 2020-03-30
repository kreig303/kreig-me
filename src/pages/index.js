import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledFullBackground from "../components/FullBackground"

const StyledBackground = styled(StyledFullBackground)`
  div {
    flex-direction: column;
    padding: 3rem 3rem;
  }
  ,
  h2 {
    font-size: 3rem;
  }
  ,
  a {
    color: black;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="kreig.me home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `kreig zimmerman`,
        `kreig.me`,
        `blog`,
      ]}
    />
    <StyledBackground>
      <div>
        <h2>
          <a href="https://github.com/kreig303">Github</a>
        </h2>
        <h2>
          <a href="https://twitter.com/@kreig303">Twitter</a>
        </h2>
        <h2>
          <a href="https://www.linkedin.com/in/kreig">LinkedIn</a>
        </h2>
      </div>
    </StyledBackground>
  </Layout>
)

export default IndexPage
