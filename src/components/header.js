import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from "./SocialLinks"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `steelblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1600,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
      }}
    >
      <h1 style={{ margin: 0, padding: `0 2rem` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <SocialLinks />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
