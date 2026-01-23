

import Logo from "@/components/logo";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {SiGmail  } from "react-icons/si";

const Footer: React.FC = () => {


 const navLink =
  "relative px-3 py-2 font-medium text-gray-900 hover:text-blue-500 transition-colors duration-300 \
   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-500 \
   after:transition-all after:duration-300 after:w-0 hover:after:w-full";

   

  return (
    <footer className="bg-white text-gray-300 py-12 border-t border-gray-600 max-w-[1200px] mx-auto">
      <div className="my-container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Name */}
         <a href="#home" id="#home" className="flex items-center cursor-pointer">
          <Logo />
        </a>

        {/* Navigation Links */}
    <div className="hidden md:flex items-center space-x-2">
        <div className="hidden md:flex items-center space-x-2">
          <a href="#home" className={navLink}>Home</a>
          <a href="#about" className={navLink}>About</a>
          <a href="#skills" className={navLink}>Skills</a>
          <a href="#project" className={navLink}>Project</a>
          <a href="#contact" className={navLink}>Contact</a>
        </div>
    </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-blue-800">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://github.com/muazalmuttaki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedinIn size={20} />
          </a>


            <a href="mailto:muazalmuttaki@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
            <SiGmail  size={20} />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Sk Muaz Al Muttaki. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
