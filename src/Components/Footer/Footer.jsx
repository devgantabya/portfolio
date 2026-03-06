import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#030303] py-5 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex  items-center justify-center">
        <p className="text-zinc-600 text-sm tracking-[0.2em]">
          © {new Date().getFullYear()} Gantabya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
