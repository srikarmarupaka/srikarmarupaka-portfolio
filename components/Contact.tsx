import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-darker relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
             <span className="text-primary">./</span>Start_Connection
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
            [INFO] Currently available for <span className="text-primary font-bold">Freelance</span> projects. 
            <br/>Initialize secure communication channel below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
               <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-mono">Email</h3>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-primary transition-colors font-mono text-sm">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-mono">Phone</h3>
                  <p className="text-gray-400 font-mono text-sm">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-mono">Location</h3>
                  <p className="text-gray-400 font-mono text-sm">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 font-mono">Connect_Nodes</h3>
                <div className="flex gap-4">
                   <a href="#" className="p-3 bg-black rounded-sm border border-white/10 hover:border-primary text-gray-400 hover:text-primary transition-all hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                     <Linkedin className="w-6 h-6" />
                   </a>
                   <a href="#" className="p-3 bg-black rounded-sm border border-white/10 hover:border-primary text-gray-400 hover:text-primary transition-all hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                     <Github className="w-6 h-6" />
                   </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-sm border border-white/5 shadow-xl relative"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-50"></div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-primary mb-2">/usr/bin/name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Enter name..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-primary mb-2">/usr/bin/email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Enter email..."
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-primary mb-2">/usr/bin/subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm placeholder-gray-700"
                  placeholder="Project inquiry..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-primary mb-2">/usr/bin/message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none font-mono text-sm placeholder-gray-700"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-black font-bold py-4 rounded-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 font-mono uppercase tracking-wider"
              >
                &gt; SEND_TRANSMISSION
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;