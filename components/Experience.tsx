import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Terminal } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
             <span className="text-primary">./</span>Experience_Log
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-primary/30"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] bg-black border-2 border-primary z-20 shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>

                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-sm border border-white/10 hover:border-primary transition-all duration-300 group relative">
                    {/* Decorative corner */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <h3 className="text-lg font-bold text-white font-mono group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-xs text-primary bg-primary/10 border border-primary/20 px-2 py-1 font-mono">
                        <Calendar className="w-3 h-3 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4 text-sm font-semibold font-mono">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed font-mono">
                          <span className="text-primary mt-0.5 mr-2">$</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;