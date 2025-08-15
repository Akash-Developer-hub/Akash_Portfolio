"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
// import { IconCloud } from '@/components/magicui/icon-cloud';
// import { motion } from "framer-motion";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as ScrollLink } from 'react-scroll';
// import { HeroMockupOverlay } from '@/component/MockupBackground';
import { Menu, X, Moon, Sun } from "lucide-react";
import CustomCursor from '@/component/CustomCursor';
import { TracingBeam } from '@/component/TracingBeam';
import { LampDemo } from "@/component/LampDemo";
import { DraggableCardBody,  } from "@/component/DraggableCard";
// import { CertificateGallery } from "@/component/Certificates";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") === "dark";
    setIsDark(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return { isDark, toggleTheme };
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

type LabelInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const LabelInputContainer = ({ children, className }: LabelInputContainerProps) => {
  return (
    <div className={`flex w-full flex-col space-y-2 ${className}`}>
      {children}
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="relative z-10 text-center mt-20 p-8 max-w-4xl mx-auto rounded-lg shadow-xl bg-white/50 dark:bg-black/50 backdrop-blur-2xl border border-gray-700">
      <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">Contact</h2>
      <p className="text-black dark:text-white mb-8">
        Feel free to reach out to me via the form below.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <label htmlFor="firstname" className="block text-left text-sm font-medium text-neutral-600 dark:text-neutral-300">First Name</label>
            <input
              id="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Your first name"
              className="shadow-input w-full rounded-md border border-gray-300 p-2 dark:bg-gray-700 dark:text-white"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <label htmlFor="lastname" className="block text-left text-sm font-medium text-neutral-600 dark:text-neutral-300">Last Name</label>
            <input
              id="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Your last name"
              className="shadow-input w-full rounded-md border border-gray-300 p-2 dark:bg-gray-700 dark:text-white"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <label htmlFor="email" className="block text-left text-sm font-medium text-neutral-600 dark:text-neutral-300">Email Address</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="shadow-input w-full rounded-md border border-gray-300 p-2 dark:bg-gray-700 dark:text-white"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <label htmlFor="message" className="block text-left text-sm font-medium text-neutral-600 dark:text-neutral-300">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="shadow-input w-full rounded-md border border-gray-300 p-2 dark:bg-gray-700 dark:text-white"
          />
        </LabelInputContainer>
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};


const skills = [
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "TypeScript", icon: "/icons/ts.svg" },
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "HTML5", icon: "/icons/html.svg" },
  { name: "CSS3", icon: "/icons/css.svg" },
  { name: "Next.js", icon: "/icons/next.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongo.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Postman", icon: "/icons/ps.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Bootstrap", icon: "/icons/bs.svg" },
  { name: "Vercel", icon: "/icons/ver.svg" },
  { name: "VScode", icon: "/icons/vs.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "XAAMP", icon: "/icons/xaamp.svg" },
];

// const certificates = [
//   {
//     title: "React Mastery",
//     description: "Issued by Meta, March 2024",
//     image: "/certs/react-mastery.png",
//   },
// ];

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [, setActiveSkill] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useDarkMode();

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen ${isDark ? 'dark' : ''}`}>
      <CustomCursor />
      <TracingBeam>
        <div className="absolute inset-0 z-0">
          {/* <AnimatedGridPattern /> */}
        </div>
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black dark:border-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-black dark:text-white">Akashsivakumar.tech</div>
            <ul className="hidden md:flex space-x-8 items-center">
              {["hero", "about", "skills", "contact"].map((id) => (
                <li key={id}>
                  <ScrollLink
                    to={id}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black dark:text-white hover:text-blue-500 transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-black dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-black dark:text-white" />
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden px-4 pb-4">
              <ul className="flex flex-col space-y-4 bg-white/90 dark:bg-black/90 rounded-lg shadow-md p-4">
                {["hero", "about", "skills", "contact"].map((id) => (
                  <li key={id}>
                    <ScrollLink
                      to={id}
                      smooth={true}
                      duration={500}
                      className="block text-black dark:text-white hover:text-blue-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </ScrollLink>
                  </li>
                ))}
                <li>
                  <button
                    onClick={toggleTheme}
                    className="w-full flex justify-center p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative z-20 w-full max-w-6xl mx-auto p-10 rounded-lg shadow-xl bg-white/50 dark:bg-black/50 backdrop-blur-2xl border border-gray-700 transform transition-all duration-500 hover:shadow-xl hover:scale-[1.009]">
            {isDark && (
              <div className="absolute inset-0 flex items-center justify-center z-200">
                <LampDemo />
              </div>
            )}
            <div id="hero" className="flex flex-col md:flex-row items-center gap-10">
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src="/Aboutme.jpg"
                  alt="Akash"
                  fill
                  className="rounded-3xl object-cover border-4 border-gray-700 shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                {isHovered && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white rounded-3xl">
                    <span className="text-lg font-semibold">Check out my skills!</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-6xl font-extrabold mb-6 text-black dark:text-white animate-fade-in">
                  Hi, I&apos;m Akash!
                </h1>
                <h2 className="text-4xl font-semibold mb-6 text-black dark:text-white">
                  Full-Stack Developer
                </h2>
                <p className="text-lg text-black dark:text-white mb-6 max-w-2xl">
                  I&apos;m a dedicated <span className="font-semibold">Full-Stack Developer</span> who thrives on crafting reliable, scalable, and user-centric web applications. My work focuses on transforming creative ideas into interactive digital experiences through clean code and thoughtful design.
                </p>
                <p className="text-lg text-black dark:text-white mb-6 max-w-2xl">
                  I specialize in blending functionality with aesthetics, aiming to deliver solutions that aren&apos;t just functional but also delightful to use. Whether it&apos;s frontend magic or backend logic, I enjoy building systems that empower users and businesses.
                </p>
                <div className="flex space-x-6 mt-8">
                  {[
                    { href: "https://www.linkedin.com/in/akash-s-", icon: "/linkedin.png", alt: "LinkedIn" },
                    { href: "https://github.com/Akash-Developer-hub", icon: "/github.png", alt: "GitHub" },
                    { href: "https://instagram.com", icon: "/instagram.png", alt: "Instagram" },
                  ].map((social, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(social.href, "_blank")}
                      className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <Image src={social.icon} alt={social.alt} width={44} height={28} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <HeroMockupOverlay /> */}
        <div id="about" className="relative z-10 text-center mt-20 p-8 w-full max-w-6xl bg-white/50 dark:bg-black/50 mx-auto rounded-lg shadow-xl backdrop-blur-2xl border border-gray-700 transform transition-all duration-500 hover:shadow-xl hover:scale-102">
          <h2 className="text-5xl font-extrabold mb-8 text-black dark:text-white relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 w-32 h-1.5 bg-black dark:bg-white transform -translate-x-1/2 rounded-full"></span>
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
              <p className="text-black dark:text-white text-lg leading-relaxed">
                Hey, I&apos;m <span className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Akash</span> — not just a developer but an explorer of technology. My journey revolves around constantly expanding my horizons in the tech world. From tinkering with AI models to diving deep into open-source communities, I&apos;m always on the lookout for the next innovation.
              </p>
              <p className="text-black dark:text-white">
                When I&apos;m not writing code, I&apos;m often engaging with tech communities, brainstorming creative ideas, learning emerging trends, or just geeking out over the latest in software and AI. Whether it&apos;s collaborating on open-source projects or experimenting with new technologies, I&apos;m someone who believes that the learning never stops.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  { icon: "💻", text: "Open-Source Contributor" },
                  { icon: "🤖", text: "AI Explorer" },
                  { icon: "🚀", text: "Tech Innovator" },
                  { icon: "🎯", text: "Problem Solver" },
                  { icon: "🌏", text: "Lifelong Learner" },
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

        <div
          id="skills"
          className="relative z-10 mt-20 p-8 w-full max-w-6xl mx-auto text-center bg-white/50 dark:bg-black/50 rounded-lg shadow-xl backdrop-blur-2xl border border-gray-700"
        >
          <h2 className="text-5xl font-extrabold mb-12 text-black dark:text-white relative inline-block">
            Skills
            <span className="absolute top-12 left-1/2 w-32 h-1.5 bg-black dark:bg-white transform -translate-x-1/2 rounded-full" />
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {skills.map((skill) => (
              <DraggableCardBody
                key={skill.name}
                className="bg-white dark:bg-zinc-900 text-black dark:text-white flex flex-col items-center justify-center text-center p-6 gap-4 hover:shadow-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="drop-shadow-md"
                />
                <h4 className="text-lg font-semibold">{skill.name}</h4>
              </DraggableCardBody>
            ))}
          </div>
        </div>
                <div id="Certificate" className="relative z-10 text-center p-8 max-w-4xl mx-auto rounded-lg">
          {/* <CertificateGallery certificates={certificates} /> */}
        </div>
        <div id="contact" className="relative z-10 text-center p-8 max-w-4xl mx-auto rounded-lg">
          <ContactSection />
        </div>
      </TracingBeam>
    </div>
  );
};

export default HomePage;
