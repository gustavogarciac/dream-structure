'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  children: React.ReactNode
  // variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Card = ({ children /* variant */ }: Props) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      transition={{
        duration: 4,
        type: 'spring',
        ease: 'linear',
        stiffness: 340,
        damping: 120,
      }}
    >
      {children}
    </motion.div>
  )
}
