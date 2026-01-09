import React from 'react';
import { Twitter, Instagram, Mail, Heart, Facebook } from 'lucide-react';
import { Logo } from './Logo';

// Custom TikTok Icon since it's not in standard Lucide set often
const TikTokIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 relative z-10 border-t border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex flex-col items-center gap-2">
                <Logo className="w-16 h-16" />
                <span className="font-serif font-bold text-4xl text-keepy-navy italic tracking-tight">Keepy</span>
            </div>
            
            <div className="max-w-lg mx-auto mb-8 space-y-2">
                <p className="text-gray-500 font-serif text-base italic">
                    Contact me for any questions, feedback, press and partnership inquiries.
                </p>
                <div className="flex items-center justify-center gap-2 text-keepy-navy font-medium">
                    <Mail size={16} />
                    <a href="mailto:keepytheapp@outlook.com" className="hover:text-keepy-orange transition-colors">keepytheapp@outlook.com</a>
                </div>
            </div>

          <div className="flex gap-4 mb-8">
            <a href="https://x.com/keepytheapp" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-keepy-navy hover:bg-keepy-navy hover:text-keepy-lime hover:border-keepy-navy transition-all duration-300">
              <Twitter size={16} />
            </a>
            <a href="https://instagram.com/keepytheapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-keepy-navy hover:bg-keepy-navy hover:text-keepy-pink hover:border-keepy-navy transition-all duration-300">
              <Instagram size={16} />
            </a>
            <a href="https://tiktok.com/@keepytheapp" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-keepy-navy hover:bg-keepy-navy hover:text-keepy-cyan hover:border-keepy-navy transition-all duration-300">
              <TikTokIcon size={16} />
            </a>
            <a href="https://www.facebook.com/share/16owWT3X9k/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-keepy-navy hover:bg-keepy-navy hover:text-keepy-yellow hover:border-keepy-navy transition-all duration-300">
              <Facebook size={16} />
            </a>
          </div>

          <div className="w-full border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 font-sans tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} Keepy App. Made with <Heart size={10} className="inline text-keepy-pink"/>.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-keepy-navy transition-colors">Privacy</a>
              <a href="#" className="hover:text-keepy-navy transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};