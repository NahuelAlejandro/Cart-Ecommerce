import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export const useFilters = () => {
  const {
    filters,
    setTitle,
    setCategory,
    setMinPrice
  } = useContext(FiltersContext)

  function filterProducts (products) {
    return products.filter(product => {
      return product.price >= filters.minPrice &&
            (
              filters.category === 'all' || product.category === filters.category
            ) && (
        filters.title === '' || product.title.toLowerCase().includes(filters.title)
      )
    })
  }
  return {
    filters,
    setTitle,
    setCategory,
    setMinPrice,
    filterProducts
  }
}
