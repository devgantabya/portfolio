import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa";

const GithubContributions = () => {
  return (
    <section
      id="github"
      className="bg-[#050505] py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-1/2 left-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-px w-8 bg-amber-500" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
              Open Source
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            GITHUB{" "}
            <span className="text-zinc-500 italic font-serif">
              CONTRIBUTIONS.
            </span>
          </motion.h2>
        </div>

        {/* Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-500"
        >
          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="devgantabya"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <FaGithub size={26} />,
              title: "Profile",
              desc: "Explore my repositories and open-source work.",
              link: "https://github.com/devgantabya",
            },
            {
              icon: <FaCodeBranch size={26} />,
              title: "Repositories",
              desc: "Projects built with MERN and modern frontend.",
              link: "https://github.com/devgantabya?tab=repositories",
            },
            {
              icon: <FaStar size={26} />,
              title: "Stars & Activity",
              desc: "Community engagement and contributions.",
              link: "https://github.com/devgantabya",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-500"
            >
              <div className="text-amber-500 mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-zinc-500 text-sm">{item.desc}</p>

              {/* bottom glow line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16 text-zinc-600 text-[10px] uppercase tracking-[0.4em]"
        >
          Open-source work and consistent development activity
        </motion.p>
      </div>
    </section>
  );
};

export default GithubContributions;
