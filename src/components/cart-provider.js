import React, { createContext, useEffect, useState, useContext } from "react"
import { ProductsContext } from "./products-provider"

const CartContext = createContext()

/**
 * Manages the shopping cart. Purchases are persisted in local storage. The cart itself and related methods are shared through context.
 */
const CartProvider = ({ children }) => {
  const { products } = useContext(ProductsContext)

  const [mode, setMode] = useState(false)
  const [contents, setContents] = useState(() => {
    // Load cart from local storage; otherwise initialize if empty
    let localCart

    try {
      localCart = JSON.parse(localStorage.getItem("cart"))
    } catch (err) {
      console.error(err.message)
    }

    if (!localCart || !Array.isArray(localCart)) return []
    return localCart
  })

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(contents))
    } catch (err) {
      console.error(err)
    }
  }, [contents])

  // An array representing cart items in the form of [{item}, quantity]
  const cart = contents.map(([id, quantity]) => {
    return [products[id], quantity]
  })

  // The number of items in the cart for badging.
  // TODO: Prevent counting of side dishes.
  const count = contents.reduce((sum, [_, quantity]) => sum + quantity, 0)

  // The total cost of items in the cart.
  const total = contents.reduce(
    (sum, [id, quantity]) => sum + products[id].price * quantity,
    0
  )

  /**
   * Returns the quantity of an item currently in cart.
   *
   * @param {string} id
   */
  function get(id) {
    if (!contents.length) return 0
    const cartItem = contents.find(item => item[0] === id)
    return cartItem ? cartItem[1] : 0
  }

  /**
   * Sets the quantity of the requested item, if available.
   *
   * @param {string} id The price_id
   * @param {number} quantity
   */
  function set(id, quantity) {
    if (!available(id, quantity)) return -1

    const index = contents.findIndex(item => item[0] === id)

    setContents(([...state]) => {
      if (index !== -1) {
        state[index] = [id, quantity]
      } else {
        state.push([id, quantity])
      }
      return state
    })
    return quantity
  }

  /**
   * Increment the quantity of a particular item in the cart.
   *
   * @param {string} id The price_id
   * @param {number} quantity
   */
  function add(id, quantity = 1) {
    const currentQuantity = get(id)
    return set(id, quantity + currentQuantity)
  }

  /**
   * Decrement the quantity of a particular item in the cart.
   *
   * @param {string} id The price_id
   * @param {number} quantity
   */
  function subtract(id, quantity = 1) {
    const currentQuantity = get(id)
    const newQuantity = Math.max(0, quantity - currentQuantity)
    return set(id, newQuantity)
  }

  /**
   * Remove a particular item from the cart.
   *
   * @param {string} id
   */
  function remove(id) {
    setContents(state => {
      return state.filter(item => item[0] !== id)
    })
  }

  /**
   * TODO: Check whether a particular item is available for ordering.
   *
   * @param {string} id
   * @param {*} quantity
   */
  function available(id, quantity = 1) {}

  /**
   * Toggles cart display or sets to `mode` if provided.
   *
   * @param {boolean} mode
   */
  function toggle(mode) {
    setMode(prev => mode || !prev)
  }

  const ctx = {
    contents,
    cart,
    add,
    subtract,
    get,
    set,
    remove,
    available,
    toggle,
    count,
    total,
    mode,
  }

  return (
    <CartContext.Provider value={{ ...ctx }}>{children}</CartContext.Provider>
  )
}

export default CartProvider
