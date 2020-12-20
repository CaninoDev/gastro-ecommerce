import React, { useState } from "react"
import Logo from "../images/TribecaGrillLogo"
import NavMenu from "./nav-menu"

const Header = ({ isScrolled, location }) => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header
      id="header"
      className={
        "fixed-top d-flex align-items-center header-transparent" +
        (isScrolled ? " header-scrolled" : "")
      }
    >
      <div className="container d-flex align-items-center">
        <div className="logo mr-auto overflow-visible">
          <a href="#landing">
            <div className="img-fluid">
              <Logo />
            </div>
          </a>
        </div>
        <button type="button" className="nav-toggle" onClick={toggleMenu}>
          <i className="icofont-navigation-menu" />
        </button>
        <NavMenu
          location={location}
          menuActive={menuActive}
          toggleMenu={toggleMenu}
          location={location}
        />
      </div>
    </header>
  )
}

export default Header
