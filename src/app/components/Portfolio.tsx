import React from 'react';
import Image from 'next/image';
import { External } from '../ico/External';
import Esat from '../../img/Esat.png';
import Master_Finance from '../../img/Master_Finance.png';
import Portfolio from '../../img/Portfolio.png';

export function PortfolioSection() {
  const gradient = 'linear-gradient( #383838ea, #00eeffea)';

  return (
    <>
      <section
        id="portfolio"
        className="flex flex-col justify-center items-center bg-gray-700 lg:gap-16 pb-24 pt-24 md:h-screen h-auto"
      >
        <h2 className="md:text-4xl text-4xl md:mx-0 mb-4 font-bold text-white">
          Latest{' '}
          <span className="inline-block text-homeColor font-bold">Project</span>
        </h2>

        <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 md:mx-8 lg:mx-20">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-box relative rounded-3xl shadow-4xl flex overflow-hidden transition-all">
              <Image
                src={project.image}
                alt={project.alt}
                className="filter-none w-full transition-transform"
                width={1200}
                height={800}
              />
              <div
                className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-full"
                style={{ background: gradient }}
              >
                <h4 className="text-2xl text-white">{project.title}</h4>
                <p className="text-base text-white">{project.description}</p>
                <a
                  href={project.githubLink}
                  className="text-gray-800 text-3xl h-12 w-12 bg-white rounded-full inline-flex justify-center items-center mt-3"
                >
                  <External />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const projects = [
  {
    title: 'Web App Development',
    description: 'Web application for a company that provides services for measuring employee satisfaction level.',
    image: Esat,
    alt: 'Esat-project',
    githubLink: 'https://github.com/SeroC00l/ESAT',
  },
  {
    title: 'Web App Development',
    description: 'My personal web portfolio responsive developed using Next.js 13, Tailwind CSS, and Firebase.',
    image: Portfolio,
    alt: 'Portfolio-project',
    githubLink: 'https://github.com/SeroC00l/Portfolio',
  },
  {
    title: 'Multi Platform App',
    description: 'Multi-platform financial website and app developed using HTML, CSS, and JavaScript and React Native. Also using PHP and PostgreSQL.',
    image: Master_Finance,
    alt: 'Master_Finance-project',
    githubLink: '', // Add your link here
  },
];
