import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaAward } from "react-icons/fa";

const certificateData = [
  {
    id: 1,
    title: "B.Sc. in Mathematics",
    issuer: "National University",
    date: "2020",
    image: "/certificates/math-degree.jpg", // Replace with your actual image path
    link: "#",
    category: "Academic",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Programming Hero",
    date: "2023",
    image: "/certificates/web-dev.jpg",
    link: "#",
    category: "Technical",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/certificates/fcc-responsive.jpg",
    link: "#",
    category: "Technical",
  },
];

const MyCertificates = () => {
  return (
    <section
      id="certificates"
      className="bg-[#050505] py-24 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

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
              Verification
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            CERTIFICATIONS{" "}
            <span className="text-zinc-500 italic font-serif">& AWARDS.</span>
          </motion.h2>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500"
            >
              {/* Image Preview / Icon Placeholder */}
              <div className="aspect-[4/3] bg-zinc-900 relative overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-800">
                    <FaCertificate size={80} />
                  </div>
                )}

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest font-bold text-amber-500">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <FaAward
                    className="text-amber-500/20 group-hover:text-amber-500 transition-colors"
                    size={20}
                  />
                </div>

                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4">
                  {cert.issuer} • {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-white transition-colors group/link"
                >
                  Verify Credentials
                  <FaExternalLinkAlt
                    size={10}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                  />
                </a>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16 text-zinc-600 text-[10px] uppercase tracking-[0.4em]"
        >
          All credentials are authenticated and available for formal review
        </motion.p>
      </div>
    </section>
  );
};

export default MyCertificates;
