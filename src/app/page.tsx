"use client"; // Add this directive at the top of your file

import Image from 'next/image';
import { AnimatedGridPattern } from '@/component/InteractiveGridPatternDemo';
import { IconCloud } from '@/components/magicui/icon-cloud';
import { FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { Particles } from "@tsparticles/react";
import { loadOptions } from "@tsparticles/engine";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as ScrollLink } from 'react-scroll';

// Skill Icons Mapping
const skillIcons = {
  JavaScript: <FaJs className="text-yellow-500" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  "React.js": <FaReact className="text-blue-500" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <SiGithub className="text-black" />,
};

const skillsIcons = [
  '/icons/icon(1).svg',
  '/icons/icon(2).svg',
  '/icons/icon(3).svg',
  '/icons/icon(4).svg',
  '/icons/icon(5).svg',
  '/icons/icon(6).svg',
  '/icons/icon(7).svg',
  '/icons/icon(8).svg',
  '/icons/icon(9).svg',
  '/icons/icon(10).svg',
  '/icons/icon(11).svg',
  '/icons/icon(12).svg',
  '/icons/icon(13).svg',
  '/icons/icon(14).svg',
  '/icons/icon(15).svg',
  '/icons/icon(16).svg',
  '/icons/icon(17).svg',
  '/icons/icon(18).svg',
  // Add more image paths as needed
];

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 85 },
    ],
  },
];
// Proficiency Levels for Progress Bars
const proficiencyLevels = {
  JavaScript: 90,
  TypeScript: 80,
  "React.js": 85,
  "Next.js": 75,
  "Tailwind CSS": 95,
  "Node.js": 88,
  "Express.js": 82,
  MongoDB: 78,
  Git: 92,
  GitHub: 85,
};

// Particles.js Configuration for Animated Background
const particlesConfig = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
    color: {
      value: "#007BFF", // Deep blue color
    },
    links: {
      enable: true,
      distance: 150,
      color: "#007BFF",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
};

const HomePage: React.FC = () => {
  // Initialize particles
  const particlesInit = async (engine: any) => {
    await loadOptions(engine);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-black">
      {/* Background Pattern with Background Color */}
      <div className="absolute inset-0">
        <AnimatedGridPattern />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full backdrop-blur-md shadow-sm p-4 z-20 rounded-b-lg">
        <ul className="flex justify-center space-x-8">
          <li><ScrollLink to="hero" smooth={true} duration={500} className="text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer">Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500} className="text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer">About</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} duration={500} className="text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer">Skills</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500} className="text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer">Contact</ScrollLink></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="relative z-10 text-center pt-24">
        <h1 className="text-5xl font-bold mb-6 text-black animate-fade-in">Hi, I'm Akash! 👋</h1>
        <div
          className="relative w-32 h-32 mx-auto mb-6 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/Aboutme.jpg"
            alt="Akash"
            layout="fill"
            className="rounded-full object-cover border-4 border-gray-700 shadow-lg transform transition-transform duration-300 group-hover:scale-110"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black rounded-full">
              <span>Check out my skills!</span>
            </div>
          )}
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-black">Full-Stack Developer</h2>
        <p className="text-black mb-6 max-w-2xl mx-auto">
          Welcome to my personal page! I'm a passionate MERN-Stack developer who loves building innovative and user-friendly web applications.
        </p>
        <p className="text-black max-w-2xl mx-auto">
          Just an indie 🌟 developer who enjoys turning ideas into reality through code.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8 z-10">
        {[
          { href: "https://www.linkedin.com/in/akash-s-", icon: "/linkedin.png", alt: "LinkedIn" },
          { href: "https://github.com/Akash-Developer-hub", icon: "/github.png", alt: "GitHub" },
          { href: "https://instagram.com", icon: "/instagram.png", alt: "Instagram" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110"
          >
            <Image src={social.icon} alt={social.alt} width={44} height={28} />
          </a>
        ))}
      </div>

      {/* About Me Section */}
      <div id="about" className="relative z-10 text-center mt-20 p-8 w-full max-w-6xl mx-auto rounded-lg shadow-xl backdrop-blur-lg border border-gray-700 transform transition-all duration-500 hover:shadow-xl hover:scale-102">
        <h2 className="text-5xl font-extrabold mb-8 text-black relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-1/2 w-32 h-1.5 bg-black transform -translate-x-1/2 rounded-full"></span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full shadow-xl overflow-hidden border-4 border-gray-700 transform transition-all hover:scale-110 hover:shadow-xl hover:border-blue-500 animate-pulse">
            <Image
              src="/Aboutme.jpg"
              alt="Akash"
              layout="fill"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
          </div>

          <div className="text-left max-w-2xl space-y-6 animate-fade-in">
            <p className="text-black text-lg leading-relaxed">
              Hey, I'm <span className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Akash</span>, a passionate
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"> Full-Stack Developer</span> dedicated to crafting seamless and innovative web applications.
              With expertise in the <span className="font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">MERN Stack</span>, I specialize in building dynamic, user-centric digital experiences.
            </p>
            <p className="text-black">
              I'm also an <span className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">open-source contributor</span>, a <span className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">problem solver</span>, and an <span className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">AI enthusiast</span> exploring the latest tech trends.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: "💻", text: "Coding" },
                { icon: "🚀", text: "Tech Innovation" },
                { icon: "📖", text: "Learning AI" },
                { icon: "✈️", text: "Traveling" },
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gray-700 rounded-lg text-white flex items-center gap-3 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110"
                  onClick={() => setActiveSkill(item.text)}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="relative z-10 text-center mt-20 p-8 w-full max-w-6xl mx-auto rounded-lg shadow-xl backdrop-blur-lg border border-gray-700 transform transition-all duration-500 hover:shadow-xl hover:scale-102">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-black relative inline-block">
          Skills
          <span className="absolute top-12 left-1/2 w-32 h-1.5 bg-black transform -translate-x-1/2 rounded-full"></span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Rotating 3D Skill Icons with Glow Effect */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-[350px] h-[350px] flex items-center justify-center relative">
              <IconCloud images={skillsIcons} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl opacity-50 animate-glow"></div>
            </div>
          </div>

          <div className="w-2/5 max-w-4xl mx-auto py-10">
            <Slider {...settings}>
              {skillsData.map((group, idx) => (
                <div key={idx} className="p-6">
                  <div className="rounded-lg p-4">
                    <h3 className="text-3xl font-semibold text-blue-400 mb-6">{group.category}</h3>
                    <ul className="space-y-4">
                      {group.skills.map((skill, index) => (
                        <li key={index}>
                          <div className="flex justify-between items-center">
                            <span className="text-lg text-black">{skill.name}</span>
                            <span className="text-black">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Sliding Panel for Skill Details */}
      {activeSkill && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 h-full w-80 bg-[#e9e8e852] p-4 shadow-lg z-30 transform overflow-y-auto"
        >
          <button
            onClick={() => setActiveSkill(null)}
            className="absolute top-4 right-4 text-black hover:text-black"
          >
            &times;
          </button>
          <h3 className="text-2xl font-bold text-black mb-4 border-b-2">{activeSkill}</h3>
          <p className="text-black">Here's more about {activeSkill}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        </motion.div>
      )}

      {/* Contact Section */}
      <div id="contact" className="relative z-10 text-center mt-20 p-8 max-w-4xl mx-auto rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-black">Contact</h2>
        <p className="text-black">
          Feel free to reach out to me via email at <a href="mailto:akash@example.com" className="text-blue-500 hover:underline">akashsivakumar485@gmail.com</a> or connect with me on social media.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
