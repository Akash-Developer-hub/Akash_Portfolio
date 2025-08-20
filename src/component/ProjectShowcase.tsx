"use client";

import React, { useState } from "react";
import { ExternalLink, Github, Play, Calendar } from "lucide-react";
import { GlowingEffect } from "./GlowingEffect";
import { FaGithub } from "react-icons/fa";

const FunGitHubButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex justify-center mt-16">
      <button
        onClick={() => {
          setIsClicked(true);
          setTimeout(() => {
            window.open("https://github.com/Akash-Developer-hub", "_blank");
            setIsClicked(false);
          }, 1000);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative overflow-hidden group px-12 py-5 rounded-full text-white font-extrabold text-lg shadow-2xl transition-all duration-500 flex items-center gap-3
          ${isClicked ? "bg-green-500 scale-110" : "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-110"}`}
      >
        {/* Animated Cat / GitHub logo */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Cat SVG (shows when not hovered) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 absolute transition-all duration-700 ${
              isHovered ? "translate-x-16 opacity-0" : "translate-x-0 opacity-100"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C9.243 2 7 4.243 7 7v4H6a2 2 0 0 0-2 2v4h16v-4a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v4H9V7c0-1.654 1.346-3 3-3z" />
          </svg>

          {/* GitHub Logo (appears on hover) */}
          <FaGithub
            className={`absolute text-2xl transition-all duration-700 ${
              isHovered
                ? "translate-x-0 opacity-100 rotate-12"
                : "-translate-x-16 opacity-0"
            }`}
          />
        </div>

        {/* Button text */}
        <span className="group-hover:animate-pulse dark:text-white text-black">
          {isClicked ? "Launching..." : "View more on GitHub"}
        </span>

        {/* Glow overlay */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"></div>
      </button>
    </div>
  );
};

export default FunGitHubButton;


interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    category: string;
    status?: string;
    year: number;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Festiffy",
        description: "AI-powered festival companion that helps users discover, plan, and experience cultural and local events using real-time Reddit insights.",
        techStack: ["Django", "React", "Tailwind CSS", "Tavue", "MongoDB"],
        category: "AI/ML",
        status: "Completed",
        year: 2023,
        githubUrl: "#",
        liveUrl: "#"
    },
    {
        id: 2,
        title: "Love Connect",
        description: "A private relationship companion platform for couples featuring real-time chat, and a unique gallery of memories.",
        techStack: ["Cloudflare R2", "React", "Typescript", "WebSocket", "Redis"],
        category: "Web App",
        status: "Completed",
        year: 2024,
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Smart Attendance System",
        description: "A facial recognition-based QR + GPS attendance tracker built for institutes. Fast, scalable, and secure.",
        techStack: ["Python", "OpenCV", "React"],
        category: "Computer Vision",
        status: "Completed",
        year: 2023,
        githubUrl: "#",
        liveUrl: "#"
    }
];

export function ProjectShowcase({ darkMode }: { darkMode: boolean }) {
    const [activeFilter, setActiveFilter] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filters = ["All", "AI/ML", "Web App", "Computer Vision"];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className={`px-6 py-16 transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
            {/* Header */}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Projects</h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        A collection of my recent work and experiments with modern technologies
                    </p>
                </div>

                {/* Projects Grid with proper gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group transform transition-all duration-500 hover:scale-105 project-card"
                            style={{
                                cursor: 'pointer',
                                pointerEvents: 'auto'
                            } as React.CSSProperties}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Card */}
                            <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl ${darkMode
                                ? "bg-gray-900 border border-gray-800 group-hover:bg-gray-800"
                                : "bg-white border border-gray-200 group-hover:shadow-purple-200 group-hover:bg-purple-50"
                                }`}>

                                {/* Fallback simple glow for immediate visual feedback - INSIDE */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>

                                {/* Debug border - highly visible - INSIDE */}
                                <div className="absolute inset-0 rounded-2xl border-4 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                                {/* Project Header */}
                                <div className={`relative z-20 p-6 border-b ${darkMode ? "border-gray-800" : "border-gray-100"}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <span className={`relative z-30 px-2 py-1 rounded-full text-xs font-medium ${darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-800"}`}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="relative z-20 p-6">
                                    <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wider ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2 relative z-30">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`relative z-40 px-3 py-1 rounded-full text-xs font-medium shadow-sm ${darkMode ? "bg-gray-800 text-gray-300 border border-gray-700" : "bg-gray-100 text-gray-700 border border-gray-200"}`}
                                                style={{ backgroundColor: darkMode ? '#1f2937' : '#f3f4f6', padding: '0.25rem 0.5rem', margin: "0 5px" } as React.CSSProperties}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Footer */}
                                <div className={`relative z-20 p-6 pt-0 flex justify-between items-center ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                    <div className="flex items-center gap-4 text-xs">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{project.year}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className={`w-2 h-2 rounded-full ${project.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}></div>
                                            <span>{project.status}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                title="View Source Code"
                                                aria-label="View Source Code on GitHub"
                                                className={`p-2 rounded-lg transition-colors ${darkMode
                                                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                title="View Live Demo"
                                                aria-label="View Live Demo"
                                                className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                                            >
                                                <Play className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div >
                    <FunGitHubButton />
                </div>
            </div>
        </div>
    );
}