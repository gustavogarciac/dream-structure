'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {
  type: 'main' | 'side'
}

export const InfoFurnitureImage = ({ type }: Props) => {
  return (
    <>
      {type === 'main' ? (
        <motion.div
          initial={{ y: 100, x: -100, opacity: 0, rotate: -45 }}
          whileInView={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
          transition={{
            duration: 4,
            type: 'spring',
            ease: 'linear',
            stiffness: 500,
            damping: 160,
          }}
        >
          <Image
            src={'/assets/furniture-3.jpg'}
            alt="Furniture"
            width={600}
            height={600}
            quality={100}
            className="aspect-square rounded-xl object-cover"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -100, x: 100, opacity: 0, rotate: -45 }}
          whileInView={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
          transition={{
            duration: 4,
            type: 'spring',
            ease: 'linear',
            stiffness: 500,
            damping: 160,
          }}
        >
          <Image
            src={'/assets/furniture-1.jpg'}
            alt="Furniture"
            width={400}
            height={400}
            quality={100}
            className="aspect-square rounded-lg object-cover"
          />
        </motion.div>
      )}
    </>
  )
}
