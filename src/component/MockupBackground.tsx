import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const images = [
  { src: "/Aboutme.jpg", title: "About Me" },
  { src: "/download.png", title: "Projects" },
  { src: "/image_2.jpg", title: "Case Study" },
  { src: "/download.png", title: "UI Showcase" },
  { src: "/image_2.jpg", title: "Dashboard Pro" },
  { src: "/Aboutme.jpg", title: "Weather App" },
  { src: "/Aboutme.jpg", title: "Netflix UI" },
  { src: "/image_2.jpg", title: "Amazon Clone" },
  { src: "/download.png", title: "ChatGPT UI" },
];

const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

export const HeroMockupOverlay = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1200]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1200]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );

  const row1 = images.slice(0, 3);
  const row2 = images.slice(3, 6);
  const row3 = images.slice(6, 9);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-10 pointer-events-none"
    >
      <motion.div
        style={{ rotateZ }}
        className="absolute bottom-20 left-0 right-0 space-y-32 px-10" // Increased space-y-32
      >
        <motion.div className="flex justify-start gap-24 pl-20"> {/* Increased gap-24 */}
          {row1.map((item, i) => (
            <ImageCard key={i} item={item} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="flex justify-start flex-row-reverse gap-24 pl-32"> {/* Increased gap-24 */}
          {row2.map((item, i) => (
            <ImageCard key={i} item={item} translate={translateXReverse} />
          ))}
        </motion.div>
        <motion.div className="flex justify-start gap-24 pl-16"> {/* Increased gap-24 */}
          {row3.map((item, i) => (
            <ImageCard key={i} item={item} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const ImageCard = ({
  item,
  translate,
}: {
  item: { src: string; title: string };
  translate: any;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      className="relative w-[320px] h-[200px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[280px] rounded-xl overflow-hidden bg-black/20 border border-white/20 shadow-2xl backdrop-blur-sm opacity-50"
    >
      <Image
        src={item.src}
        alt={item.title}
        width={420}
        height={280}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-3 left-3 text-white text-sm bg-black/80 px-3 py-2 rounded-lg backdrop-blur-sm">
        {item.title}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
    </motion.div>
  );
};
