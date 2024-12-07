"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation links
  const navLinks = [
    { name: "Home", href: "#hero", id: "home" },
    { name: "Bonus Offers", href: "#bonus-offers", id: "bonus-offers" },
    { name: "Bonushunt", href: "#bonushunt", id: "bonushunt" },
    { name: "Weihnachts Special", href: "#weihnachts-special", id: "weihnachts-special" },
    { name: "Giveaway", href: "#giveaway", id: "giveaway" }
  ];

  // Sync theme with localStorage
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

  const handleSetActive = (section) => {
    setActive(section);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`border-b ${isDarkMode
        ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-200"
        : "bg-gradient-to-b from-[#ED902F] via-[#EDB02F] to-[#EDB02F] text-white"
        }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <h1 className="text-xl lg:text-2xl font-bold uppercase">
          MaximZocktSlots
        </h1>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex items-center gap-4">
          <ul className="flex space-x-6 uppercase text-xs lg:text-base">
            {navLinks.map(({ name, href, id }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => handleSetActive(id)}
                  className={`${active === id ? "text-white font-semibold" : "opacity-90"}`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className={`lg:hidden ml-4 px-4 py-2 rounded-lg shadow ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#ED902F]"}`}
          >
            {isDarkMode ? (
              <FaSun className="inline-block" size={20} />
            ) : (
              <FaMoon className="inline-block" size={20} />
            )}
          </button>
        </nav>

        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className={`ml-4 px-4 py-2 rounded-lg shadow ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#ED902F]"}`}
          >
            {isDarkMode ? (
              <FaSun className="inline-block" size={20} />
            ) : (
              <FaMoon className="inline-block" size={20} />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="lg:hidden ml-4 text-white"
          >
            <AiOutlineClose size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-transform transform"
          data-aos-delay="500"
          data-aos="fade-right"
        >
          <button
            className="absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <AiOutlineClose className="text-white" size={30} />
          </button>

          <ul className="flex flex-col space-x-6 uppercase text-base">
            {navLinks.map(({ name, href, id }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => handleSetActive(id)}
                  className={`${active === id ? "text-white font-semibold" : "opacity-90"}`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
