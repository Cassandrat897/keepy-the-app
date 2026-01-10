import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const playPopSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    // Pop sound: frequency sweep from high to low quickly
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.error("Audio play failed", e);
  }
};

const floatingEmojis = [
  {
      emoji: "🫧",
      className: "top-[2%] left-[2%] md:top-[15%] md:left-[10%] text-4xl md:text-7xl opacity-90",
      animate: { y: [0, -40, 0], x: [0, 15, 0], scale: [1, 1.1, 1] },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  },
  {
      emoji: "🫧",
      className: "top-[5%] right-[2%] md:top-[25%] md:right-[15%] text-5xl md:text-9xl opacity-80",
      animate: { y: [0, 50, 0], rotate: [0, 10, 0] },
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
  },
  {
      emoji: "✨",
      className: "hidden md:block top-[18%] right-[25%] text-5xl opacity-80", 
      animate: { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6], rotate: [0, 180, 0] },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
  },
  {
      emoji: "🫧",
      className: "bottom-[5%] left-[2%] md:bottom-[35%] md:left-[5%] text-5xl md:text-8xl opacity-70",
      animate: { x: [0, 30, 0], rotate: [0, -10, 0] },
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }
  },
  {
      emoji: "✨",
      className: "bottom-[12%] left-[10%] md:bottom-[40%] md:left-[20%] text-2xl md:text-4xl opacity-60",
      animate: { scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }
  },
  {
      emoji: "🫧",
      className: "top-[65%] right-[2%] md:top-[50%] md:right-[5%] text-3xl md:text-6xl opacity-80",
      animate: { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] },
      transition: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
  },
  {
      emoji: "🫧",
      className: "hidden md:block bottom-[15%] right-[30%] text-5xl opacity-60",
      animate: { y: [0, -20, 0], x: [0, -10, 0] },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
  }
];

export const Hero: React.FC = () => {
  // Simple check for mobile to disable animations
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
    <section 
      className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center pt-28 pb-12 relative overflow-hidden bg-white"
    >
      
      {/* Aesthetic Gradient Background - Simplified for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-keepy-lime/20 via-white to-keepy-cyan/20 opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-keepy-pink/10 via-transparent to-transparent hidden md:block"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-keepy-yellow/10 via-transparent to-transparent hidden md:block"></div>
      
      {/* Floating Emojis Layer */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {floatingEmojis.map((item, i) => (
          <motion.div 
            key={i}
            className={`absolute cursor-pointer pointer-events-auto filter drop-shadow-sm ${item.className}`}
            // On mobile: no animation, just static position
            animate={isMobile ? {} : item.animate}
            transition={isMobile ? {} : item.transition}
            whileHover={{ 
              scale: 1.3,
              opacity: 1,
              filter: "drop-shadow(0 0 15px rgba(255, 165, 91, 0.4))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
            onTap={() => playPopSound()}
            onHoverStart={() => playPopSound()}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center">
            <motion.div
            // Mobile: Instant visibility
            {...(isMobile ? {} : {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6 }
            })}
            className="mb-6 flex items-center gap-2 text-keepy-navy/80 font-bold tracking-wide uppercase text-[10px] md:text-sm bg-white/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/50 shadow-sm"
            >
            <Star size={12} fill="currentColor" className="text-keepy-orange" />
            <span>The aesthetic way to organize</span>
            <Star size={12} fill="currentColor" className="text-keepy-orange" />
            </motion.div>

            <motion.h1
            // Mobile: Instant visibility
            {...(isMobile ? {} : {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 }
            })}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-keepy-navy tracking-tight mb-6 leading-[0.95] drop-shadow-sm"
            >
            Save it. <br/>
            Sort it. <br/>
            <span className="relative inline-block text-keepy-orange italic">
                Keepy it.
                <svg className="absolute w-full h-3 bottom-1 left-0 text-keepy-lime -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6"/>
                </svg>
            </span>
            </motion.h1>

            <motion.p
            // Mobile: Instant visibility
            {...(isMobile ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 }
            })}
            className="text-base md:text-lg text-keepy-navy/90 max-w-lg mx-auto mb-8 font-sans font-light leading-relaxed"
            >
            No more lost links. No more messy screenshots. Just everything you love, kept in one cute place.
            </motion.p>

            <motion.div
            // Mobile: Instant visibility
            {...(isMobile ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 }
            })}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4 md:px-0"
            >
            <a
                href="https://tally.so/r/QKeG2G"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-auto justify-center px-8 py-4 bg-keepy-navy text-white text-lg rounded-full font-serif italic hover:bg-keepy-pink hover:text-keepy-navy transition-all duration-500 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
                Open Keepy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            </motion.div>
        </div>

      </div>
    </section>
  );
};