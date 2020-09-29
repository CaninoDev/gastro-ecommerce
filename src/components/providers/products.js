import React, { createContext, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

export const ProductsContext = createContext()

/**
 * Wrapper for access to prices node from Gatsby's graphQL store.
 */
const ProductsProvider = ({ children }) => {
  const data = useStaticQuery(productsQuery)
  return <Provider data={data}>{children}</Provider>
}

/**
 * Shares product information through context. Products are first loaded from Gatsby's GraphQL store and then updated with current information from Stripe.
 */
const Provider = ({ data, children }) => {
  const initialEntries = normalizeData(data.allStripePrice.nodes)
  const [ products, setProducts ] = useState(initialEntries)

  useEffect(() => {
    updateProducts()
  }, [])

  const updateProducts = async () => {
    const { prices } = await fetch(
      "/.netlify/functions/stripe-read"
    ).then(response => response.json())

    const updatedProducts = normalizeData(prices.data)
    setProducts(updatedProducts)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        listProducts: () => {
          return Object.values(products)
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

const normalizeData = data => {
  const products = {}
  data.forEach(node => {
    const { product } = node
    const aProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      price_id: node.id,
      price: node.unit_amount,
      active: node.active,
    }
    products[ product.id ] = aProduct
  })
  return products
}

// GraphQL query to grab product and pricing
export const productsQuery = graphql`
  query pricesQuery {
    allStripePrice {
      nodes {
        active
        id
        unit_amount
        product {
          description
          id
          images
          name
        }
      }
    }
  }
`
export default ProductsProvider
