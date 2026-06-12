import React from 'react';
import { Mail, Linkedin, FileText, BookOpen, Atom, ShieldCheck, Cpu, ArrowUpRight, Zap, CheckCircle } from 'lucide-react';
import { research, social } from '../data/portfolio';
import DynamicIcon from './DynamicIcon';

const Research = () => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'Draft':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/25';
      case 'In Progress':
        return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/25';
      default:
        return 'text-green-400 bg-green-400/10 border-green-400/25';
    }
  };

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-grid-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-purple tracking-widest block mb-1">
            &gt;_ ACADEMIC_INVESTIGATIONS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; RESEARCH<span className="text-accent-purple">.lab</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mt-3 rounded-full" />
        </div>

        {/* 1. Research Interests */}
        <div className="mb-12">
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wider font-code flex items-center">
            <span className="text-accent-cyan mr-2">&gt;</span> SPECIALIZATION_VECTORS
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {research.interests.map((interest, idx) => (
              <span 
                key={idx}
                className="text-xs font-code font-bold px-3 py-1.5 rounded bg-bg-secondary border border-border-color hover:border-accent-cyan hover:shadow-cyan-glow text-text-primary transition-all duration-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Research Papers */}
        <div className="mb-16">
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wider font-code flex items-center">
            <span className="text-accent-cyan mr-2">&gt;</span> PAPERS_AND_MANUSCRIPTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {research.papers.map((paper, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-xl p-6 border border-border-color hover:border-accent-purple/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className={`text-[9px] font-code px-2 py-0.5 rounded border ${getStatusColor(paper.status)}`}>
                        {paper.status.toUpperCase()}
                      </span>
                    </div>
                    <FileText size={16} className="text-text-muted" />
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-white leading-snug mb-2 group-hover:text-accent-cyan">
                    {paper.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted mb-4 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-color/60 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-code bg-bg-primary text-text-muted border border-border-color px-1.5 py-0.5 rounded">
                        #{tag.toLowerCase().replace(/ /g, '_')}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 font-code text-xs text-accent-cyan hover:underline"
                  >
                    <span>VIEW_DRAFT</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Workshops & Takeaways */}
        <div className="mb-16">
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wider font-code flex items-center">
            <span className="text-accent-purple mr-2">&gt;</span> WORKSHOP_INSIGHTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.workshops.map((ws, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-xl p-5 border border-border-color flex flex-col justify-between"
              >
                <div>
                  <div className="font-code text-[10px] text-accent-purple mb-1.5">{ws.date}</div>
                  <h4 className="font-display text-sm font-bold text-white leading-snug mb-3">
                    {ws.name}
                  </h4>
                  <p className="text-[10px] font-code text-text-muted mb-3">@{ws.organizer}</p>
                  
                  {/* Takeaways bullets */}
                  <ul className="space-y-1.5 pt-3 border-t border-border-color/50">
                    <span className="text-[9px] font-code text-text-muted block mb-1">KEY_TAKEAWAYS:</span>
                    {ws.takeaways.map((take, tIdx) => (
                      <li key={tIdx} className="flex items-center space-x-1.5 text-xs text-text-muted">
                        <CheckCircle size={10} className="text-accent-cyan shrink-0" />
                        <span className="truncate">{take}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Ongoing Explorations */}
        <div className="mb-16">
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wider font-code flex items-center">
            <span className="text-accent-purple mr-2">&gt;</span> CURRENT_LAB_EXPLORATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.explorations.map((exp, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-xl p-5 border border-border-color hover:border-accent-purple/40 hover:-translate-y-0.5 transition-all flex items-start space-x-4"
              >
                <div className="p-2.5 bg-bg-primary border border-border-color rounded text-accent-purple shrink-0">
                  <DynamicIcon name={exp.icon} size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white leading-none mb-1.5">
                    {exp.title}
                  </h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborate CTA */}
        <div className="glass-card rounded-xl p-8 border border-accent-cyan/40 bg-accent-cyan/5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-center">
            <Zap size={22} className="text-accent-cyan mr-2 animate-pulse" />
            <span>Interested in Research Collaboration?</span>
          </h3>
          <p className="text-xs sm:text-sm text-text-muted max-w-xl mx-auto mb-6 leading-relaxed">
            I am always looking to partner with academic researchers, security institutes, and developers on AI/LLM vulnerability alignments, cyber forensic models, and post-quantum network testing. Let's build secure software together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-code text-xs">
            <a 
              href={`mailto:${social.email}`}
              className="w-full sm:w-auto bg-accent-cyan hover:bg-accent-cyan/95 text-[#050A18] font-bold px-6 py-3 rounded-lg shadow-cyan-glow hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all flex items-center justify-center space-x-2"
            >
              <Mail size={14} />
              <span>EMAIL_RESEARCH_PITCH.sh</span>
            </a>
            <a 
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-border-color hover:border-accent-purple text-text-primary hover:bg-accent-purple/10 font-bold px-6 py-3 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Linkedin size={14} className="text-accent-purple" />
              <span>LINKEDIN_CONNECT.exe</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Research;
