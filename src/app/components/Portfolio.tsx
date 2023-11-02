import React from 'react'
import Image from "next/image";
import { External } from "../ico/External";
import Esat from "../../img/Esat.png";
import Master_Finance from "../../img/Master_Finance.png";
import Portfolio from "../../img/Portfolio.png";

export function PortfolioSection() {

    const gradient = "linear-gradient( #383838ea, #00eeffea)";

    return (
        <>
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
                                href="https://github.com/SeroC00l/ESAT"
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
                                href="https://github.com/SeroC00l/Portfolio"
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
                </div>
            </section>
        </>
    )
}
