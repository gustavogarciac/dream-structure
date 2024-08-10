'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const InfoChairImage = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0, rotate: 15 }}
      whileInView={{ y: 1, opacity: 1, rotate: 0 }}
      transition={{
        duration: 2,
        type: 'spring',
        ease: 'linear',
        stiffness: 400,
        damping: 80,
      }}
      className="static bottom-20 left-32 z-10 mx-auto mt-20 overflow-hidden rounded-sm xl:absolute xl:mt-0"
    >
      <Image
        src={'/assets/furniture-2.jpg'}
        alt="Furniture"
        width={400}
        height={400}
        quality={100}
        className="aspect-square rounded-sm object-cover"
      />
    </motion.div>
  )
}
