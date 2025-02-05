import { Hero } from "@/components/Layout/Hero";
import Services from "./services/page";
import Approach from "./approach/page";
import Groups from "./groups/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center" >
      <Hero />
      <Services shouldFadeOnScroll />
      <Contact shouldFadeOnScroll />
    </div>
  );
}
