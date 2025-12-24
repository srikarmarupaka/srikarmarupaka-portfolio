import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-white font-mono">Education</h2>
            </motion.div>

            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-sm border border-white/5 relative pl-8 border-l-2 border-l-primary hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white font-mono">{edu.degree}</h3>
                  <p className="text-gray-400 font-medium font-mono text-sm">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-2 mb-4">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-sm font-mono border border-primary/20">{edu.period}</span>
                    {edu.grade && <span className="text-xs text-gray-300 font-mono">GPA: <span className="text-white font-bold">{edu.grade}</span></span>}
                  </div>
                  {edu.details.length > 0 && (
                    <ul className="space-y-1">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-xs text-gray-400 font-mono">
                          <span className="text-primary mr-2">&gt;</span>{detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-white font-mono">Certifications</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card p-4 rounded-sm border border-white/5 flex items-center gap-3 hover:border-primary transition-colors group"
                >
                  <CheckCircle className="w-5 h-5 text-primary/50 group-hover:text-primary flex-shrink-0 transition-colors" />
                  <span className="text-gray-200 font-medium font-mono text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>

            {/* Interest Areas */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold text-white mb-6 font-mono">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {["Cyber Security", "Digital Forensics", "App Security & Development", "DevSecOps"].map((area, i) => (
                    <span key={i} className="px-4 py-2 rounded-sm border border-primary/30 bg-primary/5 text-primary text-xs font-mono font-semibold hover:bg-primary hover:text-black transition-colors cursor-default">
                        {area}
                    </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;