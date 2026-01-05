import React from "react";
import { motion } from "framer-motion";

/* Primary color control */
const PRIMARY_BORDER = "border-blue-500/40 dark:border-blue-400/40";
const PRIMARY_HOVER = "hover:border-blue-500 dark:hover:border-blue-400";

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
  "RESTful APIs",
  "API Integration",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="dark:bg-gray-800 py-16">
      <div className="md:py-16 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-gray-600 dark:text-gray-300 mt-2 mb-12 max-w-2xl mx-auto"
        >
          A collection of tools and technologies I use to build modern,
          scalable, and high-performance applications.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.96 }}
              className={`
              text-center py-3 px-4
              rounded-lg cursor-pointer
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-700
              ${PRIMARY_HOVER}
              shadow-sm hover:shadow-lg
              transition-all duration-200
            `}
            >
              <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                {skill}
              </p>

              {/* Accent glow */}
              <span
                className={`
                block mt-2 h-0.5 w-0 mx-auto
                bg-blue-500 dark:bg-blue-400
                transition-all duration-300
                group-hover:w-6
              `}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
