import { Contact } from "@/app/components/Contact";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Testimonial } from "@/app/components/Testimonial";
import { WhatWeDo } from "@/app/components/WhatWeDo";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Projects />
      <Testimonial />
      <Contact />
    </main>
  );
}
