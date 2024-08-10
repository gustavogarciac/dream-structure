'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const CardTitle = () => {
  return (
    <motion.h1
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      transition={{
        duration: 4,
        type: 'spring',
        ease: 'linear',
        stiffness: 340,
        damping: 120,
      }}
      className="text-right text-[2rem] font-black leading-[2.25rem] tracking-tighter sm:text-[3rem] sm:leading-[3.25rem] md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7.25rem] xl:text-[9rem] xl:leading-[9.25rem]"
    >
      Explore AI&apos;s <br />
      <span className="text-orange-600">Impact</span> On Interior <br />
      Design.
    </motion.h1>
  )
}
