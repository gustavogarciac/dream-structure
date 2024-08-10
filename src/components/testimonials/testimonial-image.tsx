'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const TestimonialsImage = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 40 }}
      className="relative min-h-[350px] overflow-hidden rounded-xl md:min-h-[400px] xl:min-h-[750px]"
    >
      <Image src="/assets/woman-2.jpg" alt="" fill className="object-cover" />
    </motion.div>
  )
}
