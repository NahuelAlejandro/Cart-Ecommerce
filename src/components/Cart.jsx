import { useState } from 'react'
import './cart.css'
import { CartIcon, ClearCartIcon, CloseIcon, RemoveIcon } from './Icons'
import { useCart } from '../hooks/useCart'

const Cart = () => {
  const [showCart, setShowCart] = useState(false)

  const { cart, addToCart, removeOneItemFromCart, removeAllItemFromCart, clearCart } = useCart()

  return (
    <>
      <button className='cart__icon' onClick={() => { setShowCart(!showCart) }}>
        {(showCart && <CloseIcon />) || <CartIcon />}
      </button>
      <aside className={`cart ${showCart ? 'active' : 'hidden'}`}>
        <ul className='cart__ul'>
          {cart && cart.map(product => {
            return (
              <li key={product.id} className='cart__ul__li'>
                <article className='cart__ul__li__article'>
                  <img className='cart__ul__li__article__img' src={product.thumbnail} alt={product.title} />
                  <h3 className='cart__ul__li__article__h3'>{product.title}</h3>
                  <span className='cart__ul__li__article_qty'>Qty
                    <button className='button__cart' onClick={() => removeOneItemFromCart(product)}>-</button>
                    {product.quantity}
                    <button className='button__cart' onClick={() => addToCart(product)}>+</button>
                  </span>
                  <strong>$ {product.price}</strong>
                  <span><button className='button__cart' onClick={() => removeAllItemFromCart(product)}> <RemoveIcon /> </button></span>
                </article>
              </li>
            )
          })}
        </ul>
        <section className='total__price'>
          <button className='button__cart' onClick={clearCart} title='Clear Cart'><ClearCartIcon /> </button>
          <p>Total Price: $ <span>{cart.length && cart.reduce((acc, current) => acc + current.price * current.quantity, 0).toFixed(2)}</span></p>
        </section>
      </aside>
    </>
  )
}

export default Cart
