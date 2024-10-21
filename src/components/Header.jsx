import './header.css'
import Filters from './Filters'

const Header = ({ changeFilter }) => {
  return (
    <header>
      <h1>Products</h1>
      <Filters onChange={changeFilter} />
    </header>
  )
}

export default Header
