import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/Profile.png";
import { FiDownload } from "react-icons/fi";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "MERN Stack Specialist",
];

const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="relative py-10 flex items-center bg-[#070707] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold"
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            Hi, I'm <span className="text-amber-500">Gantabya</span>
          </motion.h1>

          <div className="mt-6 h-10">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300 uppercase tracking-wide">
              {displayText}
            </p>
          </div>

          <p className="mt-8 text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            I build modern, responsive and scalable web applications using the
            MERN stack with strong focus on clean UI and performance.
          </p>

          <div className="mt-10 flex flex-wrap gap-5 justify-center md:justify-start">
            <a
              href="/resume/Gantabya_Kumar_Bayda.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-amber-400  transition-all"
            >
              Resume
              <span>
                <FiDownload size={18} />
              </span>
            </a>

            <a
              href="https://github.com/devgantabya"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-zinc-900 transition-all"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/devgantabya/"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-zinc-900 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] group">
            {/* Soft glow background */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400"></div>

            {/* Rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full p-[4px]"
            >
              <div className="w-full h-full rounded-full bg-[conic-gradient(#3b82f6,#8b5cf6,#22c55e,#f59e0b,#ef4444,#3b82f6)]"></div>
            </motion.div>

            {/* Inner image container */}
            <div className="absolute inset-[10px] rounded-full bg-[#070707] p-2 flex items-center justify-center shadow-2xl">
              <img
                src={myImage}
                alt="Gantabya"
                className="w-full h-full object-cover rounded-full transition-transform duration-500"
              />
            </div>

            {/* Status Badge */}
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-amber-500/40 px-4 py-2 rounded-full">
              <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                Available for Work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
