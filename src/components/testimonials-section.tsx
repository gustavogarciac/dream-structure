import { PlusIcon, Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { GridPattern } from './grid-pattern'

export const TestimonialsSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-50 text-zinc-950">
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[110px]">
        <div className="z-20 grid grid-cols-2 gap-32">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <Quote className="size-20 fill-orange-600 text-orange-600" />
              <div className="flex flex-col gap-1">
                <span className="uppercase text-orange-600">(Testimonial)</span>
                <span className="text-end text-sm uppercase">M0</span>
                <span className="text-end text-sm uppercase">01 - 120+</span>
              </div>
            </div>

            <p className="mt-20 text-justify text-3xl font-semibold leading-relaxed">
              Working with AI&apos;s personalized interior design suggestions
              has been a game-changer for our projects. The cost-effective
              materials and references provided have helped us create stunning
              spaces.
            </p>

            <div className="mt-20 flex flex-col gap-px self-end text-end">
              <span className="text-3xl font-bold">Jane</span>
              <span className="text-xl text-zinc-700">
                Interior Designer, ASDNS Designs
              </span>
            </div>

            <button className="mt-20 flex flex-row items-center gap-3 self-end">
              <PlusIcon className="size-8 rounded-full border border-zinc-400 p-1 text-orange-600" />
              <span className="uppercase">More Testimonials</span>
            </button>
          </div>

          <div className="relative min-h-[750px] overflow-hidden rounded-xl">
            <Image
              src="/assets/woman-2.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <GridPattern />
      </div>
    </div>
  )
}
