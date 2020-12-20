import React from "react"

const MenuItem = ({ id, name, price, description }) => {
  return (
    <div
      className="menu-item col-xl-4 col-lg-6 col-md-12 col-sm-12"
      type="button"
    >
      <div className="menu-content">
        <a>{name}</a>
        <span></span>
        <div className="price">${price / 100}</div>
      </div>
      <div className="menu-ingredients fw-lighter">{description}</div>
    </div>
  )
}

export default MenuItem
