import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { badgeCertifications, certifications, additionalCertifications, social } from '../data/portfolio';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certifications" className="py-20 bg-white border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Certifications &amp; Badges
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Certifications &amp; Badges
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Verified digital badges, security certifications, and professional learning achievements.
          </p>
        </div>

        {/* 4 Featured Credly & Industry Badges (1 col mobile, 2 cols tablet, 4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badgeCertifications.map((badge, idx) => (
            <a
              key={idx}
              href={badge.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${badge.title} credential issued by ${badge.issuer}`}
              className="card-base card-hover p-6 bg-white border border-slate-200/90 rounded-2xl flex flex-col items-center justify-between group text-center hover:border-[#2F6BFF] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] h-full"
            >
              <div className="w-full flex flex-col items-center flex-1">
                {/* Badge Image: centered with consistent sizing & aspect ratio, object-fit contain */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center p-2 rounded-xl bg-slate-50/70 border border-slate-100 group-hover:bg-blue-50/40 group-hover:border-blue-100 transition-colors">
                  <img
                    src={badge.image}
                    alt={badge.alt}
                    width="128"
                    height="128"
                    loading="lazy"
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.badge-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="badge-fallback hidden w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <ShieldCheck className="w-10 h-10 text-[#2F6BFF] mb-1" />
                    <span className="text-[10px] font-semibold text-slate-500">Verified Badge</span>
                  </div>
                </div>

                {/* Title & Issuer below image */}
                <h3 className="text-sm sm:text-base font-extrabold text-[#1F3864] group-hover:text-[#2F6BFF] transition-colors leading-snug break-words">
                  {badge.title}
                </h3>
                {badge.issuer && (
                  <p className="text-xs font-semibold text-slate-500 mt-1.5">
                    {badge.issuer}
                  </p>
                )}
              </div>

              {/* Action / External Link indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#2F6BFF] group-hover:text-[#2557D6] transition-colors">
                <span>Verify credential</span>
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Credly Profile & More Credentials Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={social.credly || "https://www.credly.com/users/tharsan1305"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-[#2F6BFF] hover:text-[#2F6BFF] transition-all"
          >
            <ShieldCheck size={15} className="text-[#2F6BFF]" />
            <span>View verified Credly profile</span>
            <ExternalLink size={13} />
          </a>

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#1F3864] bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-lg transition-colors cursor-pointer shadow-2xs"
            aria-expanded={showAll}
          >
            <span>{showAll ? 'Show less' : `View additional course & exam credentials (${certifications.length + additionalCertifications.length})`}</span>
            {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>

        {/* Expanded Additional Credentials List */}
        {showAll && (
          <div className="mt-10 pt-8 border-t border-slate-200/80 animate-in fade-in duration-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Additional Credentials &amp; Simulations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.concat(additionalCertifications).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 text-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-slate-500 mb-1.5">
                      <span className="font-bold text-[#1F3864]">{item.issuer}</span>
                      <span>{item.date}</span>
                    </div>
                    <h5 className="font-semibold text-slate-800 text-sm leading-snug">{item.name}</h5>
                  </div>
                  {item.verificationUrl && (
                    <div className="mt-3 pt-2 border-t border-slate-200/60">
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#2F6BFF] hover:underline"
                      >
                        <span>Verify</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
