import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const projectList = [
  {
    id: 1,
    name: "Tuitron",
    category: "Full Stack",
    tech: ["React.js", "Tailwind", "Firebase", "DaisyUI"],
    image: "/projects/greennest-store-screenshot.png",
    frontend: "https://github.com/devgantabya/tuitron-client.git",
    backend: "https://github.com/devgantabya/tuitron-server.git",
    live: "https://tutron-89ff4.web.app/",
    description: "A comprehensive tuition management platform connecting students and teachers with seamless scheduling and payment integration.",
  },
  {
    id: 2,
    name: "GreenNest Store",
    category: "Frontend",
    tech: ["React.js", "Tailwind", "Firebase", "DaisyUI"],
    image: "/projects/greennest-store-screenshot.png",
    frontend: "https://github.com/devgantabya/greennest-store.git",
    backend: "https://github.com/devgantabya/greennest-store.git",
    live: "https://greennest-store.netlify.app/",
    description: "A premium e-commerce experience for plant enthusiasts with seamless Firebase integration and modern UI.",
  },
  {
    id: 3,
    name: "ItemFlow Management",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
    image: "/projects/Item-flow-screenshot.png",
    frontend: "https://github.com/devgantabya/Product-Management-Client.git",
    backend: "https://github.com/devgantabya/Product-Management-Server.git",
    live: "https://product-management-client-fyp4.vercel.app/",
    description: "Enterprise-grade product tracking system featuring secure authentication and real-time CRUD operations.",
  },
  {
    id: 4,
    name: "Hero App Store",
    category: "Frontend",
    tech: ["React.js", "Recharts", "Node.js"],
    image: "/projects/hero-app-screenshot.png",
    frontend: "https://github.com/devgantabya/Hero-App-Store.git",
    backend: "https://github.com/devgantabya/Hero-App-Store.git",
    live: "https://my-hero-app-store.netlify.app/",
    description: "Data-driven dashboard with interactive charts and high-performance filtering capabilities.",
  },
  {
    id: 5,
    name: "EximFlow",
    category: "Full Stack",
    tech: ["React.js", "Node.js", "MongoDB"],
    image: "/projects/exim-flow-screenshot.png",
    frontend: "https://github.com/devgantabya/exim-flow-client.git",
    backend: "https://github.com/devgantabya/exim-flow-server.git",
    live: "https://exim-flow.netlify.app/",
    description: "Import/Export management system with real-time tracking and comprehensive reporting features.",
  },
];

const categories = ["All", "Frontend", "Full Stack", "Backend"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#030303] min-h-screen">
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <section className="py-16 sm:py-20 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold">Back to Home</span>
            </Link>
          </motion.div>

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
              >
                <span className="h-px w-8 md:w-12 bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-bold text-amber-500">
                  Portfolio
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter"
              >
                ALL{" "}
                <span className="text-gradient bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent italic font-serif">
                  PROJECTS.
                </span>
              </motion.h1>
            </div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative text-[9px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold transition-all pb-2 ${
                    activeCategory === cat
                      ? "text-amber-500"
                      : "text-zinc-600 hover:text-zinc-300"
                  }`}
                >
                  {cat}
                  <span
                    className={`absolute -bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${
                      activeCategory === cat ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-white/5 bg-gradient-to-br from-zinc-900 to-black mb-4 md:mb-6 group-hover:border-amber-500/30 transition-all duration-500 shadow-xl">
                    <div className="w-full h-[240px] md:h-[280px] bg-zinc-900 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 md:p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-black hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] z-10"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                      <motion.a
                        href={project.frontend}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 md:p-4 glass-effect rounded-xl text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all z-10"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={18} />
                      </motion.a>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 glass-effect px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-amber-500/30 z-10">
                      <span className="text-[8px] md:text-[9px] text-amber-500 font-mono uppercase tracking-widest font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-3 md:space-y-4 flex-grow flex flex-col">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300 mb-2 md:mb-3">
                        {project.name}
                      </h3>
                      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-zinc-400 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:border-amber-500/30 hover:text-amber-500 transition-all cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            className="mt-16 md:mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-2xl">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              <p className="text-zinc-600 text-xs uppercase tracking-[0.5em] font-bold">
                More projects coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
