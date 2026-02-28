import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myImage from "../../assets/Profile.png";
import { Link } from "react-router";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "MERN Stack Specialist",
];

const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      3000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#080808] overflow-hidden pt-20 pb-10"
    >
      <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-amber-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-10 w-full flex flex-col md:flex-row items-center justify-between z-10">
        <div className="max-w-2xl text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500/80 text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              WELCOME TO MY PORTFOLIO
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Hi, I'm <span className="text-amber-500">Gantabya</span>
            </h1>

            <div className="h-12 mt-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-xl md:text-3xl font-bold text-zinc-100 uppercase tracking-tighter"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-lg font-light">
            An aspiring{" "}
            <span className="text-zinc-100 font-medium">
              Full-Stack Developer
            </span>{" "}
            with a strong foundation in frontend development and a growing focus
            on backend architecture.
          </motion.p>

          <div className="mt-10 flex gap-6 justify-center md:justify-start items-center">
            <Link
              to="/projects"
              className="px-8 py-3.5 bg-amber-500 text-black text-[11px] font-black uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/20"
            >
              Download Resume
            </Link>
            <div className="flex gap-4">
              {/* Social Icon Slots */}
              <div className="w-10 h-10 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors cursor-pointer">
                <span className="text-white text-xs font-bold">Git</span>
              </div>
              <div className="w-10 h-10 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors cursor-pointer">
                <span className="text-white text-xs font-bold">In</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 md:order-2 mb-12 md:mb-0"
        >
          <div className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full p-4 border-8 border-zinc-800/40">
            <div className="w-full h-full rounded-full border border-amber-500/30 overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.15)] bg-zinc-900">
              <img
                src={myImage}
                alt="Gantabya"
                className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-700 scale-110 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-[10%] right-[-5%] bg-black/80 backdrop-blur-md border border-amber-500/50 px-4 py-2 rounded-xl shadow-2xl">
              <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                Available for work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
