import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
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
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-amber-500" />
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-amber-500">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              LET'S START A{" "}
              <span className="text-zinc-500 italic font-serif">PROJECT.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">
              Available for hire
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left: Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
                Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">
                      Email
                    </p>
                    <p className="text-zinc-200 text-sm">
                      gantabyakumarbayda@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                    <FaWhatsapp size={18} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">
                      WhatsApp
                    </p>
                    <p className="text-zinc-200 text-sm">+880 1405346891</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">
                      Location
                    </p>
                    <p className="text-zinc-200 text-sm">Khulna, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <h3 className="text-white text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
                Socials
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
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-amber-500 hover:text-amber-500 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-all placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-all placeholder:text-zinc-700"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-all resize-none placeholder:text-zinc-700"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col items-center gap-4 mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-amber-500 hover:bg-white text-black font-black uppercase tracking-[0.3em] text-xs rounded-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? "Sending..." : "Send Discovery Message"}{" "}
                  <FaPaperPlane />
                </button>

                {status && (
                  <p
                    className={`text-[10px] font-bold uppercase tracking-widest ${status.type === "success" ? "text-emerald-500" : "text-red-500"}`}
                  >
                    {status.message}
                  </p>
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
