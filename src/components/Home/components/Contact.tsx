import Image from "next/image";
import { Form } from "../Form";

export function Contact() {
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
          <h2 className="lg:mt-0">Have Any Project In Mind?</h2>
          <p className="mt-4 max-w-md text-2xl text-gray-500">
            Lets connect, Our greatest priority is to put you and your business
            first. Lets show you how we can help.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}
