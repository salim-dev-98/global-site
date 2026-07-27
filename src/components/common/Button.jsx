import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variantClass = {
  primary: 'btn--primary',
  outline: 'btn--outline',
  dark: 'btn--dark',
}

const MotionLink = motion(Link)

function Button({ to, href, children, variant = 'primary', className = '' }) {
  const classes = `btn ${variantClass[variant]} ${className}`.trim()

  if (to) {
    return (
      <MotionLink
        to={to}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {children}
      </MotionLink>
    )
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
    </motion.a>
  )
}

export default Button
