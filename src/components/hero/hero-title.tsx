'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const HeroTitle = () => {
  return (
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 1, opacity: 1 }}
      transition={{
        duration: 2,
        type: 'spring',
        ease: 'linear',
        stiffness: 400,
        damping: 80,
      }}
      className="tracking-tigher mt-auto self-end text-[2rem] font-black uppercase leading-[2.25rem] text-zinc-50 drop-shadow-2xl sm:text-[4rem] sm:leading-[4.25rem] md:text-[6rem] md:leading-[6.25rem] lg:text-[8rem] lg:leading-[8.25rem] xl:text-[10rem] xl:leading-[10.25rem]"
    >
      Dréam Structure.
    </motion.h1>
  )
}
