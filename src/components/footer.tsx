'use client'

import { ArrowUpIcon } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  const handleUpPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full gap-4 border-t bg-zinc-50 text-zinc-950">
      <div className="relative mx-auto flex w-[95%] flex-col justify-between gap-5 border-x p-4 md:w-[90%] xl:flex-row xl:gap-0">
        <span className="text-sm text-zinc-500">
          &copy; 2023 - {new Date().getFullYear()}
        </span>
        <span className="text-sm uppercase text-zinc-500">
          StinguishStudio. All Rights Reserved.
        </span>
        <a href="#" className="text-sm uppercase text-zinc-500 hover:underline">
          Privacy Policy
        </a>

        <button className="absolute -right-12 bottom-2" onClick={handleUpPage}>
          <ArrowUpIcon className="size-10 rounded-full border border-zinc-600 transition-colors ease-linear hover:text-orange-600" />
        </button>
      </div>
    </footer>
  )
}
