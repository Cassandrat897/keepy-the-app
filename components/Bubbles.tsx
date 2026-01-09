import React from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ color, sizeClass, top, left, delay, duration, className }: any) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-30 blur-3xl mix-blend-multiply ${color} ${sizeClass} ${className}`}
      style={{
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
  // Using Tailwind classes for responsive sizing
  // Added 'hidden md:block' to some bubbles to improve mobile performance
  const bubbles = [
    { color: 'bg-keepy-lime', sizeClass: 'w-64 h-64 md:w-[25rem] md:h-[25rem]', top: '-5%', left: '-10%', delay: 0, duration: 20, className: '' },
    { color: 'bg-keepy-pink', sizeClass: 'w-48 h-48 md:w-[20rem] md:h-[20rem]', top: '5%', left: '80%', delay: 2, duration: 22, className: 'hidden md:block' },
    { color: 'bg-keepy-cyan', sizeClass: 'w-72 h-72 md:w-[30rem] md:h-[30rem]', top: '40%', left: '-20%', delay: 4, duration: 25, className: 'hidden md:block' },
    { color: 'bg-keepy-yellow', sizeClass: 'w-56 h-56 md:w-[25rem] md:h-[25rem]', top: '50%', left: '80%', delay: 1, duration: 21, className: '' },
    { color: 'bg-keepy-orange', sizeClass: 'w-40 h-40 md:w-[20rem] md:h-[20rem]', top: '85%', left: '-10%', delay: 3, duration: 19, className: 'hidden md:block' },
    { color: 'bg-keepy-lime', sizeClass: 'w-32 h-32 md:w-[18rem] md:h-[18rem]', top: '80%', left: '70%', delay: 0, duration: 18, className: '' },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, index) => (
        <Bubble key={index} {...b} />
      ))}
    </div>
  );
};