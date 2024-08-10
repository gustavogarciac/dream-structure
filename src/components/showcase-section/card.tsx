'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'tertiary'
}

export const ShowCaseCard = ({ children, variant }: Props) => {
  let animationVariants = {
    initial: {},
    whileInView: {},
    transition: {},
  }

  switch (variant) {
    case 'primary':
      animationVariants = {
        initial: {
          x: -100,
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
        transition: {
          duration: 4,
          type: 'spring',
          ease: 'linear',
          stiffness: 340,
          damping: 120,
        },
      }
      break
    case 'secondary':
      animationVariants = {
        initial: {
          y: 100,
          opacity: 0,
        },
        whileInView: {
          y: 1,
          opacity: 1,
        },
        transition: {
          duration: 4,
          type: 'spring',
          ease: 'linear',
          stiffness: 340,
          damping: 120,
        },
      }
      break
    case 'tertiary':
      animationVariants = {
        initial: {
          x: 100,
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
        transition: {
          duration: 4,
          type: 'spring',
          ease: 'linear',
          stiffness: 340,
          damping: 120,
        },
      }
      break
  }

  return (
    <motion.div
      initial={animationVariants.initial}
      whileInView={animationVariants.whileInView}
      transition={animationVariants.transition}
    >
      {children}
    </motion.div>
  )
}
