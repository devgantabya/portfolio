import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/Profile.png";
import { Link } from "react-router";

/* 🔵 Tailwind-based color settings */
const PRIMARY_TEXT = "text-blue-600 dark:text-blue-400";
const PRIMARY_BG = "bg-blue-600 hover:bg-blue-700";
const PRIMARY_BORDER = "border-blue-600 dark:border-blue-400";

const roles = [
  "Full-Stack Web Developer",
  "Frontend Web Developer",
  "MERN Stack Developer",
];

const Banner = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? current.slice(0, charIndex - 1)
          : current.slice(0, charIndex + 1)
      );
      setCharIndex((p) => p + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((p) => (p + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="dark:bg-gray-800 py-16">
      <div className="md:py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I&apos;m <span className={PRIMARY_TEXT}>Gantabya</span>
          </h1>

          {/* Typing */}
          <h2
            className={`mt-3 h-10 text-xl md:text-2xl font-semibold ${PRIMARY_TEXT}`}
          >
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-5 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            I build modern, fast, and scalable web applications using{" "}
            <span className="font-medium text-gray-900 dark:text-gray-100">
              HTML, CSS, JavaScript, Next.js, React.js, Express.js, Node.js,
              MongoDB, Swiper.js, Tailwind, and Shadcn
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="mt-7 flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className={`px-6 py-3 rounded-lg text-white font-medium ${PRIMARY_BG} transition-all duration-200 hover:scale-[1.03] active:scale-95`}
            >
              View Projects
            </Link>

            <a
              href="https://drive.google.com/file/d/1ZlT3IJfEpbgIlfNpbu5uUP4EPmv4RA39/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg border ${PRIMARY_BORDER} text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-[1.03] active:scale-95 font-bold`}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-12 md:mt-0 relative"
        >
          {/* Glow synced with primary color */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/30 blur-3xl" />

          {/* Floating Image */}
          <motion.img
            src={myImage}
            alt="Developer Gantabya"
            className="hidden md:block relative w-[280px] md:w-[380px] rounded-full drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
