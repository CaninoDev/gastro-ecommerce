import React from "react"
import Layout from "../layouts/restaurant-layout"

const IndexPage = ({ location, children }) => {
  return <Layout location={location}>{children}</Layout>
}

export default IndexPage
