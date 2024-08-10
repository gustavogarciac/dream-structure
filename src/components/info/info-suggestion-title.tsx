'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const InfoSuggestionTitle = () => {
  return (
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 1, opacity: 1 }}
      transition={{
        duration: 3,
        type: 'spring',
        ease: 'linear',
        stiffness: 400,
        damping: 80,
      }}
      className="text-left text-[3rem] font-bold leading-[3.25rem] tracking-tighter sm:text-[4rem] sm:leading-[4.25rem] md:text-[5rem] md:leading-[5.25rem] lg:text-[6rem] lg:leading-[6.25rem] xl:text-[7rem] xl:leading-[7.25rem]"
    >
      AI Suggestions <br /> ánd{' '}
      <span className="text-orange-600 drop-shadow-xl">Costs.</span>
    </motion.h1>
  )
}
