import Image from "next/image";
import { AboutCompany } from "./AboutCompany";
import { WhatWeOffer } from "./WhatWeOffer";
import { OurTeam } from "./OurTeam";

export function About() {
  return (
    <section>
      <AboutCompany />
      <WhatWeOffer />
      <OurTeam />
    </section>
  );
}
