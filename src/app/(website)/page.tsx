import { Hero } from "@/components/Layout/Hero";
import Services from "./services/Services";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center" >
      <Hero />
      <Services shouldFadeOnScroll />
      <Contact shouldFadeOnScroll />
    </div>
  );
}
