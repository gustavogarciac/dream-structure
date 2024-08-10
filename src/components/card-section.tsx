import Image from 'next/image'
import React from 'react'

import { GridPattern } from './grid-pattern'

export const CardSection = () => {
  return (
    <section className="min-h-screen w-full bg-zinc-950 text-zinc-50">
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[110px]">
        <div className="relative z-20">
          <h1 className="text-right text-[2rem] font-black leading-[2.25rem] tracking-tighter sm:text-[3rem] sm:leading-[3.25rem] md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7.25rem] xl:text-[9rem] xl:leading-[9.25rem]">
            Explore AI&apos;s <br />
            <span className="text-orange-600">Impact</span> On Interior <br />
            Design.
          </h1>

          <div className="mt-24 grid grid-cols-3 gap-12">
            <div className="flex min-h-[420px] -translate-y-40 flex-col gap-5 bg-orange-600 p-8 text-zinc-950">
              <span className="text-3xl font-semibold uppercase text-zinc-50">
                01/
              </span>
              <span className="text-3xl font-bold leading-tight tracking-tighter">
                Transform Your Space With AI-Powered Design
              </span>

              <p className="flex-1 text-sm uppercase">
                Our AI Interior Design Process Simplifies The JOurney From
                Concept To Completion.
              </p>

              <button className="flex flex-row items-center gap-2">
                <span className="text-2xl font-bold text-zinc-50">[</span>
                <span className="text-base font-semibold uppercase">
                  LEARN MORE
                </span>
                <span className="text-2xl font-bold text-zinc-50">]</span>
              </button>
            </div>

            <div className="flex min-h-[420px] -translate-y-24 flex-col gap-5 border border-zinc-400 border-opacity-20 bg-zinc-950 p-8 text-zinc-50">
              <span className="text-3xl font-semibold uppercase text-orange-600">
                02/
              </span>
              <span className="text-3xl font-bold leading-tight tracking-tighter">
                Experience Personalized Interior Design With AI
              </span>

              <p className="flex-1 text-sm uppercase text-zinc-400">
                Our AI-Powered Platform Provides Tailored Suggestions Costs,
                Materials, And References For Your Dream Structure.
              </p>

              <button className="flex flex-row items-center gap-2">
                <span className="text-2xl font-bold text-orange-600">[</span>
                <span className="text-base font-semibold uppercase">
                  LEARN MORE
                </span>
                <span className="text-2xl font-bold text-orange-600">]</span>
              </button>
            </div>

            <div className="relative flex min-h-[420px] -translate-y-6 flex-col gap-5 border border-zinc-400 border-opacity-20 bg-zinc-950 p-8 text-zinc-50">
              <div className="relative z-20 flex flex-1 flex-col gap-5">
                <span className="text-3xl font-semibold uppercase text-zinc-50">
                  01/
                </span>
                <span className="flex-1 text-3xl font-bold leading-tight tracking-tighter">
                  Unlock The Potential Of AI In Interior Design
                </span>

                <button className="flex flex-row items-center gap-2">
                  <span className="text-2xl font-bold text-orange-600">[</span>
                  <span className="text-base font-semibold uppercase">
                    LEARN MORE
                  </span>
                  <span className="text-2xl font-bold text-orange-600">]</span>
                </button>
              </div>

              <Image
                src="/assets/living-room-1.jpg"
                fill
                alt=""
                className="z-10 opacity-70"
              />
            </div>
          </div>
          <div className="mr-20 grid grid-cols-3">
            <span className="text-end text-zinc-400">
              (D-S.P.A.C.E)
              <br />
              02/
            </span>
          </div>
        </div>

        <GridPattern />
        <div className="absolute -left-40 bottom-1/2 top-1/2 translate-y-1/2 -rotate-90">
          <span className="text-zinc-400">Change the way you design</span>
        </div>
      </div>
    </section>
  )
}
