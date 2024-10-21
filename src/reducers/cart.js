export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

const CART_ACTION_TYPES = {
  addToCart: 'ADD_TO_CART',
  removeOneItem: 'REMOVE_ONE_ITEM',
  removeAllItem: 'REMOVE_ALL_ITEM_FROM_CART',
  clearCart: 'CLEAR_CART'

}

export const setCartLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTIONS = {
  [CART_ACTION_TYPES.addToCart]: (state, action) => {
    const { id } = action.payload
    const findItems = state.findIndex(item => item.id === id)

    if (findItems >= 0) {
      const newState = [...state]
      newState[findItems].quantity += 1
      setCartLocalStorage(newState)
      return newState
    }
    const newState = [...state, {
      ...action.payload, quantity: 1
    }]
    setCartLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.removeOneItem]: (state, action) => {
    const { id } = action.payload
    const findItem = state.findIndex(item => item.id === id)
    if (findItem >= 0) {
      if (state[findItem].quantity > 1) {
        const newState = [...state]
        newState[findItem].quantity -= 1
        setCartLocalStorage(newState)
        return newState
      }

      const newState = state.filter(item => item.id !== id)
      setCartLocalStorage(newState)
      return newState
    }
  },
  [CART_ACTION_TYPES.removeAllItem]: (state, action) => {
    const { id } = action.payload
    const findItem = state.findIndex(item => item.id === id)
    if (findItem >= 0) {
      const newState = state.filter(item => item.id !== id)
      setCartLocalStorage(newState)
      return newState
    }
  },
  [CART_ACTION_TYPES.clearCart]: () => {
    setCartLocalStorage([])
    return []
  }

}
export const cartReducer = (state, action) => {
  const { type } = action

  const updateState = UPDATE_STATE_BY_ACTIONS[type]

  return updateState ? updateState(state, action) : state
}
