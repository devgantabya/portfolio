import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiLaravel,
  SiWordpress,
  SiGit,
  SiGithub,
  SiNestjs,
  SiRedis,
  SiSwagger,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import { FaDatabase, FaCode, FaCss3Alt } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";

const skills = [
  { name: "HTML5", category: "Frontend", icon: <SiHtml5 size={28} />, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: <FaCss3Alt size={28} />, color: "#1572B6" },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss size={28} />, color: "#06B6D4" },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript size={28} />, color: "#F7DF1E" },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript size={28} />, color: "#3178C6" },
  { name: "React.js", category: "Frontend", icon: <SiReact size={28} />, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs size={28} />, color: "#FFFFFF" },
  { name: "PHP", category: "Backend", icon: <SiPhp size={28} />, color: "#777BB4" },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs size={28} />, color: "#339933" },
  { name: "Express.js", category: "Backend", icon: <SiExpress size={28} />, color: "#FFFFFF" },
  { name: "NestJS", category: "Backend", icon: <SiNestjs size={28} />, color: "#E0234E" },
  { name: "Laravel", category: "Backend", icon: <SiLaravel size={28} />, color: "#FF2D20" },
  { name: "Prisma", category: "Backend", icon: <SiPrisma size={28} />, color: "#2D3748" },
  { name: "RESTful APIs", category: "Backend", icon: <FaCode size={28} />, color: "#F59E0B" },
  { name: "Swagger", category: "Backend", icon: <SiSwagger size={28} />, color: "#85EA2D" },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql size={28} />, color: "#4169E1" },
  { name: "MongoDB", category: "Database", icon: <SiMongodb size={28} />, color: "#47A248" },
  { name: "MySQL", category: "Database", icon: <SiMysql size={28} />, color: "#4479A1" },
  { name: "Redis", category: "Database", icon: <SiRedis size={28} />, color: "#DC382D" },
  { name: "SQL", category: "Database", icon: <FaDatabase size={28} />, color: "#F59E0B" },
  { name: "Git", category: "Tools", icon: <SiGit size={28} />, color: "#F05032" },
  { name: "GitHub", category: "Tools", icon: <SiGithub size={28} />, color: "#FFFFFF" },
  { name: "WordPress", category: "Tools", icon: <SiWordpress size={28} />, color: "#21759B" },
  { name: "Docker", category: "DevOps", icon: <SiDocker size={28} />, color: "#2496ED" },
  { name: "CI/CD", category: "DevOps", icon: <VscGitPullRequestCreate size={28} />, color: "#F59E0B" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="bg-[#030303] py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 lg:mb-12 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
            >
              <span className="h-px w-8 md:w-12 bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-bold text-amber-500">
                Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter"
            >
              TECHNICAL{" "}
              <span className="text-gradient bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent italic font-serif">ARSENAL.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-xs md:text-sm max-w-xs leading-relaxed font-light"
          >
            A curated selection of technologies I use to build{" "}
            <span className="text-amber-500">scalable, high-performance</span>{" "}
            digital products.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-10 lg:mb-12"
        >
          <div className="glass-effect border border-white/10 rounded-xl md:rounded-2xl p-1.5 md:p-2 flex flex-wrap gap-1.5 md:gap-2 justify-center max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid - Enhanced Interactive Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)",
                }}
                className="group relative flex flex-col justify-center items-center py-4 md:py-5 lg:py-5 px-2 md:px-3 lg:px-4 rounded-xl md:rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-orange-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-orange-500/5 group-hover:to-amber-500/10 transition-all duration-500 rounded-2xl" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Skill Icon */}
                <div 
                  className="text-zinc-600 group-hover:scale-110 transition-all duration-300 mb-2 md:mb-2.5 z-10"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <p className="text-zinc-400 group-hover:text-white font-bold text-[8px] md:text-[9px] lg:text-[9px] uppercase tracking-[0.15em] md:tracking-[0.2em] z-10 transition-all duration-300 text-center leading-tight">
                  {skill.name}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/0 group-hover:from-amber-500/10 to-transparent transition-all duration-500 rounded-br-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
