import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

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
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto mb-10">
        Have a question or want to work together? Feel free to send a message!
      </p>

      <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-8 max-w-3xl mx-auto">
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
    </section>
  );
};

export default Contact;
