import React from "react"

import Layout from "../components/layout"
import ProductsProvider from "../components/products-provider"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <ProductsProvider>
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
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </ProductsProvider>
  </Layout>
)

export default IndexPage
