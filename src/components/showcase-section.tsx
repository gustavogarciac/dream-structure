import { ArrowDownRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { GridPattern } from './grid-pattern'

export const ShowCaseSection = () => {
  return (
    <section className="min-h-screen w-full bg-zinc-50 text-zinc-950">
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[60px]">
        <h1 className="text-[9rem] font-black leading-[9.25rem] tracking-tighter text-orange-600">
          Dréam.
        </h1>

        <div className="my-20 grid grid-cols-3 gap-12">
          <div className="grid translate-y-60 grid-cols-[1fr_6fr] gap-2">
            <span className="font-semibold uppercase tracking-tight">
              S.A.I.D ST Road B2 / BZ
            </span>
            <Image
              src="/assets/living-room-3.jpg"
              width={600}
              height={600}
              quality={100}
              alt=""
              className="rounded-xl"
            />
          </div>

          <div className="relative flex -translate-y-52 flex-col gap-1">
            <span className="text-end font-semibold uppercase tracking-tight">
              (Á 450)
            </span>
            <Image
              src="/assets/bedroom-1.jpg"
              width={600}
              height={600}
              quality={100}
              alt=""
              className="rounded-xl"
            />
            <span className="text-start font-semibold uppercase tracking-tight">
              View Design *
            </span>

            <h2 className="text-[4rem] font-black leading-[4.25rem]">
              Città Alta 22´
            </h2>

            <button className="absolute -bottom-32 left-1/2 right-1/2 w-fit translate-x-1/2 rounded-full border border-zinc-400 p-3">
              <ArrowDownRight className="size-8 text-orange-600" />
            </button>
          </div>

          <div className="relative flex flex-col gap-1">
            <span className="text-end font-semibold uppercase tracking-tight">
              (Á 450)
            </span>
            <Image
              src="/assets/kitchen-1.jpg"
              width={500}
              height={500}
              quality={100}
              alt=""
              className="rounded-xl"
            />

            <div className="absolute -right-40 bottom-1/2 top-1/2 translate-y-1/2 rotate-90">
              <h2 className="text-[4rem] font-black leading-[4.25rem]">
                Equidát 32.
              </h2>
            </div>
          </div>
        </div>

        <h1 className="mt-auto text-end text-[9rem] font-black leading-[9.25rem] tracking-tighter text-orange-600">
          Structure.
        </h1>

        <GridPattern />
      </div>
    </section>
  )
}
