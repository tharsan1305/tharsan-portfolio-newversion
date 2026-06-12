import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Cpu, Terminal, Layers, Globe } from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Security', 'Development', 'AI / Database', 'Networking'];

  const filteredCerts = filter === 'All' 
    ? certifications 
    : certifications.filter(c => c.category.toLowerCase().includes(filter.toLowerCase().split(' ')[0]));

  const getCategoryIcon = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes('security') || cat.includes('network')) {
      return <ShieldCheck size={15} className="text-accent-cyan" />;
    } else if (cat.includes('ai') || cat.includes('database')) {
      return <Cpu size={15} className="text-accent-cyan" />;
    } else if (cat.includes('development') || cat.includes('cloud')) {
      return <Terminal size={15} className="text-accent-cyan" />;
    } else {
      return <Layers size={15} className="text-accent-cyan" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ INTEGRITY_VERIFICATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            CERTIFICATIONS
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
        </div>

        {/* Filter Navigation & Grid of Badges */}
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2 pb-2 border-b border-[#1E293B]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded font-code text-xs transition-colors border ${filter === cat ? 'bg-[#111827] text-accent-cyan border-accent-cyan/50 font-bold' : 'bg-transparent text-gray-400 border-transparent hover:text-white hover:bg-[#111827]/40'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCerts.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-[#111827] rounded-xl p-5 border border-[#1E293B] hover:border-accent-cyan transition-all duration-300 flex items-start space-x-3.5 group relative"
              >
                <div className="p-2.5 bg-[#0A0F1C] rounded-lg text-accent-cyan shrink-0 mt-0.5 border border-[#1E293B]">
                  {getCategoryIcon(cert.category)}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-code text-gray-400 font-semibold truncate">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-code text-accent-cyan shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-white mt-1.5 group-hover:text-accent-cyan transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <div className="mt-3 pt-2.5 border-t border-[#1E293B]/60 flex items-center justify-between font-code text-[9px] text-gray-400">
                    <span>DOMAIN: <strong className="text-white font-normal">{cert.category}</strong></span>
                    <span className="text-emerald-400 font-bold shrink-0 flex items-center space-x-1">
                      <CheckCircle2 size={10} className="text-emerald-400" />
                      <span>{cert.status || 'VERIFIED'}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
