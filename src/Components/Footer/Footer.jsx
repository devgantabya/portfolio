import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 py-10 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center md:text-left">
          Gantabya
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-blue-500 dark:hover:text-blue-400 text-3xl transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-blue-500 dark:hover:text-blue-400 text-3xl transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            className="hover:text-blue-500 dark:hover:text-blue-400 text-3xl transition transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-0 text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Gantabya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
