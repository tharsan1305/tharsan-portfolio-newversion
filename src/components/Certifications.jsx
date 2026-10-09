import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { badgeCertifications, certifications, additionalCertifications, social } from '../data/portfolio';
import credlyBadges from '../data/credlyBadges.json';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const displayBadges = (credlyBadges && credlyBadges.length > 0) ? credlyBadges : badgeCertifications;

  return (
    <section id="certifications" className="py-20 bg-white border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
              Certifications &amp; Badges
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight">
              Certifications &amp; Badges
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
              Verified digital badges, security certifications, and professional learning achievements.
            </p>
          </div>
          <a
            href={social.credly || "https://www.credly.com/users/tharsan1305"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:border-[#2F6BFF] hover:text-[#2F6BFF] transition-all self-start sm:self-auto shrink-0"
          >
            <ShieldCheck size={14} className="text-[#2F6BFF]" />
            <span>View Credly Profile</span>
            <ExternalLink size={11} />
          </a>
        </div>

        {/* ======================================================== */}
        {/* SUBSECTION 1: DIGITAL BADGES (Auto-Synced from Credly)   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBadges.map((badge, idx) => (
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
              <div className="mt-5 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#2F6BFF] group-hover:text-[#2557D6] transition-colors">
                <span>Verify credential</span>
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* ======================================================== */}
        {/* SUBSECTION 2: PROFESSIONAL CERTIFICATIONS (Cleanly Below) */}
        {/* ======================================================== */}
        <div className="mt-16 pt-12 border-t border-slate-200/90">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle size={14} />
              Professional Certifications
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F3864] tracking-tight mt-1">
              Industry Certifications &amp; Accreditations
            </h3>
            <p className="mt-1 text-slate-600 text-sm">
              Formal cybersecurity certifications, specialized engineering credentials, and job simulations.
            </p>
          </div>

          {/* Primary Certifications Cards (3 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="card-base card-hover p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between shadow-2xs hover:border-[#2F6BFF]/80 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-[#2F6BFF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#1F3864] leading-snug">
                    {cert.name}
                  </h4>

                  {cert.credentialId && (
                    <p className="text-xs text-slate-500 mt-2 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                {/* Verification Link / Status */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>Verified</span>
                  </span>
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#2F6BFF] hover:text-[#2557D6] hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-slate-400">Direct Issuer</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Certifications & Job Simulations Grid */}
          <div className="mt-10 pt-8 border-t border-slate-200/80">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Additional Credentials &amp; Industry Simulations ({additionalCertifications.length})
              </h4>
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-xs font-bold text-[#2F6BFF] hover:text-[#2557D6] hover:underline cursor-pointer flex items-center gap-1"
                aria-expanded={showAll}
              >
                <span>{showAll ? 'Collapse list' : `View all (${additionalCertifications.length})`}</span>
                {showAll ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {(showAll ? additionalCertifications : additionalCertifications.slice(0, 6)).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 hover:bg-white hover:shadow-2xs hover:border-slate-300 p-4 rounded-xl border border-slate-200/80 text-xs flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-slate-500 mb-1.5">
                      <span className="font-bold text-[#1F3864]">{item.issuer}</span>
                      <span>{item.date}</span>
                    </div>
                    <h5 className="font-semibold text-slate-800 text-sm leading-snug">{item.name}</h5>
                  </div>
                </div>
              ))}
            </div>

            {!showAll && additionalCertifications.length > 6 && (
              <div className="mt-5 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#1F3864] bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
                >
                  <span>Show remaining {additionalCertifications.length - 6} credentials</span>
                  <ChevronDown size={13} />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
