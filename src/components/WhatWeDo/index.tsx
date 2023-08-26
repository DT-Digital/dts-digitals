import Image from "next/image";

const data = [
  {
    id: 1,
    title: "1. Software Design",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
  {
    id: 2,
    title: "2. Software Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today!",
    image: "/images/software-design.jpg",
  },
  {
    id: 3,
    title: "3. Web & Mobile App Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
  {
    id: 4,
    title: "4. Web3 Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
];

export function WhatWeDo() {
  return (
    <section className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10">
      <div className="max-w-screen-xl mx-auto grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="self-center z-10 bg-transparent">
            <h2 data-aos="zoom-in-up" className="lg:mt-0">
              Turning Your Ideas Into Cutting-edge Technologies
            </h2>
          </div>

          <Image
            data-aos="zoom-in-up"
            src="/get-image.svg"
            height={800}
            width={800}
            className=""
            alt="hero"
            priority
          />
        </div>
        <div className="mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              tabIndex={0}
              className="sm:px-5 bg-opacity-40 backdrop-blur-lg collapse collapse-arrow my-4"
            >
              <h4 className="collapse-title font-medium">{item.title}</h4>
              <div className="collapse-content">
                <div className="grid sm:grid-cols-2">
                  <div className="ml-4 flex flex-col items-start max-w-md justify-center">
                    <p className="text-lg">{item.desc}</p>

                    <button className="mt-4 btn underline text-lg">
                      Let work together
                    </button>
                  </div>
                  <div className="relative h-96 mt-6 sm:mt-0 p-4">
                    <Image
                      src={item.image}
                      alt="image"
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
