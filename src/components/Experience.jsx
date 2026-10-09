import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experience } from '../data/portfolio';
import { GooglePlayIcon, AppleIcon } from './StoreIcons';

const Experience = () => {
  const timelineRef = useRef(null);
  const [lineFill, setLineFill] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.65;
      const progress = (startPoint - rect.top) / rect.height;
      setLineFill(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Experience
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Engineering software systems, securing production platforms, and delivering client applications.
          </p>
        </div>

        {/* Timeline Stack with Scroll-Filling Vertical Line */}
        <div ref={timelineRef} className="relative max-w-3xl space-y-8">
          
          {/* Static Background Line */}
          <div className="absolute left-5 inset-y-0 w-0.5 bg-slate-200 hidden md:block" aria-hidden="true" />

          {/* Animated Scroll Fill Line */}
          <div
            className="absolute left-5 top-0 w-0.5 bg-[#2F6BFF] hidden md:block transition-all duration-75 shadow-xs"
            style={{ height: `${lineFill * 100}%` }}
            aria-hidden="true"
          />

          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative md:pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`hidden md:flex absolute left-5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 transition-all duration-200 items-center justify-center shadow-xs ${
                  lineFill > (idx / experience.length) * 0.8
                    ? 'border-[#2F6BFF] scale-110'
                    : 'border-slate-300'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                    lineFill > (idx / experience.length) * 0.8 ? 'bg-[#2F6BFF]' : 'bg-slate-300'
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div className="card-base card-hover p-6 sm:p-7 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#1F3864]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-sm font-bold text-[#2F6BFF]">
                        {exp.company}
                      </span>
                      {exp.companySub && (
                        <span className="text-xs text-slate-500 font-medium">
                          • {exp.companySub}
                        </span>
                      )}
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-[#2F6BFF] transition-colors"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {exp.playStore && (
                        <a
                          href={exp.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full transition-colors"
                          aria-label={`View ${exp.company} on Google Play`}
                        >
                          <GooglePlayIcon className="w-2.5 h-2.5 text-emerald-600" />
                          <span>Google Play</span>
                        </a>
                      )}
                      {exp.appStore && (
                        <a
                          href={exp.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-2 py-0.5 rounded-full transition-colors"
                          aria-label={`View ${exp.company} on Apple App Store`}
                        >
                          <AppleIcon className="w-2.5 h-2.5 text-slate-900" />
                          <span>App Store</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Dates & Location */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-sm text-slate-600 mb-5 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {exp.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-chip text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
