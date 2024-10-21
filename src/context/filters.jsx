import { createContext } from 'react'
import { useFilterReducer } from '../hooks/useFilterReducer'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const { state, setTitle, setCategory, setMinPrice } = useFilterReducer()

  return (
    <FiltersContext.Provider value={{
      filters: state,
      setTitle,
      setCategory,
      setMinPrice
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
