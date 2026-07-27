import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon } from './icons.jsx'

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="faq-item">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="faq-question"
            >
              {item.question}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="faq-icon"
              >
                <ChevronDownIcon className="icon-sm" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="faq-answer-wrap"
                >
                  <p className="faq-panel">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion
