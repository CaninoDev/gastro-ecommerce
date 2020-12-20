import React from "react"
import NavMenuLinks from "./nav-menu-links"

const NavMenu = ({ menuActive, toggleMenu, location }) => {
  return (
    <nav className={"nav-menu" + (menuActive ? " active" : "")}>
      <NavMenuLinks location={location} />
      {menuActive ? (
        <button
          type="button"
          className={"close-button" + (!menuActive ? " d-none" : "")}
          onClick={toggleMenu}
          aria-label="Close"
        >
          <i className="icofont-close-line" />
        </button>
      ) : null}
    </nav>
  )
}

export default NavMenu
