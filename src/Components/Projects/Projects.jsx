import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";

const projectList = [
  {
    id: 1,
    name: "GreenNest Store",
    category: "Frontend",
    tech: ["React.js", "Tailwind", "Firebase", "DaisyUI"],
    image: "/projects/greennest-store-screenshot.png",
    frontend: "https://github.com/devgantabya/greennest-store.git",
    backend: "https://github.com/devgantabya/greennest-store.git",
    live: "https://greennest-store.netlify.app/",
    description:
      "A premium e-commerce experience for plant enthusiasts with seamless Firebase integration.",
  },
  {
    id: 2,
    name: "ItemFlow Management",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
    image: "/projects/Item-flow-screenshot.png",
    frontend: "https://github.com/devgantabya/Product-Management-Client.git",
    backend: "https://github.com/devgantabya/Product-Management-Server.git",
    live: "https://product-management-client-fyp4.vercel.app/",
    description:
      "Enterprise-grade product tracking system featuring secure authentication and real-time CRUD.",
  },
  {
    id: 3,
    name: "Hero App Store",
    category: "Frontend",
    tech: ["React.js", "Recharts", "Node.js"],
    image: "/projects/hero-app-screenshot.png",
    frontend: "https://github.com/devgantabya/Hero-App-Store.git",
    backend: "https://github.com/devgantabya/Hero-App-Store.git",
    live: "https://my-hero-app-store.netlify.app/",
    description:
      "Data-driven dashboard with interactive charts and high-performance filtering.",
  },
];

const categories = ["All", "Frontend", "Full Stack", "Backend"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="bg-[#030303] py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-amber-500" />
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              FEATURED{" "}
              <span className="text-zinc-500 italic font-serif">PROJECTS.</span>
            </h2>
          </div>

          {/* Minimalist Filter */}
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${
                  activeCategory === cat
                    ? "text-amber-500"
                    : "text-zinc-600 hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                {/* Image Container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 mb-6">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      className="p-4 bg-white rounded-full text-black hover:bg-amber-500 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                    <a
                      href={project.frontend}
                      target="_blank"
                      className="p-4 bg-zinc-900 border border-white/10 rounded-full text-white hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] text-amber-500 font-mono uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="h-[1px] w-4 bg-zinc-800" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-zinc-500 text-sm font-light leading-relaxed max-w-md">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[9px] uppercase tracking-widest font-bold text-zinc-400 border border-white/5 px-3 py-1 rounded-md bg-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Footer for Section */}
        <div className="mt-24 text-center">
          <p className="text-zinc-600 text-xs uppercase tracking-[0.5em]">
            More coming soon • Check GitHub for latest repos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
