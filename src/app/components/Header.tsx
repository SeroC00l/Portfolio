"use client";

import { useState } from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sections = ["Home", "About", "Services", "Portfolio", "Contact"];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="text-white h-fit font-serif justify-between md:flex items-center min-h-[80px] fixed top-0 left-0 right-0 bg-gray-800 drop-shadow-md z-50">
      <div className="flex justify-between">
        <h2 className="text-4xl ml-10 pt-4 justify-center flex">Portfolio</h2>
        <button
          className="text-4xl h-20 pr-1 w-fit md:hidden"
          onClick={toggleMenu}
        >
          {!showMenu ? (
            <MenuIcon size={36} style={{ fill: "#fff" }} />
          ) : (
            <CloseIcon size={36} style={{ fill: "#fff" }} />
          )}
        </button>
      </div>
      <nav className={`${showMenu ? "flex flex-col" : "hidden"} md:flex md:mr-10 gap-4 p-4`}>
        {sections.map((section, index) => (
          <a
            key={index}
            href={`#${section.toLowerCase()}`}
            className="hover:text-homeColor"
          >
            {section}
          </a>
        ))}
      </nav>
    </header>
  );
};
