import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Download, ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaAws, FaDiscord, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiTryhackme, SiSpringboot, SiReact, SiPython, SiMysql, SiGithubactions, SiLeetcode } from 'react-icons/si';
import { hero, social } from '../data/portfolio';
import { GooglePlayIcon } from './StoreIcons';
import HeroCube from './HeroCube';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // One-time load sequence (approx 700ms total)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const techStack = [
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "React", icon: SiReact },
    { name: "Python", icon: SiPython },
    { name: "AWS", icon: FaAws },
    { name: "MySQL", icon: SiMysql },
    { name: "GitHub Actions", icon: SiGithubactions }
  ];

  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 hero-gradient-mesh border-b border-slate-200/70 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Role, Tagline, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Green Availability Chip */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-700 text-xs font-medium shadow-xs transition-all duration-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to internships: Software Engineering, Cybersecurity, DevSecOps</span>
            </div>

            {/* Large Heading & Role with One-time Load Sequence (700ms total) */}
            <div className="space-y-2">
              <h1
                className={`text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-[#1F3864] tracking-tight leading-[1.08] transition-all duration-300 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Tharsan S
              </h1>
              
              <p
                style={{ transitionDelay: '180ms' }}
                className={`text-xl sm:text-2xl font-bold text-[#2F6BFF] tracking-tight transition-all duration-300 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Software Engineer | Cybersecurity &amp; DevSecOps
              </p>
            </div>

            {/* Tagline (< 70 chars per line, comfortable reading) */}
            <p
              style={{ transitionDelay: '300ms' }}
              className={`text-slate-600 text-base sm:text-lg leading-relaxed max-w-[65ch] transition-all duration-300 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {hero.tagline}
            </p>

            {/* Action Buttons in Plain English */}
            <div
              style={{ transitionDelay: '420ms' }}
              className={`flex flex-wrap items-center gap-3 pt-1 transition-all duration-300 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                to="projects"
                smooth={true}
                offset={-70}
                duration={400}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#2F6BFF] hover:bg-[#2557D6] shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>View projects</span>
                <ArrowDown size={15} />
              </Link>

              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
              >
                <Download size={15} />
                <span>Download resume</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase ml-0.5 bg-slate-100 px-1 py-0.5 rounded">PDF</span>
              </a>

              <a
                href={`mailto:${hero.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-xs"
              >
                <Mail size={15} />
                <span>Email me</span>
              </a>
            </div>

            {/* Direct Real Store / Live Link buttons (hidden if no real link) */}
            {(hero.pragatixLive || hero.pragatixPlayStore) && (
              <div
                style={{ transitionDelay: '520ms' }}
                className={`flex flex-wrap items-center gap-2.5 pt-1 transition-all duration-300 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {hero.pragatixLive && (
                  <a
                    href={hero.pragatixLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-blue-700 bg-blue-50/90 hover:bg-blue-100 border border-blue-200/80 transition-colors shadow-2xs"
                  >
                    <span>Live: pragatix.in</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {hero.pragatixPlayStore && (
                  <a
                    href={hero.pragatixPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-emerald-800 bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-200/80 transition-colors shadow-2xs"
                  >
                    <GooglePlayIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Google Play</span>
                    <ExternalLink size={11} className="text-emerald-600" />
                  </a>
                )}
              </div>
            )}

            {/* Core Technologies Row */}
            <div
              style={{ transitionDelay: '600ms' }}
              className={`pt-2 transition-all duration-300 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Core Technologies
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {techStack.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-white/90 border border-slate-200 shadow-2xs hover:-translate-y-0.5 transition-transform"
                    >
                      <Icon className="w-3.5 h-3.5 text-slate-600" />
                      <span>{tech.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Social Icons (LinkedIn, GitHub, X, Discord, Reddit, LeetCode, Medium, TryHackMe, Email) */}
            <div
              style={{ transitionDelay: '680ms' }}
              className={`pt-1 flex flex-wrap items-center gap-2 transition-all duration-300 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 hover:text-[#2F6BFF] hover:bg-blue-50 border border-slate-200 bg-white transition-colors shadow-2xs"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 bg-white transition-colors shadow-2xs"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <FaGithub size={17} />
              </a>
              {social.x && (
                <a
                  href={social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-black hover:bg-slate-100 border border-slate-200 bg-white transition-colors shadow-2xs"
                  aria-label="X (Twitter) Profile"
                  title="X"
                >
                  <FaXTwitter size={17} />
                </a>
              )}
              {social.discord && (
                <a
                  href={social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-[#5865F2] hover:bg-[#5865F2]/10 border border-slate-200 bg-white transition-colors shadow-2xs"
                  aria-label="Discord Server"
                  title="Discord"
                >
                  <FaDiscord size={17} />
                </a>
              )}
              {social.reddit && (
                <a
                  href={social.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-[#FF4500] hover:bg-[#FF4500]/10 border border-slate-200 bg-white transition-colors shadow-2xs"
                  aria-label="Reddit Profile"
                  title="Reddit"
                >
                  <FaReddit size={17} />
                </a>
              )}
              {social.leetcode && (
                <a
                  href={social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-[#FFA116] hover:bg-[#FFA116]/10 border border-slate-200 bg-white transition-colors shadow-2xs"
                  aria-label="LeetCode Profile"
                  title="LeetCode"
                >
                  <SiLeetcode size={17} />
                </a>
              )}
              <a
                href={social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 bg-white transition-colors shadow-2xs"
                aria-label="Medium Articles"
                title="Medium"
              >
                <FaMedium size={17} />
              </a>
              <a
                href={social.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-200 bg-white transition-colors shadow-2xs"
                aria-label="TryHackMe Profile"
                title="TryHackMe"
              >
                <SiTryhackme size={17} />
              </a>
              <a
                href={`mailto:${social.email}`}
                className="p-2.5 rounded-lg text-slate-600 hover:text-[#2F6BFF] hover:bg-blue-50 border border-slate-200 bg-white transition-colors shadow-2xs"
                aria-label="Send Email"
                title="Email"
              >
                <FaEnvelope size={17} />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Glass Rotating Cube + Profile Photo with Animated Gradient Ring */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              
              {/* Circular profile photo with thin animated gradient ring beside/behind cube */}
              <div className="absolute -top-6 sm:-top-8 -right-2 sm:right-2 z-20">
                <div className="relative p-[3px] rounded-full animated-gradient-ring shadow-md">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white border-2 border-white">
                    <img
                      src="/assets/profile.jpg"
                      alt="Tharsan S"
                      className="w-full h-full object-cover"
                      loading="eager"
                      width="96"
                      height="96"
                    />
                  </div>
                </div>
              </div>

              {/* 3D Rotating Glass Cube */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative flex items-center justify-center">
                <HeroCube />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Gentle curved section divider to transition into content */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-white fill-current"
        >
          <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
