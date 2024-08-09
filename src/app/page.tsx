import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

import { GridPattern } from '@/components/grid-pattern'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="relative flex flex-col gap-2">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950">
        <section className="relative min-h-screen w-full">
          <Image
            src={'/assets/living-room-2.jpg'}
            className="z-10 object-cover opacity-70"
            alt=""
            fill
            quality={100}
          />

          <div className="relative z-20 mx-auto mt-[76px] flex h-[92vh] w-[90%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8">
            <div className="absolute -left-14 top-56 z-50 -rotate-90">
              <span className="z-50 text-sm uppercase text-zinc-300">
                GG/04
              </span>
            </div>

            <div className="flex flex-row justify-between gap-2">
              <span className="max-w-80 text-base font-semibold uppercase tracking-tight text-zinc-300 opacity-80 drop-shadow-md">
                Let Artificial Intelligence Help You In Designing.
              </span>
              <span className="max-w-80 text-base font-semibold uppercase tracking-tight text-zinc-300 opacity-80 drop-shadow-md">
                Suggest What Would Be Good For Your Room
              </span>
            </div>

            <h1 className="tracking-tigher mt-auto self-end text-[10rem] font-black uppercase leading-[10.25rem] text-zinc-50 drop-shadow-2xl">
              Dréam Structure.
            </h1>

            <GridPattern />
          </div>
        </section>

        <section className="min-h-screen w-full bg-zinc-50">
          <div className="relative mx-auto flex min-h-screen w-[90%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-[110px]">
            <div className="relative z-20">
              <p className="text-sm uppercase">( Revolution )</p>
              <h1 className="text-right text-[9rem] font-bold leading-[9.25rem] tracking-tighter">
                Elevate your space with{' '}
                <span className="text-orange-600">Exclusive</span> <br />{' '}
                AI-Powered Désign <br />
                Solutions.
              </h1>

              <div className="mt-20 grid grid-cols-3 items-end">
                <span className="text-sm uppercase">View projects</span>
                <p className="text-sm leading-relaxed tracking-tight">
                  Explore the future of interior design through our cutting-edge
                  ai powered platform. Receive personalized recommendations,
                  cost breakdowns, material suggestions, and references tailored
                  to create your dream structure.
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

            <div className="absolute bottom-20 left-32 z-10 -rotate-12 overflow-hidden rounded-sm">
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

          <div className="relative mx-auto flex min-h-screen w-[90%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-[180px]">
            <h1 className="text-left text-[7rem] font-bold leading-[7.25rem] tracking-tighter">
              AI Suggestions <br /> ánd{' '}
              <span className="text-orange-600 drop-shadow-xl">Costs.</span>
            </h1>
            <div className="relative z-20 grid grid-cols-[1fr_4fr_2fr] items-center">
              <span className="leading-loose text-zinc-400">
                $ = SUGGEST()
                <br />
                -C.OST (4,8) <br />
                Assert List(S)
                <br />
                **[1, 2, End]
              </span>

              <div className="flex flex-row items-end gap-3">
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
                <div className="flex -translate-y-20 flex-col gap-2">
                  <Image
                    src={'/assets/furniture-1.jpg'}
                    alt="Furniture"
                    width={400}
                    height={400}
                    quality={100}
                    className="aspect-square rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <span>Oulis Bra</span>
                    <span>Jan 24&apos;</span>
                  </div>
                </div>

                <p className="w-2/3 text-justify leading-relaxed text-zinc-800">
                  Our Artificial Intelligence Provides Personalized Suggestions
                  For Your Interior Design Projects. It Also Calculates The
                  Costs Involved. Giving You A Clear Idea Of The Budged
                  Required.
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
      </main>
    </div>
  )
}
