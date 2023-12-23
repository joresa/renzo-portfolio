import React from "react";
import "./Navbar.css"; 
import { useState } from "react";
const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <body className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-gray-200">
        <a className="text-3xl font-bold leading-none" href="#Logo">
        {/* <img src={LogoSVG} alt="Logo" className="h-10" /> */} RENZO
        </a>

        <div className="lg:hidden">
          <button className="navbar-burger flex items-cente p-3" onClick={toggleMenu}>
            <a className="text-3xl font-bold leading-none" href="#Logo">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </a>
          </button>
        </div>

        {/* Navigation links */}
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-6 justify-end">
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#About"> About</a>
            </li>
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Experience"> Experience</a>
            </li>
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Portfolio"> Portfolio</a>
            </li>
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Services"> Services</a>
            </li>
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Blog"> Blog</a>
            </li>
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Hobbies"> Hobbies</a>
            </li>
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Contact"> Contact</a>
            </li>
        </ul>

      </nav>

      {/* Mobile menu */}
      <div className={`navbar-menu ${isMenuOpen ? "relative z-50" : "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          {/* Logo for mobile */}
        <div className="flex items-center justify-between mb-8">
            {/* Logo on the left */}
            <a className="text-3xl font-bold leading-none" href="#Logo">
               {/* <img src={Logo} alt="Logo" className="h-10" /> */} RENZO
            </a>

            {/* Close button on the right */}
            <button className="navbar-close" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

          {/* Mobile menu links */}
          <div>
            <ul>
            <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#About"> About</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Experience"> Experience</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Portfolio"> Portfolio</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Services"> Services</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Blog"> Blog</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Hobbies"> Hobbies</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Contact"> Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </body>
  );
};

export default Navbar;