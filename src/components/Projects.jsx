import React, { useState } from 'react';
import { Github, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

const ProjectCard3D = ({ proj }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (isFlipped) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Slight 3D perspective tilt: max 12 degrees rotation
    const tiltX = ((y - centerY) / centerY) * 12;
    const tiltY = -((x - centerX) / centerX) * 12;
    
    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const description = proj.description || proj.solution || proj.problem || "";
  const impactArray = Array.isArray(proj.impact)
    ? proj.impact
    : (proj.impact ? [proj.impact] : []);
  const featuresList = proj.features || impactArray;
  const githubLink = proj.github || "https://github.com/tharsan1305";

  return (
    <div className="perspective-1000 w-full h-[380px]">
      <motion.div
        className={`w-full h-full cursor-pointer relative preserve-3d transition-shadow duration-300 rounded-xl ${
          isFlipped ? 'shadow-[0_0_20px_rgba(0,212,255,0.4)]' : 'hover:shadow-[0_0_15px_rgba(123,79,255,0.2)]'
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateY: isFlipped ? 180 : rotateY,
          rotateX: isFlipped ? 0 : rotateX,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8
        }}
      >
        {/* FRONT FACE */}
        <div className="backface-hidden absolute inset-0 glass-card rounded-xl p-6 flex flex-col justify-between border border-border-color">
          <div>
            <h3 className="font-code text-[18px] font-bold text-accent-cyan mb-1 leading-snug">
              {proj.title}
            </h3>

            <div className="mb-4">
              <span className="inline-block text-[9px] font-code bg-accent-purple/15 text-accent-purple border border-accent-purple/20 px-2.5 py-0.5 rounded font-bold uppercase">
                {proj.category}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-text-muted mb-4 leading-relaxed line-clamp-4">
              {description}
            </p>

            {impactArray.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {impactArray.map((imp, impIdx) => (
                  <span 
                    key={impIdx}
                    className="inline-flex items-center space-x-1 text-[9px] font-code bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full"
                  >
                    <Zap size={8} />
                    <span>{imp}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="text-[9px] font-code text-text-muted/60 text-right mt-auto flex items-center justify-end space-x-1 select-none">
            <span>TAP TO FLIP</span>
            <span className="text-accent-cyan animate-pulse">&gt;</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="backface-hidden absolute inset-0 glass-card rounded-xl p-6 flex flex-col justify-between border border-accent-cyan/30 bg-[#070e20]/95"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="space-y-4">
            <div>
              <span className="font-code text-[9px] text-accent-cyan block mb-0.5">&gt;_ SYSTEM_SPECS</span>
              <h3 className="font-code text-sm font-bold text-white leading-snug">{proj.title}</h3>
            </div>
            
            <div>
              <span className="font-code text-[9px] text-text-muted block mb-1.5">&gt; TECH_STACK:</span>
              <div className="flex flex-wrap gap-1">
                {proj.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-[9px] font-code bg-bg-primary text-text-muted border border-border-color/85 px-1.5 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {featuresList.length > 0 && (
              <div>
                <span className="font-code text-[9px] text-text-muted block mb-1">&gt; KEY_FEATURES / IMPACT:</span>
                <ul className="list-disc list-inside text-[10px] font-code text-green-400 space-y-0.5">
                  {featuresList.slice(0, 4).map((feat, featIdx) => (
                    <li key={featIdx} className="truncate">{feat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-3 mt-auto">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-center justify-center space-x-2 py-2 rounded bg-bg-primary border border-border-color hover:border-accent-cyan hover:shadow-cyan-glow text-xs font-code text-text-muted hover:text-accent-cyan transition-all"
              title="View Source on GitHub"
            >
              <Github size={13} />
              <span>VIEW_SOURCE.sh</span>
            </a>
            <div className="text-[9px] font-code text-text-muted/60 text-center flex items-center justify-center space-x-1 select-none">
              <span className="text-accent-cyan animate-pulse">&lt;</span>
              <span>TAP TO RETURN</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'AI-ML', 'Security', 'Tools', 'EdTech'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
              &gt;_ SOURCE_REPOSITORIES
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              &gt; PROJECTS<span className="text-accent-cyan">.sh</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-3 rounded-full" />
          </div>

          {/* Filter Categories buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 font-code text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded transition-all border ${filter === cat ? 'bg-accent-cyan text-[#050A18] border-accent-cyan font-bold shadow-cyan-glow' : 'bg-bg-secondary text-text-muted border-border-color hover:text-text-primary hover:bg-bg-secondary/70'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* 3-column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <ProjectCard3D key={idx} proj={proj} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
