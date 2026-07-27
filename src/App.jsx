import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App
