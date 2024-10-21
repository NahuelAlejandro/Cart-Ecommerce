import { useId } from 'react'
import './filters.css'
import { SearchIcon } from './Icons'
import { useFilterFunctions } from '../hooks/useFilterFunctions'

const Filters = () => {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { filters, handleOnChange, handleCategoryOnChange, handleSubmit, handleSearchChange } = useFilterFunctions()
  return (
    <section className='filters'>
      <div className='filters__price'>
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleOnChange} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <form className='filters__search' onSubmit={handleSubmit}>
          <input onChange={handleSearchChange} type='search' defaultValue={filters.title} placeholder='search...' />
          <button type='submit'><SearchIcon /></button>
        </form>
      </div>
      <div className='filters__category'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategoryOnChange}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='fragrances'>Fragrances</option>
          <option value='furniture'>Furniture</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
