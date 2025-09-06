"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StreamlinedExperience({text, containerStyles, textStyles}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], 
  });

  // Finish animation quickly (in first 20% of scroll)
  const textX = useTransform(scrollYProgress, [0, 1], ["100vw", "-100vw"]); 
  const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);

  return (
    <section
      ref={targetRef}
      className={`${containerStyles} overflow-hidden`}
    >
      <motion.h1
        style={{ x: textX, opacity }}
        className={`${textStyles} text-4xl  overflow-hidden uppercase font-bold whitespace-nowrap text-[#E7C285] `}
      >
        {text}
      </motion.h1>
    </section>
  );
}

