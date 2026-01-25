"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white text-gray-900 min-h-screen flex items-center py-14 lg:py-8 overflow-hidden"
    >
      {/* ---------------- SVG Background ---------------- */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="200" fill="url(#grad1)" opacity="0.1" />
        <circle cx="600" cy="400" r="250" fill="url(#grad2)" opacity="0.08" />
        <defs>
          <radialGradient
            id="grad1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(200 200) scale(200)"
          >
            <stop stopColor="#0148b9" />
            <stop offset="1" stopColor="#42D392" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="grad2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(600 400) scale(250)"
          >
            <stop stopColor="#42D392" />
            <stop offset="1" stopColor="#0148b9" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* ---------------- Hero Content ---------------- */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* -------- Text Section -------- */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-1 root"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hi, {"I'm"}
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#0148B9] mt-1 root"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            style={{ display: "inline-block" }}
          >
            Muaz Al Muttaki
          </motion.h2>

          <motion.span
            className="block mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 root"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Frontend Web Developer
          </motion.span>

          <p
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-[500px]"
          >
            I craft fast, responsive, and user-friendly web experiences, designing clean and interactive interfaces while leveraging modern tools like React, Next.js, and Tailwind CSS.
 
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#Resume"
                className="block bg-[#0148b9] text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#01358a] transition-all duration-300 text-center text-sm sm:text-base"
              >
                View Resume
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="block border-2 border-[#0148b9] text-[#0148b9] font-semibold px-8 py-3 rounded-md hover:bg-[#0148b9] hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* -------- Image Section -------- */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[#a2bbe4] opacity-20 blur-3xl rounded-full animate-pulse" />
            <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/muaz.png"
                alt="Muaz Al Muttaki"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
