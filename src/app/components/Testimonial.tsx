import { InfoCard } from "./InfoCard";

export function Testimonial() {
  return (
    <section className="w-full bg-[url(/wave.svg)] py-40 px-4">
      <h2 data-aos="zoom-in-up" className="text-center">
        Testimonies of our happy clients
      </h2>
      <p data-aos="zoom-in-up" className="text-xl text-center">
        Join 50+ businesses who trust our platform.
      </p>
      <InfoCard />
      <p data-aos="zoom-in-up" className="mx-auto max-w-lg text-lg text-center">
        We are happy to showcase reviews from our happy clients around the
        world.
        <br />
        <button className="mx-auto mt-4 btn">Get in touch</button>
      </p>
    </section>
  );
}
