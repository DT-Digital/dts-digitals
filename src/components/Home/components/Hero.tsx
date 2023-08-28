import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen pt-40 lg:pt-0 gap-6 lg:px-4 content-center mx-auto max-w-screen-xl md:px-8 grid 2xl:px-0">
      <Image
        src="/gradients.svg"
        height={2000}
        width={2000}
        className="absolute top-0 bottom-0 right-0 left-0"
        alt="map"
        priority
      />
      <div
        data-aos="zoom-in-up"
        className="self-center z-10 bg-transparent max-lg:px-4"
      >
        <span className="text-zinc-900 text-3xl mb-4">
          One-Stop Solution For All Your Business Needs
        </span>{" "}
        <h1 className="font-bold lg:mt-10">
          Creating <span className="text-primary">Softwares</span> & Digital
          Excellence
        </h1>
        <p className="mt-8 w-4/5 text-xl">
          We developing enterprise{" "}
          <span className="text-primary">Digital Products</span> & ventures for
          all businesses.
        </p>
        <Link
          href={"/#more"}
          className="btn my-7 h-20 px-10 text-xl hover:bg-primary rounded-full text-white"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
