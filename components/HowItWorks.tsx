import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ title, description, color, emoji, index }: any) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-8 md:mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Spacer for Desktop Layout Balance */}
      <div className="hidden md:block w-5/12" />

      {/* The Node (Bubble) */}
      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center justify-center z-20 top-0">
        <motion.div
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ type: "spring", stiffness: 200, damping: 15 }}
           className={`w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_0_0_8px_rgba(255,255,255,1)] md:shadow-[0_0_0_16px_rgba(255,255,255,1)] relative overflow-hidden`}
        >
             <div className={`absolute inset-0 ${color}`}></div>
             <span className="relative z-10 text-2xl md:text-4xl filter drop-shadow-sm select-none transform transition-transform hover:scale-125 duration-300 cursor-default">{emoji}</span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full md:w-5/12 pl-28 md:pl-0 pr-4 ${isEven ? 'md:text-right md:pr-24 md:pl-0' : 'md:text-left md:pl-24 md:pr-0'}`}
      >
         
         <div className="relative pt-1 md:pt-2">
             <h3 className="text-xl md:text-2xl font-serif font-bold text-keepy-navy mb-1 leading-tight">
                 {title}
             </h3>
             <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed">
                 {description}
             </p>
         </div>
      </motion.div>

    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const steps = [
    { 
        emoji: '🌸', 
        title: 'See it', 
        description: "Spot a profile or page you love while scrolling.", 
        color: 'bg-keepy-lime/30' 
    },
    { 
        emoji: '📋', 
        title: 'Copy link', 
        description: "Just copy the URL. No screenshots, no stress.", 
        color: 'bg-keepy-pink/30' 
    },
    { 
        emoji: '💖', 
        title: 'Open Keepy', 
        description: "Organize into folders like Inspo or Wishlist.", 
        color: 'bg-keepy-cyan/30' 
    },
    { 
        emoji: '🧷', 
        title: 'Save & sort', 
        description: "Paste the link and let Keepy do the magic.", 
        color: 'bg-keepy-yellow/30' 
    },
    { 
        emoji: '📝', 
        title: 'Add notes', 
        description: "Jot down ideas, vibes, or reminders for later.", 
        color: 'bg-keepy-orange/30' 
    },
    { 
        emoji: '🔗', 
        title: 'Tap & go', 
        description: "Revisit your saved gems with a single tap.", 
        color: 'bg-keepy-lime/30' 
    },
    { 
        emoji: '🤍', 
        title: 'Share', 
        description: "Send your curated lists to friends effortlessly.", 
        color: 'bg-keepy-pink/30' 
    },
  ];

  return (
    <section id="features" className="pt-4 pb-12 md:pb-16 relative z-10 bg-white overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-[20%] right-0 w-[30rem] h-[30rem] bg-keepy-lime/5 rounded-full blur-3xl -z-10 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-0 w-[30rem] h-[30rem] bg-keepy-pink/5 rounded-full blur-3xl -z-10 mix-blend-multiply pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-serif text-keepy-navy">
                How it <span className="text-keepy-pink italic relative">
                    Works
                    <svg className="absolute w-full h-3 bottom-0 left-0 text-keepy-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6"/>
                    </svg>
                </span>
            </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
            {/* The ZigZag Road Line */}
            <div 
                className="absolute left-[56px] md:left-1/2 top-0 bottom-0 w-8 -ml-4 transform z-0 opacity-30 bg-repeat-y bg-center"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='48' viewBox='0 0 24 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0 L 22 12 L 12 24 L 2 36 L 12 48' stroke='%2309253c' stroke-width='2' fill='none' stroke-dasharray='4 6' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E")`
                }}
            ></div>

            <div className="flex flex-col gap-0 md:gap-0 pb-8">
                {steps.map((step, index) => (
                    <TimelineItem key={index} {...step} index={index} />
                ))}
            </div>

             {/* End Node */}
             <div className="absolute bottom-0 left-[56px] md:left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-keepy-navy/20"></div>
             </div>
        </div>
      </div>
    </section>
  );
};