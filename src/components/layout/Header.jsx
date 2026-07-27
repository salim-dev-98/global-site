import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import { CartIcon } from '../common/icons.jsx'
import { useCart } from '../../context/CartContext.jsx'
import logo from '../../assets/site-image/gl-Photoroom-logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <Container>
        <div className="header-bar">
          <NavLink to="/" className="header-logo-link">
            <img
              src={logo}
              alt="Global Retirement Inc. logo"
              className="header-logo"
            />
          </NavLink>

          <nav className="header-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? 'header-nav-link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <NavLink to="/cart" aria-label="Cart" className="cart-link icon-btn">
              <CartIcon className="icon-sm" />
              {totalItems > 0 && (
                <span className="cart-badge icon-badge">{totalItems}</span>
              )}
            </NavLink>
            <Button to="/products" className="btn-sm">
              Get Started
            </Button>
          </div>

          <div className="header-mobile-actions">
            <NavLink to="/cart" aria-label="Cart" className="cart-link icon-btn">
              <CartIcon className="icon-sm" />
              {totalItems > 0 && (
                <span className="cart-badge icon-badge">{totalItems}</span>
              )}
            </NavLink>
            <button
              type="button"
              className="burger-btn icon-btn fluid-gap-3xs"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="burger-line hamburger-line"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="burger-line hamburger-line"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="burger-line hamburger-line"
              />
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-panel"
          >
            <Container>
              <nav className="mobile-nav fluid-gap-xs fluid-py-sm">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button to="/products" className="btn--block fluid-mt-3xs">
                  Get Started
                </Button>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
