"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, [contentRef.current?.offsetHeight]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [500, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  // Zigzag Multi-directional Path
  const pathD = `M 1 0
    V ${svgHeight * 0.15}
    L 58 ${svgHeight * 0.2}
    V ${svgHeight * 0.4}
    L 1 ${svgHeight * 0.52}
    V ${svgHeight * 0.65}
    L 58 ${svgHeight * 0.7}
    V ${svgHeight * 0.9}
    L 1 ${svgHeight * 0.95}
    V ${svgHeight}`;

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full", className)}
    >
      {/* SVG Beam */}
      <div className="absolute top-3 left-16 md:left-14">
        {/* Dot */}
        <motion.div
          className="border-netural-200 ml-[71px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <motion.div
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
            }}
            transition={{ duration: 0.2, delay: 0.5 }}
          />
        </motion.div>

        {/* Beam */}
        <svg
          viewBox={`0 0 60 ${svgHeight}`}
          width="300"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={pathD}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          <motion.path
            d={pathD}
            width="300"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* Page Content */}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
