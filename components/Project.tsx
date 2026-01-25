"use client";


// Projects.tsx
import { motion } from "framer-motion";
import ProjectCard from "@/components/projectCard"; // নিশ্চিত হও path ঠিক আছে
import Link from "next/link";

function Projects() {
  const projectList = [
    {
      title: "Library",
      description: "Located at Justice Shahabuddin Park, this is a women-owned store known for its large collection.",
      image: "/project1.jpg",
      tech: ["React", "Node.js"],
      projectLink: "/projects/library",
      codeLink: "https://github.com/muazalmuttaki?tab=repositories",
    },
    {
      title: "Landing Page",
      description: "Modern landing page design for a startup using Next.js and Tailwind.",
      image: "/project2.jpg",
      tech: ["Next.js", "Tailwind CSS"],
      projectLink: "/projects/landing-page",
      codeLink: "https://github.com/muazalmuttaki?tab=repositories",
    },
    {
      title: "E-commerce",
      description: "Full-stack e-commerce project with Firebase authentication and TypeScript.",
      image: "/project3.jpg",
      tech: ["TypeScript", "Firebase"],
      projectLink: "/projects/ecommerce",
      codeLink: "https://github.com/muazalmuttaki?tab=repositories",
    },
    {
      title: "Project 4",
      description: "Another modern web application using React and Tailwind CSS.",
      image: "/project1.jpg",
      tech: ["React", "Tailwind CSS"],
      projectLink: "/projects/project4",
      codeLink: "https://github.com/muazalmuttaki?tab=repositories",
    },
    {
      title: "Project 5",
      description: "Next.js + TypeScript project showcasing reusable components.",
      image: "/project2.jpg",
      tech: ["Next.js", "TypeScript"],
      projectLink: "/projects/project5",
      codeLink: "https://github.com/muazalmuttaki?tab=repositories",
    },
    {
      title: "Project 6",
      description: "A web app with advanced TypeScript and Firebase integration.",
      image: "/project3.jpg",
      tech: ["TypeScript", "Firebase"],
      projectLink: "/projects/project6",
      codeLink: "https://github.com/muazalmuttaki?tab=repositories",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      id="project"
      className="py-14 bg-white text-gray-800"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-[#0148b9] text-center root">
          My Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              tech={proj.tech}
              projectLink={proj.projectLink}
              codeLink={proj.codeLink}
            />
          ))}
        </div>

<div className="mt-12 flex justify-center">
  <Link
    href="/moreProject"
    className="bg-[#0148b9] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#0148b9] transition-all duration-300 text-center"
  >
    View More Projects
  </Link>
</div>

      </div>
    </motion.div>
  );
}

export default Projects;