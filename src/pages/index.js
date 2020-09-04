import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import Layout from "../components/layout"
import ProductsProvider from "../components/products-provider"
import CartProvider from "../components/cart-provider"
import Image from "../components/image"
import SEO from "../components/seo"

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const IndexPage = () => (
  <Elements stripe={stripePromise}>
    <Layout>
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
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </CartProvider>
      </ProductsProvider>
    </Layout>
  </Elements>
)

export default IndexPage
