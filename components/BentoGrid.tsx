import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, color, className, delay, rotate }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      className={`p-8 md:p-10 rounded-[2rem] flex flex-col justify-between ${color} ${className} shadow-sm hover:shadow-2xl transition-all duration-500`}
    >
      <div className="mb-4">
        <h3 className="text-3xl md:text-4xl font-serif italic text-keepy-navy mb-4">{title}</h3>
        <p className="text-keepy-navy/70 font-sans text-lg leading-relaxed">{description}</p>
      </div>
      <div className="self-end">
          <div className="w-8 h-8 rounded-full border border-keepy-navy/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-keepy-navy rounded-full"></div>
          </div>
      </div>
    </motion.div>
  );
};

export const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
            >
            <h2 className="text-5xl md:text-6xl font-serif text-keepy-navy mb-6">
                Curated for <br/> <span className="italic text-keepy-pink">Clarity.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light">
                We stripped away the noise to leave room for what matters. 
                A collection of features designed to feel like an extension of your mind.
            </p>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-right hidden md:block"
            >
                <span className="font-serif italic text-8xl text-keepy-lime/40 select-none">01</span>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Design Driven"
            description="Inspired by the freshest trends. Color, space, and typography working in harmony."
            color="bg-white border border-gray-100"
            className="md:col-span-2 aspect-[2/1]"
            rotate={-1}
            delay={0.1}
          />

          <FeatureCard
            title="Privacy First"
            description="Your data stays yours. Security is our canvas."
            color="bg-keepy-cyan/30"
            className="aspect-square"
            rotate={2}
            delay={0.2}
          />

          <FeatureCard
            title="Lightning Fast"
            description="Instant interactions. No lag, just flow."
            color="bg-keepy-yellow/40"
            className="aspect-square"
            rotate={-2}
            delay={0.3}
          />

           <FeatureCard
            title="PWA Ready"
            description="Install on any device. No app store clutter."
            color="bg-keepy-pink/30"
            className="aspect-square"
            rotate={1}
            delay={0.4}
          />
          
          <FeatureCard
            title="Global Access"
            description="Your sanctuary, everywhere you go."
            color="bg-white border border-gray-100"
            className="md:col-span-1 aspect-square"
            rotate={0}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};