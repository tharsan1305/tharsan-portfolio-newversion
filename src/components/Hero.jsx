import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { MapPin, Download, ArrowDown, Shield, Users, Briefcase, Award } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaMediumM, FaEnvelope } from 'react-icons/fa';
import { SiTryhackme, SiLeetcode } from 'react-icons/si';
import { hero, social } from '../data/portfolio';
import avatarImg from '../assets/avatar.png';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0F1C]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center self-center lg:self-start space-x-2 bg-[#111827] border border-[#1E293B] rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-code tracking-wider text-emerald-400 font-medium">
                {hero.statusText}
              </span>
            </div>

            {/* Title / Name */}
            <div>
              <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-2 font-semibold">
                &gt; RESEARCHER_IDENTITY
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                {hero.name}
              </h1>
            </div>

            {/* Typewriter Subtitle */}
            <div className="font-code text-base sm:text-lg md:text-xl text-accent-cyan min-h-[30px] flex items-center justify-center lg:justify-start">
              <span className="text-gray-400 mr-2">&gt;_</span>
              <Typewriter
                options={{
                  strings: hero.roles,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                  wrapperClassName: "font-code font-bold",
                  cursorClassName: "text-accent-cyan"
                }}
              />
            </div>

            {/* Short Tagline */}
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {hero.tagline}
            </p>

            {/* Location & Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-gray-400 font-code">
              <div className="flex items-center space-x-1.5">
                <MapPin size={15} className="text-accent-cyan" />
                <span>{hero.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto text-center cursor-pointer bg-accent-cyan hover:bg-accent-cyan/95 text-[#0A0F1C] font-semibold px-6 py-3 rounded-lg font-code text-xs transition-colors duration-200"
              >
                VIEW_PROJECTS.sh
              </Link>
              <a
                href={hero.resumeUrl}
                download
                className="w-full sm:w-auto text-center border border-[#1E293B] hover:border-accent-cyan text-white hover:bg-accent-cyan/5 font-semibold px-6 py-3 rounded-lg font-code text-xs transition-colors duration-200"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Download size={14} className="text-accent-cyan" />
                  <span>GET_RESUME.pdf</span>
                </div>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-gray-400 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                title="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a 
                href={social.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-gray-400 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                title="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a 
                href={social.medium} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-gray-400 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                title="Medium"
              >
                <FaMediumM size={16} />
              </a>
              <a 
                href={social.tryhackme} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-gray-400 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                title="TryHackMe"
              >
                <SiTryhackme size={16} />
              </a>
              <a 
                href={social.leetcode} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-gray-400 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                title="LeetCode"
              >
                <SiLeetcode size={16} />
              </a>
              <a 
                href={`mailto:${social.email}`} 
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-gray-400 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                title="Email Me"
              >
                <FaEnvelope size={16} />
              </a>
            </div>

          </div>

          {/* Right Profile & Stats Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 select-none flex items-center justify-center mb-6">
              {/* Outer clean border */}
              <div className="absolute inset-0 rounded-full border border-[#1E293B]" />
              <div className="absolute inset-4 rounded-full border border-[#1E293B]/60" />
              {/* Profile image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border border-[#1E293B] bg-[#111827] flex items-center justify-center">
                <img 
                  src={avatarImg} 
                  alt="Tharsan S profile" 
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>
            
            {/* Quick Metrics display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-md text-center">
              <div className="bg-[#111827] border border-[#1E293B] rounded-lg p-2.5">
                <span className="text-[10px] text-gray-400 block font-code uppercase tracking-wider">Connections</span>
                <span className="text-sm font-bold text-white font-code mt-0.5 block">{hero.connections}</span>
              </div>
              <div className="bg-[#111827] border border-[#1E293B] rounded-lg p-2.5">
                <span className="text-[10px] text-gray-400 block font-code uppercase tracking-wider">Certs</span>
                <span className="text-sm font-bold text-white font-code mt-0.5 block">{hero.certificationsCount}</span>
              </div>
              <div 
                className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan/40 transition-colors rounded-lg p-2.5 cursor-help"
                title="500+ members across technology, AI, cybersecurity, and developer communities."
              >
                <span className="text-[10px] text-gray-400 block font-code uppercase tracking-wider">Community</span>
                <span className="text-sm font-bold text-white font-code mt-0.5 block">500+</span>
              </div>
              <div className="bg-[#111827] border border-[#1E293B] rounded-lg p-2.5">
                <span className="text-[10px] text-gray-400 block font-code uppercase tracking-wider">Companies</span>
                <span className="text-sm font-bold text-white font-code mt-0.5 block">{hero.companiesFounded}</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bouncing Arrow Down indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 text-gray-400 select-none cursor-pointer">
          <Link to="about" smooth={true} duration={500} offset={-80} className="flex flex-col items-center">
            <span className="text-[9px] font-code tracking-widest hover:text-accent-cyan transition-colors">SCROLL_DOWN</span>
            <ArrowDown size={14} className="animate-bounce mt-1 text-accent-cyan" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
