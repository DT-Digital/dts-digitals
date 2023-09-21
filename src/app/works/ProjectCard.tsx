"use client";

import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  description,
  imageUrl,
  tags,
  title,
  websiteUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  tags: string[];
}) => {
  return (
    <>
      <div className="my-14">
        <div className="grid sm:grid-cols-2">
          <div className="relative p-4 h-96 md:h-[500px]">
            <Image
              src={imageUrl}
              alt="image"
              width="500"
              height="500"
              loading="lazy"
              className="object-right-top"
              data-aos="zoom-in-up"
            />
          </div>
          <div className="flex flex-col gap-y-10 justify-center items-end mt-10 max-w-md text-gray-500 sm:mt-0 sm:ml-10">
            {tags && (
              <div className="flex gap-x-2 self-start my-2">
                {tags.map((tag, i) => (
                  <div className="badge badge-accent" key={tag + i}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <h4
              className="self-start font-medium"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {title}
            </h4>
            <p className="text-lg" data-aos="fade-left" data-aos-delay="200">
              {description}
            </p>

            <Link
              href={websiteUrl}
              className="px-6 mt-4 h-16 text-lg text-gray-500 rounded-full border-gray-500 btn-outline btn"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Explore Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
