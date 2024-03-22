import React from 'react'
import Image from "next/image";
import Aboutimg from "../../img/About.png";

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
          <h3 className="md:text-3xl text-2xl md:mx-0 md:ml-8 mb-2 font-bold text-center md:text-left">
            Fullstack Developer
          </h3>
          <p className="md:w-128 md:mx-0 mx-7 text-left md:text-lg text-sm mb-8">
            As a fullstack developer with expertise in React, I am passionate
            about creating innovative and efficient web applications. With a
            solid foundation in HTML, CSS, and JavaScript, I specialize in
            developing intuitive and user-friendly applications that drive
            business success. My problem-solving abilities and attention to
            detail allow me to tackle complex technical challenges and deliver
            high-quality solutions. I am committed to staying up-to-date with
            the latest technologies and techniques in web development, and
            thrive in collaborative team environments.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/alejourrea/" target='_blank' className="inline-block px-4 py-2 bg-homeColor rounded-3xl shadow-3xl text-lg font-bold text-gray-800 hover:shadow-none hover:bg-gray-800 hover:text-homeColor border-2 border-homeColor transition-all">
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
