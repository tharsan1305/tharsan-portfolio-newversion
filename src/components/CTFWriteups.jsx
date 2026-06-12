import React, { useState } from 'react';
import { ShieldAlert, Award, ChevronRight, Terminal, Trophy } from 'lucide-react';
import { ctfWriteups } from '../data/portfolio';

const CTFWriteups = () => {
  const [platformFilter, setPlatformFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const platforms = ['All', 'HackTheBox', 'PicoCTF', 'VulnHub', 'Hack2Quest', 'CyberHeal'];
  const categories = ['All', 'Web', 'Forensics', 'Crypto', 'Reverse Engineering', 'OSINT', 'Pwn'];

  const filteredWriteups = ctfWriteups.filter((item) => {
    const matchesPlatform = platformFilter === 'All' || item.platform === platformFilter;
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesPlatform && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Hard':
        return 'text-accent-red border-accent-red/25 bg-accent-red/10';
      case 'Medium':
        return 'text-amber-400 border-amber-400/25 bg-amber-400/10';
      default:
        return 'text-green-400 border-green-400/25 bg-green-400/10';
    }
  };

  return (
    <section id="ctf-writeups" className="py-24 relative overflow-hidden bg-bg-secondary/20 border-y border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ CAPTURE_THE_FLAG_REPORT
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; CTF<span className="text-accent-cyan">.writeups</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-3 rounded-full" />
        </div>

        {/* Featured Achievement Card */}
        <div className="mb-10 glass-card rounded-xl p-5 border border-yellow-500/40 bg-yellow-500/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-500/15 rounded-lg text-yellow-500 shrink-0">
              <Trophy size={24} />
            </div>
            <div>
              <span className="font-code text-[9px] bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded font-bold">CTF ACHIEVEMENT</span>
              <h4 className="font-display text-sm sm:text-base font-bold text-white mt-1.5">
                50th Place — Hack2Quest CTF (National Level, 2025)
              </h4>
              <p className="text-xs text-text-muted mt-1">
                Completed as his first ever national-level CTF competition, solving multiple cryptography and web exploitation blocks.
              </p>
            </div>
          </div>
          <span className="font-code text-xs font-bold text-yellow-400 border border-yellow-500/35 px-4 py-2 rounded">
            RANK: #50 / NATIONAL
          </span>
        </div>

        {/* Filters Panel */}
        <div className="glass-card rounded-xl p-6 mb-8 border border-border-color space-y-4 font-code text-xs">
          
          {/* Platform Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-text-muted mr-2">PLATFORM:</span>
            {platforms.map((plat) => (
              <button
                key={plat}
                onClick={() => setPlatformFilter(plat)}
                className={`px-2.5 py-1 rounded transition-all border ${platformFilter === plat ? 'bg-accent-cyan text-[#050A18] border-accent-cyan font-bold' : 'bg-bg-primary text-text-muted border-border-color hover:text-text-primary'}`}
              >
                {plat}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-color/50">
            <span className="text-text-muted mr-2">CATEGORY:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-2.5 py-1 rounded transition-all border ${categoryFilter === cat ? 'bg-accent-purple text-white border-accent-purple font-bold' : 'bg-bg-primary text-text-muted border-border-color hover:text-text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Cards Grid */}
        {filteredWriteups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredWriteups.map((w, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-xl p-5 border border-border-color hover:border-accent-purple/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-code text-[10px]">
                    <span className="text-text-muted">PLATFORM: <strong className="text-text-primary">{w.platform}</strong></span>
                    <span className={`px-2 py-0.5 rounded border font-bold ${getDifficultyColor(w.difficulty)}`}>
                      {w.difficulty.toUpperCase()}
                    </span>
                  </div>
                  
                  <h4 className="font-display text-base font-bold text-white mb-2 flex items-center space-x-1.5">
                    <Terminal size={14} className="text-accent-cyan shrink-0" />
                    <span>{w.name}</span>
                  </h4>
                  
                  <p className="text-xs text-text-muted mb-4 leading-relaxed">
                    {w.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-color/50 flex items-center justify-between font-code text-[11px] mt-auto">
                  <span className="text-accent-purple font-bold bg-accent-purple/10 border border-accent-purple/20 px-2 py-0.5 rounded">
                    #{w.category.toUpperCase().replace(/ /g, '_')}
                  </span>
                  
                  <a 
                    href={w.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-1 text-accent-cyan hover:underline"
                  >
                    <span>READ_WRITEUP</span>
                    <ChevronRight size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center font-code text-xs text-text-muted py-12 glass-card rounded-xl border border-border-color border-dashed">
            NO_WRITEUPS_MATCH_FILTERS.sys
          </div>
        )}

      </div>
    </section>
  );
};

export default CTFWriteups;
