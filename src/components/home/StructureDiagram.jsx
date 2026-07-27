import { motion } from 'framer-motion'
import { UsersIcon, BuildingIcon, CoinsIcon } from '../common/icons.jsx'

const nodeVariants = {
  hidden: (custom) => ({ opacity: 0, x: custom.x, y: custom.y }),
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, delay: custom.delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Node({ icon, title, className, delay, x = 0, y = 24 }) {
  return (
    <motion.div
      className={`structure-node ${className}`}
      variants={nodeVariants}
      custom={{ delay, x, y }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <span className="structure-node__icon">{icon}</span>
      <span className="structure-node__title">{title}</span>
    </motion.div>
  )
}

function StructureDiagram() {
  return (
    <div className="structure-diagram">
      {/* Desktop / tablet — triangle diagram with animated connecting lines */}
      <div className="structure-canvas">
        <svg
          className="structure-canvas__lines"
          viewBox="0 0 1000 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="structure-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="structure-arrowhead" />
            </marker>
          </defs>

          <motion.line
            x1="280"
            y1="90"
            x2="720"
            y2="90"
            className="structure-line"
            markerStart="url(#structure-arrow)"
            markerEnd="url(#structure-arrow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
          <motion.line
            x1="170"
            y1="150"
            x2="430"
            y2="378"
            className="structure-line"
            markerEnd="url(#structure-arrow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }}
          />
          <motion.line
            x1="570"
            y1="378"
            x2="830"
            y2="150"
            className="structure-line"
            markerEnd="url(#structure-arrow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeInOut' }}
          />

          <motion.circle
            r="6"
            className="structure-dot"
            animate={{
              cx: [280, 430, 465, 500, 535, 570, 720],
              cy: [90, 90, 72, 70, 72, 90, 90],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.circle
            r="6"
            className="structure-dot"
            animate={{
              cx: [720, 570, 535, 500, 465, 430, 280],
              cy: [90, 90, 108, 110, 108, 90, 90],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.circle
            r="6"
            className="structure-dot"
            animate={{ cx: [170, 430], cy: [150, 378] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: 'linear',
              delay: 1.2,
            }}
          />
          <motion.circle
            r="6"
            className="structure-dot"
            animate={{ cx: [570, 830], cy: [378, 150] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: 'linear',
              delay: 1.4,
            }}
          />
        </svg>

        <span className="structure-label structure-label--terms">
          Negotiate Terms
        </span>
        <span className="structure-label structure-label--sdrsp">SDRSP</span>
        <span className="structure-label structure-label--lawyers">
          Via Lawyers
        </span>

        <Node
          icon={<UsersIcon />}
          title="Global Retirement Saving"
          className="structure-node--saving"
          delay={0}
          x={-70}
          y={0}
        />
        <Node
          icon={<CoinsIcon />}
          title="Investor / Borrower"
          className="structure-node--investor"
          delay={0.15}
          x={70}
          y={0}
        />
        <Node
          icon={<BuildingIcon />}
          title="Global Trust"
          className="structure-node--trust"
          delay={0.3}
          x={0}
          y={40}
        />
      </div>

      {/* Mobile — simple vertical step flow */}
      <div className="structure-steps">
        <div className="structure-step">
          <span className="structure-step__icon">
            <UsersIcon className="icon-sm" />
          </span>
          <span className="structure-step__title">Global Retirement Saving</span>
        </div>
        <div className="structure-step-connector">
          <span className="structure-step-connector__line" />
          <span className="structure-step-connector__label">SDRSP</span>
        </div>
        <div className="structure-step">
          <span className="structure-step__icon">
            <BuildingIcon className="icon-sm" />
          </span>
          <span className="structure-step__title">Global Trust</span>
        </div>
        <div className="structure-step-connector">
          <span className="structure-step-connector__line" />
          <span className="structure-step-connector__label">Via Lawyers</span>
        </div>
        <div className="structure-step">
          <span className="structure-step__icon">
            <CoinsIcon className="icon-sm" />
          </span>
          <span className="structure-step__title">Investor / Borrower</span>
        </div>
        <p className="structure-steps__note">
          Terms are negotiated directly between the saver and the investor
          throughout the process.
        </p>
      </div>
    </div>
  )
}

export default StructureDiagram
