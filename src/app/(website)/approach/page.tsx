import FadeIn from "@/components/UILibrary/FadeIn";
import Link from "next/link";

const blobUrl = process.env.BLOB_BASE_URL;

export default function Approach() {
    return (
      <div
        className="w-full flex flex-col justify-center items-center md:p-20 relative"
        style={{
          backgroundImage:
            `linear-gradient(rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.5)), url('${blobUrl}frames-hf7ahoeFeip8V090wIN6LtbfNgKPuQ')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="approach"
      >
        <div className="flex flex-col justify-center items-center max-w-full md:max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12 bg-themeGreen/30 backdrop-blur-lg shadow-xl rounded-sm text-white">
            <FadeIn delay={200} >
              <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">My Approach</h1>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="text-md md:text-xl font-light mb-6 leading-relaxed text-center bg-black/30 rounded-sm p-4">
                <h2 className="mb-2 text-xl md:text-2xl font-medium">“Every spirit builds itself a house; and beyond its house, a world; and beyond its world a heaven. Know then, that the world exists for you: build, therefore, your own world.”</h2>
                <h3 className="text-md md:text-xl font-light italic">― Ralph Waldo Emerson</h3>
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