import { useState } from 'react'
import { useFilters } from './useFilters'
import debounce from 'just-debounce-it'

export const useFilterFunctions = () => {
  const debounceGetMinPrice = debounce(minprice => {
    setMinPrice(minprice)
  }, 150)

  const {
    filters,
    setTitle,
    setCategory,
    setMinPrice
  } = useFilters()

  const [search, setSearch] = useState(filters.title)

  function handleOnChange (event) {
    debounceGetMinPrice(event.target.value)
  }
  function handleCategoryOnChange (event) {
    setCategory(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    setTitle(search)
  }
  function handleSearchChange (event) {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return { filters, handleOnChange, handleCategoryOnChange, handleSubmit, handleSearchChange }
}
