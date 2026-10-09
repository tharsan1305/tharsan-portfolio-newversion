import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { certifications, additionalCertifications } from '../data/portfolio';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certifications" className="py-20 bg-white border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Certifications
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Verified Credentials
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Industry security certifications and practical engineering credentials.
          </p>
        </div>

        {/* 5 Primary Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card-base card-hover p-5 sm:p-6 bg-white border-slate-200/90 flex flex-col justify-between"
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

                <h3 className="text-base font-extrabold text-[#1F3864] leading-snug">
                  {cert.name}
                </h3>

                {cert.credentialId && (
                  <p className="text-xs text-slate-500 mt-2 font-mono">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* Verification Link if available */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
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

        {/* View All Toggle Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#1F3864] bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-lg transition-colors cursor-pointer shadow-2xs"
            aria-expanded={showAll}
          >
            <span>{showAll ? 'Show less' : `View all (${certifications.length + additionalCertifications.length} credentials)`}</span>
            {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>

        {/* Expanded List */}
        {showAll && (
          <div className="mt-8 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
            {additionalCertifications.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-slate-500 mb-1.5">
                    <span className="font-bold text-[#1F3864]">{item.issuer}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm leading-snug">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
