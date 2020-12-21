import React from "react"
import AdminLayout from "../layouts/admin-layout"
import RestaurantLayout from "../layouts/restaurant-layout"

const Layout = ({ pageContext, children }) => {
  console.log(pageContext.layout)
  return (
    <>
      {pageContext.layout === "admin" ? (
        <AdminLayout ctx={pageContext}>{children}</AdminLayout>
      ) : (
        <RestaurantLayout ctx={pageContext}>{children}</RestaurantLayout>
      )}
    </>
  )
}

export default Layout
