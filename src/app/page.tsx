import { Testimonial } from "@/components/Testimonials";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { RecentProjects } from "@/components/LatestProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <RecentProjects />
      <Testimonial />
      <Contact />
    </main>
  );
}
