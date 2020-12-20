import React from "react"

const TopBar = ({ isScrolled }) => {
  return (
    <div
      id="topbar"
      className={
        "fixed-top align-items-center" +
        (isScrolled ? " topbar-scrolled" : null)
      }
    >
      <div className="container d-flex">
        <div className="contact-info mr-auto"></div>
      </div>
    </div>
  )
}

export default TopBar
