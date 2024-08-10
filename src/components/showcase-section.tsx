import { ArrowDownRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { GridPattern } from './grid-pattern'

export const ShowCaseSection = () => {
  return (
    <section className="min-h-screen w-full bg-zinc-50 text-zinc-950">
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[60px]">
        <h1 className="z-30 text-[3rem] font-black leading-[3.25rem] tracking-tighter text-orange-600 md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7.25rem] xl:text-[9rem] xl:leading-[9.25rem]">
          Dréam.
        </h1>

        <div className="my-20 grid gap-12 xl:grid-cols-3">
          <div className="grid grid-cols-1 gap-2 xl:translate-y-60 xl:grid-cols-[1fr_6fr]">
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

          <div className="relative flex flex-col gap-1 xl:-translate-y-52">
            <span className="font-semibold uppercase tracking-tight xl:text-end">
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

            <h2 className="text-[1.5rem] font-black leading-[1.75rem] xl:text-[4rem] xl:leading-[4.25rem]">
              Città Alta 22´
            </h2>

            <button className="-bottom-32 left-1/2 right-1/2 w-fit rounded-full border border-zinc-400 p-3 xl:absolute xl:translate-x-1/2">
              <ArrowDownRight className="size-8 text-orange-600" />
            </button>
          </div>

          <div className="relative flex flex-col gap-1">
            <span className="font-semibold uppercase tracking-tight xl:text-end">
              (Á 450)
            </span>
            <Image
              src="/assets/kitchen-1.jpg"
              width={600}
              height={600}
              quality={100}
              alt=""
              className="rounded-xl"
            />

            <div className="-right-40 bottom-1/2 top-1/2 xl:absolute xl:translate-y-1/2 xl:rotate-90">
              <h2 className="text-[1.5rem] font-black leading-[1.75rem] xl:text-[4rem] xl:leading-[4.25rem]">
                Equidát 32.
              </h2>
            </div>
          </div>
        </div>

        <h1 className="mt-auto text-end text-[3rem] font-black leading-[3.25rem] tracking-tighter text-orange-600 md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7.25rem] xl:text-[9rem] xl:leading-[9.25rem]">
          Structure.
        </h1>

        <GridPattern />
      </div>
    </section>
  )
}
