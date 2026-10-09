import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [expanded, setExpanded] = useState(0);

  /* ── Experience Entries ── */
  const experiences = [
    {
      role: "Software Engineer",
      company: "PragatiX (J.J. College)",
      period: "Sep 2026 – Present",
      location: "Trichy, Tamil Nadu",
      type: "Production student/staff/admin platform: application security, React UI/UX, database and release management",
      status: "ACTIVE",
      statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      highlights: [
        "Led application security activities, started Sep 2026, with production launch on September 7, 2026.",
        "Hosted on AWS (EC2, RDS, CloudFront, Route 53).",
        "Worked on React UI/UX and the database.",
        "Manage ongoing release and app-store submission activities.",
        "Role-based access control with JWT authorization, bcrypt password hashing, and security hardening.",
      ],
      stack: ["Spring Boot", "MySQL", "React.js", "Flutter", "GitHub Actions", "AWS (EC2, RDS, CloudFront, Route 53)", "JWT", "bcrypt"],
      links: [
        { label: "pragatix.in", url: "https://pragatix.in", emoji: "🌐" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=jjcet.PragatiX", emoji: "📱" },
      ],
    },
    {
      role: "Software Engineer",
      company: "NexoraCrew",
      period: "Sep 2025 – Present",
      location: "Trichy, Tamil Nadu",
      type: "Client Projects",
      status: "ACTIVE",
      statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      highlights: [
        "React, Node.js/Express.js, MongoDB on Vercel and Railway.",
        "Built 3-tier platform with 100+ users and role-based access control.",
        "About 70% less manual admin effort from automated reporting and dashboards.",
        "Security-hardened full-stack client solutions.",
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Railway", "RBAC"],
      links: [
        { label: "nexoracrew.com", url: "https://nexoracrew.com", emoji: "🌐" },
        { label: "@Nexoracrew", url: "https://instagram.com/Nexoracrew", emoji: "📸" },
        { label: "LinkedIn", url: "https://linkedin.com/company/nexoracrew", emoji: "💼" },
      ],
    },
    {
      role: "Technical Support & Networking",
      company: "Dream Net Computer Center",
      period: "Past Experience",
      location: "Trichy, Tamil Nadu",
      type: "Technical Support & Infrastructure",
      status: "EXPERIENCE_GAINED",
      statusColor: "text-gray-400 border-[#1E293B] bg-transparent",
      highlights: [
        "Computer assembly and troubleshooting",
        "Operating system installation and maintenance",
        "Networking and router configuration",
        "Cable management and infrastructure support",
        "Server maintenance and technical support",
        "Government portal support and digital services",
      ],
      stack: ["Networking", "Hardware", "System Administration", "Troubleshooting"],
      links: [],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* ── EXPERIENCE CARDS ── */}
        <div>
          <div className="mb-8">
            <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">&gt;_ PROFESSIONAL_WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">EXPERIENCE</h2>
            <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
          </div>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl transition-colors duration-200 overflow-hidden">
                {/* Header row — always visible */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 cursor-pointer"
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      <span className="text-accent-cyan font-code text-xs">@{exp.company}</span>
                      <span className={`text-[9px] font-code px-2 py-0.5 rounded border uppercase ${exp.statusColor}`}>{exp.status}</span>
                    </div>
                    <div className="flex items-center space-x-3 mt-1.5 font-code text-xs text-gray-400 flex-wrap gap-y-1">
                      <span className="flex items-center space-x-1"><Calendar size={11} className="text-accent-cyan" /><span>{exp.period}</span></span>
                      <span className="flex items-center space-x-1"><MapPin size={11} className="text-accent-cyan" /><span>{exp.location}</span></span>
                      <span className="text-[10px] text-gray-500 italic">{exp.type}</span>
                    </div>
                  </div>
                  <div className="shrink-0 mt-2 sm:mt-0">
                    <ChevronRight size={16} className={`text-gray-400 transition-transform duration-200 ${expanded === idx ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {/* Expanded body */}
                {expanded === idx && (
                  <div className="px-5 pb-5 border-t border-[#1E293B]/60 space-y-4 pt-4">
                    {/* Company links */}
                    {exp.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.links.map((l, li) => (
                          <a key={li} href={l.url} target="_blank" rel="noreferrer"
                            className="text-[10px] font-code flex items-center space-x-1.5 bg-[#0A0F1C] border border-[#1E293B] hover:border-accent-cyan px-2.5 py-1 rounded transition-colors text-gray-300 hover:text-white">
                            <span>{l.emoji}</span><span>{l.label}</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div>
                      <div className="text-[10px] font-code text-gray-400 uppercase mb-2">KEY_HIGHLIGHTS:</div>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((pt, pi) => (
                          <li key={pi} className="flex items-start space-x-2 text-xs text-gray-300 leading-relaxed">
                            <span className="text-accent-cyan font-code shrink-0 font-bold">&gt;</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="text-[10px] font-code text-gray-400 uppercase mb-2">STACK:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.stack.map((tag, ti) => (
                          <span key={ti} className="text-[10px] font-code bg-[#0A0F1C] border border-[#1E293B] text-white px-2.5 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
