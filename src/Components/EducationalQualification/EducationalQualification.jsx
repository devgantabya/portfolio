import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "National University",
    duration: "2016 - 2020",
    location: "Bangladesh",
    grade: "Honors",
    details:
      "Advanced mathematical modeling and analytical reasoning. Specialized in Algebra and Applied Mathematics, providing a strong foundation for complex algorithmic problem solving.",
    highlights: [
      "Mathematical Modeling",
      "Algorithmic Problem Solving",
      "Data Structures & Algorithms",
    ],
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "PC College, Bagerhat",
    duration: "2013 - 2015",
    location: "Bangladesh",
    grade: "Science",
    details: "Science Major with focus on Physics, Chemistry, and Advanced Mathematics.",
    highlights: [
      "Physics & Chemistry",
      "Advanced Mathematics",
      "Analytical Thinking",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#030303] py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 md:w-16 bg-amber-500/50" />
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-amber-500/80">
              Education
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            ACADEMIC{" "}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              JOURNEY.
            </span>
          </motion.h2>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 overflow-hidden">
                {/* Decorative Corner Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Icon & Duration */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                        <FaGraduationCap size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-amber-500 text-xs font-mono mb-1">
                          <FaCalendarAlt size={10} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-wider">
                          <FaUniversity size={10} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Grade Badge */}
                    <div className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-400">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors leading-tight">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-zinc-400 text-sm font-semibold mb-4">
                    {edu.institution}
                  </p>

                  {/* Details */}
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-6">
                    {edu.details}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-wider font-bold text-zinc-600 mb-3">
                      Key Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-zinc-800/30 border border-zinc-700/30 rounded-lg text-[10px] font-medium text-zinc-400 hover:border-amber-500/30 hover:text-amber-500 transition-all"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">
              Continuous Learning & Professional Development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
