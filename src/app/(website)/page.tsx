import { Hero } from "@/components/Layout/Hero";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Insurance from "@/svgs/Insurance";
import UserCheck from "@/svgs/UserCheck";
import CreditCard from "@/svgs/CreditCard";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center" >
      <Hero />
      <Services shouldFadeOnScroll />
      <section className="relative bg-neutral-50 px-4 py-8 sm:p-20 w-full flex flex-col items-center justify-center">
        <div className="max-w-12 sm:max-w-7xl mt-6 sm:mt-8 mx-auto flex flex-col sm:flex-row gap-12 items-center justify-centerp-4">
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
      </section>
      <Contact shouldFadeOnScroll />
    </div>
  );
}
