import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

const Education = () => {
  const primaryEdu = education.find((e) => e.isPrimary);
  const secondaryEdu = education.filter((e) => !e.isPrimary);

  return (
    <section id="education" className="py-24 bg-[#F1F5FC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Top gentle curved transition from white */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="relative block w-full h-5 sm:h-8 text-white fill-current">
          <path d="M0,0 L1200,0 L1200,35 C800,5 400,5 0,35 Z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Education
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Academic Background
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Formal engineering degree and foundational coursework in computer science and cybersecurity.
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          {/* Main Primary Degree Card */}
          {primaryEdu && (
            <div className="card-base card-hover p-6 sm:p-8 bg-white border-blue-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F6BFF] uppercase tracking-wider mb-1">
                    <GraduationCap size={15} />
                    <span>Bachelor of Engineering</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1F3864] leading-snug">
                    {primaryEdu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 mt-1">
                    {primaryEdu.institution}
                    {primaryEdu.affiliation && (
                      <span className="text-slate-500 font-normal"> • Affiliated with {primaryEdu.affiliation}</span>
                    )}
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 font-bold text-[#2F6BFF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80 shadow-2xs">
                    <Award size={13} />
                    {primaryEdu.score}
                  </span>
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <Calendar size={12} />
                    {primaryEdu.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {primaryEdu.description}
              </p>
            </div>
          )}

          {/* Secondary School Entries */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Previous Education
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {secondaryEdu.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 text-xs text-slate-600 space-y-1 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="font-extrabold text-[#1F3864] text-sm">{sec.degree}</div>
                  <div className="text-slate-700 font-medium">{sec.institution} ({sec.affiliation})</div>
                  <div className="text-slate-500 flex items-center justify-between pt-1 border-t border-slate-100 mt-2">
                    <span>Year: {sec.period}</span>
                    <span className="font-semibold text-emerald-600">{sec.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom gentle curved transition to white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="relative block w-full h-5 sm:h-8 text-white fill-current">
          <path d="M0,40 L1200,40 L1200,5 C800,35 400,35 0,5 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Education;
