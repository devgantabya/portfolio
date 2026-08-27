import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_r5so42h",
        "template_v77csrd",
        form.current,
        "b3KakpHFn61erU9C0",
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent! I'll get back to you soon.",
          });
          form.current.reset();
          setLoading(false);
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setStatus({
            type: "error",
            message: "Failed to send. Please use WhatsApp.",
          });
          setLoading(false);
          setTimeout(() => setStatus(null), 5000);
        },
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#030303] py-24 relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              LET'S START A{" "}
              <span className="text-gradient bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent italic font-serif">PROJECT.</span>
            </h2>
          </div>

          <motion.div 
            className="glass-effect px-6 py-3 rounded-2xl flex items-center gap-3 border border-emerald-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">
              Available for hire
            </span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Enhanced Left: Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white text-[11px] uppercase tracking-[0.3em] font-bold mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-amber-500"></span>
                Contact Details
              </h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="h-14 w-14 rounded-2xl glass-effect border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold mb-1">
                      Email
                    </p>
                    <p className="text-zinc-200 text-sm font-medium">
                      gantabyakumarbayda@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="h-14 w-14 rounded-2xl glass-effect border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold mb-1">
                      WhatsApp
                    </p>
                    <p className="text-zinc-200 text-sm font-medium">+880 1405346891</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="h-14 w-14 rounded-2xl glass-effect border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold mb-1">
                      Location
                    </p>
                    <p className="text-zinc-200 text-sm font-medium">Khulna, Bangladesh</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <h3 className="text-white text-[11px] uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
                <span className="h-px w-6 bg-amber-500"></span>
                Social Links
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/devgantabya",
                  },
                  {
                    icon: <FaLinkedin />,
                    link: "https://www.linkedin.com/in/devgantabya/",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-2xl glass-effect border border-white/10 flex items-center justify-center text-zinc-400 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect border-2 border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm hover:border-amber-500/20 transition-all duration-500"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1 flex items-center gap-2">
                  <span className="h-px w-3 bg-amber-500"></span>
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 text-white focus:border-amber-500 focus:outline-none transition-all placeholder:text-zinc-700 hover:border-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1 flex items-center gap-2">
                  <span className="h-px w-3 bg-amber-500"></span>
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 text-white focus:border-amber-500 focus:outline-none transition-all placeholder:text-zinc-700 hover:border-white/20"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1 flex items-center gap-2">
                  <span className="h-px w-3 bg-amber-500"></span>
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 text-white focus:border-amber-500 focus:outline-none transition-all resize-none placeholder:text-zinc-700 hover:border-white/20"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col items-center gap-4 mt-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black uppercase tracking-[0.3em] text-xs rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {loading ? "Sending..." : "Send Discovery Message"}
                  </span>
                  <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </motion.button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-[10px] font-bold uppercase tracking-widest ${status.type === "success" ? "text-emerald-500" : "text-red-500"}`}
                  >
                    {status.message}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
