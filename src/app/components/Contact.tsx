import Image from "next/image";
import { Calendar } from "./Calendar";

export function Contact() {
  return (
    <section id="contact" className="relative py-40 px-4 w-full bg-white">
      <Image
        src="/demo.svg"
        height={600}
        width={600}
        className="absolute top-0 right-1 z-10"
        alt="hero"
        priority
      />
      <Image
        src="/demo-dots.svg"
        height={200}
        width={200}
        className="absolute top-0 left-1 z-0"
        alt="hero"
      />
      <div
        data-aos="zoom-in-up"
        className="relative z-50 mx-auto max-w-screen-lg max-md:px-4"
      >
        <h3 className="text-center lg:mt-0 zoom-in-up">
          Have Any Project In Mind?
        </h3>
        <Calendar />
      </div>
    </section>
  );
}
