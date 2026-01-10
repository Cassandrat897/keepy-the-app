import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Install', href: '#install' },
    { name: 'Story', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group cursor-pointer">
             <div className="group-hover:scale-110 transition-transform duration-300">
                <Logo className="w-10 h-10 md:w-12 md:h-12" />
             </div>
            <span className="font-serif font-bold text-3xl text-keepy-navy tracking-tight italic">Keepy</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-keepy-navy font-sans font-medium hover:text-keepy-orange transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-keepy-orange after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://tally.so/r/QKeG2G"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-keepy-navy text-white rounded-full font-serif italic hover:bg-keepy-orange hover:text-keepy-navy transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Open App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-keepy-navy p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center justify-center h-[80vh]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-4xl font-serif italic text-keepy-navy hover:text-keepy-pink transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://tally.so/r/QKeG2G"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-keepy-navy text-white text-xl rounded-full font-serif w-full max-w-xs text-center"
              >
                Launch Keepy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};