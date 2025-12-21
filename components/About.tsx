import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darker border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center font-mono">
              <span className="text-primary mr-2">#</span> About_Me
            </h2>
            <div className="bg-card border border-white/10 p-6 rounded-sm relative">
                <div className="absolute top-0 left-0 w-full h-6 bg-white/5 flex items-center px-2 gap-1 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-400 mt-4 mb-6 text-sm md:text-base leading-relaxed font-mono">
                <span className="text-primary">➜ ~</span> {PERSONAL_INFO.about}
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 bg-black rounded-sm border border-primary/20 text-primary">
                  <MapPin size={18} />
                </div>
                <span className="font-mono text-sm">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 bg-black rounded-sm border border-primary/20 text-primary">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono text-sm hover:text-primary transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 bg-black rounded-sm border border-primary/20 text-primary">
                  <Phone size={18} />
                </div>
                <span className="font-mono text-sm">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 bg-black rounded-sm border border-primary/20 text-primary">
                  <User size={18} />
                </div>
                <span className="font-mono text-sm">Status: <span className="text-primary animate-pulse">Available</span></span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 rounded-sm overflow-hidden border border-primary/30 bg-black">
                 {/* Glitch effect on hover would be cool here */}
                 <img 
                    src="https://picsum.photos/400/400?grayscale" 
                    alt="Srikar Marupaka" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                 />
                 <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay"></div>
                 {/* Scanline */}
                 <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
              </div>
              <div className="absolute top-4 left-4 w-full h-full border border-primary/20 rounded-sm -z-10 translate-x-2 translate-y-2"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;