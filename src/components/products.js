import React, { useContext } from "react"
import { ProductsContext } from "./products-provider"

const Products = () => {
  const { listProducts } = useContext(ProductsContext)
  const products = listProducts()

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default Products
