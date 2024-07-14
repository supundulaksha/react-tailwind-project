import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "About Us", path: "aboutus" },
    { link: "Contact Us", path: "contact" },
    { link: "Our Story", path: "story" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="text-lg container mx-auto flex justify-between items-center font-medium p-4">
        <a
          href="/"
          className="text-2xl font-semibold flex items-center space-x-3 text-primary"
        >
          <img src={logo} alt="Logo" className="w-15 h-15" />
          {/* <span>SUPUN</span> */}
        </a>

        <ul className={`md:flex md:items-center md:space-x-12 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          {navItems.map(({ link, path }) => (
            <li key={path} className="my-2 md:my-0">
              <a href={path} className="block hover:text-grey-500 text-black md:inline">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="hidden lg:flex items-center hover:text-secondary">
            <GrLanguage className="mr-2" />
            <span>Language</span>
          </a>
          <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none focus:text-grey-300">
            {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="space-y-4">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <a href={path} className="block text-black hover:text-grey-200">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="/" className="flex items-center text-black hover:text-secondary">
                <GrLanguage className="mr-2" />
                <span>Language</span>
              </a>
            </li>
            <li>
              <button className="w-full bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
