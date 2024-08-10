import { ArrowDownIcon, ArrowDownRight, ArrowRightIcon } from 'lucide-react'
import React from 'react'

import { GridPattern } from './grid-pattern'

export const ContactSection = () => {
  return (
    <section
      className="min-h-screen w-full bg-zinc-50 text-zinc-950"
      id="contact"
    >
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[110px]">
        <div className="z-20 flex flex-col gap-2">
          <div className="absolute -left-16 -rotate-90">
            <span className="">23&quot;11</span>
          </div>
          <div className="absolute -right-20 top-32 rotate-90">
            <span className="text-orange-600">Innovat-21</span>
          </div>

          <div className="grid w-2/3 md:grid-cols-3">
            <h1 className="z-30 col-span-2 text-[3rem] font-black leading-[3.25rem] tracking-tighter text-zinc-950 md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7.25rem] xl:text-[9rem] xl:leading-[9.25rem]">
              Get In
            </h1>
            <span className="hidden uppercase text-zinc-600 md:block">
              D=US2(Contact) <br />
              [6,2 <br />
              ++2.3<strong className="text-orange-600">END</strong>]
            </span>
          </div>
          <div className="flex w-fit flex-row items-end justify-center gap-5">
            <span className="hidden uppercase text-zinc-300 md:block">
              (J.U.S.T)
              <br /> --( C.. E=mSK
            </span>
            <span className="block text-[3rem] font-black leading-[3.25rem] tracking-tighter text-orange-600 md:text-[5rem] md:leading-[5.25rem] lg:text-[7rem] lg:leading-[7.25rem] xl:text-[9rem] xl:leading-[9.25rem]">
              Touch.
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 items-start gap-10 xl:mt-[60px] xl:grid-cols-3 xl:gap-0">
            <form className="flex flex-col gap-2 xl:col-span-2 xl:w-[50%] xl:flex-row">
              <input
                className="min-h-12 w-full border-b bg-transparent px-5"
                placeholder="Enter your email address"
              />
              <button className="flex flex-row items-center justify-center gap-2 rounded-3xl border border-zinc-600 bg-zinc-50 px-4 py-1.5">
                Subscribe <ArrowRightIcon className="text-orange-600" />
              </button>
            </form>

            <div className="relative flex flex-col justify-around gap-14 xl:flex-row xl:gap-4">
              <ArrowDownIcon className="-top-20 left-0 size-10 text-orange-600 xl:absolute xl:size-20" />
              <div className="flex flex-col gap-2 uppercase">
                <span>Let&apos;s Talk</span>
                <span className="text-sm">hello@dreamstructure.com</span>
                <span className="text-sm">GPHD 01, YK</span>
                <span className="text-sm">(+62) 9832-12332 </span>
              </div>
              <div className="flex flex-col gap-2 uppercase">
                <a href="#" className="underline-offset-1 hover:underline">
                  Company
                </a>
                <a href="#" className="underline-offset-1 hover:underline">
                  Services
                </a>
                <a href="#" className="underline-offset-1 hover:underline">
                  Project
                </a>
                <a href="#" className="underline-offset-1 hover:underline">
                  Gallery
                </a>
              </div>
              <div className="flex flex-col gap-2 uppercase">
                <a href="#" className="underline-offset-1 hover:underline">
                  About
                </a>
                <a href="#" className="underline-offset-1 hover:underline">
                  Career
                </a>
                <a href="#" className="underline-offset-1 hover:underline">
                  Blog
                </a>
                <a href="#" className="underline-offset-1 hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-zinc-400 border-opacity-10 pt-10 xl:mt-32 xl:flex-row">
            <p className="w-full bg-zinc-50 text-base uppercase xl:w-1/3 xl:text-2xl">
              Our AI-Driven Service Provides You With Expert Suggestions, Cost
              Estimates, Materials, And References To Bring Your Dream Space To
              Life.
            </p>

            <div className="flex flex-col gap-2 bg-zinc-50 xl:text-end">
              <a
                href="#"
                className="flex flex-row items-center gap-1 hover:underline xl:justify-end"
              >
                LinkedIn <ArrowDownRight className="size-4" />
              </a>
              <a
                href="#"
                className="flex flex-row items-center gap-1 hover:underline xl:justify-end"
              >
                Facebook <ArrowDownRight className="size-4" />
              </a>
              <a
                href="#"
                className="flex flex-row items-center gap-1 hover:underline xl:justify-end"
              >
                Instagram <ArrowDownRight className="size-4" />
              </a>
              <a
                href="#"
                className="flex flex-row items-center gap-1 hover:underline xl:justify-end"
              >
                Xwitter <ArrowDownRight className="size-4" />
              </a>
            </div>
          </div>

          <h1 className="mt-20 text-[2rem] font-black leading-[2.25rem] sm:text-[4rem] sm:leading-[4.25rem] md:text-[6rem] md:leading-[6.25rem] lg:text-[8rem] lg:leading-[8.25rem] xl:text-[10rem] xl:leading-[10.25rem]">
            Dréam Structure<strong className="text-orange-600">.</strong>
          </h1>
        </div>

        <GridPattern />
      </div>
    </section>
  )
}
