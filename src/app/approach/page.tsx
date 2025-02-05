import FadeIn from "@/components/UILibrary/FadeIn";
import Link from "next/link";

export default function Approach() {
    return (
      <div
        className="w-full flex flex-col justify-center items-center md:p-20 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.5)), url('https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="approach"
      >
        <div className="flex flex-col justify-center items-center max-w-full md:max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12 bg-themeGreen/30 backdrop-blur-lg shadow-xl rounded-sm text-white [&_p]:before:content-['•']  [&_p]:before:text-indigo-300 [&_p]:before:text-md [&_p]:before:mr-2">
            <FadeIn delay={200} >
              <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">My Approach</h1>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="text-md md:text-xl font-light mb-6 leading-relaxed text-center bg-black/30 rounded-sm p-4">
                <h2 className="mb-2 text-xl md:text-2xl font-medium">“We cannot change, we cannot move away from what we are, until we thoroughly accept what we are. Then change seems to come about almost unnoticed.”</h2>
                <h3 className="text-md md:text-xl font-light italic">― Carl R. Rogers</h3>
              </div>
            </FadeIn>
            <FadeIn delay={600}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed ">
                I have an eclectic approach, borrowing from Somatic Based Therapy, Internal Family Systems, and Existential/Humanistic modalities.
              </p>
            </FadeIn>
            <FadeIn delay={800}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed ">
                Over all, I believe an authentic, supportive relationship is the core of healing our trauma.
              </p>
            </FadeIn>
            <FadeIn delay={1000}>
              <Link href="/contact" className="text-md md:text-xl font-light leading-relaxed bg-themeGreen hover:bg-themeGreen/80 text-white px-4 py-2 rounded-md">Contact Me</Link>
            </FadeIn>
          </div>
      </div>
    );
  }