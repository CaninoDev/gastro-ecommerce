import React from "react"

const Links = [
  { label: "About", to: "#about" },
  { label: "Menu", to: "#menu" },
  { label: "Contact", to: "#contact" },
  { label: "Reservations", to: "#reservations" },
]

const NavMenuLinks = () => {
  return (
    <ul>
      {Links.map(l => (
        <li
          className={
            l.label !== "Reservations" ? "" : "book-a-table text-center"
          }
          key={l.label}
        >
          <a href={l.to} className={"nav-link"}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavMenuLinks
