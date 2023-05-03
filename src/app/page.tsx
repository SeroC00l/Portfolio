"use client";

import { useState } from "react";
import Image from "next/image";
import Homeimg from "../img/Home.png";
import Aboutimg from "../img/About.png";
import Esat from "../img/Esat.png";
import Master_Finance from "../img/Master_Finance.png";
import Portfolio from "../img/Portfolio.png";
import { Linkedin } from "./ico/Linkedin";
import { Github } from "./ico/Github";
import { Twitter } from "./ico/Twitter";
import { Instagram } from "./ico/Instagram";
import { Code } from "./ico/Code";
import { Api } from "./ico/Api";
import { Android } from "./ico/Android";
import { External } from "./ico/External";
import { Nunito } from "next/font/google";
import { ArrowUp } from "./ico/ArrowUp";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--nunito-font",
});

export default function Home() {
  const gradient = "linear-gradient( #383838ea, #00eeffea)";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(JSON.stringify(formData));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

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
          <Image alt="home" src={Homeimg} className="filter-none" />
        </div>
      </section>
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
            <button className="inline-block px-4 py-2 bg-homeColor rounded-3xl shadow-3xl text-lg font-bold text-gray-800 hover:shadow-none hover:bg-gray-800 hover:text-homeColor border-2 border-homeColor transition-all">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="flex flex-col justify-center items-center bg-gray-800 lg:gap-16 pb-36 md:pt-52 pt-32 md:h-screen h-auto"
      >
        <h2 className="md:text-4xl text-4xl md:mx-0 mb-4 font-bold text-white">
          Our{" "}
          <span className="inline-block text-homeColor font-bold">
            Services
          </span>
        </h2>
        <div className="flex text-white flex-wrap gap-8 mx-8">
          <div className="bg-gray-700 border-solid border-2 border-gray-800 lg:p-12 p-6 rounded-3xl text-center flex-2 transition hover:border-homeColor hover:scale-105">
            <Code />
            <h3 className="md:mx-0 text-2xl mb-2">Web Develoment</h3>
            <p className=" md:mx-0 text-left md:text-sm text-xs">
              I offer web development services that focus on creating innovative
              and efficient web applications tailored to meet your business
              needs. With my expertise in React, HTML, CSS, JavaScript, and
              other web development technologies, I can build intuitive and
              user-friendly applications that drive business success. Whether
              you need a new website, an e-commerce platform, or a custom web
              application, I can provide high-quality and scalable solutions
              that meet your requirements. Let's work together to bring your
              ideas to life and create a unique online presence for your
              business.
            </p>
          </div>
          <div className="bg-gray-700 border-solid border-2 border-gray-800 lg:p-12 p-6 rounded-3xl text-center flex-2 transition hover:border-homeColor hover:scale-105">
            <Api />
            <h3 className="md:mx-0 text-2xl mb-2">Backend Develoment</h3>
            <p className=" md:mx-0 text-left md:text-sm text-xs">
              I offer backend development services using various technologies,
              including Node.js and Python. I have experience designing and
              implementing scalable and secure backend solutions that support a
              range of web applications, from e-commerce sites to social media
              platforms. My expertise extends to database management, with
              proficiency in SQL and MongoDB, and I am committed to delivering
              robust and efficient backend systems that meet my clients'
              business needs.
            </p>
          </div>
          <div className="bg-gray-700 border-solid border-2 border-gray-800 lg:p-12 p-6 rounded-3xl text-center flex-2 transition hover:border-homeColor hover:scale-105">
            <Android />
            <h3 className="md:mx-0 text-2xl mb-2">Mobile App Develoment</h3>
            <p className=" md:mx-0 text-left md:text-sm text-xs">
              I can create innovative and efficient mobile applications using
              React Native and Flutter, two of the most popular mobile app
              development frameworks in the market. I have experience developing
              a range of mobile applications, including social media apps,
              e-commerce platforms, and healthcare apps. My focus is on creating
              intuitive and user-friendly interfaces that provide a seamless
              user experience. I can work with you to develop a custom mobile
              application that meets your specific needs and exceeds your
              expectations.
            </p>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className="flex flex-col justify-center items-center bg-gray-700 lg:gap-16 pb-24 pt-24  md:h-screen h-auto"
      >
        <h2 className="md:text-4xl text-4xl md:mx-0 mb-4 font-bold text-white">
          Latest{" "}
          <span className="inline-block text-homeColor font-bold">Project</span>
        </h2>

        <div className="md:grid grid-cols-3 flex flex-wrap items-center gap-10 mx-20">
          <div className="portfolio-box relative rounded-3xl shadow-4xl flex overflow-hidden transition-all">
            <Image
              src={Esat}
              alt="Esat-project"
              className="filter-none w-full transition-transform"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-full"
              style={{ background: gradient }}
            >
              <h4 className="text-2xl text-white">Web App Development</h4>
              <p className="text-base text-white">
                Web application for a company that provides services for measure
                the employe satisfaction level.
              </p>
              <a
                href=""
                className="text-gray-800 text-3xl h-12 w-12 bg-white rounded-full inline-flex justify-center items-center mt-3"
              >
                <External />
              </a>
            </div>
          </div>

          <div className="portfolio-box relative rounded-3xl shadow-4xl flex overflow-hidden">
            <Image
              src={Portfolio}
              alt="Portfolio-project"
              className="filter-none w-full transition-transform"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-full"
              style={{ background: gradient }}
            >
              <h4 className="text-2xl text-white">Web App Development</h4>
              <p className="text-base text-white">
                My personal web portfolio responsive develop using Nexs js 13,
                Tailwind css and firebase.
              </p>
              <a
                href=""
                className="text-gray-800 text-3xl h-12 w-12 bg-white rounded-full inline-flex justify-center items-center mt-3"
              >
                <External />
              </a>
            </div>
          </div>

          <div className="portfolio-box relative rounded-3xl shadow-4xl flex overflow-hidden transition-all">
            <Image
              src={Master_Finance}
              alt="Master_Finance-project"
              className="filter-none w-full transition-transform"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-full"
              style={{ background: gradient }}
            >
              <h4 className="text-2xl text-white">Multi Platform App</h4>
              <p className="text-base text-white">
                Multi platform financial website and app develop using HTML, CSS
                and Javascript and React Native, also using PHP and PostgeSQL.
              </p>
              <a
                href=""
                className="text-gray-800 text-3xl h-12 w-12 bg-white rounded-full inline-flex justify-center items-center mt-3"
              >
                <External />
              </a>
            </div>
          </div>

          <div className="portfolio-box relative rounded-3xl shadow-4xl flex overflow-hidden transition-all">
            <Image
              src={Esat}
              alt="Esat-project"
              className="filter-none h-full w-full transition-transform"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-full"
              style={{ background: gradient }}
            >
              <h4 className="text-2xl text-white">Web App Development</h4>
              <p className="text-base text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                similique fugit impedit consequatur alias. Omnis qui magnam
              </p>
              <a
                href=""
                className="text-gray-800 text-3xl h-12 w-12 bg-white rounded-full inline-flex justify-center items-center mt-3"
              >
                <External />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col justify-center items-center bg-gray-800 lg:gap-16  mt-24 md:h-screen h-auto"
      >
        <h2 className="text-4xl mx-0 font-bold text-white mb-0">
          Contact{" "}
          <span className="inline-block text-homeColor font-bold">Me!</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <div className="flex justify-between">
            <input
              name={"name"}
              type="text"
              placeholder="Full Name"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
            />
            <input
              type="email"
              name={"email"}
              placeholder="Email Address"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between ">
            <input
              type="number"
              name={"phone"}
              placeholder="Mobile Number"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
            />
            <input
              type="text"
              name={"subject"}
              placeholder="Email Subject"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
            />
          </div>
          <div className="w-full p-3">
            <textarea
              className="w-full p-3 text-white bg-gray-700 rounded-xl resize-none"
              name={"message"}
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="inline-block px-4 py-2 bg-homeColor rounded-3xl shadow-3xl text-lg font-bold text-gray-800 hover:shadow-none hover:bg-gray-800 hover:text-homeColor border-2 border-homeColor transition-all p-6 m-3"
          />
        </form>
      </section>
      <footer className="flex justify-between items-center flex-wrap bg-gray-700">
        <div>
          <p className="text-white text-2xl">
            Copyight &copy; 2023 by Alejandro Urrea | All Rights Reserved.
          </p>
        </div>
        <div>
          <a href="#home" className="inline-flex">
            <ArrowUp />
          </a>
        </div>
      </footer>
    </>
  );
}
