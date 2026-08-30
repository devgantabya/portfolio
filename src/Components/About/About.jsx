import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode size={24} />,
    title: "Full Stack",
    description: "MERN Stack Developer",
  },
  {
    icon: <FaServer size={24} />,
    title: "Backend",
    description: "API & Server Development",
  },
  {
    icon: <FaDatabase size={24} />,
    title: "Database",
    description: "SQL & NoSQL Expert",
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: "Frontend",
    description: "Modern UI/UX Design",
  },
];

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Git",
  "Framer Motion",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Enhanced decorative background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-amber-500/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect border-2 border-white/10 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/5 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-black text-lg mb-2 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Experience Badge - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 glass-effect border-2 border-amber-500/20 rounded-3xl p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-500 text-5xl font-black leading-none mb-2">
                  1.5+
                </p>
                <p className="text-zinc-400 text-sm font-semibold">
                  Years of Experience
                </p>
              </div>
              <div className="glass-effect px-4 py-2 rounded-xl border border-emerald-500/20">
                <span className="relative flex h-2.5 w-2.5 mb-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <p className="text-emerald-500 text-[9px] uppercase tracking-wider font-bold mt-1">
                  Available
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
            <span className="uppercase tracking-[0.4em] text-[11px] font-bold text-amber-500">
              Personal Info
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-8">
            Engineering Digital <br />
            <span className="text-gradient bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent italic font-serif">Solutions.</span>
          </h2>

          <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
            <p>
              I am <span className="text-white font-semibold">Gantabya</span>, a
              developer who bridges the gap between complex backend logic and
              intuitive frontend design. My focus is on the
              <span className="text-amber-500 font-normal"> MERN stack</span>, creating
              high-performance tools that actually solve problems.
            </p>
            <p>
              I don't just write code; I craft{" "}
              <span className="text-zinc-200">systems</span> that are scalable,
              maintainable, and visually striking.
            </p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="mt-12">
            <p className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-amber-500"></span>
              Technical Arsenal
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    borderColor: "rgba(245, 158, 11, 0.3)",
                  }}
                  className="px-5 py-2.5 rounded-xl text-[12px] font-semibold border border-white/10 bg-white/[0.03] text-zinc-300 backdrop-blur-sm transition-all cursor-default hover:text-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-4 text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:text-amber-500 transition-colors"
              whileHover={{ x: 5 }}
            >
              Start a Conversation
              <span className="h-12 w-12 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all duration-300 text-lg">
                →
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
