import Image from "next/image";
import React from "react";

export function AboutCompany() {
  return (
    <>
      <div className="h-96 w-full relative">
        <Image
          src="/about.jpg"
          layout="fill"
          alt="about"
          className="object-cover"
        />
      </div>
      <div className="max-w-screen-lg mx-auto px-6">
        <h3 className="my-10">
          We Are a <span className="text-primary">Leading Tech Company</span> In
          Creating Powerful Software & Technology.
        </h3>
        <p className="my-7">
          Starting from basic IT solutions to high-tech softwares, mobile app
          development, blockchain development, and web development, or detailed
          designs and consultancy - we offer you the best digital services to
          drive sales and success with powerful software. We are passionate
          about helping your business reach its technological goals and
          converting your innovative ideas into digital realities. When you
          choose DT Digitals, you will receive the best, personalized services
          tailored to your needs and goals.
        </p>
      </div>
    </>
  );
}
