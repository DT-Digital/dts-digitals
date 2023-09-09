import Link from "next/link";

const data = [
  {
    title: "DISCOVERY",
    image: "/discovery.svg",
    desc: "Our team will create the estimation for your project. Then the Business Analysts will deeply analyze your requirements to uncover the best-fitting strategy. DT-team is your go-to partner, so we'll go into every market detail to crush-test your idea.",
  },
  {
    title: "PREPARATION",
    image: "/preparation.svg",
    desc: "Our legal profs will handle the paperwork, while we’ll be creating a custom team from selected developers. As we approve the business logic and user flow, our designers will cover your idea in visuals.",
  },
  {
    title: "DEVELOPMENT",
    image: "/development.svg",
    desc: "Our team is all about customization. The next step is fitting our development and project management skills to your specific needs. After everything is developed, tested, and reviewed by our Tech Heads, we celebrate the successful launch.",
  },
  {
    title: "SUPPORT",
    image: "/support.svg",
    desc: "DT-team's not just another development company but a partner for the long haul. Get you back covered with 6 months of free support and maintenance.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="more"
      className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10"
    >
      <div className="grid mx-auto max-w-screen-xl">
        <h2 data-aos="zoom-in-up" className="my-10">
          Our Process
        </h2>
        <div className="grid gap-10 justify-center items-center my-20 lg:grid-cols-2">
          {data.map((item, id) => (
            <div
              data-aos="zoom-in-up"
              key={id}
              className="z-10 flex-1 self-center p-6 h-full bg-white bg-opacity-40 md:h-64 card w-fit min-h-72 backdrop-blur-lg"
            >
              <h4 className="font-light lg:mt-0">{item.title}</h4>
              <p className="my-4 text-lg text-gray-500 md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={"/#projects"}
          className="px-10 my-7 max-w-xs h-20 text-xl text-white bg-black rounded-full btn hover:bg-primary"
        >
          See Projects
        </Link>
      </div>
    </section>
  );
}
