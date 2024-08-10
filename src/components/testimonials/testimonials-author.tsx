'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const TestimonialsAuthor = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 4,
        type: 'spring',
        ease: 'linear',
        stiffness: 340,
        damping: 120,
      }}
      className="mt-5 flex flex-col gap-px self-end text-end xl:mt-20"
    >
      <span className="text-xl font-bold xl:text-3xl">Jane</span>
      <span className="text-base text-zinc-700 xl:text-xl">
        Interior Designer, ASDNS Designs
      </span>
    </motion.div>
  )
}
