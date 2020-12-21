import React from "react"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `application`,
          `e-commerce`,
          `restaurant`,
          `stripe`,
        ]}
      />
      {children}
    </>
  )
}

export default Layout
