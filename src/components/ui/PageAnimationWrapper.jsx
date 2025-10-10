import React from 'react'
import { motion } from 'framer-motion'

// Page animation variants
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  in: { 
    opacity: 1,
    y: 0
  },
  out: { 
    opacity: 0,
    y: -20
  }
}

// Page transition settings
const pageTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  duration: 0.5,
}

// Page wrapper with animations
export const PageAnimationWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}