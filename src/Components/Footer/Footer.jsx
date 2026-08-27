import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030303] relative overflow-hidden">
      {/* Decorative top border with gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-black text-white tracking-tight">
              Gantabya<span className="text-amber-500">.</span>
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern web experiences with the MERN stack.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-xs font-semibold uppercase tracking-wider">
                Available for Work
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 flex items-center gap-3">
              <span className="h-px w-6 bg-amber-500"></span>
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-zinc-500 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 flex items-center gap-3">
              <span className="h-px w-6 bg-amber-500"></span>
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={20} />, link: "https://github.com/devgantabya", label: "GitHub" },
                { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/devgantabya/", label: "LinkedIn" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 w-12 rounded-2xl glass-effect border border-white/10 flex items-center justify-center text-zinc-400 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm tracking-wider"
          >
            © {new Date().getFullYear()} Gantabya Kumar Bayda. All Rights Reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <p className="text-zinc-700 text-xs">
              Built with <span className="text-amber-500">React</span> & <span className="text-amber-500">Tailwind</span>
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="h-10 w-10 rounded-xl glass-effect border border-white/10 flex items-center justify-center text-zinc-400 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
