import Image from 'next/image'

import { CardSection } from '@/components/card-section/card-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { GridPattern } from '@/components/grid-pattern'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero/hero'
import { InfoSection } from '@/components/info/info-section'
import { ShowCaseSection } from '@/components/showcase-section/showcase-section'
import { TestimonialsSection } from '@/components/testimonials/testimonials-section'

export default function Home() {
  return (
    <div className="relative flex flex-col gap-2">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950">
        <HeroSection />

        <InfoSection />

        <CardSection />

        <ShowCaseSection />

        <section className="relative min-h-screen w-full">
          <Image
            src={'/assets/living-room-8.jpg'}
            className="z-10 object-cover opacity-70"
            alt=""
            fill
            quality={100}
          />

          <div className="relative mx-auto flex min-h-screen w-[95%] flex-col gap-2 border-x border-zinc-400 border-opacity-20 p-8 pt-10 md:w-[90%] md:pt-[110px]">
            <GridPattern />
          </div>
        </section>

        <TestimonialsSection />

        <ContactSection />

        <Footer />
      </main>
    </div>
  )
}
