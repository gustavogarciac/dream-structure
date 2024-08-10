'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const InfoMessageDialog = () => {
  return (
    <motion.p
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 2,
        type: 'spring',
        ease: 'linear',
        stiffness: 100,
        damping: 10,
      }}
      className="mt-10 rounded-2xl border bg-zinc-50 p-2 leading-relaxed text-zinc-800 xl:mt-0 xl:w-2/3"
    >
      Our Artificial Intelligence Provides Personalized Suggestions For Your
      Interior Design Projects. It Also Calculates The Costs Involved. Giving
      You A Clear Idea Of The Budged Required.
    </motion.p>
  )
}
