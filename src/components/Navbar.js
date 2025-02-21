"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 py-6">
      {/* Navbar Container */}
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative flex items-center justify-between rounded-full 
                      ${scrolled ? "py-2" : "py-3"} 
                      px-6 bg-crm shadow-lg transition-all duration-300 transform`}
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/assets/brown-logo.png"
                alt="Slaviors"
                width={64}
                height={32}
                className="filter hover:brightness-110 transition-all duration-300"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brn font-bold relative group py-2"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brn transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-softBrn transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-75 delay-75" />
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a
                href="https://api.whatsapp.com/send?phone=6282314471125&text=Hello%20Slaviors"
                className="group relative inline-flex items-center px-6 py-3 text-base font-semibold 
                         overflow-hidden rounded-full border-2 border-brn transition-all duration-300"
              >
                <span className="absolute inset-0 bg-brn transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                <FaWhatsapp className="w-5 h-5 mr-2 text-brn group-hover:text-crm transition-colors duration-300 relative z-10" />
                <span className="relative z-10 text-brn group-hover:text-crm transition-colors duration-300">
                  Contact Us
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden relative z-10 p-2 rounded-lg text-brn hover:bg-brn/10 
                       transition-colors duration-300 focus:outline-none"
              aria-controls="navbar-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 transform rotate-90 transition-transform duration-300" />
              ) : (
                <FaBars className="w-6 h-6 transform rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 backdrop-blur-lg transition-all duration-500 md:hidden 
                     ${isMenuOpen 
                       ? "opacity-100 pointer-events-auto bg-brn/95" 
                       : "opacity-0 pointer-events-none bg-transparent"
                     }`}
          style={{ top: "0" }}
        >
          <div className="min-h-screen flex items-center justify-center">
            <ul className="flex flex-col items-center space-y-8 p-4">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  style={{
                    animation: isMenuOpen
                      ? `fadeInDown 0.5s ease forwards ${index * 0.1 + 0.2}s`
                      : "none",
                    opacity: 0,
                  }}
                >
                  <a
                    href={link.href}
                    className="text-2xl font-bold text-crm hover:text-softBrn transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li
                style={{
                  animation: isMenuOpen
                    ? `fadeInDown 0.5s ease forwards ${navLinks.length * 0.1 + 0.3}s`
                    : "none",
                  opacity: 0,
                }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=6282314471125&text=Hello%20Slaviors"
                  className="inline-flex items-center px-6 py-3 text-brn font-bold bg-crm 
                           rounded-full hover:bg-white transition-all duration-300 
                           transform hover:scale-105"
                  onClick={toggleMenu}
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}