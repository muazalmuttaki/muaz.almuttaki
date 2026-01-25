

"use client";

// File: components/Skills.tsx
import React from "react";


import { motion, type Variants } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress 
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

/* ---------------- Types ---------------- */

type SkillLevel = "Expert" | "Advanced" | "Intermediate";

interface Skill {
  name: string;
  level: SkillLevel;
  percent: number;
  icon: React.ReactNode;
}

/* ---------------- Data ---------------- */

const skills: Skill[] = [
  { name: "HTML", level: "Expert", percent: 100, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: "Expert", percent: 100, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "TailwindCSS", level: "Advanced", percent: 85, icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "JavaScript", level: "Advanced", percent: 85, icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", level: "Intermediate", percent: 65, icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", level: "Advanced", percent: 85, icon: <FaReact className="text-cyan-400" /> },
  { name: "Vite", level: "Intermediate", percent: 65, icon: <SiVite className="text-purple-500" /> },
  { name: "Next.js", level: "Intermediate", percent: 65, icon: <SiNextdotjs className="text-black" /> },
  { name: "Node.js", level: "Intermediate", percent: 65, icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", level: "Intermediate", percent: 65, icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", level: "Intermediate", percent: 65, icon: <SiMongodb className="text-green-600" /> },
  { name: "WordPress", level: "Advanced", percent: 80, icon: <FaWordpress className="text-blue-500" /> },
];

/* ---------------- Animations ---------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ---------------- Component ---------------- */

const Skills: React.FC = () => {
  return (

    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        id="skills"
        className="bg-white text-gray-800"
      > 

    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-[#0148b9] text-center root"
        >
          My Skills
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-blue-200/50 p-4 rounded-md shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {skill.icon}
              </div>

              <h3 className="text-xl font-heading font-bold mb-1 text-gray-900 root">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{skill.level}</p>

              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-[#0148b9]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
};

export default Skills;