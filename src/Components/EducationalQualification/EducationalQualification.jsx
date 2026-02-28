import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "National University",
    duration: "2016 - 2020",
    details:
      "Advanced mathematical modeling and analytical reasoning. Specialized in Algebra and Applied Mathematics, providing a strong foundation for complex algorithmic problem solving.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "PC College, Bagerhat",
    duration: "2013 - 2015",
    details: "Science Major: Focus on Physics and Advanced Mathematics.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#050505] py-24 relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-px w-8 bg-amber-500" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
              Curriculum Vitae
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            ACADEMIC{" "}
            <span className="text-zinc-500 italic font-serif">HISTORY.</span>
          </motion.h2>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-white/5 last:border-0"
            >
              {/* Left Column: Date & Meta */}
              <div className="flex flex-col">
                <span className="text-amber-500 font-mono text-sm tracking-widest mb-2">
                  {edu.duration}
                </span>
                <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-zinc-300 transition-colors">
                  {edu.institution}
                </span>
              </div>

              {/* Right Column: Degree & Details */}
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  {edu.details}
                </p>

                {/* Specific highlight for Mathematics background */}
                {edu.degree.includes("Mathematics") && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] uppercase font-bold tracking-tighter">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    Logical Foundation for High-Level Engineering
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
