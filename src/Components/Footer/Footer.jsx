import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 dark:text-white py-8 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <div className="text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold">Gantabya</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 justify-center md:justify-end">
          {/* Twitter */}
          <a
            href="https://github.com/devgantabya"
            target="_blank"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/devgantabya/"
            target="_blank"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.facebook.com/devgantabya"
            target="_blank"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
