import CreditCard from '@/svgs/CreditCard'
import Button from '../UILibrary/Button'
import FadeIn from '../UILibrary/FadeIn'
import UserCheck from '@/svgs/UserCheck'
import Insurance from '@/svgs/Insurance'
export function Hero() {
  return (
    <section className="relative bg-neutral-50 px-4 py-8 sm:p-20 w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900">
              Introducing Christian Colton, LPC
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-3 mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-neutral-500 max-w-prose">
              It's hard work to be a person! Each of us, no matter where we are in life, have our own personal struggles and successes to tell. Be it the stress of our present moment, our anxieties about the future, or the pain of our past, I would be honored to support you. As a counselor, I strive to provide a safe, productive, and healing space to understand and accept our past, so that we can fully partake in the gifts of the present. All are celebrated here!
            </p>
          </FadeIn>
        </div>
      </div>
      <FadeIn delay={400}>
        <div className="mt-6 sm:mt-8">
          <Button variant="primary" href="/contact">Get Started</Button>
        </div>
      </FadeIn>
      <FadeIn delay={800}>
        <div className="max-w-12 sm:max-w-7xl mt-6 sm:mt-8 mx-auto flex flex-col sm:flex-row gap-12 items-center justify-center">
          <div className="flex flex-col w-40 gap-2 items-center justify-center">
            <Insurance className="h-24 sm:h-36" />
            <p className="text-xl text-center"> Accepts Insurance</p>
          </div>
          <div className="flex flex-col w-40 gap-2 items-center justify-center">
            <CreditCard className="h-24 sm:h-36" />
            <p className="text-xl text-center">Accepts Online Payments</p>
          </div>
          <div className="flex flex-col w-40 gap-2 items-center justify-center">
            <UserCheck className="h-24 sm:h-36" />
              <p className="text-xl text-center">Waitlisting New Clients</p>
            </div>
          </div>
      </FadeIn>
    </section>
  )
} 