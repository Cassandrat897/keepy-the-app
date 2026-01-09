import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share, PlusSquare, MoreVertical, Download, ArrowDown } from 'lucide-react';
import { Logo } from './Logo';

export const InstallGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ios' | 'android'>('ios');

  return (
    <section id="install" className="py-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-serif italic text-keepy-navy mb-4">Make it yours</h2>
          <p className="text-lg text-gray-500 font-light">Add Keepy to your home screen.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Minimal Tabs */}
          <div className="flex justify-center mb-8">
             <div className="bg-gray-100 p-1 rounded-full inline-flex">
                <button
                onClick={() => setActiveTab('ios')}
                className={`px-6 py-2 rounded-full font-serif text-base md:text-lg transition-all duration-300 ${
                    activeTab === 'ios'
                    ? 'bg-white text-keepy-navy shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                >
                iOS
                </button>
                <button
                onClick={() => setActiveTab('android')}
                className={`px-6 py-2 rounded-full font-serif text-base md:text-lg transition-all duration-300 ${
                    activeTab === 'android'
                    ? 'bg-white text-keepy-navy shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                >
                Android
                </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative">
             {/* Decorative background element */}
             <div className="absolute inset-0 bg-gradient-to-r from-keepy-lime/20 to-keepy-cyan/20 rounded-[2.5rem] rotate-1 scale-95 blur-sm -z-10"></div>
             
             <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-white/50 backdrop-blur-xl">
                <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    <div className="space-y-6">
                        <div className="space-y-1">
                             <span className="text-4xl font-serif text-keepy-lime/50 italic absolute -translate-x-10 -translate-y-2 select-none opacity-50 hidden md:block">1</span>
                             <h4 className="text-xl font-serif font-bold text-keepy-navy">Visit the site</h4>
                             <p className="text-gray-500 font-light text-base md:text-lg">Go to <span className="font-medium text-keepy-navy">keepy-app.vercel.app</span> on your {activeTab === 'ios' ? 'Safari' : 'Chrome'} browser.</p>
                        </div>
                         <div className="w-px h-8 bg-gray-200 ml-4 hidden md:block"></div>
                        <div className="space-y-1">
                             <span className="text-4xl font-serif text-keepy-pink/50 italic absolute -translate-x-10 -translate-y-2 select-none opacity-50 hidden md:block">2</span>
                             <h4 className="text-xl font-serif font-bold text-keepy-navy">Open Options</h4>
                             <p className="text-gray-500 font-light text-base md:text-lg">
                                 {activeTab === 'ios' ? (
                                     <>Tap the <span className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-lg mx-1"><Share size={12}/></span> Share button.</>
                                 ) : (
                                     <>Tap the <span className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-lg mx-1"><MoreVertical size={12}/></span> Menu button.</>
                                 )}
                             </p>
                        </div>
                        <div className="w-px h-8 bg-gray-200 ml-4 hidden md:block"></div>
                        <div className="space-y-1">
                             <span className="text-4xl font-serif text-keepy-cyan/50 italic absolute -translate-x-10 -translate-y-2 select-none opacity-50 hidden md:block">3</span>
                             <h4 className="text-xl font-serif font-bold text-keepy-navy">Install</h4>
                             <p className="text-gray-500 font-light text-base md:text-lg">Select <span className="font-medium text-keepy-navy">Add to Home Screen</span>.</p>
                        </div>
                    </div>

                    <div className="flex justify-center relative">
                        {/* Abstract Phone Shape */}
                        <div className="w-56 h-[400px] bg-keepy-navy rounded-[2.5rem] p-3 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
                                {/* Header */}
                                <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center justify-center">
                                    <div className="w-16 h-3 bg-gray-200 rounded-full"></div>
                                </div>
                                {/* Body */}
                                <div className="flex-1 p-4 flex flex-col items-center justify-center space-y-3">
                                     <div className="w-16 h-16 bg-keepy-navy rounded-2xl shadow-lg flex items-center justify-center">
                                        <Logo className="w-10 h-10" />
                                     </div>
                                     <div className="h-2 w-20 bg-gray-100 rounded-full mt-2"></div>
                                     <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                                </div>
                                {/* Footer / Action Sheet */}
                                <motion.div 
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute bottom-0 left-0 right-0 bg-gray-100/90 backdrop-blur-md p-4 rounded-t-2xl border-t border-gray-200/50"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                            {activeTab === 'ios' ? <PlusSquare size={16} className="text-keepy-navy"/> : <Download size={16} className="text-keepy-navy"/>}
                                        </div>
                                        <div className="text-xs font-medium text-keepy-navy">Add to Home Screen</div>
                                    </div>
                                    <div className="w-full h-8 bg-keepy-navy rounded-lg text-white text-[10px] flex items-center justify-center font-bold tracking-wide">
                                        ADD
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};