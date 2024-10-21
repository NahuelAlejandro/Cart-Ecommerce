import './products.css'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import { useSEO } from '../hooks/useSeo'

const Products = ({ mappedProducts }) => {
  const { cart, addToCart } = useCart()
  useSEO({ title: `Cart[ ${cart.reduce((acc, product) => acc + product.quantity, 0)} ] - React-Ecommerce` })
  return (
    <main>
      <section>
        <ul>
          {mappedProducts.map(product =>
            <li key={product.id}>
              <article>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                </div>
                <div className='price'>
                  <button onClick={() => addToCart(product)}><AddToCartIcon /></button>
                  <strong>${product.price}</strong>
                </div>
              </article>
            </li>
          )}
        </ul>
      </section>
    </main>
  )
}

export default Products
