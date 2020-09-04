import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <Fragment>
      <header>
        <Link to="/">
          <h4>{siteTitle}</h4>
        </Link>
      </header>
    </Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
