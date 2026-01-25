"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { GiBrain } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import  Link  from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="bg-white text-gray-800 py-12" id="about">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-[#0148b9] text-center root"
        >
          About Me
        </motion.h3>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-38">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-74 h-74 sm:w-82 sm:h-82 md:w-90 md:h-90 rounded-2xl bg-gray-100 shadow-xl border overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0 ml-0 lg:ml-15"
          >
            <Image
              src="/muaz.png"
              alt="Muaz Al Muttaki"
              width={360}
              height={360}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-[550px]"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {"I'm"} <span className="font-semibold text-gray-900">Muaz Al Muttaki</span>, a passionate Frontend Developer dedicated to crafting clean, fast, and user-friendly web experiences. I enjoy building reusable UI components, solving complex challenges, and optimizing performance with modern tools like React and Shadcn UI.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-[#0148b9] font-medium">
                <LiaLaptopCodeSolid className="w-7 h-7" />
                <span>Modern UI Development</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-[#0148b9] font-medium">
                <GiBrain className="w-6 h-6" />
                <span>Effective Problem Solving</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-[#0148b9] font-medium">
                <Rocket className="w-5 h-5" />
                <span>Continuous Skill Growth</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/portfolio"
                className="bg-[#0148b9] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#0148b9] transition-all duration-300 text-center"
              >
                See details
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}