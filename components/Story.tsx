import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
    <section id="story" className="py-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
            <motion.div
              {...(isMobile ? {} : {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true, amount: 0.2 }
              })}
              className="text-center mb-10"
            >
                <span className="font-serif italic text-4xl md:text-5xl text-keepy-navy">The Story Behind Keepy ✨</span>
            </motion.div>

            <motion.div
              {...(isMobile ? {} : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.1 }
              })}
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden"
            >
                {/* Decorative background vibe */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-keepy-lime/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-keepy-navy mb-6">Hi, I’m Cassandra, the founder of Keepy.</h3>

                <div className="space-y-4 text-base md:text-lg text-gray-600 font-light leading-relaxed font-sans">
                    <p>
                        I love discovering local brands, cute cafés, artists, events, and fashion finds on social media — but I was constantly losing them. Screenshots buried in my camera roll, forgotten account names, messy notes, endless saved posts and DMs… it was too much.
                    </p>
                    <p className="font-medium text-keepy-navy text-xl pt-2">
                        So I built Keepy 🤍
                    </p>
                    <p>
                        A simple place to save the accounts and websites you love, organize them into folders, add notes, and access them anytime — without the chaos.
                    </p>
                    <p>
                        Everything you love online, kept neatly in one place.
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-serif italic text-keepy-navy">Cassandra</span>
                    <div className="w-10 h-10 bg-keepy-pink/20 rounded-full flex items-center justify-center text-xl">🌸</div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};