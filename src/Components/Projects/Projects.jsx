import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectList = [
  {
    id: 1,
    name: "Rise Together",
    tech: ["NestJS", "NextJS", "ExpressJS", "Typescript", "PostgreSQL", "Prisma", "Zod", "CI/CD"],
    image: "/projects/risetogether.png",
    frontend: "",
    backend: "",
    live: "https://www.risetogetherbd.com/",
    description: "Company website. Worked as a Full Stack Developer.",
  },
  {
    id: 1,
    name: "Feletrip",
    tech: ["ExpressJS", "Typescript", "PostgreSQL", "Prisma", "Zod", "CI/CD", "Swagger"],
    image: "/projects/feletrip.png",
    frontend: "",
    backend: "",
    live: "https://www.feletrip.com/",
    description: "A travel booking system. Worked as a Backend Developer.",
  },
  {
    id: 2,
    name: "Biponiq",
    tech: ["ExpressJS", "Typescript", "PostgreSQL", "Prisma", "Redis", "Zod", "CI/CD", "Swagger", "AI Chatbot"],
    image: "/projects/biponiq.png",
    frontend: "",
    backend: "",
    live: "https://biponiq.com/",
    description: "An E-commerce platform. Worked as a Backend Developer.",
  },
  {
    id: 3,
    name: "Uparzo",
    tech: ["ExpressJS", "Typescript", "PostgreSQL", "Prisma", "Redis", "Zod", "CI/CD", "Swagger", "Docker"],
    image: "/projects/uparzo.png",
    frontend: "",
    backend: "",
    live: "https://uparzo.com/",
    description: "An E-commerce platform. Worked as a Backend Developer.",
  },
  {
    id: 3,
    name: "Hero App Store",
    tech: ["React.js", "Recharts", "Node.js"],
    image: "/projects/hero-app-screenshot.png",
    frontend: "https://github.com/devgantabya/Hero-App-Store.git",
    backend: "https://github.com/devgantabya/Hero-App-Store.git",
    live: "https://my-hero-app-store.netlify.app/",
    description:
      "Data-driven dashboard with interactive charts and high-performance filtering.",
  },
  {
    id: 4,
    name: "GreenNest Store",
    tech: ["React.js", "Tailwind", "Firebase", "DaisyUI"],
    image: "/projects/greennest-store-screenshot.png",
    frontend: "https://github.com/devgantabya/greennest-store.git",
    backend: "https://github.com/devgantabya/greennest-store.git",
    live: "https://greennest-store.netlify.app/",
    description:
      "A premium e-commerce experience for plant enthusiasts with seamless Firebase integration.",
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#030303] py-24 relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
                Selected Works
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              FEATURED{" "}
              <span className="text-gradient bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent italic font-serif">PROJECTS.</span>
            </h2>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {projectList.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col"
              >
                {/* Enhanced Image Container with Better Display */}
                <div className="relative w-full rounded-3xl overflow-hidden border-2 border-white/5 bg-gradient-to-br from-zinc-900 to-black mb-6 group-hover:border-amber-500/30 transition-all duration-500 shadow-xl">
                  {/* Image with contain to show full image without cropping */}
                  <div className="w-full h-[320px] bg-zinc-900 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient Overlay - Only on hover for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Enhanced overlay with actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-black hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] z-10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={22} />
                    </motion.a>
                    <motion.a
                      href={project.frontend}
                      target="_blank"
                      rel="noreferrer"
                      className="p-5 glass-effect rounded-2xl text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all z-10"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={22} />
                    </motion.a>
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="space-y-4 flex-grow flex flex-col">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced Tech Pills with better spacing */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-[9px] uppercase tracking-widest font-bold text-zinc-400 border border-white/10 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:border-amber-500/30 hover:text-amber-500 transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Section Footer */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-2xl">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <p className="text-zinc-600 text-xs uppercase tracking-[0.5em] font-bold">
              More coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
