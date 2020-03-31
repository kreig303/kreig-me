import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `steelblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1600,
        fontFamily: `sans-serif`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
      }}
    >
      Copyright &copy; {new Date().getFullYear()}
      {` `}&bull;{` `}All Rights Reserved{` `}&bull;
      {` `}A{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}site.
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
