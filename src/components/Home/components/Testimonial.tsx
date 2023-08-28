import { InfoCard } from "./InfoCard";

export function Testimonial() {
  return (
    <section className="w-full bg-[url(/wave.svg)] py-40 px-4">
      <h2 data-aos="zoom-in-up" className="text-center">
        Testimonies of our happy clients
      </h2>
      <p data-aos="zoom-in-up" className="text-center text-xl">
        Join 50+ businesses who trust our platform.
      </p>
      <InfoCard />
      <p data-aos="zoom-in-up" className="text-center text-lg max-w-lg mx-auto">
        We are happy to showcase reviews from our happy clients around the
        world.
        <br />
        <button className="mt-4 btn mx-auto">Get in touch</button>
      </p>
    </section>
  );
}
