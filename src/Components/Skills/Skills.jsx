import React from "react";

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "Vue.js",
    "Laravel",
    "PHP",
    "MySQL",
    "WordPress",
    "Shopify",
    "Git & GitHub",
    "Restfull APIs",
    "API Integration",
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        Skills & Technologies
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mt-2 mb-10 max-w-2xl mx-auto">
        A collection of tools and technologies I use to build modern, scalable,
        and high-performance applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center py-3 px-4 border border-gray-300 dark:border-gray-700 
            rounded-lg bg-white dark:bg-gray-900 shadow-sm 
            hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 
            transition cursor-pointer"
          >
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
