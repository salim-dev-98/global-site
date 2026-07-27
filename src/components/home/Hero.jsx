import { motion } from 'framer-motion'
import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import heroImage from '../../assets/site-image/banner-logo.png'

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Family reviewing a modern container home design"
        className="hero__bg"
      />
      <div className="hero__overlay" />

      <Container className="hero__content">
        <div className="hero__text">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero__eyebrow"
          >
            Built for safety and efficiency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero__title"
          >
            Unlock Your Retirement Funds And Build A Tangible Real Estate
            Legacy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero__subtitle"
          >
            Ethical global training and support to access your savings tax
            free without compromising your values.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero__actions"
          >
            <Button to="/products">Get Started</Button>
            <Button to="/about-us" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
