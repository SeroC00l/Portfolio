import React from "react";
import Image from "next/image";
import Aboutimg from "public/img/About.png";

export function About() {
  return (
    <>
      <section
        id="about"
        className="flex md:flex-row flex-col justify-center items-center bg-gray-700 lg:gap-16 pb-36 lg:pt-32 pt-14 md:h-screen h-auto"
      >
        <div>
          <Image alt="about" src={Aboutimg} className="filter-none" />
        </div>
        <div className="text-white text-left">
          <h2 className="md:text-4xl text-4xl md:mx-0 md:ml-8 mb-2 font-bold text-center md:text-left">
            About{" "}
            <span className="inline-block text-homeColor font-bold">Me</span>
          </h2>
          <p className="md:w-128 md:mx-0 mx-7 text-left md:text-lg text-sm mb-8">
            I am a Full-stack software developer and Twitch Content Creator from
            Colombia, passionate about leveraging technology to create
            innovative solutions and engaging content. With a strong background
            in web development, mobile applications, and cloud computing, I
            bring a blend of technical expertise and creative vision to every
            project I undertake.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/alejourrea/"
              target="_blank"
              className="inline-block px-4 py-2 bg-homeColor rounded-3xl shadow-3xl text-lg font-bold text-gray-800 hover:shadow-none hover:bg-gray-800 hover:text-homeColor border-2 border-homeColor transition-all"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
