import Image from 'next/image'
import React from 'react'

import { GridPattern } from '../grid-pattern'
import { HeroTitle } from './hero-title'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full" id="hero">
      <Image
        src={'/assets/living-room-2.jpg'}
        className="z-10 object-cover opacity-70"
        alt=""
        fill
        quality={100}
      />

      <div className="relative z-20 mx-auto mt-[76px] flex h-[92vh] w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 md:w-[90%]">
        <div className="absolute -left-14 top-56 z-50 -rotate-90">
          <span className="z-50 text-sm uppercase text-zinc-300">GG/04</span>
        </div>

        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <span className="max-w-80 text-base font-semibold uppercase tracking-tight text-zinc-300 opacity-80 drop-shadow-md">
            Let Artificial Intelligence Help You In Designing.
          </span>
          <span className="max-w-80 text-base font-semibold uppercase tracking-tight text-zinc-300 opacity-80 drop-shadow-md">
            Suggest What Would Be Good For Your Room
          </span>
        </div>

        <HeroTitle />

        <GridPattern />
      </div>
    </section>
  )
}
