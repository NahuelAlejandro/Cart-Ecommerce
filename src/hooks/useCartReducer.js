import { useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeOneItemFromCart = product => dispatch({
    type: 'REMOVE_ONE_ITEM',
    payload: product
  })
  const removeAllItemFromCart = product => dispatch({
    type: 'REMOVE_ALL_ITEM_FROM_CART',
    payload: product
  })
  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return {
    state,
    addToCart,
    removeOneItemFromCart,
    removeAllItemFromCart,
    clearCart
  }
}
