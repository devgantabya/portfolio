import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/profilee.png";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Specialist",
  "WordPress Developer",
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
      className="relative min-h-screen flex items-center bg-[#070707] overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <span className="h-px w-10 bg-gradient-to-r from-amber-500 to-transparent"></span>
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
                Gantabya
              </span>
            </h1>
          </motion.div>

          <motion.div 
            className="h-12 flex items-center justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300 uppercase tracking-wide">
              {displayText}
              <span className="inline-block w-1 h-8 bg-amber-500 ml-1 animate-pulse"></span>
            </p>
          </motion.div>

          <motion.p 
            className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build modern, responsive and scalable web applications using the
            MERN stack with strong focus on{" "}
            <span className="text-amber-500 font-semibold">clean UI</span> and{" "}
            <span className="text-amber-500 font-semibold">performance</span>.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-5 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/resume/Gantabya_Kumar_Bayda_Resume.pdf"
              download
              className="group relative flex items-center gap-3 px-8 py-4 rounded-xl text-black font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-wider text-sm">Download Resume</span>
              <FiDownload className="relative z-10" size={18} />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-3 px-8 py-4 border-2 border-amber-500/30 text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300"
            >
              Let's Talk
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center md:justify-start pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://github.com/devgantabya"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-amber-500 transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
            >
              GitHub
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href="https://www.linkedin.com/in/devgantabya/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-amber-500 transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right Image - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] group">
            {/* Multi-layered glow effects */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-50 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 animate-pulse"></div>
            <div className="absolute inset-10 rounded-full blur-2xl opacity-60 bg-gradient-to-br from-amber-400 to-orange-500"></div>

            {/* Rotating gradient ring with enhanced animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full p-[4px] opacity-90"
            >
              <div className="w-full h-full rounded-full bg-[conic-gradient(#3b82f6,#8b5cf6,#a855f7,#f59e0b,#ef4444,#ec4899,#3b82f6)]"></div>
            </motion.div>

            {/* Secondary counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute inset-3 rounded-full p-[2px] opacity-40"
            >
              <div className="w-full h-full rounded-full bg-[conic-gradient(transparent,#f59e0b,transparent)]"></div>
            </motion.div>

            {/* Inner image container with glass effect */}
            <div className="absolute inset-[12px] rounded-full bg-gradient-to-br from-zinc-900 to-black p-3 flex items-center justify-center shadow-2xl ring-1 ring-white/10">
              <div className="relative w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src={myImage}
                  alt="Gantabya"
                  className="w-full h-full object-cover"
                />
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Floating particles */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-amber-500 blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 -left-6 w-2 h-2 rounded-full bg-purple-500 blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-6 w-2 h-2 rounded-full bg-blue-500 blur-sm"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;