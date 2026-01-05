import React from "react";
import { motion } from "framer-motion";
import AboutMe from "../../assets/About-me.png";

/* Primary color control */
const PRIMARY_TEXT = "text-blue-600 dark:text-blue-400";
const PRIMARY_BG = "bg-blue-600 hover:bg-blue-700";
const PRIMARY_BORDER = "border-blue-500/30";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue",
  "Laravel",
  "Tailwind",
  "WordPress",
  "Git",
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/10 blur-3xl" />

          <motion.img
            src={AboutMe}
            alt="About Gantabya"
            className="relative w-full md:w-[480px] rounded-2xl shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className={`uppercase tracking-widest text-sm font-semibold ${PRIMARY_TEXT}`}
          >
            About Me
          </span>

          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
            Passionate Web Developer
          </h2>

          <p className="mt-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Hi! I’m <span className="font-medium">Gantabya</span>, a passionate
            full-stack web developer specializing in building modern, fast, and
            scalable applications using
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {" "}
              Laravel, React, Vue, and WordPress
            </span>
            .
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I enjoy solving real-world problems, crafting clean UI, and turning
            ideas into high-quality digital products.
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.08 }}
                className={`
                  px-4 py-1.5 rounded-full
                  text-sm font-medium
                  border ${PRIMARY_BORDER}
                  text-gray-800 dark:text-gray-200
                  bg-white/60 dark:bg-gray-800/60
                  backdrop-blur
                  cursor-default
                `}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className={`
                inline-block px-6 py-3 rounded-lg
                text-white font-medium
                ${PRIMARY_BG}
                transition-all duration-200
                hover:scale-[1.04]
                active:scale-95
              `}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
