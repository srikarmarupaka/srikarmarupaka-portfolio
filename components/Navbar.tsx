import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// About', href: '#about' },
    { name: '// Skills', href: '#skills' },
    { name: '// Experience', href: '#experience' },
    { name: '// Projects', href: '#projects' },
    { name: '// Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-darker/90 backdrop-blur-md border-primary/30 shadow-[0_0_15px_rgba(0,255,65,0.1)]' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Terminal className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            <span className="ml-2 text-xl font-bold font-mono text-white tracking-tighter">
              <span className="text-primary">&gt;</span> Srikar.root
              <span className="animate-cursor inline-block w-2 h-5 bg-primary ml-1 align-middle"></span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="relative inline-flex items-center gap-2 bg-primary/10 border border-primary text-primary px-5 py-2 rounded-sm text-sm font-bold font-mono transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_15px_rgba(0,255,65,0.6)]"
              >
                <Zap className="w-4 h-4" />
                ./HIRE_ME.sh
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-darker border-b border-primary/30 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-primary hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-mono font-medium border-l-2 border-transparent hover:border-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-4 bg-primary text-black px-3 py-3 rounded-sm text-base font-bold font-mono"
              >
                <Zap className="w-5 h-5" />
                EXECUTE HIRE_ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;