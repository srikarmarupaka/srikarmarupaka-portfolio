import React from 'react';
import { SERVICES } from '../constants';


const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-black relative overflow-hidden">
      
      {/* Background Matrix Effect (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-[#00ff41]">&gt;</span> ./SERVICES_DEPLOYED
          </h2>
          <div className="h-1 w-24 bg-[#00ff41]"></div>
          <p className="text-gray-400 mt-4 font-mono max-w-2xl">
            // Executing offensive and defensive protocols to secure digital assets.
            <br />
            // Select a module below to initiate engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/50 border border-white/10 p-8 rounded-sm hover:border-[#00ff41] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] overflow-hidden"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#00ff41]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out pointer-events-none"></div>

              {/* Icon */}
              <div className="mb-6 relative z-10 p-3 bg-black/50 w-fit rounded border border-white/10 group-hover:border-[#00ff41] transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-[#00ff41] transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono relative z-10">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tech.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-[#00ff41] bg-[#00ff41]/10 px-2 py-1 rounded border border-[#00ff41]/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 bg-[#00ff41]"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;