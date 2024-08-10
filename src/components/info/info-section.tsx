import { ArrowRightIcon, ArrowUpRight } from 'lucide-react'
import React from 'react'

import { GridPattern } from '../grid-pattern'
import { InfoChairImage } from './info-chair-image'
import { InfoFurnitureImage } from './info-furniture-image'
import { InfoMessageDialog } from './info-message-dialog'
import { InfoSectionScrollDownButton } from './info-section-scrolldown-button'
import { InfoSuggestionTitle } from './info-suggestion-title'
import { InfoTitle } from './info-title'

export const InfoSection = () => {
  return (
    <section className="min-h-screen w-full bg-zinc-50" id="about">
      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[110px]">
        <div className="relative z-20">
          <p className="text-sm uppercase">( Revolution )</p>
          <InfoTitle />

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

        <InfoChairImage />

        <GridPattern />
      </div>

      <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-20 md:w-[90%] lg:pt-[180px]">
        <InfoSuggestionTitle />
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
            <InfoFurnitureImage type="main" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 xl:-translate-y-20">
              <InfoFurnitureImage type="side" />
              <div className="flex flex-col xl:items-end">
                <span>Oulis Bra</span>
                <span>Jan 24&apos;</span>
              </div>
            </div>

            <InfoMessageDialog />

            <button className="w-fit rounded-full border p-3">
              <ArrowRightIcon className="size-8 text-orange-600" />
            </button>
          </div>
        </div>

        <GridPattern />

        <span className="absolute bottom-4 right-6 text-3xl font-semibold uppercase">
          02
        </span>

        <InfoSectionScrollDownButton />
      </div>
    </section>
  )
}
