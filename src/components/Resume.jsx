import React from 'react';
import { FileText, Download, Eye, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { hero, now } from '../data/portfolio';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-bg-secondary/20 border-y border-border-color">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 text-center">
          <span className="font-code text-xs md:text-sm text-accent-purple tracking-widest block mb-1">
            &gt;_ DOSSIER_EXAMINATION
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; RESUME<span className="text-accent-purple">.pdf</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mt-3 rounded-full mx-auto" />
        </div>

        {/* Minimal Centered Card */}
        <div className="glass-card rounded-xl p-8 max-w-xl mx-auto border border-border-color text-center relative overflow-hidden">
          
          {/* Glowing Background Overlay */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent-purple/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none" />

          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple flex items-center justify-center mx-auto mb-6 shadow-purple-glow">
            <FileText size={30} className="animate-pulse" />
          </div>

          {/* File Name */}
          <h3 className="font-code text-lg font-bold text-white mb-2 select-all tracking-widest">
            THARSAN_S.pdf
          </h3>

          {/* Latest Version Badge */}
          <div className="flex items-center justify-center mb-3">
            <span className="text-[9px] font-code bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 px-3 py-0.5 rounded uppercase tracking-widest font-bold">
              LATEST_VERSION
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs font-code text-gray-400 mb-6 leading-relaxed">
            Cyber Security Engineering Student | Founder | AI Security &amp; Cloud Security Enthusiast
          </p>

          {/* Meta Data Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8 font-code text-xs text-text-muted">
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>FILE_TYPE</div>
              <strong className="text-white font-sans text-xs block mt-1">PDF Document</strong>
            </div>
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>LAST_MODIFIED</div>
              <strong className="text-white block mt-1">{now.lastUpdated}</strong>
            </div>
          </div>

          {/* Verification indicator */}
          <div className="flex items-center justify-center space-x-1.5 text-xs font-code text-green-400 mb-8">
            <CheckCircle2 size={14} />
            <span>INTEGRITY_CHECK: PASSED (SHA-256 VERIFIED)</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-code text-xs">
            <a 
              href={hero.resumeUrl}
              download
              className="w-full sm:w-auto bg-accent-cyan hover:bg-accent-cyan/95 text-[#050A18] font-bold px-6 py-3.5 rounded-lg shadow-cyan-glow hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center space-x-2"
            >
              <Download size={14} />
              <span>DOWNLOAD_RESUME.exe</span>
            </a>
            
            <a 
              href={hero.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-border-color hover:border-accent-purple text-text-primary hover:bg-accent-purple/10 font-bold px-6 py-3.5 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Eye size={14} className="text-accent-purple" />
              <span>VIEW_ON_DRIVE.sys</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;
