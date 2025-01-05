"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTranslateProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  threshold?: number;
}

const AnimatedTranslate: React.FC<AnimatedTranslateProps> = ({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
  threshold = 0.2,
}) => {
  const variants = {
    initial: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTranslate;
