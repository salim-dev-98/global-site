import { useState } from 'react'
import Container from '../components/common/Container.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import Reveal from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import ProductCard from '../components/products/ProductCard.jsx'
import { MinusIcon, PlusIcon, TrashIcon } from '../components/common/icons.jsx'
import { useCart } from '../context/CartContext.jsx'
import { products } from '../data/products.js'
import bannerImage from '../assets/site-image/sect-six-image.jpeg'

function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart()
  const [ordered, setOrdered] = useState(false)

  const handleCheckout = () => {
    setOrdered(true)
    clearCart()
  }

  if (ordered) {
    return (
      <>
        <PageBanner title="Cart" image={bannerImage} />
        <section className="section">
          <Container>
            <Reveal className="order-success">
              <h2 className="order-success__title">Thank You For Your Order!</h2>
              <p className="order-success__desc">
                Your order request has been received. Our team will reach out
                to confirm details and complete your payment.
              </p>
              <div className="order-success__cta">
                <Button to="/products" variant="dark">
                  Continue Shopping
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>
      </>
    )
  }

  if (items.length === 0) {
    return (
      <>
        <PageBanner title="Cart" image={bannerImage} />
        <section className="section">
          <Container>
            <Reveal className="cart-empty">
              <h2 className="cart-empty__title">Your Cart is Currently Empty!</h2>
              <p className="cart-empty__desc">
                Looks like you haven&apos;t added anything yet. Browse our
                products below to get started.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="new-in-store-label">New In Store</p>
              <div className="new-in-store-grid">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} delay={index * 0.12} />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="Cart" image={bannerImage} />
      <section className="section">
        <Container>
          <div className="cart-grid">
            <Reveal className="cart-list">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item__image cart-item-image" />
                  <div className="cart-item__body">
                    <h3 className="cart-item__title">{item.title}</h3>
                    <p className="cart-item__price">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="cart-item__qty">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn icon-btn-sm"
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon className="icon-xs" />
                    </button>
                    <span className="qty-value qty-display">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn icon-btn-sm"
                      aria-label="Increase quantity"
                    >
                      <PlusIcon className="icon-xs" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="cart-item__remove icon-btn-remove"
                    aria-label="Remove item"
                  >
                    <TrashIcon className="icon-xs" />
                  </button>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="cart-summary">
                <h2 className="cart-summary__title">Order Summary</h2>
                <div className="cart-summary__row">
                  <span className="cart-summary__label">Total</span>
                  <span className="cart-summary__total">${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="checkout-btn btn btn--primary"
                >
                  Proceed to Checkout
                </button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Cart
