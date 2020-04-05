import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from "./SocialLinks"

const Header = ({ siteTitle }) => (
  <header className="gutter">
    <div
      style={{
        padding: `0 2rem`,
        display: `grid`,
        gridTemplateColumns: `35rem 30rem`,
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
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
