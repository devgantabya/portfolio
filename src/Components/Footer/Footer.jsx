import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030303] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Copyright & Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-white font-black tracking-widest text-sm">
            GANTABYA
          </span>
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Center/Right: Social Links */}
        <div className="flex gap-8">
          {[
            { icon: <FaGithub />, link: "https://github.com/devgantabya" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/devgantabya/",
            },
            {
              icon: <FaFacebookF />,
              link: "https://www.facebook.com/devgantabya",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-amber-500 transition-colors duration-300"
            >
              {React.cloneElement(item.icon, { size: 18 })}
            </a>
          ))}
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-zinc-600 hover:text-white transition-colors duration-300"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Top
          </span>
          <div className="h-8 w-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-amber-500 group-hover:text-amber-500 transition-all">
            <FaArrowUp size={12} />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
