import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

import { GridPattern } from '@/components/grid-pattern'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { InfoSection } from '@/components/info-section'

export default function Home() {
  return (
    <div className="relative flex flex-col gap-2">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 overflow-hidden">
        <HeroSection />

        <InfoSection />
      </main>
    </div>
  )
}
