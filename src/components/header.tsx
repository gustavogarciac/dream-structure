import React from 'react'

import { HeaderMenu } from './header-menu'

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-zinc-400 border-opacity-20">
      <div className="relative mx-auto flex w-[95%] flex-row items-center justify-between border-x border-zinc-400 border-opacity-20 px-8 py-7 md:w-[90%]">
        <span className="tracking-tigher text-sm font-semibold uppercase text-zinc-300">
          Dréam Structure<span className="text-orange-600">*</span>
        </span>

        <HeaderMenu />
      </div>
    </header>
  )
}
