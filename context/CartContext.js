import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

export const Provider = props => {
  const [cartItems, setCartItems] = useState([])
  const cartContext = {
    cartItems,
    setCartItems,
  }
  console.log('context', cartItems)
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export const { Consumer } = CartContext
