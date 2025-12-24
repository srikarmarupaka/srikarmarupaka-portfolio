import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ChevronRight, Code } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-primary">~/</span>Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-sm border border-white/5 hover:border-primary transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="w-24 h-24 text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <Folder className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary/50 font-mono">DIR: /projects/{index + 1}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors font-mono">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-gray-500 font-medium mb-4 font-mono border-b border-white/5 pb-2">{project.subtitle}</p>
                )}
                
                <div className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed font-mono">
                      <span className="text-primary opacity-50">&gt;</span> {desc}
                    </p>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-white transition-colors font-mono">
                  [View Source] <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;