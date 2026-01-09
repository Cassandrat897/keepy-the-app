import React from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ color, size, top, left, delay, duration }: any) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-30 blur-3xl mix-blend-multiply ${color}`}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
      }}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

export const Bubbles: React.FC = () => {
  // Bubbles configuration - pushed to edges/corners to keep center clear for text
  const bubbles = [
    { color: 'bg-keepy-lime', size: '25rem', top: '-10%', left: '-10%', delay: 0, duration: 20 },
    { color: 'bg-keepy-pink', size: '20rem', top: '5%', left: '90%', delay: 2, duration: 22 },
    { color: 'bg-keepy-cyan', size: '30rem', top: '40%', left: '-15%', delay: 4, duration: 25 },
    { color: 'bg-keepy-yellow', size: '25rem', top: '50%', left: '90%', delay: 1, duration: 21 },
    { color: 'bg-keepy-orange', size: '20rem', top: '90%', left: '-5%', delay: 3, duration: 19 },
    // Removed the center bubble
    { color: 'bg-keepy-lime', size: '18rem', top: '85%', left: '80%', delay: 0, duration: 18 },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, index) => (
        <Bubble key={index} {...b} />
      ))}
    </div>
  );
};