import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight, Users, Briefcase, Building, TrendingUp, Star, Activity } from 'lucide-react';

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  /* ── Impact Metrics ── */
  const metrics = [
    { value: "500+", label: "Community Members", icon: Users },
    { value: "15+",  label: "Interns & Contributors", icon: TrendingUp },
    { value: "200+", label: "Students Impacted", icon: Star },
    { value: "2",    label: "Startups Founded", icon: Building },
    { value: "10+",  label: "Service Domains", icon: Briefcase },
    { value: "100%", label: "Learning Commitment", icon: Activity },
  ];

  /* ── Leadership Cards ── */
  const leadership = [
    { title: "Founder & CEO", org: "NexoraCrew", icon: Building },
    { title: "Co-Founder & CEO", org: "Vibernox", icon: Building },
    { title: "Community Leader", org: "500+ Members", icon: Users },
    { title: "Student Mentor", org: "Career & Technology Guidance", icon: Star },
  ];

  /* ── Experience Entries ── */
  const experiences = [
    {
      role: "Founder & CEO",
      company: "NexoraCrew",
      period: "Sep 2025 – Present",
      location: "Trichy, Tamil Nadu",
      type: "Student-Led SaaS & Technology Solutions Startup",
      status: "ACTIVE",
      statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      highlights: [
        "Leading 15+ interns and contributors",
        "Built solutions for businesses and educational institutions",
        "Developed Placement Management System serving 200+ students",
        "Created AI automation and workflow solutions",
        "Built a technology community of 500+ members",
        "Managing hosting, deployments, and cloud infrastructure",
      ],
      stack: ["React.js", "Node.js", "MongoDB", "Docker", "Nginx", "AI Automation", "GitHub", "Cloud Technologies"],
      links: [
        { label: "nexoracrew.com", url: "https://nexoracrew.com", emoji: "🌐" },
        { label: "@Nexoracrew", url: "https://instagram.com/Nexoracrew", emoji: "📸" },
        { label: "LinkedIn", url: "https://linkedin.com/company/nexoracrew", emoji: "💼" },
      ],
    },
    {
      role: "Co-Founder & CEO",
      company: "Vibernox",
      period: "2024 – Present",
      location: "Trichy, Tamil Nadu",
      type: "Product-Based Technology Startup",
      status: "ACTIVE",
      statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      highlights: [
        "Leading product strategy and innovation",
        "Building software and hardware-based solutions",
        "Designing product architecture and roadmaps",
        "Applying secure development practices",
      ],
      stack: ["Product Engineering", "SaaS Products", "Hardware Projects", "Automation Systems"],
      links: [],
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

  /* ── Community Impact ── */
  const communityImpact = [
    "Career Guidance", "Technology Mentorship", "Cybersecurity Learning Support",
    "Certification Guidance", "Internship Opportunities", "Technical Discussions", "Resource Sharing",
  ];

  /* ── Daily Ops ── */
  const dailyOps = [
    "Managing startup operations", "Leading intern teams", "Developing SaaS products",
    "Building AI automation systems", "Learning cybersecurity", "Exploring cloud security",
    "Working on networking fundamentals", "Mentoring students", "Researching emerging technologies",
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* ── IMPACT METRICS ── */}
        <div>
          <div className="mb-8">
            <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">&gt;_ IMPACT_METRICS.sys</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">IMPACT</h2>
            <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-4 text-center transition-colors duration-200">
                  <Icon size={18} className="text-accent-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-code">{m.value}</div>
                  <div className="text-[10px] text-gray-400 font-code mt-1 leading-tight">{m.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── LEADERSHIP ── */}
        <div>
          <div className="mb-8">
            <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">&gt;_ LEADERSHIP.sys</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">LEADERSHIP</h2>
            <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((l, idx) => {
              const Icon = l.icon;
              return (
                <div key={idx} className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-5 transition-colors duration-200 flex items-start space-x-3">
                  <div className="p-2 bg-[#0A0F1C] rounded-lg text-accent-cyan border border-[#1E293B] shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-snug">{l.title}</div>
                    <div className="text-xs font-code text-accent-cyan mt-0.5">{l.org}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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

        {/* ── COMMUNITY IMPACT + DAILY OPS (side by side) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Community Impact */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 space-y-4">
            <div>
              <span className="font-code text-xs text-accent-cyan tracking-widest block mb-1">&gt;_ COMMUNITY_IMPACT.sys</span>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-white font-code">500+</span>
                <span className="text-gray-400 font-code text-sm">Members</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {communityImpact.map((item, idx) => (
                <span key={idx} className="text-xs font-code bg-[#0A0F1C] border border-[#1E293B] hover:border-accent-cyan text-white px-3 py-1.5 rounded transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Daily Operations */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 space-y-4">
            <span className="font-code text-xs text-accent-cyan tracking-widest block">&gt;_ DAILY_OPERATIONS.log</span>
            <ul className="space-y-1.5">
              {dailyOps.map((op, idx) => (
                <li key={idx} className="text-xs font-code text-gray-300 flex items-start space-x-2 leading-relaxed">
                  <span className="text-accent-cyan shrink-0">$</span>
                  <span>{op}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
