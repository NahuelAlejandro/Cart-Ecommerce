import { useReducer } from 'react'
import { filterInitialState, filterReducer } from '../reducers/filtersReducer'

export const useFilterReducer = () => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState)

  const setTitle = (payload) => {
    dispatch({
      type: 'SET_TITLE',
      payload
    })
  }
  const setCategory = (payload) => {
    dispatch({
      type: 'SET_CATEGORY',
      payload
    })
  }
  const setMinPrice = (payload) => {
    dispatch({
      type: 'SET_MIN_PRICE',
      payload
    })
  }
  return { state, setTitle, setCategory, setMinPrice }
}
