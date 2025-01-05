"use client";

import { motion } from "framer-motion";

interface AnimatedOpacityProps {
  children: React.ReactNode;
  duration: number;
  threshold?: number;
}

const AnimatedOpacity: React.FC<AnimatedOpacityProps> = ({
  children,
  duration,
  threshold = 0.2,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: duration, ease: "easeInOut" }}
      className="flex w-full flex-col items-center"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOpacity;
