"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Bonus Offers", href: "/bonus-offers" },
    { name: "Bonushunt", href: "/bonushunt" },
    { name: "Weihnachts Special", href: "/weihnachts-special" },
    { name: "Giveaway", href: "/giveaway" },
  ];

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the link is active
  const isActiveLink = (href) => {
    return pathname === href
      ? "font-bold text-white "
      : "font-normal text-opacity-90";
  };

  return (
    <header
      className={`border-b ${isDarkMode
        ? "bg-black text-gray-200"
        : "bg-gradient-to-b from-[#ED902F] via-[#EDB02F] to-[#EDB02F] text-white"
        }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8">
        <h1 className="text-xl lg:text-2xl font-bold uppercase dark:text-[#EDB02F]">
          MaximZocktSlots
        </h1>

        <nav className="hidden lg:flex items-center gap-4">
          <ul className="flex space-x-6 uppercase text-xs lg:text-base font-normal">
            {navLinks.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={isActiveLink(href)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className={`ml-4 w-[30px] h-[30px] flex items-center justify-center rounded shadow ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#ED902F]"} `}
          >
            {isDarkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
          </button>
          <button onClick={toggleMenu} className="lg:hidden ml-4 text-white">
            <AiOutlineClose size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <AiOutlineClose className="text-white" size={30} />
          </button>

          <ul className="flex flex-col space-y-6 uppercase text-base">
            {navLinks.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={isActiveLink(href)}
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
