import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "GreenNest - Store",
      tech: ["React.js", "Tailwind CSS", "Firebase", "Swiper.js", "DaisyUI"],
      image: "/projects/greennest-store-screenshot.png",
      frontend: "https://github.com/devgantabya/greennest-store.git",
      backend: "https://github.com/devgantabya/greennest-store.git",
      live: "https://greennest-store.netlify.app/",
    },
    {
      id: 2,
      name: "ItemFlow - Product Management App",
      tech: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "TMongoDB",
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
      tech: ["React.js", "Node.js", "Recharts", "Tailwind CSS"],
      image: "/projects/hero-app-screenshot.png",
      frontend: "https://github.com/devgantabya/Hero-App-Store.git",
      backend: "https://github.com/devgantabya/Hero-App-Store.git",
      live: "https://my-hero-app-store.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        My Projects
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mt-2 mb-10 max-w-2xl mx-auto">
        Some of the professional and personal projects I have built using modern
        technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
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
                    className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 mt-5 text-gray-700 dark:text-gray-300">
                <a
                  href={project.frontend}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <FaGithub /> Frontend
                </a>

                <a
                  href={project.backend}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <FaGithub /> Backend
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>

              <div className="mt-6">
                <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
