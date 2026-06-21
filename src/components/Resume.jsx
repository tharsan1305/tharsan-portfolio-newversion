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
            THARSAN_S_v2.0.pdf
          </h3>

          {/* Latest Version Badge */}
          <div className="flex items-center justify-center mb-4">
            <span className="text-[9px] font-code bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 px-3 py-0.5 rounded uppercase tracking-widest font-bold">
              LATEST_VERSION
            </span>
          </div>

          {/* Subtitle / Role & Specialization */}
          <div className="font-code text-xs text-gray-400 mb-6 space-y-1">
            <div>
              <span className="text-accent-purple font-semibold">ROLE:</span>{" "}
              <span className="text-white">Cyber Security Engineering Student</span>
            </div>
            <div>
              <span className="text-accent-cyan font-semibold">SPECIALIZATION:</span>{" "}
              <span className="text-white">AI Security | Cloud Security | DevSecOps</span>
            </div>
          </div>

          {/* Terminal Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 font-code text-[10px]">
            <span className="bg-bg-primary/80 border border-border-color px-2.5 py-1 rounded text-gray-400">
              CERTIFICATIONS: <span className="text-accent-cyan font-bold">20+</span>
            </span>
            <span className="bg-bg-primary/80 border border-border-color px-2.5 py-1 rounded text-gray-400">
              PROJECTS: <span className="text-accent-cyan font-bold">10+</span>
            </span>
            <span className="bg-bg-primary/80 border border-border-color px-2.5 py-1 rounded text-gray-400">
              ARTICLES: <span className="text-accent-cyan font-bold">9+</span>
            </span>
            <span className="bg-bg-primary/80 border border-border-color px-2.5 py-1 rounded text-gray-400">
              STARTUPS: <span className="text-accent-cyan font-bold">2</span>
            </span>
            <span className="bg-bg-primary/80 border border-border-color px-2.5 py-1 rounded text-gray-400">
              COMMUNITY: <span className="text-accent-cyan font-bold">500+</span>
            </span>
          </div>

          {/* Meta Data Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8 font-code text-xs text-text-muted">
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>FILE_TYPE</div>
              <strong className="text-white block mt-1">PDF Document</strong>
            </div>
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>VERSION</div>
              <strong className="text-white block mt-1">v2.0</strong>
            </div>
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>LAST_UPDATED</div>
              <strong className="text-white block mt-1">June 2026</strong>
            </div>
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>ATS_COMPATIBLE</div>
              <strong className="text-emerald-400 block mt-1">YES</strong>
            </div>
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>DOWNLOAD_SOURCE</div>
              <strong className="text-white block mt-1">Google Drive</strong>
            </div>
            <div className="bg-bg-primary/60 border border-border-color/50 rounded-lg p-2.5">
              <div>STATUS</div>
              <strong className="text-emerald-400 block mt-1">ACTIVE</strong>
            </div>
          </div>

          {/* Verification indicator */}
          <div className="flex items-center justify-center space-x-1.5 text-xs font-code text-green-400 mb-8">
            <CheckCircle2 size={14} />
            <span>INTEGRITY_CHECK: PASSED (SHA-256 VERIFIED)</span>
          </div>

          {/* Terminal Footer Info */}
          <div className="border-t border-border-color/30 pt-6 mt-6 mb-8 font-code text-left text-xs text-text-muted space-y-2 max-w-sm mx-auto">
            <div>
              <span className="text-accent-purple font-semibold">SYSTEM_STATUS:</span>{" "}
              <span className="text-emerald-400">READY_FOR_INTERNSHIPS</span>
            </div>
            <div>
              <span className="text-accent-purple font-semibold">AVAILABILITY:</span>{" "}
              <span className="text-white">OPEN_TO_WORK</span>
            </div>
            <div>
              <span className="text-accent-purple font-semibold block mb-1">TARGET_ROLES:</span>
              <div className="flex flex-wrap gap-1.5 pl-3">
                <span className="bg-bg-primary/60 border border-border-color/50 px-2 py-0.5 rounded text-[10px] text-white">AI Security Engineer</span>
                <span className="bg-bg-primary/60 border border-border-color/50 px-2 py-0.5 rounded text-[10px] text-white">Cloud Security Engineer</span>
                <span className="bg-bg-primary/60 border border-border-color/50 px-2 py-0.5 rounded text-[10px] text-white">DevSecOps Engineer</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-code text-xs">
            <a 
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent-cyan hover:bg-accent-cyan/95 text-[#050A18] font-bold px-6 py-3.5 rounded-lg shadow-cyan-glow hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center space-x-2"
            >
              <Download size={14} />
              <span>DOWNLOAD_RESUME.exe</span>
            </a>
            
            <a 
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
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
