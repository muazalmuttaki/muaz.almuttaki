"use client";


// ProjectCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  projectLink: string; // Project page URL
  codeLink: string;    // Github or Code URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  projectLink,
  codeLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={192}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 root">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
          <Link
            href={projectLink}
            className="bg-[#0148b9] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#0148b9] transition-all duration-300 text-center w-full"
          >
            View Project
          </Link>

          <Link
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0148b9] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#0148b9] transition-all duration-300 text-center w-full"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;