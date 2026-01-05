import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r5so42h",
        "template_v77csrd",
        form.current,
        "b3KakpHFn61erU9C0"
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="dark:bg-gray-800 py-16">
      <div className="md:py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto mb-10">
          Have a question or want to work together? Feel free to send a message!
        </p>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Left: Contact Info Card */}
          <div className="md:w-1/3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-6 flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Contact Info
            </h3>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
              <span>Khulna, Bangladesh</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              <span>gantabyakumarbayda@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaWhatsapp className="text-green-500" />
              <span>+880 1405346891</span>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-4 text-gray-700 dark:text-gray-300">
              <a
                href="https://github.com/devgantabya"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/devgantabya/"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form Card */}
          <div className="md:w-2/3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-6 md:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-800 dark:text-gray-200 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 dark:text-gray-200 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-800 dark:text-gray-200 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                ></textarea>
              </div>

              {/* Status Message */}
              {status && (
                <p
                  className={`text-center font-medium ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
