import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBriefcase, FaCode } from "react-icons/fa";

const projects = [
  {
    name: "Biponiq",
    role: "Backend Developer",
    url: "https://biponiq.com/",
    description: "E-commerce platform backend development",
  },
  {
    name: "Feletrip",
    role: "Backend Developer",
    url: "https://www.feletrip.com/",
    description: "Travel booking system backend",
  },
  {
    name: "Uparzo",
    role: "Backend Developer",
    url: "https://uparzo.com/",
    description: "Service platform backend infrastructure",
  },
  {
    name: "ObeoRooms",
    role: "Backend Developer",
    url: "https://www.obeorooms.com/",
    description: "Hotel booking platform backend",
  },
  {
    name: "Rise Together",
    role: "Full Stack Developer",
    url: "https://www.risetogetherbd.com/",
    description: "Company website - Full stack development",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#050505] py-24 relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
                Professional Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white tracking-tighter"
            >
              WORK{" "}
              <span className="text-gradient bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent italic font-serif">
                EXPERIENCE.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-sm max-w-xs leading-relaxed font-light"
          >
            Currently working as a{" "}
            <span className="text-amber-500 font-semibold">Backend Intern</span>{" "}
            at RiseTogetherBD, contributing to multiple live projects.
          </motion.div>
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="glass-effect border-2 border-white/10 rounded-3xl p-8 md:p-12 hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden group">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-orange-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-orange-500/5 group-hover:to-amber-500/5 transition-all duration-500"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              {/* Company Icon */}
              <motion.div
                className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-black shadow-lg flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <FaBriefcase size={32} />
              </motion.div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      Backend Developer Intern
                    </h3>
                    <p className="text-amber-500 font-semibold text-lg">
                      RiseTogetherBD
                    </p>
                  </div>
                  <div className="glass-effect px-5 py-2.5 rounded-xl border border-emerald-500/20 flex items-center gap-3 w-fit">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">
                      Currently Working
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  Contributing to backend development across multiple production
                  projects, focusing on API development, database optimization,
                  and system architecture.
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <FaCode className="text-amber-500" size={20} />
                  <p className="text-white font-semibold text-sm">
                    Collaborated on 5 Live Projects
                  </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4 flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-500"></span>
                    Projects Contributed
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projects.map((project, index) => (
                      <motion.a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/project glass-effect border border-white/5 rounded-xl p-4 hover:border-amber-500/30 hover:bg-white/[0.02] transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-grow">
                            <h4 className="text-white font-bold text-sm mb-1 group-hover/project:text-amber-500 transition-colors">
                              {project.name}
                            </h4>
                            <p className="text-zinc-600 text-xs uppercase tracking-wider font-semibold mb-2">
                              {project.role}
                            </p>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          <FaExternalLinkAlt
                            className="text-zinc-600 group-hover/project:text-amber-500 transition-colors flex-shrink-0 mt-1"
                            size={14}
                          />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
