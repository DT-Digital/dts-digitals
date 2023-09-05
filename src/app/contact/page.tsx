import Image from "next/image";
import { Form } from "./Form";
import { Calendar } from "../components/Calendar";

export default function ContactPage() {
  return (
    <section id="contact" className="relative py-40 px-4 w-full bg-white">
      <Image
        src="/demo.svg"
        height={600}
        width={600}
        className="absolute top-0 right-1"
        alt="hero"
        priority
      />
      <Image
        src="/demo-dots.svg"
        height={200}
        width={200}
        className="absolute top-0 left-1"
        alt="hero"
      />
      <div className="grid grid-cols-1 place-items-center mx-auto max-w-screen-2xl lg:grid-cols-2">
        <div data-aos="zoom-in-up" className="z-10 self-center bg-transparent">
          <h2 className="text-center lg:mt-0">Have Any Project In Mind?</h2>
          <Calendar />
          <div className="flex flex-col gap-4 mt-8 text-2xl text-center">
            <a
              href="mailto:hello@dtdigital.nl"
              className="hover:underline text-primary"
            >
              hello@dtdigital.nl
            </a>
            <a className="hover:underline text-primary" href="tel:+31638592495">
              +31 638 592 495
            </a>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
