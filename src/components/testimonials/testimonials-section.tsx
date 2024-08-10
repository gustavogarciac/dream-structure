import { PlusIcon, Quote } from 'lucide-react'
import React from 'react'

import { GridPattern } from '../grid-pattern'
import { TestimonialsImage } from './testimonial-image'
import { TestimonialsAuthor } from './testimonials-author'
import { TestimonialsText } from './testimonials-text'

export const TestimonialsSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-50 text-zinc-950">
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[110px]">
        <div className="z-20 grid gap-5 md:grid-cols-2 md:gap-12 xl:gap-32">
          <div className="flex flex-col gap-2 xl:gap-6">
            <div className="flex flex-row justify-between">
              <Quote className="size-20 fill-orange-600 text-orange-600" />
              <div className="flex flex-col gap-1">
                <span className="uppercase text-orange-600">(Testimonial)</span>
                <span className="text-end text-sm uppercase">M0</span>
                <span className="text-end text-sm uppercase">01 - 120+</span>
              </div>
            </div>

            <TestimonialsText />

            <TestimonialsAuthor />

            <button className="mt-5 flex flex-row items-center gap-3 self-end xl:mt-20">
              <PlusIcon className="size-8 rounded-full border border-zinc-400 p-1 text-orange-600" />
              <span className="uppercase">More Testimonials</span>
            </button>
          </div>

          <TestimonialsImage />
        </div>

        <GridPattern />
      </div>
    </div>
  )
}
