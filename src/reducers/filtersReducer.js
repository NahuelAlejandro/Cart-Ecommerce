export const filterInitialState = {
  title: '',
  category: 'all',
  minPrice: 0
}

export const filterReducer = (state, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: action.payload
    }
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload
    }
  }
  if (action.type === 'SET_MIN_PRICE') {
    return {
      ...state,
      minPrice: action.payload
    }
  }

  return state
}
