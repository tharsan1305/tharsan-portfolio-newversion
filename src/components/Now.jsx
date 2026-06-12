import React from 'react';
import { BookOpen, Code, Terminal, BrainCircuit, RefreshCcw, Search, Compass, Target, CheckCircle2, Cpu } from 'lucide-react';
import { now } from '../data/portfolio';

const Now = () => {
  return (
    <section id="now" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ LIVE_OPERATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            NOW_STATUS
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3 mx-auto md:mx-0" />
        </div>

        {/* Outer Frame */}
        <div className="bg-[#111827] rounded-xl p-6 md:p-8 border border-[#1E293B] relative space-y-8">
          
          {/* Header Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-[#1E293B]/60 font-code text-xs gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-accent-cyan font-bold uppercase">STATUS: {now.statusText}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <RefreshCcw size={12} className="animate-spin" style={{ animationDuration: '6s' }} />
              <span>LAST_UPDATE: {now.lastUpdated}</span>
            </div>
          </div>

          {/* Biography Intro */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans">
            {now.bio}
          </p>

          {/* Current Vectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            {/* 1. Learning */}
            <div className="bg-[#0A0F1C]/50 border border-[#1E293B] rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white tracking-widest font-code flex items-center space-x-2 uppercase">
                <BrainCircuit size={15} className="text-accent-cyan" />
                <span>&gt; CURRENTLY_LEARNING</span>
              </h4>
              <ul className="space-y-1.5 font-code text-xs text-gray-400">
                {now.learning.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-accent-cyan font-bold shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Practicing */}
            <div className="bg-[#0A0F1C]/50 border border-[#1E293B] rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white tracking-widest font-code flex items-center space-x-2 uppercase">
                <Terminal size={15} className="text-accent-cyan" />
                <span>&gt; CURRENTLY_PRACTICING</span>
              </h4>
              <ul className="space-y-1.5 font-code text-xs text-gray-400">
                {now.practicing.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-accent-cyan font-bold shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Building */}
            <div className="bg-[#0A0F1C]/50 border border-[#1E293B] rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white tracking-widest font-code flex items-center space-x-2 uppercase">
                <Code size={15} className="text-accent-cyan" />
                <span>&gt; CURRENTLY_BUILDING</span>
              </h4>
              <ul className="space-y-1.5 font-code text-xs text-gray-400">
                {now.building.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-accent-cyan font-bold shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Exploring */}
            <div className="bg-[#0A0F1C]/50 border border-[#1E293B] rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white tracking-widest font-code flex items-center space-x-2 uppercase">
                <Compass size={15} className="text-accent-cyan" />
                <span>&gt; CURRENTLY_EXPLORING</span>
              </h4>
              <ul className="space-y-1.5 font-code text-xs text-gray-400">
                {now.exploring.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-accent-cyan font-bold shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Reading */}
            <div className="bg-[#0A0F1C]/50 border border-[#1E293B] rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white tracking-widest font-code flex items-center space-x-2 uppercase">
                <BookOpen size={15} className="text-accent-cyan" />
                <span>&gt; CURRENTLY_READING</span>
              </h4>
              <ul className="space-y-1.5 font-code text-xs text-gray-400">
                {now.reading.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-accent-cyan font-bold shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Current Mission Card */}
            <div className="bg-[#0A0F1C]/50 border border-accent-cyan/35 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-white tracking-widest font-code flex items-center space-x-2 uppercase mb-3">
                  <Target size={15} className="text-accent-cyan" />
                  <span>&gt; CURRENT_MISSION</span>
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-[9px] font-code text-gray-400 block mb-1 uppercase">FOUNDATIONS:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {now.mission.foundations.map((found, idx) => (
                        <span key={idx} className="inline-flex items-center space-x-1 text-[10px] font-code bg-[#111827] text-white border border-[#1E293B] px-2 py-0.5 rounded">
                          <CheckCircle2 size={10} className="text-emerald-400" />
                          <span>{found}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-code text-gray-400 block mb-1 uppercase">CAREER_TARGETS:</span>
                    <ul className="space-y-1">
                      {now.mission.careers.map((career, idx) => (
                        <li key={idx} className="text-[11px] font-code text-gray-300 flex items-center space-x-1.5">
                          <span className="w-1 h-1 rounded-full bg-accent-cyan" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* System Status telemetry Box */}
          <div className="pt-6 border-t border-[#1E293B]/60 font-code text-[11px] text-gray-400 space-y-2">
            <span className="text-[10px] text-gray-500 flex items-center space-x-1.5 uppercase">
              <Cpu size={12} className="text-accent-cyan" />
              <span>SYSTEM_TELEMETRY.status</span>
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-1">
              <div>
                <span className="block text-[10px] text-gray-500">LEARNING_MODE</span>
                <span className="text-emerald-400 font-bold">{now.systemStatus.learningMode}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-500">BUILD_MODE</span>
                <span className="text-emerald-400 font-bold">{now.systemStatus.buildMode}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-500">SECURITY_RESEARCH</span>
                <span className="text-emerald-400 font-bold">{now.systemStatus.securityResearch}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-500">STARTUP_DEV</span>
                <span className="text-emerald-400 font-bold">{now.systemStatus.startupDevelopment}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-500">MISSION_TARGET</span>
                <span className="text-accent-cyan font-bold">{now.systemStatus.mission}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Now;
