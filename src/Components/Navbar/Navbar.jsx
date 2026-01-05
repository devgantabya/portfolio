import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop nav link styles with active underline
  const navLinkClass = ({ isActive }) =>
    `
      relative
      text-gray-600 dark:text-gray-300
      transition-colors duration-200
      hover:text-blue-500 dark:hover:text-blue-400
      after:absolute after:-bottom-1 after:left-0
      after:h-[2px] after:bg-blue-500
      after:transition-all after:duration-300
      ${
        isActive
          ? "text-blue-600 dark:text-blue-400 after:w-full"
          : "after:w-0 hover:after:w-full"
      }
    `;

  // Mobile nav link styles
  const mobileLinkClass = ({ isActive }) =>
    `
      block transition
      ${
        isActive
          ? "text-blue-600 dark:text-blue-400 font-semibold"
          : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
      }
    `;

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-white/90 dark:bg-gray-800/95 backdrop-blur border-b border-gray-200/60 dark:border-gray-700/60 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition"
        >
          Gantabya
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/contact"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
          >
            Let's Talk
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200 transition-transform duration-200 active:scale-90"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          <li>
            <NavLink
              to="/"
              end
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </li>

          <div className="pt-4">
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Hire Me
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
