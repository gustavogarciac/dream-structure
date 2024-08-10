'use client'
import { motion } from 'framer-motion'
import React from 'react'

export const TestimonialsText = () => {
  return (
    <motion.p
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 4,
        type: 'spring',
        ease: 'linear',
        stiffness: 340,
        damping: 120,
      }}
      className="mt-5 text-left text-lg font-semibold leading-relaxed xl:mt-20 xl:text-justify xl:text-3xl"
    >
      Working with AI&apos;s personalized interior design suggestions has been a
      game-changer for our projects. The cost-effective materials and references
      provided have helped us create stunning spaces.
    </motion.p>
  )
}
