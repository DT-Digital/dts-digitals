"use client";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Software Design",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
  {
    id: 2,
    title: "Software Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today!",
    image: "/images/software-design.jpg",
  },
  {
    id: 3,
    title: "Website Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
  {
    id: 4,
    title: "Mobile App Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
  {
    id: 5,
    title: "Software Testing",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
  {
    id: 6,
    title: "Smart Contracts",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
  {
    id: 7,
    title: "Web3 & BlockChain Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast- performing software today! Let’s Work Together",
    image: "/images/software-design.jpg",
  },
];

export function OurServices() {
  return (
    <section
      id="services"
      className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10"
    >
      <div className="max-w-screen-xl mx-auto grid">
        <div className="self-center z-10 bg-transparent">
          <h2 data-aos="zoom-in-up" className="lg:mt-0">
            Turning Your Ideas Into Cutting-edge Technologies
          </h2>
        </div>

        <div className="mt-10 join join-vertical w-full">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                tabIndex={1}
                className="collapse collapse-arrow join-item py-10"
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
