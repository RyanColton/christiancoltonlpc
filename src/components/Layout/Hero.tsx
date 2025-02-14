import CreditCard from '@/svgs/CreditCard'
import Button from '../UILibrary/Button'
import FadeIn from '../UILibrary/FadeIn'
import UserCheck from '@/svgs/UserCheck'
import Insurance from '@/svgs/Insurance'

const blobUrl = process.env.BLOB_BASE_URL

export function Hero() {
  return (
    <section className="relative bg-neutral-50 px-4 py-8 sm:p-20 w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900">
              Christian Colton LPC
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <img
                src={`${blobUrl}portrait_2-HD3lh3cskE8bHkxM3YA4EqewMgwHEP`}
                alt="Christian Colton"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover aspect-square"
              />
              <p className="mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-neutral-500 max-w-prose">
                Being human is hard! We all face struggles and successes in life. Whether it's present stress, future anxieties, or past pain, I’m here to support you. As a counselor, I provide a safe, healing space to understand and accept the past, so you can fully embrace the present. All are welcome and celebrated here!
              </p>
            </div>
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