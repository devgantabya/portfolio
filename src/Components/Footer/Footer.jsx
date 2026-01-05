import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          DevGantabya
        </h2>

        <div className="flex justify-center gap-6 mt-4 text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-blue-500 dark:hover:text-blue-400 text-2xl transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-blue-500 dark:hover:text-blue-400 text-2xl transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            className="hover:text-blue-500 dark:hover:text-blue-400 text-2xl transition"
          >
            <FaFacebook />
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Gantabya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
