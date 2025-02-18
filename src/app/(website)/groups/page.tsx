import FadeIn from "@/components/UILibrary/FadeIn";
import Link from "next/link";
const blobBaseUrl = process.env.BLOB_BASE_URL

export default function Groups() {
    return (
      <div
        className="w-full flex flex-col justify-center items-center md:p-20 relative"
        style={{
          backgroundImage:
            `linear-gradient(rgba(30, 41, 59, 0.3), rgba(30, 41, 59, 0.3)), url('${blobBaseUrl}CTR-Lgy1MtmB7CztgkrkDviyQpuVqHVI76')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="groups"
      >
        <div className="flex flex-col justify-center items-center max-w-full md:max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12 bg-themeGreen/30 backdrop-blur-sm shadow-xl rounded-sm text-white  [&_p]:before:text-indigo-300 [&_p]:before:text-md [&_p]:before:mr-2">
          <div>
            <FadeIn delay={200} >
              <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">Mormon Religious Trauma Group Therapy</h1>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed ">
                Do you identify as an ex-Mormon, Post Mormon, inactive, or an excommunicated member of the LDS church?
              </p>
            </FadeIn>
            <FadeIn delay={600}>  
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed">
                Do you experience symptoms of religious trauma, including guilt, shame, anger, loneliness, difficulty feeling happy, or consistently feeling like a bad person?
              </p>
            </FadeIn>
            <FadeIn delay={800}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed">
                Have you ever wanted to share your experience with those who left the church?
              </p>
            </FadeIn>
            <FadeIn delay={1000}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed">
                Find healing in a secular, in person small group setting.
                All identities are welcome and celebrated here.
              </p>
            </FadeIn>
            <FadeIn delay={1200}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed">
                I offer a small processing group for religious trauma for those who used to belong to the Church of Jesus Christ of Latter-Day Saints. Contact me to be put on a waitlist for the next group.
              </p>
            </FadeIn>
            <FadeIn delay={1200}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed before:content-['•']">
                For Adults 18+
              </p>
            </FadeIn>
            <FadeIn delay={1200}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed before:content-['•']">
                Session Cost: $45, sliding scale available in some cases.
              </p>
            </FadeIn>
            <FadeIn delay={1200}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed before:content-['•']">
                Insurances Accepted: Moda, Providence, Pacific Source Health Plans, Pacific source OHP, Regence Blue Cross Blue Shield, United Health Care, Trillium, Triwest
              </p>
            </FadeIn>
            <FadeIn delay={1200}>
              <p className="text-md md:text-xl font-light mb-6 leading-relaxed before:content-['•']">
                Location: <a href="https://www.google.com/maps/dir//132%20East%20Broadway%20Eugene,%20OR%2097401" className="text-indigo-300 hover:text-indigo-400">132 East Broadway, Eugene, OR 97401</a>
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={1400}>
            <Link href="/contact?type=group" className="text-md md:text-xl font-light leading-relaxed bg-themeGreen hover:bg-themeGreen/80 text-white px-4 py-2 rounded-md">Contact Me</Link>
          </FadeIn>
        </div>
      </div>
    );
  }