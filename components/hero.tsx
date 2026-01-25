"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white text-gray-900 min-h-screen flex items-center py-14 lg:py-8"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Line 1: Hi, I'm */}
          <motion.h1
            className="text-3xl md sm:text-5xl md:text-6xl font-bold text-gray-800 mt-1 leading-tight break-words max-w-[300px] sm:max-w-none root"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, {"I'm"}
          </motion.h1>

          {/* Line 2: Name (Mobile friendly font size) */}
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-abold text-[#0148B9] mt-1 leading-tight break-words max-w-[300px] sm:max-w-none root"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Muaz Al Muttaki
          </motion.h2>

          {/* Line 3: Profession */}
          <motion.span
            className="block mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 root"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Fullstack Web Developer
          </motion.span>

          {/* Description */}
          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-sm sm:max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Building fast, modern, and scalable web applications with React,
            Next.js, Tailwind CSS, and Node.js.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="#Resume"
              className="bg-[#0148b9] text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#01358a] transition-all duration-300 text-center text-sm sm:text-base"
            >
              View Resume
            </Link>

            <Link
              href="#contact"
              className="border-2 border-[#0148b9] text-[#0148b9] font-semibold px-8 py-3 rounded-md hover:bg-[#0148b9] hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#0148b9] opacity-10 blur-3xl rounded-full"></div>
            <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/muaz.png"
                alt="Muaz Al Muttaki"
                width={400}
                height={400}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}