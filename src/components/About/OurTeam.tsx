import Image from "next/image";

const team = [
  {
    name: "Divine Hycenth",
    title: "Full-Stack & Senior BlockChain Engineer",
    image: "/team/divine.jpg",
  },
  {
    name: "Tareq AddName",
    title: "Full-Stack & Senior BlockChain Engineer",
    image: "/team/success.jpg",
  },
  {
    name: "Success Hycenth",
    title: "Full-Stack & Mobile & Web Developer",
    image: "/team/success.jpg",
  },
];

export function OurTeam() {
  return (
    <section className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10">
      <div className="max-w-screen-lg mx-auto">
        <h2 data-aos="zoom-in-up" className="mb-10">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((i, idx) => (
            <div data-aos="zoom-in-up" key={idx}>
              <div className="avatar">
                <div className="relative w-40 sm:w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image src={i.image} layout="fill" alt="team-member" />
                </div>
              </div>
              <h4 className="text-lg sm:text-2xl text-center mt-4">{i.name}</h4>
              <p className="mt-2 text-center text-gray-500">{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
