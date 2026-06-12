import React from 'react';
import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';
import { social } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-[#050A18] border-t border-border-color py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-column Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-b border-border-color pb-8 mb-8">
          
          {/* Column 1 */}
          <div className="space-y-3">
            <span className="font-code text-xs font-bold text-accent-cyan tracking-widest block mb-2">
              &gt;_ INDEX_01
            </span>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <Link to="about" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <span className="font-code text-xs font-bold text-accent-purple tracking-widest block mb-2">
              &gt;_ INDEX_02
            </span>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <Link to="projects" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="case-studies" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="certifications" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Certs
                </Link>
              </li>
              <li>
                <Link to="achievements" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <span className="font-code text-xs font-bold text-accent-red tracking-widest block mb-2">
              &gt;_ INDEX_03
            </span>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <Link to="blog" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="research" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="ctf-writeups" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  CTF
                </Link>
              </li>
              <li>
                <Link to="seminars" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <span className="font-code text-xs font-bold text-accent-cyan tracking-widest block mb-2">
              &gt;_ CONNECT
            </span>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <a href={social.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={social.medium} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors">
                  Medium
                </a>
              </li>
              <li>
                <Link to="contact" smooth={true} offset={-80} duration={450} className="text-text-muted hover:text-accent-cyan cursor-pointer transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Credit & Copyright Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-code text-text-muted gap-4">
          <div>
            © 2026 THARSAN. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={10} className="text-accent-red fill-accent-red animate-pulse" />
            <span>in Trichy, Tamil Nadu, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
