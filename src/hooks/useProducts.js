import { products } from '../mocks/products.json'

export const mappedProducts = products.map(product => {
  return {
    id: product.id,
    title: product.title,
    thumbnail: product.thumbnail,
    price: product.price,
    description: product.description,
    category: product.category
  }
})
