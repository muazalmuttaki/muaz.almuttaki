"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactItems = [
    { icon: <FiMail size={18} />, text: "muazalmuttaki@gmail.com", href: "mailto:muazalmuttaki@gmail.com" },
    { icon: <FaWhatsapp size={22} />, text: "+880 1568382958", href: "tel:+8801568382958" },
    { icon: <FiPhone size={18} />, text: "+880 1902385062", href: "tel:+8801568382958" },
    { icon: <FiMapPin size={18} />, text: "Bangladesh", href: "https://www.google.com/maps/place/Bangladesh" },
  ];

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      { name, email, message },
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        setLoading(false);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      },
      (err) => {
        setLoading(false);
        alert("Failed to send message. Try again.");
        console.error(err);
      }
    );
  };

  return (
    <section id="contact" className="py-8 bg-gray-50">
      {/* Max width 1200px */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
        >
          {/* Left Info */}
          <div className="p-8 sm:p-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 root">
              Contact Information
            </h3>
            <p className="mt-3 text-gray-600">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>

            <div className="mt-10 space-y-6">
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 cursor-pointer text-gray-700 hover:text-blue-600 transition"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white transition">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 sm:p-10 bg-gray-50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm text-gray-600 mb-2">Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                ></textarea>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <div
                  className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition shadow-sm cursor-pointer text-center"
                  onClick={handleSubmit}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                >
                  {loading ? "Sending..." : "Send Message"}
                </div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
