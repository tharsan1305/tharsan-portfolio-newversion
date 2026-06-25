import React, { useState } from 'react';
import {
  Shield, MapPin, Calendar, Clock, Hash, ChevronRight,
  Wifi, Building2, FolderOpen, ExternalLink, CheckCircle2,
  Terminal, Cpu, Activity, Users
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────────── */
const internships = [
  {
    id: 'INT_01',
    company: 'Redynox',
    role: 'Cyber Security Intern',
    internId: 'RDXINTTHARSGY1A',
    duration: '1 Month',
    period: '21 June 2026 – Present',
    location: 'Remote',
    status: 'ACTIVE',
    statusColor: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    description:
      'Worked with cybersecurity professionals on real-world projects involving network security, vulnerability assessment, penetration testing, and incident response.',
    responsibilities: [
      'Network Security',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Incident Response',
      'Security Analysis',
    ],
    techStack: ['Linux', 'Networking', 'OWASP', 'Python', 'Security Research', 'Incident Response'],
    skillsGained: [
      'Vulnerability Assessment',
      'Threat Analysis',
      'Professional Communication',
      'Industry Exposure',
      'Security Operations',
    ],
  },
  {
    id: 'INT_02',
    company: 'PRODIGIT Software Solutions & Tech Academy',
    role: 'Cyber Security Intern',
    internId: null,
    duration: '24 June 2026 – 23 July 2026',
    period: '24 June 2026 – 23 July 2026',
    location: 'Trichy',
    status: 'ACTIVE',
    statusColor: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    description:
      'Participated in research activities, practical assignments, and project-based learning to gain hands-on industry exposure.',
    responsibilities: [
      'Project-Based Learning',
      'Research Activities',
      'Skill Development',
      'Practical Assignments',
      'Industry Exposure',
    ],
    techStack: ['Linux', 'Networking', 'OWASP', 'Python', 'Security Research'],
    skillsGained: [
      'Vulnerability Assessment',
      'Threat Analysis',
      'Professional Communication',
      'Industry Exposure',
      'Security Operations',
    ],
  },
  {
    id: 'INT_03',
    company: 'Thiranex',
    role: 'Cyber Security Intern',
    internId: 'THX-JUN2426-535',
    duration: '24 June 2026 – 23 July 2026',
    period: '24 June 2026 – 23 July 2026',
    location: 'Remote / Project-Based',
    status: 'ACTIVE',
    statusColor: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    description:
      'Worked on practical cybersecurity projects under industry mentorship through project-based remote learning.',
    responsibilities: [
      'Cyber Security Projects',
      'Industry Mentorship',
      'Security Research',
      'Technical Learning',
      'Project Execution',
    ],
    techStack: ['Linux', 'Networking', 'OWASP', 'Python', 'Security Research', 'Incident Response'],
    skillsGained: [
      'Vulnerability Assessment',
      'Threat Analysis',
      'Professional Communication',
      'Industry Exposure',
      'Security Operations',
    ],
  },
];

const stats = [
  { value: '3+', label: 'Internships', icon: Shield },
  { value: '3+', label: 'Months Experience', icon: Clock },
  { value: '3', label: 'Organizations', icon: Building2 },
  { value: '100%', label: 'Cybersecurity Domain', icon: Activity },
];

const statusTags = [
  '● INDUSTRY_EXPOSURE',
  '● HANDS_ON_LEARNING',
  '● PROJECT_BASED_WORK',
  '● INDUSTRY_MENTORSHIP',
];

/* ─── Component ─────────────────────────────────────────────────────────── */
const Internships = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="internships"
      className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* ── SECTION HEADER ── */}
        <div>
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ INTERNSHIPS.sys
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            INTERNSHIPS
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-code text-[10px] text-gray-400">
            <span>
              ACTIVE_INTERNSHIPS:{' '}
              <span className="text-white font-bold">3</span>
            </span>
            <span>
              DOMAIN:{' '}
              <span className="text-accent-cyan font-bold">CYBERSECURITY</span>
            </span>
            <span className="flex items-center gap-1">
              STATUS:{' '}
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <Wifi size={9} className="animate-pulse" />
                ACTIVE
              </span>
            </span>
          </div>

          {/* Tag pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {statusTags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-code bg-accent-cyan/5 text-accent-cyan border border-accent-cyan/15 px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── STATISTICS ── */}
        <div>
          <span className="font-code text-xs text-accent-cyan tracking-widest block mb-6">
            &gt;_ STATISTICS.log
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-5 text-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,217,255,0.1)] group"
                >
                  <Icon
                    size={18}
                    className="text-accent-cyan mx-auto mb-2 group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="text-2xl font-bold text-white font-code">{s.value}</div>
                  <div className="text-[10px] text-gray-400 font-code mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── TIMELINE + CARDS ── */}
        <div>
          <span className="font-code text-xs text-accent-cyan tracking-widest block mb-8">
            &gt;_ INTERNSHIP_TIMELINE.sys
          </span>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Timeline sidebar – hidden on xs, shown from sm up */}
            <div className="hidden sm:flex flex-col items-start shrink-0 w-44 pt-2">
              <div className="font-code text-xs text-white font-bold mb-3">2026</div>
              <div className="relative pl-4 border-l-2 border-accent-cyan/30 space-y-8 w-full">
                {internships.map((int, idx) => (
                  <div key={int.id} className="relative">
                    {/* dot */}
                    <span className="absolute -left-[9px] top-0.5 w-3.5 h-3.5 rounded-full bg-[#0A0F1C] border-2 border-accent-cyan flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                    </span>
                    <div className="font-code text-[10px] text-gray-300 leading-snug">
                      {int.company}
                    </div>
                    <div className="font-code text-[9px] text-gray-500 mt-0.5">
                      {int.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div className="flex-1 space-y-4">
              {internships.map((int, idx) => (
                <div
                  key={int.id}
                  className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl transition-all duration-200 overflow-hidden hover:shadow-[0_0_20px_rgba(0,217,255,0.08)]"
                >
                  {/* Card header – always visible */}
                  <div
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 cursor-pointer"
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                        {/* Index badge */}
                        <span className="text-[9px] font-code bg-[#0A0F1C] border border-[#1E293B] text-accent-cyan px-2 py-0.5 rounded">
                          {int.id}
                        </span>
                        <h3 className="text-sm font-bold text-white">{int.role}</h3>
                        <span className="text-accent-cyan font-code text-xs">
                          @{int.company}
                        </span>
                        <span
                          className={`text-[9px] font-code px-2 py-0.5 rounded border uppercase ${int.statusColor}`}
                        >
                          {int.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 font-code text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={10} className="text-accent-cyan" />
                          {int.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={10} className="text-accent-cyan" />
                          {int.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} className="text-accent-cyan" />
                          {int.duration}
                        </span>
                        {int.internId && (
                          <span className="flex items-center gap-1">
                            <Hash size={10} className="text-accent-cyan" />
                            ID: {int.internId}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 mt-2 sm:mt-0">
                      <ChevronRight
                        size={16}
                        className={`text-gray-400 transition-transform duration-200 ${
                          expanded === idx ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded body */}
                  {expanded === idx && (
                    <div className="px-5 pb-5 border-t border-[#1E293B]/60 space-y-4 pt-4">
                      {/* Description */}
                      <p className="text-xs text-gray-300 leading-relaxed font-code">
                        <span className="text-accent-cyan">&gt; </span>
                        {int.description}
                      </p>

                      {/* Responsibilities + Skills grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-[10px] font-code text-gray-400 uppercase mb-2">
                            RESPONSIBILITIES:
                          </div>
                          <ul className="space-y-1.5">
                            {int.responsibilities.map((r, ri) => (
                              <li
                                key={ri}
                                className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed"
                              >
                                <span className="text-accent-cyan font-code shrink-0 font-bold">
                                  &gt;
                                </span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-[10px] font-code text-gray-400 uppercase mb-2">
                            SKILLS_GAINED:
                          </div>
                          <ul className="space-y-1.5">
                            {int.skillsGained.map((s, si) => (
                              <li
                                key={si}
                                className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed"
                              >
                                <span className="text-emerald-400 font-code shrink-0">$</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div>
                        <div className="text-[10px] font-code text-gray-400 uppercase mb-2">
                          TECH_STACK:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {int.techStack.map((t, ti) => (
                            <span
                              key={ti}
                              className="text-[10px] font-code bg-[#0A0F1C] border border-[#1E293B] text-white px-2.5 py-0.5 rounded hover:border-accent-cyan transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Status badge row */}
                      <div className="flex items-center gap-2 pt-1">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        <span className="text-[10px] font-code text-emerald-400 font-bold">
                          STATUS: ACTIVE — Internship in progress
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DOCUMENTS SECTION ── */}
        <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="space-y-3 flex-1">
              <span className="font-code text-xs text-accent-cyan tracking-widest block">
                &gt;_ DOCUMENTS.sys
              </span>
              <h3 className="text-lg font-bold text-white">
                Internship Documents &amp; Offer Letters
              </h3>
              <p className="text-xs font-code text-gray-400 leading-relaxed">
                Verified internship offer letters and official internship documents from Redynox,
                PRODIGIT Software Solutions, and Thiranex.
              </p>

              {/* Document tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Redynox Offer Letter', 'PRODIGIT Offer Letter', 'Thiranex Offer Letter'].map(
                  (doc) => (
                    <span
                      key={doc}
                      className="text-[9px] font-code bg-[#0A0F1C] border border-[#1E293B] text-gray-300 px-2.5 py-1 rounded flex items-center gap-1"
                    >
                      <FolderOpen size={9} className="text-accent-cyan" />
                      {doc}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTA button */}
            <div className="shrink-0">
              <a
                href="https://drive.google.com/drive/folders/1uDFoBmuodPnZpqSVeCv1-LnUf0930TRe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-code text-xs font-bold text-accent-cyan border border-accent-cyan hover:bg-accent-cyan/10 hover:shadow-[0_0_14px_rgba(0,217,255,0.3)] transition-all duration-200"
              >
                <FolderOpen size={14} />
                VIEW_ALL_DOCUMENTS.pdf
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Internships;
