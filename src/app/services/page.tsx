import Link from "next/link";
import FadeIn from "@/components/UILibrary/FadeIn"

export default function Services({ shouldFadeOnScroll }: { shouldFadeOnScroll?: boolean }) {
  return (
    <div
      className="w-full flex flex-col justify-center items-center md:p-20 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('https://www.publicdomainpictures.net/pictures/180000/velka/waldbrucke.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="services"
      >
          <div className="max-w-full md:max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12 bg-themeGreen/30 backdrop-blur-lg shadow-xl rounded-sm text-white text-center">
            <FadeIn delay={200} shouldFade={shouldFadeOnScroll}>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-wide">My Services</h1>
              <h2 className="text-md md:text-xl font-light mb-6 leading-relaxed">
                My areas of specialization include PTSD, Panic and Anxiety Disorders, Religious/Spiritual Traumas, as well as Bipolar and Schizophrenia Disorders. I also offer the following specific services:
              </h2>
              <FadeIn delay={400}>
                <ul className="text-left space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-300 text-md md:text-lg">&#8226;</span>
                  <span>
                    <strong className="text-indigo-200">EMDR:</strong> I am a trained EMDR Therapist from the EMDR International Association and offer EMDR as a pathway to process painful and traumatic memories.
                  </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-300 text-md md:text-lg">&#8226;</span>
                    <span>
                      <strong className="text-indigo-200">Gender Affirming Letter of Support:</strong> I am trained under WPATH standards and would be honored to help with letters of support for gender-affirming care.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-300 text-md md:text-lg">&#8226;</span>
                    <span>
                      <strong className="text-indigo-200">LDS Religious Trauma Group Therapy:</strong> I offer a small processing group for religious trauma for those who used to belong to the Church of Jesus Christ of Latter-Day Saints. Contact me to be put on a waitlist for the next group.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-300 text-md md:text-lg">&#8226;</span>
                    <span>
                      <strong className="text-indigo-200">Individual Therapy:</strong> I offer individual therapy for those who are looking for a safe space to process their past, present, and future.
                    </span>
                  </li>
                </ul> 
              </FadeIn>
              <FadeIn delay={800} className="mt-6">
                <Link href="/contact" className="text-md md:text-xl font-light leading-relaxed bg-themeGreen hover:bg-themeGreen/80 text-white px-4 py-2 rounded-md">Contact Me</Link>
              </FadeIn>
            </FadeIn>
          </div>
      </div>
    );
  }