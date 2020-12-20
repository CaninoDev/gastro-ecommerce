import React from "react"

const Links = [
  { label: "About", to: "#about" },
  { label: "Menu", to: "#menu" },
  { label: "Contact", to: "#contact" },
  { label: "Reservations", to: "#reservations" },
]

const NavMenuLinks = ({ location }) => {
  console.log(location.pathname)
  return (
    <ul>
      {Links.map(l => (
        <li
          className={
            l.label !== "Reservations" ? "" : "book-a-table text-center"
          }
          key={l.label}
        >
          <a
            href={l.to}
            className={
              location.pathname.includes(l.to) ? "nav-link active" : "nav-link"
            }
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavMenuLinks
