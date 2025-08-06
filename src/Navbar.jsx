import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { BsMoonStars, BsSun } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navItems = ["Home", "Menu", "Specials", "Gallery", "Contact"];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggler
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900 shadow-lg py-2"
            : "bg-red-600 shadow-lg py-2"
          : darkMode
          ? "bg-gray-800 py-4"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className={`text-2xl md:text-3xl font-extrabold tracking-wide ${
            darkMode || scrolled ? "text-white" : "text-red-600"
          }`}
        >
          🍔 FOOD CLUB
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative group text-lg font-semibold cursor-pointer transition duration-300 ${
                darkMode || scrolled ? "text-white" : "text-gray-800"
              } hover:text-yellow-300`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </li>
          ))}

          {/* Language Select */}
          <li>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-sm font-medium outline-none border-none text-white hover:text-yellow-300"
            >
              <option className="text-black" value="EN">EN</option>
              <option className="text-black" value="UR">UR</option>
              <option className="text-black" value="AR">AR</option>
            </select>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <FaShoppingCart
            className={`text-xl cursor-pointer transition hover:text-yellow-300 ${
              darkMode || scrolled ? "text-white" : "text-red-600"
            }`}
          />

          {/* Dark Mode Toggle */}
          <div className="cursor-pointer text-xl" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <BsSun className="text-yellow-300" />
            ) : (
              <BsMoonStars
                className={`${
                  scrolled ? "text-white" : "text-red-600"
                } hover:text-yellow-300`}
              />
            )}
          </div>

          {/* Hamburger for Mobile */}
          <div
            className={`md:hidden text-2xl ${
              darkMode || scrolled ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-600 px-6 py-4 animate-fadeInDown rounded-b-xl">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-white font-medium border-b border-red-400 pb-2 hover:text-yellow-200 transition-all duration-300"
              >
                {item}
              </li>
            ))}

            {/* Language */}
            <li className="text-white">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-white outline-none"
              >
                <option className="text-black" value="EN">English</option>
                <option className="text-black" value="UR">Urdu</option>
                <option className="text-black" value="AR">Arabic</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
