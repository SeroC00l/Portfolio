"use client";

import { useState } from "react";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="text-white h-20 w-screen font-serif flex flex-col md:hidden fixed top-0 left-0 right-0 bg-gray-800 z-50">
      <div
        className={
          showMenu
            ? "flex justify-between w-screen h-20 pb-20"
            : "flex justify-between w-screen h-20 pb-20"
        }
      >
        <h2 className="text-4xl ml-10 pt-4">Portfolio</h2>
        {!showMenu ? (
          <button className="text-4xl h-20 pr-1" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              style={{ fill: "#fff", transform: "", msFilter: "" }}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
        ) : (
          <button className="text-4xl h-20 pr-1" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              style={{ fill: "#fff", transform: "", msFilter: "" }}
            >
              <path d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-4.793 9.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
            </svg>
          </button>
        )}
      </div>
      <nav className={showMenu ? "shadow-xl bg-gray-800" : "hidden"}>
        <ul className="flex flex-col ml-5">
          <a href="#home" className="hover:text-homeColor mb-5">
            Home
          </a>
          <a href="#about" className="hover:text-homeColor mb-5">
            About
          </a>
          <a href="#services" className="hover:text-homeColor mb-5">
            Services
          </a>
          <a href="#portfolio" className="hover:text-homeColor mb-5">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-homeColor mb-5">
            Contact
          </a>
        </ul>
      </nav>
    </header>
  );
};
