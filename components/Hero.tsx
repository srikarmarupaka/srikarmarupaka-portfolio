import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = PERSONAL_INFO.name;
  
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl mx-auto mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/50 bg-black/50 backdrop-blur-sm text-xs font-mono text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                SYSTEM STATUS: ONLINE
             </div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/50 bg-primary/10 backdrop-blur-sm text-xs font-mono text-white">
                FREELANCING: <span className="text-primary font-bold">ACTIVE</span>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-sm text-primary/70"
        >
          &lt;Hello_World /&gt;
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-mono">
          <span className="text-primary">&gt; </span>
          {text}
          <span className="animate-cursor inline-block w-4 h-12 md:h-16 bg-primary ml-2 align-middle"></span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8 font-mono"
        >
          <span className="text-primary">root@srikar:~$</span> {PERSONAL_INFO.title}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-400 max-w-2xl mb-10 leading-relaxed border-l-2 border-primary/30 pl-4 text-left mx-auto"
        >
          // Specializing in securing digital infrastructures and building robust full-stack applications. 
          <br/>
          // Bridging the gap between offensive security and secure software development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-primary rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,65,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] font-mono"
          >
            INITIATE_CONTACT
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="/assets/srikarmarupakaresume.pdf"
            download
            target="_blank"
            className="group inline-flex items-center justify-center px-8 py-3 text-base font-bold text-primary bg-transparent border border-primary rounded-sm hover:bg-primary/10 transition-all duration-300 font-mono"
          >
            <Download className="mr-2 w-5 h-5" />
            DOWNLOAD_CV
          </a>
        </motion.div>

        {/* <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
           className="w-full max-w-4xl mx-auto mt-12"
        > */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-white font-mono">4+</span>
                    <span className="text-[10px] text-primary uppercase font-mono">Years Exp.</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-white font-mono">5+</span>
                    <span className="text-[10px] text-primary uppercase font-mono">Critical Pen. tests</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-white font-mono">20+</span>
                    <span className="text-[10px] text-primary uppercase font-mono">Secured Apps</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-white font-mono">100%</span>
                    <span className="text-[10px] text-primary uppercase font-mono">Audit Ready</span>
                  </div>
              </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;