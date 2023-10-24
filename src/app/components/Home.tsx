'use client'

import React from 'react'
import Homeimg from "../../img/Home.png";
import { Linkedin } from "../ico/Linkedin";
import Image from "next/image";
import { Github } from "../ico/Github";
import { Twitter } from "../ico/Twitter";
import { Instagram } from "../ico/Instagram";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    weight: "400",
    subsets: ["latin"],
    variable: "--nunito-font",
  });


const HomeSection = () => {
    return (
        <>
            <style jsx global>{`
        body {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>

            <section
                className="flex lg:flex-row flex-col justify-center items-center bg-gray-800 lg:gap-16 pb-36 lg:pt-32 pt-40 h-screen"
                id="home"
            >
                <div className="text-white text-left lg:mt-0 md:mt-40 sm:mt-10">
                    <h3 className="md:text-4xl md:mx-0 ml-8 text-2xl mb-2">
                        Hello, It's Me
                    </h3>
                    <h1 className="md:text-7xl md:mx-0 ml-8 text-4xl mb-2 font-bold">
                        Alejandro Urrea
                    </h1>
                    <h3 className="md:text-4xl md:mx-0 ml-8 text-2xl mb-2">
                        And I am a{" "}
                        <span className="inline-block text-homeColor font-bold">
                            FullStack Developer
                        </span>
                    </h3>
                    <p className="md:w-128 text-left md:mx-0 mx-7 mb-3 md:text-lg text-sm ">
                        I'm a React expert fullstack developer with experience creating
                        efficient and user-friendly web applications for e-commerce and
                        social media platforms. Let's talk about how I can contribute to
                        your team's goals.
                    </p>
                    <div className="gap-5 flex lg:justify-start justify-center mb-8">
                        <Linkedin />
                        <Github />
                        <Twitter />
                        <Instagram />
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <button className="inline-block px-4 py-2 bg-homeColor rounded-3xl shadow-3xl text-lg font-bold text-gray-800 hover:shadow-none hover:bg-gray-800 hover:text-homeColor border-homeColor border-2">
                            Download CV
                        </button>
                    </div>
                </div>
                <div>
                    <Image alt="home" priority={true} src={Homeimg} className="filter-none" />
                </div>
            </section>
        </>
    )
}

export { HomeSection }