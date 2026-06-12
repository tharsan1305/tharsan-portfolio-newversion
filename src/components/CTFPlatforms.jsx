import React from 'react';
import { Flag, Shield, Terminal, Server, ExternalLink } from 'lucide-react';
import { ctfPlatforms } from '../data/portfolio';

const CTFPlatforms = () => {
  return (
    <section id="ctf-practice" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ PRACTICE_PLATFORMS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            CTF PLATFORMS & PRACTICE
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* TryHackMe Card */}
          <div className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#0A0F1C] rounded-lg text-accent-cyan border border-[#1E293B]">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-sans text-base font-bold text-white">TryHackMe</h3>
                </div>
                <span className="text-[10px] font-code bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 px-2 py-0.5 rounded uppercase">
                  Active Lab Player
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-code text-gray-400 block mb-1.5 uppercase">COMPLETED_PATHS:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {ctfPlatforms.tryhackme.completedPaths.map((path, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-code bg-[#0A0F1C] text-white border border-[#1E293B] px-2.5 py-0.5 rounded"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B]/60 flex items-center justify-between font-code text-[11px]">
              <span className="text-gray-400">PROFILE:</span>
              <a 
                href={`https://${ctfPlatforms.tryhackme.profile}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline flex items-center space-x-1"
              >
                <span>stharsan13052007</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* HackTheBox Card */}
          <div className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#0A0F1C] rounded-lg text-accent-cyan border border-[#1E293B]">
                    <Terminal size={20} />
                  </div>
                  <h3 className="font-sans text-base font-bold text-white">HackTheBox</h3>
                </div>
                <span className="text-[10px] font-code bg-[#1E293B] text-gray-400 border border-[#1E293B] px-2 py-0.5 rounded uppercase">
                  Labs & Targets
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-code text-gray-400 block mb-1.5 uppercase">PRACTICE_SCOPES:</span>
                <ul className="space-y-1.5">
                  {ctfPlatforms.hackthebox.labs.map((lab, idx) => (
                    <li key={idx} className="font-code text-xs text-gray-400 flex items-center space-x-2">
                      <span className="text-accent-cyan">&gt;</span>
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PicoCTF Card */}
          <div className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#0A0F1C] rounded-lg text-accent-cyan border border-[#1E293B]">
                    <Flag size={20} />
                  </div>
                  <h3 className="font-sans text-base font-bold text-white">PicoCTF</h3>
                </div>
                <span className="text-[10px] font-code bg-[#1E293B] text-gray-400 border border-[#1E293B] px-2 py-0.5 rounded uppercase">
                  Jeopardy CTF
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-code text-gray-400 block mb-1.5 uppercase">CTF_CATEGORIES:</span>
                <ul className="space-y-1.5">
                  {ctfPlatforms.picoctf.topics.map((topic, idx) => (
                    <li key={idx} className="font-code text-xs text-gray-400 flex items-center space-x-2">
                      <span className="text-accent-cyan">&gt;</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* VulnHub Card */}
          <div className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#0A0F1C] rounded-lg text-accent-cyan border border-[#1E293B]">
                    <Server size={20} />
                  </div>
                  <h3 className="font-sans text-base font-bold text-white">VulnHub</h3>
                </div>
                <span className="text-[10px] font-code bg-[#1E293B] text-gray-400 border border-[#1E293B] px-2 py-0.5 rounded uppercase">
                  Offline VM Sandbox
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-code text-gray-400 block mb-1.5 uppercase">PRACTICE_VECTORS:</span>
                <ul className="space-y-1.5">
                  {ctfPlatforms.vulnhub.labs.map((lab, idx) => (
                    <li key={idx} className="font-code text-xs text-gray-400 flex items-center space-x-2">
                      <span className="text-accent-cyan">&gt;</span>
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTFPlatforms;
