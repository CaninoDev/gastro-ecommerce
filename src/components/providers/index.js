import React from 'react'
import ChakraProvider from "./chakra"
import CartProvider from "./cart"
import ProductsProvider from "./products"

const Providers = ({ children }) => (
    <ChakraProvider>
        <ProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductsProvider>
    </ChakraProvider>
)

export default Providers
