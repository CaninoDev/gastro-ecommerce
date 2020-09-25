import React from "react"

import Layout from "../components/layout"
import ProductsProvider from "../components/products-provider"
import CartProvider from "../components/cart-provider"
import SEO from "../components/seo"

const IndexPage = () => (
  <ProductsProvider>
    <CartProvider>
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
      <Layout />
    </CartProvider>
  </ProductsProvider>
)

export default IndexPage
