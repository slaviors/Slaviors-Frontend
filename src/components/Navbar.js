"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 relative px-4 flex justify-center flex-col bg-gradient-to-r from-brn to-softBrn">
      <div className="p-4 sticky top-0 flex items-center justify-between w-full border-gray-200 rounded-full shadow-lg bg-crm my-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/brown-logo.png"
            alt="Slaviors"
            width={64}
            height={32}
            className=""
          />
        </a>

        {/* Navbar Items */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-brn font-bold relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-brn after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            Home
          </a>
          <a
            href="#"
            className="text-brn font-bold relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-brn after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            About
          </a>
          <a
            href="#"
            className="text-brn font-bold relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-brn after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            Services
          </a>
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:flex">
          <a
            href="https://api.whatsapp.com/send?phone=6282314471125&text=kontol"
            className="hover:text-brn text-crm border-2 border-brn hover:bg-crm bg-brn rounded-3xl px-4 py-2 transition-colors duration-500"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-brn p-2 rounded-lg focus:outline-none"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        } md:hidden bg-crm absolute top-full left-0 w-full mt-2 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out`}
        id="navbar-menu"
      >
        <ul
          className={`flex flex-col p-4 space-y-4 transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <li>
            <a
              href="#"
              className="block text-brn font-bold hover:bg-brn hover:text-crm px-4 py-2 rounded transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-brn font-bold hover:bg-brn hover:text-crm px-4 py-2 rounded transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-brn font-bold hover:bg-brn hover:text-crm px-4 py-2 rounded transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=6282314471125&text=kontol"
              className="block text-crm bg-brn border-2 border-brn font-bold hover:bg-crm hover:text-brn rounded-lg px-4 py-2 text-center transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
