"use client";
import { ProjectCard } from "./ProjectCard";
import { worksData } from "./works";

const Works = () => {
  return (
    <main className="px-6 mx-auto max-w-screen-xl">
      <div className="relative z-10">
        <h3 className="grid pt-40 pb-20">Explore our projects</h3>

        <div className="mb-20">
          <div className="gap-10 items-center mb-20">
            {worksData.map((work, idx) => (
              <ProjectCard
                description={work.description}
                imageUrl={work.imageUrl}
                tags={work.tags}
                title={work.title}
                websiteUrl={work.websiteUrl}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Works;
