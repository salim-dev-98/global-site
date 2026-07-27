import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext.jsx'

function ProductCard({ product, delay = 0 }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="product-card"
    >
      <div className="product-card__media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          <button
            type="button"
            onClick={handleAdd}
            className={`product-card__cta btn-sm ${
              added ? 'product-card__cta--added' : 'product-card__cta--idle'
            }`}
          >
            {added ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
