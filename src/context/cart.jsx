import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, removeOneItemFromCart, removeAllItemFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeOneItemFromCart,
      removeAllItemFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
