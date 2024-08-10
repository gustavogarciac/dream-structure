'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

export const HeaderMenu = () => {
  const [isOpened, setIsOpened] = useState(false)

  function handleMenuButtonClick() {
    setIsOpened((prev) => !prev)
  }

  return (
    <>
      <button onClick={handleMenuButtonClick} className="flex flex-col gap-2">
        <div className="h-px w-10 bg-zinc-50" />
        <div className="h-px w-10 bg-zinc-50" />
        <div className="h-px w-10 bg-zinc-50" />
      </button>

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className="absolute right-4 top-16 rounded-3xl bg-zinc-950 px-4 py-2 md:right-24 md:top-5"
          >
            <div className="relative">
              <nav className="relative z-20 md:block">
                <ul className="flex flex-col items-center gap-10 text-zinc-50 md:flex-row">
                  <motion.li
                    whileHover={{ scaleX: 1.05 }}
                    className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    <a href="#hero">Home</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scaleX: 1.05 }}
                    className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    <a href="#about">About</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scaleX: 1.05 }}
                    className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    <a href="#project">Project</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scaleX: 1.05 }}
                    className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    <a href="#gallery">Gallery</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scaleX: 1.05 }}
                    className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    <a href="#contact">Contact Us</a>
                  </motion.li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
