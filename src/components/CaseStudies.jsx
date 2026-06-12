import React from 'react';
import { Link } from 'react-scroll';
import { BookOpen, CheckCircle, ArrowRight, ShieldCheck, Database, Server, RefreshCw } from 'lucide-react';

const CaseStudies = () => {
  const timelinePhases = [
    {
      phase: "Phase 1: Architecture & DB",
      duration: "Month 1",
      desc: "Designed the 3-portal schemas (Student/Staff/Admin). Structured strict MongoDB schemas and set up JWT role-based privileges."
    },
    {
      phase: "Phase 2: Portals & Security",
      duration: "Month 2",
      desc: "Implemented core frontend/backend routes. Integrated sandboxed Judge0 compiler via Docker. Set up bcrypt, Helmet, and rate limiting."
    },
    {
      phase: "Phase 3: Docker & VPS",
      duration: "Month 3",
      desc: "Containerized MERN apps, configured Nginx reverse proxy, and deployed to Hostinger KVM VPS, hitting a stable 99.5% uptime."
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-bg-secondary/20 border-y border-border-color">
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ SYSTEM_ANALYSIS_AND_METRICS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; CASE_STUDIES<span className="text-accent-cyan">.deep_dive</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-3 rounded-full" />
        </div>

        {/* Featured Case Study Panel */}
        <div className="glass-card rounded-2xl p-6 md:p-10 border border-accent-cyan/40 shadow-cyan-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Header Metadata */}
          <div className="border-b border-border-color/60 pb-6 mb-8 font-code">
            <div className="text-accent-cyan font-bold text-xs sm:text-sm tracking-wider mb-2">
              CASE_STUDY_001
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              College Placement Management System
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs text-text-muted">
              <div>CLIENT: <span className="text-text-primary">J.J. College of Engineering & Technology, Trichy</span></div>
              <div className="hidden sm:inline">|</div>
              <div>DURATION: <span className="text-text-primary">3 Months</span></div>
              <div className="hidden sm:inline">|</div>
              <div>ROLE: <span className="text-text-primary">Founder & Lead Architect @ NexoraCrew</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Column 1: Problem & Approach */}
            <div className="lg:col-span-6 space-y-6 text-sm">
              <div>
                <h4 className="font-code text-xs text-accent-red font-bold tracking-widest uppercase mb-2">
                  &gt; THE_PROBLEM
                </h4>
                <p className="text-text-muted leading-relaxed">
                  JJCET had no centralized system for managing student placement activities. Staff manually tracked applications via spreadsheets. Students had no portal to register, apply, or track status. Admins had zero real-time visibility.
                </p>
              </div>

              <div>
                <h4 className="font-code text-xs text-accent-cyan font-bold tracking-widest uppercase mb-2">
                  &gt; THE_APPROACH
                </h4>
                <p className="text-text-muted leading-relaxed">
                  Designed a 3-portal architecture (Student / Staff / Admin) with strict role-based access control via JWT authorization. Deployed on Hostinger KVM VPS using Docker containers and Nginx reverse proxy. Integrated an online compiler (Java, C, C++, Python) via Judge0 inside a sandboxed Docker container.
                </p>
              </div>

              <div>
                <h4 className="font-code text-xs text-accent-purple font-bold tracking-widest uppercase mb-2">
                  &gt; THE_SOLUTION
                </h4>
                <ul className="space-y-2.5 text-text-muted font-code text-xs">
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Student Portal:</strong> Profile builder, application tracker, coding compiler sandbox.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Staff Portal:</strong> Job posting dashboards, applicant review tools, export reports.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Admin Portal:</strong> User controls, server health check grids, real-time analytics.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Security Stack:</strong> JWT auth, bcrypt hashing, Helmet.js headers, rate-limiting, CORS.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Results & Comparison */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="font-code text-xs text-green-400 font-bold tracking-widest uppercase mb-3">
                  &gt; BEFORE_VS_AFTER
                </h4>
                <div className="overflow-x-auto rounded-lg border border-border-color bg-bg-primary/50 text-xs font-code">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border-color bg-bg-secondary/40 text-text-primary">
                        <th className="p-2.5 font-bold">METRIC</th>
                        <th className="p-2.5 font-bold text-accent-red">BEFORE</th>
                        <th className="p-2.5 font-bold text-green-400">AFTER</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border-color/50 text-text-muted">
                        <td className="p-2.5 font-bold text-white">Student Logging</td>
                        <td className="p-2.5">Manual Sheets</td>
                        <td className="p-2.5 text-green-400">Central Portal</td>
                      </tr>
                      <tr className="border-b border-border-color/50 text-text-muted">
                        <td className="p-2.5 font-bold text-white">Report Speed</td>
                        <td className="p-2.5">Days</td>
                        <td className="p-2.5 text-green-400">70% Faster</td>
                      </tr>
                      <tr className="text-text-muted">
                        <td className="p-2.5 font-bold text-white">Server Uptime</td>
                        <td className="p-2.5">Not self-hosted</td>
                        <td className="p-2.5 text-green-400">99.5% Uptime</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-code text-xs text-accent-cyan font-bold tracking-widest uppercase mb-3">
                  &gt; DEVELOPMENT_TIMELINE
                </h4>
                <div className="space-y-4 font-code text-xs">
                  {timelinePhases.map((t, idx) => (
                    <div key={idx} className="flex space-x-3 items-start border-l border-accent-cyan/30 pl-4 relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan absolute -left-[5px] top-1.5" />
                      <div className="flex-grow">
                        <div className="flex justify-between text-[11px] font-bold text-white">
                          <span>{t.phase}</span>
                          <span className="text-accent-cyan">{t.duration}</span>
                        </div>
                        <p className="text-text-muted text-[10px] mt-0.5">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Row & View CTA */}
          <div className="border-t border-border-color/60 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {["MERN Stack", "Docker", "Nginx", "MongoDB", "JWT", "Node.js", "Judge0", "VPS"].map((stack, idx) => (
                <span 
                  key={idx}
                  className="text-[10px] font-code bg-bg-primary text-text-muted border border-border-color px-2.5 py-1 rounded"
                >
                  {stack}
                </span>
              ))}
            </div>

            <Link
              to="projects"
              smooth={true}
              duration={400}
              offset={-80}
              className="cursor-pointer bg-accent-cyan hover:bg-accent-cyan/90 text-[#050A18] font-bold px-6 py-2.5 rounded font-code text-xs shadow-cyan-glow hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all flex items-center space-x-2"
            >
              <span>VIEW_PROJECT_CODE.sh</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
