import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PRIMARY = {
  text: "text-blue-600 dark:text-blue-400",
  border: "border-blue-500 dark:border-blue-400",
  bg: "bg-blue-600 hover:bg-blue-700",
};

const projectList = [
  {
    id: 1,
    name: "GreenNest - Store",
    category: "Frontend",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Swiper.js", "DaisyUI"],
    image: "/projects/greennest-store-screenshot.png",
    frontend: "https://github.com/devgantabya/greennest-store.git",
    backend: "https://github.com/devgantabya/greennest-store.git",
    live: "https://greennest-store.netlify.app/",
  },
  {
    id: 2,
    name: "ItemFlow - Product Management App",
    category: "Full Stack",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    image: "/projects/Item-flow-screenshot.png",
    frontend: "https://github.com/devgantabya/Product-Management-Client.git",
    backend: "https://github.com/devgantabya/Product-Management-Server.git",
    live: "https://product-management-client-fyp4.vercel.app/",
  },
  {
    id: 3,
    name: "Hero App Store",
    category: "Frontend",
    tech: ["React.js", "Node.js", "Recharts", "Tailwind CSS"],
    image: "/projects/hero-app-screenshot.png",
    frontend: "https://github.com/devgantabya/Hero-App-Store.git",
    backend: "https://github.com/devgantabya/Hero-App-Store.git",
    live: "https://my-hero-app-store.netlify.app/",
  },
];

const categories = ["All", "Frontend", "Full Stack", "Backend"];
const ITEMS_PER_PAGE = 2;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  /* Filter Projects */
  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projectList
      : projectList.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  /* Pagination */
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* Open Modal */
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  /* Close Modal */
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16">
      {/* Heading */}
      <div className="md:py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          My Projects
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-2 mb-10 max-w-2xl mx-auto">
          A selection of professional and personal projects built using modern
          technologies.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`
              px-4 py-2 rounded-full text-sm font-medium
              border transition
              ${
                activeCategory === cat
                  ? `${PRIMARY.bg} text-white`
                  : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500"
              }
            `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              rounded-xl overflow-hidden
              shadow-sm hover:shadow-lg
              transition
            "
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-5 mt-5 text-gray-700 dark:text-gray-300">
                  <a
                    href={project.frontend}
                    target="_blank"
                    className={`flex items-center gap-1 hover:${PRIMARY.text}`}
                  >
                    <FaGithub /> Frontend
                  </a>

                  <a
                    href={project.backend}
                    target="_blank"
                    className={`flex items-center gap-1 hover:${PRIMARY.text}`}
                  >
                    <FaGithub /> Backend
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-400"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => handleViewDetails(project)}
                    className={`px-5 py-2 rounded-lg text-white ${PRIMARY.bg} transition`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`
                w-10 h-10 rounded-full font-medium
                transition
                ${
                  currentPage === i + 1
                    ? `${PRIMARY.bg} text-white`
                    : "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500"
                }
              `}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && selectedProject && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full relative shadow-lg"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 text-2xl font-bold hover:text-red-500 transition"
                >
                  &times;
                </button>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {selectedProject.name} - Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
