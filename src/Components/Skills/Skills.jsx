import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Laravel",
  "PHP",
  "MySQL",
  "WordPress",
  "Git & GitHub",
  "RESTful APIs",
  "API Integration",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#030303] py-24 relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="h-px w-8 bg-amber-500" />
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
                Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter"
            >
              TECHNICAL{" "}
              <span className="text-zinc-500 italic font-serif">ARSENAL.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-sm max-w-xs leading-relaxed font-light"
          >
            A curated selection of technologies I use to build scalable,
            high-performance digital products.
          </motion.p>
        </div>

        {/* Skills Grid - Interactive Glass Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(245, 158, 11, 0.4)",
              }}
              className="group relative flex flex-col justify-center items-center py-8 px-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 cursor-default"
            >
              {/* Subtle hover glow behind text */}
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500 rounded-xl" />

              <p className="text-zinc-400 group-hover:text-white font-bold text-[11px] uppercase tracking-[0.2em] z-10 transition-colors">
                {skill}
              </p>

              {/* Minimalist dot indicator */}
              <div className="mt-3 h-1 w-1 rounded-full bg-zinc-800 group-hover:bg-amber-500 transition-all group-hover:scale-150" />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating "Learning" tag for recruiters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="px-6 py-2 rounded-full border border-white/5 bg-zinc-900/50 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
              Currently exploring: Web3 & AI Integration
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
