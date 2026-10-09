import React, { useState } from 'react';
import { ExternalLink, Github, FileText, Shield, Terminal, Mail, Server, Cpu, Layers } from 'lucide-react';
import { projects } from '../data/portfolio';
import ProjectDetailModal from './ProjectDetailModal';
import { GooglePlayIcon, AppleIcon } from './StoreIcons';
import TiltCard from './TiltCard';

const projectVisuals = {
  pragatix: {
    initials: 'PX',
    icon: Layers,
    gradient: 'from-blue-600 to-indigo-700',
    badge: 'Production Launch'
  },
  'api-agent': {
    initials: 'API',
    icon: Shield,
    gradient: 'from-slate-700 to-blue-800',
    badge: 'Security Automation'
  },
  'sentinel-ai': {
    initials: 'SN',
    icon: Mail,
    gradient: 'from-blue-700 to-teal-800',
    badge: 'Machine Learning'
  },
  'vuln-scanner': {
    initials: 'VS',
    icon: Terminal,
    gradient: 'from-slate-800 to-blue-900',
    badge: 'Network Security'
  },
  'mom-tool': {
    initials: 'MM',
    icon: Cpu,
    gradient: 'from-indigo-700 to-blue-600',
    badge: 'Prompt Engine'
  },
  'placement-system': {
    initials: 'NC',
    icon: Server,
    gradient: 'from-blue-800 to-indigo-900',
    badge: 'Client Platform'
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#F1F5FC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Top gentle curved transition from white */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="relative block w-full h-5 sm:h-8 text-white fill-current">
          <path d="M0,0 L1200,0 L1200,35 C800,5 400,5 0,35 Z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Projects
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Production software platforms, cybersecurity automation tools, and full-stack applications.
          </p>
        </div>

        {/* 2-Column Responsive Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => {
            const visual = projectVisuals[proj.id] || {
              initials: proj.title.substring(0, 2).toUpperCase(),
              icon: Layers,
              gradient: 'from-blue-600 to-indigo-700',
              badge: 'Software'
            };
            const VisualIcon = visual.icon;

            return (
              <TiltCard
                key={proj.id}
                className="card-base bg-white border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Screenshot / Visual Banner Area */}
                  <div className={`h-36 sm:h-40 rounded-t-xl bg-gradient-to-br ${visual.gradient} p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-white`}>
                    
                    {/* Subtle geometric pattern overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    {/* Top row: Category badge & initial avatar */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                        {visual.badge}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center font-extrabold text-xs">
                        {visual.initials}
                      </div>
                    </div>

                    {/* Bottom row: Visual icon + title abbreviation */}
                    <div className="flex items-center gap-2 relative z-10">
                      <VisualIcon size={18} className="opacity-80" />
                      <span className="text-xs font-semibold tracking-wide opacity-90 truncate">
                        {proj.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-[#1F3864] leading-snug">
                      {proj.title}
                    </h3>

                    {/* Short Summary / Impact */}
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                      {proj.summary}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {proj.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-chip text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions: Real Links + View Details Button */}
                <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-50/50 rounded-b-xl">
                  
                  {/* Real Links (Live, Source, Stores - only shown if link exists) */}
                  <div className="flex flex-wrap items-center gap-2">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-slate-700 bg-white hover:bg-blue-50 hover:text-[#2F6BFF] border border-slate-200 transition-colors shadow-2xs"
                      >
                        <span>Live</span>
                        <ExternalLink size={12} />
                      </a>
                    )}

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-2xs"
                      >
                        <Github size={12} />
                        <span>Source</span>
                      </a>
                    )}

                    {proj.playStore && (
                      <a
                        href={proj.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-2xs"
                      >
                        <GooglePlayIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Play Store</span>
                        <ExternalLink size={11} className="text-emerald-600" />
                      </a>
                    )}

                    {proj.appStore && (
                      <a
                        href={proj.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-2xs"
                      >
                        <AppleIcon className="w-3.5 h-3.5 text-slate-900" />
                        <span>App Store</span>
                        <ExternalLink size={11} className="text-slate-500" />
                      </a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-1.5 font-bold text-[#2F6BFF] hover:text-[#2557D6] hover:underline cursor-pointer ml-auto"
                  >
                    <FileText size={13} />
                    <span>View details</span>
                  </button>

                </div>

              </TiltCard>
            );
          })}
        </div>

        {/* Modal render */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>

      {/* Bottom gentle curved transition to white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="relative block w-full h-5 sm:h-8 text-white fill-current">
          <path d="M0,40 L1200,40 L1200,5 C800,35 400,35 0,5 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Projects;
