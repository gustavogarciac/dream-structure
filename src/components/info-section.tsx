import { ArrowRightIcon, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { GridPattern } from './grid-pattern'

export const InfoSection = () => {
  return (
    <section className="min-h-screen w-full bg-zinc-50">
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[110px]">
        <div className="relative z-20">
          <p className="text-sm uppercase">( Revolution )</p>
          <h1 className="mt-10 text-left text-[2rem] font-bold leading-[2rem] tracking-tighter sm:text-[3rem] sm:leading-[3.25rem] md:mt-0 md:text-right md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7rem] xl:text-[9rem] xl:leading-[9.25rem]">
            Elevate your space with{' '}
            <span className="text-orange-600">Exclusive</span> <br /> AI-Powered
            Désign <br />
            Solutions.
          </h1>

          <div className="mt-20 grid grid-cols-1 items-end gap-6 xl:grid-cols-3">
            <span className="flex flex-row gap-1 text-sm uppercase">
              View projects <ArrowUpRight className="size-4" />
            </span>
            <p className="text-sm leading-relaxed tracking-tight">
              Explore the future of interior design through our cutting-edge ai
              powered platform. Receive personalized recommendations, cost
              breakdowns, material suggestions, and references tailored to
              create your dream structure.
            </p>
            <div className="flex flex-row items-center justify-around gap-6">
              <button className="flex flex-row items-center gap-2">
                <span className="text-lg font-bold text-orange-600">[</span>
                <span className="font-semibold uppercase">learn more</span>
                <span className="text-lg font-bold text-orange-600">]</span>
              </button>
              <button className="flex flex-row items-center gap-2">
                <span className="text-lg font-bold text-orange-600">[</span>
                <span className="font-semibold uppercase">Sign up</span>
                <span className="text-lg font-bold text-orange-600">]</span>
              </button>
            </div>
          </div>
        </div>

        <div className="static bottom-20 left-32 z-10 mx-auto mt-20 -rotate-12 overflow-hidden rounded-sm xl:absolute xl:mt-0">
          <Image
            src={'/assets/furniture-2.jpg'}
            alt="Furniture"
            width={400}
            height={400}
            quality={100}
            className="aspect-square rounded-sm object-cover"
          />
        </div>

        <GridPattern />
      </div>

      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-20 md:w-[90%] lg:pt-[180px]">
        <h1 className="text-left text-[3rem] font-bold leading-[3.25rem] tracking-tighter sm:text-[4rem] sm:leading-[4.25rem] md:text-[5rem] md:leading-[5.25rem] lg:text-[6rem] lg:leading-[6.25rem] xl:text-[7rem] xl:leading-[7.25rem]">
          AI Suggestions <br /> ánd{' '}
          <span className="text-orange-600 drop-shadow-xl">Costs.</span>
        </h1>
        <div className="relative z-20 grid grid-cols-1 items-center gap-4 xl:grid-cols-[1fr_4fr_2fr] xl:gap-0">
          <span className="leading-loose text-zinc-400">
            $ = SUGGEST()
            <br />
            -C.OST (4,8) <br />
            Assert List(S)
            <br />
            **[1, 2, End]
          </span>

          <div className="flex flex-col-reverse items-end gap-3 xl:flex-row">
            <span className="text-zinc-800">
              T.O.P <br />
              ST Road <br />
              MR
              <br />
              Dq /2T
            </span>
            <Image
              src={'/assets/furniture-3.jpg'}
              alt="Furniture"
              width={600}
              height={600}
              quality={100}
              className="aspect-square rounded-sm object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 xl:-translate-y-20">
              <Image
                src={'/assets/furniture-1.jpg'}
                alt="Furniture"
                width={400}
                height={400}
                quality={100}
                className="aspect-square rounded-lg object-cover"
              />
              <div className="flex flex-col xl:items-end">
                <span>Oulis Bra</span>
                <span>Jan 24&apos;</span>
              </div>
            </div>

            <p className="mt-10 rounded-2xl border bg-zinc-50 p-2 leading-relaxed text-zinc-800 xl:mt-0 xl:w-2/3">
              Our Artificial Intelligence Provides Personalized Suggestions For
              Your Interior Design Projects. It Also Calculates The Costs
              Involved. Giving You A Clear Idea Of The Budged Required.
            </p>

            <button className="w-fit rounded-full border p-3">
              <ArrowRightIcon className="size-8 text-orange-600" />
            </button>
          </div>
        </div>

        <GridPattern />

        <span className="absolute bottom-4 right-6 text-3xl font-semibold uppercase">
          02
        </span>

        <button className="absolute -right-20 bottom-20 -rotate-90">
          Scroll Down
        </button>
      </div>
    </section>
  )
}
