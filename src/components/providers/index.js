import React from 'react'

import CartProvider from "./cart"
import ProductsProvider from "./products"

const Providers = ({ children }) => (
        <ProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductsProvider>
)

export default Providers
