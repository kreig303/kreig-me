import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer className="gutter">
    <div style={{ padding: `0 2rem` }}>
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
