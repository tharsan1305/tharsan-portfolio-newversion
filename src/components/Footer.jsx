import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';
import { social } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-slate-200/80 text-xs text-slate-500">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Name & Copyright */}
        <p className="font-medium text-slate-600">
          © 2026 Tharsan S. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors p-1"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#2F6BFF] transition-colors p-1"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors p-1"
            aria-label="Medium Profile"
            title="Medium"
          >
            <FaMedium size={16} />
          </a>
          <a
            href={social.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-red-600 transition-colors p-1"
            aria-label="TryHackMe Profile"
            title="TryHackMe"
          >
            <SiTryhackme size={16} />
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-slate-400 hover:text-[#2F6BFF] transition-colors p-1"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope size={15} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
