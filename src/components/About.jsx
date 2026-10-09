import React from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaDiscord, FaReddit, FaAws, FaMicrosoft } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiCredly } from 'react-icons/si';
import { about, social } from '../data/portfolio';
import HighlightsStrip from './HighlightsStrip';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F1F5FC] border-b border-slate-200/80 relative">
      {/* Highlights trust strip with counting numbers */}
      <HighlightsStrip />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Card: Photo, Name, Title, Location, Email, GitHub, LinkedIn */}
          <div className="lg:col-span-4">
            <div className="card-base p-6 sm:p-7 bg-white shadow-xs border-slate-200/90">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-4 shadow-2xs">
                <img
                  src="/assets/profile.webp"
                  alt={about.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="112"
                  height="112"
                />
              </div>

              <h3 className="text-xl font-extrabold text-[#1F3864] leading-snug">
                {about.name}
              </h3>
              <p className="text-xs font-bold text-[#2F6BFF] mt-1">
                {about.title}
              </p>

              <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-slate-400 shrink-0" />
                  <span>{about.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-slate-400 shrink-0" />
                  <a
                    href={`mailto:${about.email}`}
                    className="text-[#2F6BFF] hover:underline font-medium truncate"
                  >
                    {about.email}
                  </a>
                </div>
              </div>

              {/* GitHub and LinkedIn Links */}
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-slate-100">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors shadow-2xs"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                  <ExternalLink size={10} className="text-slate-400" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#2F6BFF] bg-blue-50/80 hover:bg-blue-100 border border-blue-200/80 transition-colors shadow-2xs"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                  <ExternalLink size={10} className="text-blue-400" />
                </a>
              </div>

              {/* Community Profiles: X, Discord, Reddit, LeetCode */}
              <div className="flex items-center justify-center gap-2 mt-2 pt-2 border-t border-slate-50">
                {social.x && (
                  <a
                    href={social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-black hover:bg-slate-100 transition-colors"
                    title="X (Twitter)"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter size={14} />
                  </a>
                )}
                {social.discord && (
                  <a
                    href={social.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-[#5865F2] hover:bg-indigo-50 transition-colors"
                    title="Discord"
                    aria-label="Discord"
                  >
                    <FaDiscord size={14} />
                  </a>
                )}
                {social.reddit && (
                  <a
                    href={social.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-[#FF4500] hover:bg-orange-50 transition-colors"
                    title="Reddit"
                    aria-label="Reddit"
                  >
                    <FaReddit size={14} />
                  </a>
                )}
                {social.awsBuilder && (
                  <a
                    href={social.awsBuilder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-[#FF9900] hover:bg-amber-50 transition-colors"
                    title="AWS Builder Center"
                    aria-label="AWS Builder Center"
                  >
                    <FaAws size={14} />
                  </a>
                )}
                {social.microsoftLearn && (
                  <a
                    href={social.microsoftLearn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-[#00A4EF] hover:bg-sky-50 transition-colors"
                    title="Microsoft Learn"
                    aria-label="Microsoft Learn"
                  >
                    <FaMicrosoft size={13} />
                  </a>
                )}
                {social.leetcode && (
                  <a
                    href={social.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-[#FFA116] hover:bg-amber-50 transition-colors"
                    title="LeetCode"
                    aria-label="LeetCode"
                  >
                    <SiLeetcode size={14} />
                  </a>
                )}
                {social.credly && (
                  <a
                    href={social.credly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-[#FF6B00] hover:bg-orange-50 transition-colors"
                    title="Credly"
                    aria-label="Credly"
                  >
                    <SiCredly size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Heading, Paragraphs, Highlight Chips */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
                Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3864] tracking-tight mt-1">
                About me
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-[68ch]">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* Row of 4 Highlight Chips */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Highlights
              </div>
              <div className="flex flex-wrap gap-2">
                {about.chips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-white border border-slate-200/90 shadow-2xs hover:-translate-y-0.5 transition-transform"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
