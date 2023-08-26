import Image from "next/image";
import { Form } from "./Form";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-40 px-4 bg-white">
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
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div data-aos="zoom-in-up" className="self-center z-10 bg-transparent">
          <h2 className="lg:mt-0">Have Any Project In Mind?</h2>
          <p className="mt-4 text-2xl max-w-md text-gray-500">
            Lets connect, Our greatest priority is to put you and your business
            first. Lets show you how we can help.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}
