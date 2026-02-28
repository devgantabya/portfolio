import React from "react";
import { motion } from "framer-motion";
import AboutMe from "../../assets/About-me.png";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "Tailwind",
  "JavaScript",
  "Git",
  "Framer Motion",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-amber-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section - Framed Style */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* The "Frame" behind the image */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-amber-500/20 rounded-2xl -z-10 hidden md:block" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <motion.img
              src={AboutMe}
              alt="Gantabya Profile"
              className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              whileHover={{ scale: 1.03 }}
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-white/10 p-5 rounded-xl shadow-2xl hidden md:block">
            <p className="text-amber-500 text-3xl font-black leading-none">
              1.5+
            </p>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">
              Years of
              <br />
              Experience
            </p>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-8 bg-amber-500" />
            <span className="uppercase tracking-[0.4em] text-[11px] font-bold text-amber-500">
              Personal Info
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Engineering Digital <br />
            <span className="text-zinc-500 italic font-serif">Solutions.</span>
          </h2>

          <div className="mt-8 space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
            <p>
              I am <span className="text-white font-normal">Gantabya</span>, a
              developer who bridges the gap between complex backend logic and
              intuitive frontend design. My focus is on the
              <span className="text-zinc-200"> MERN stack</span>, creating
              high-performance tools that actually solve problems.
            </p>
            <p>
              I don't just write code; I craft systems that are scalable,
              maintainable, and visually striking.
            </p>
          </div>

          {/* Skills Grid - Glassmorphism */}
          <div className="mt-10">
            <p className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
              Technical Arsenal
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    y: -3,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  className="px-4 py-2 rounded-lg text-[12px] font-medium border border-white/5 bg-white/[0.02] text-zinc-300 backdrop-blur-sm transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-white text-[11px] uppercase tracking-[0.3em] font-bold flex items-center gap-4 group"
            >
              Start a Conversation
              <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
