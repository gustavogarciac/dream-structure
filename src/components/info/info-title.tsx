'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const InfoTitle = () => {
  return (
    <motion.h1
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 1, opacity: 1 }}
      transition={{
        duration: 3,
        type: 'spring',
        ease: 'linear',
        stiffness: 400,
        damping: 80,
      }}
      className="mt-10 text-left text-[2rem] font-bold leading-[2rem] tracking-tighter sm:text-[3rem] sm:leading-[3.25rem] md:mt-0 md:text-right md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7rem] xl:text-[9rem] xl:leading-[9.25rem]"
    >
      Elevate your space with <span className="text-orange-600">Exclusive</span>{' '}
      <br /> AI-Powered Désign <br />
      Solutions.
    </motion.h1>
  )
}
