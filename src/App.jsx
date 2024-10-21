import '../style.css'
import Products from './components/Products'
import Header from './components/Header'
import { useFilters } from './hooks/useFilters.js'
import { mappedProducts } from './hooks/useProducts.js'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

const App = () => {
  const { filterProducts } = useFilters()

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products mappedProducts={filterProducts(mappedProducts)} />

    </CartProvider>
  )
}

export default App
