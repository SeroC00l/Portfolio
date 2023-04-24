import React from "react";

export const Header = () => {
  return (
    <header className="text-white h-20 font-serif justify-between md:flex hidden fixed top-0 left-0 right-0 bg-gray-800 shadow-xl z-50">
      <h2 className="text-4xl ml-10 pt-4">Portfolio</h2>
      <nav className="inline-grid mr-10 gap-3 grid-cols-5 place-items-center">
        <a href="#home" className="hover:text-homeColor">
          Home
        </a>
        <a href="#about" className="hover:text-homeColor">
          About
        </a>
        <a href="#services" className="hover:text-homeColor">
          Services
        </a>
        <a href="#portfolio" className="hover:text-homeColor">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-homeColor">
          Contact
        </a>
      </nav>
    </header>
  );
};
