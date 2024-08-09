import React from 'react'

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-zinc-400 border-opacity-20">
      <div className="mx-auto flex w-[90%] flex-row items-center justify-between border-x border-zinc-400 border-opacity-20 px-8 py-7">
        <span className="tracking-tigher text-sm font-semibold uppercase text-zinc-300">
          Dréam Structure<span className="text-orange-600">*</span>
        </span>

        <nav>
          <ul className="flex flex-row items-center gap-10 text-zinc-50">
            <li className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100">
              Home
            </li>
            <li className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100">
              Project
            </li>
            <li className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100">
              Gallery
            </li>
            <li className="cursor-pointer text-sm uppercase text-zinc-300 transition-colors hover:text-zinc-100">
              Contact Us
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-2">
          <div className="h-px w-10 bg-zinc-50" />
          <div className="h-px w-10 bg-zinc-50" />
          <div className="h-px w-10 bg-zinc-50" />
        </div>
      </div>
    </header>
  )
}
