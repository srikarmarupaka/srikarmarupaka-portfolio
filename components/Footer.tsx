import React from 'react';
import { Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-primary/20 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-xs mb-4 md:mb-0">
          <span className="text-primary">&copy;</span> {new Date().getFullYear()} {PERSONAL_INFO.name}. [System: Active]
        </p>
        
        <div className="flex items-center text-gray-500 text-xs">
          <span>Executed with</span>
          <Heart className="w-3 h-3 mx-1 text-primary fill-current" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;