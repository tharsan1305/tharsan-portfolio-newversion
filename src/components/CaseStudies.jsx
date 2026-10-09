import React from 'react';
import { Link } from 'react-scroll';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const timelinePhases = [
    {
      phase: "Phase 1: Architecture & DB",
      duration: "Month 1",
      desc: "Designed 3-tier schemas (Student/Staff/Admin). Structured strict MongoDB models and configured JWT role-based access control."
    },
    {
      phase: "Phase 2: Portals & Security",
      duration: "Month 2",
      desc: "Implemented core frontend and backend routes. Set up bcrypt hashing, Helmet security headers, and rate limiting."
    },
    {
      phase: "Phase 3: Deployment & Dashboards",
      duration: "Month 3",
      desc: "Deployed frontend on Vercel and backend on Railway. Automated reporting and dashboards for 100+ users."
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
              <div>ROLE: <span className="text-text-primary">Software Engineer @ NexoraCrew</span></div>
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
                  Engineered a 3-tier platform with React, Node.js/Express.js, and MongoDB on Vercel and Railway, supporting 100+ users with role-based access control. Implemented automated reporting and dashboards reducing manual admin effort by about 70%.
                </p>
              </div>

              <div>
                <h4 className="font-code text-xs text-accent-purple font-bold tracking-widest uppercase mb-2">
                  &gt; THE_SOLUTION
                </h4>
                <ul className="space-y-2.5 text-text-muted font-code text-xs">
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Student Portal:</strong> Profile builder, application tracker, and event notifications.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Staff Portal:</strong> Job posting dashboards, applicant review tools, and export reports.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Admin Portal:</strong> Role-based access control, analytics overview, and user management.</span>
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
                        <td className="p-2.5 font-bold text-white">Admin Effort</td>
                        <td className="p-2.5">Manual Spreadsheets</td>
                        <td className="p-2.5 text-green-400">~70% Less Effort</td>
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
              {["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Railway", "RBAC", "JWT"].map((stack, idx) => (
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

        {/* Featured Case Study Panel 002: PragatiX */}
        <div className="glass-card rounded-2xl p-6 md:p-10 border border-accent-cyan/40 shadow-cyan-glow relative overflow-hidden mt-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Header Metadata */}
          <div className="border-b border-border-color/60 pb-6 mb-8 font-code">
            <div className="text-accent-cyan font-bold text-xs sm:text-sm tracking-wider mb-2">
              CASE_STUDY_002
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              PragatiX – Student Performance & Discipline Management Platform
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs text-text-muted">
              <div>CLIENT: <span className="text-text-primary">J.J. College of Engineering and Technology, Trichy</span></div>
              <div className="hidden sm:inline">|</div>
              <div>TIMELINE: <span className="text-text-primary">Started Sep 2026, Production Launch Sep 7, 2026</span></div>
              <div className="hidden sm:inline">|</div>
              <div>ROLE: <span className="text-text-primary">Software Engineer (Led Application Security Activities)</span></div>
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
                  The college needed one unified, secure platform to track student performance, discipline and milestones, and a way to keep students and staff engaged with verified academic progress.
                </p>
              </div>

              <div>
                <h4 className="font-code text-xs text-accent-cyan font-bold tracking-widest uppercase mb-2">
                  &gt; THE_APPROACH
                </h4>
                <p className="text-text-muted leading-relaxed">
                  Led application security activities, started Sep 2026, production launch September 7, 2026, hosted on AWS (EC2, RDS, CloudFront, Route 53). Also worked on React UI/UX and the database. Manage ongoing release and app-store submission activities.
                </p>
              </div>

              <div>
                <h4 className="font-code text-xs text-accent-purple font-bold tracking-widest uppercase mb-2">
                  &gt; THE_SOLUTION
                </h4>
                <ul className="space-y-2.5 text-text-muted font-code text-xs">
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Student Portal:</strong> dashboard with discipline score, attendance tracking, milestones, and activities view.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Staff and Admin Portals:</strong> activity review, record verification, and discipline management.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Security Hardening:</strong> JWT access control, bcrypt hashing, security headers, rate limiting, and CORS.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={14} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Release Operations:</strong> Published on Google Play Store, managing ongoing release and app-store submission activities.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Development Timeline */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="font-code text-xs text-accent-cyan font-bold tracking-widest uppercase mb-3">
                  &gt; DEVELOPMENT_TIMELINE
                </h4>
                <div className="space-y-4 font-code text-xs">
                  {[
                    {
                      phase: "Phase 1: Build & Database",
                      desc: "React UI/UX, Spring Boot backend APIs, and MySQL schema design."
                    },
                    {
                      phase: "Phase 2: Security Activities",
                      desc: "Led application security activities, JWT access control, bcrypt, and CI/CD security checks."
                    },
                    {
                      phase: "Phase 3: AWS Hosting",
                      desc: "Hosted on AWS (EC2, RDS, CloudFront, Route 53) with GitHub Actions CI/CD."
                    },
                    {
                      phase: "Phase 4: Launch & Releases",
                      desc: "Production launch September 7, 2026, Google Play release, and manage ongoing release and app-store submission activities."
                    }
                  ].map((t, idx) => (
                    <div key={idx} className="flex space-x-3 items-start border-l border-accent-cyan/30 pl-4 relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan absolute -left-[5px] top-1.5" />
                      <div className="flex-grow">
                        <div className="flex justify-between text-[11px] font-bold text-white">
                          <span>{t.phase}</span>
                        </div>
                        <p className="text-text-muted text-[10px] mt-1 leading-relaxed">{t.desc}</p>
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
              {["Spring Boot", "MySQL", "React", "Flutter", "GitHub Actions", "AWS (EC2, RDS, CloudFront, Route 53)", "JWT", "bcrypt"].map((stack, idx) => (
                <span 
                  key={idx}
                  className="text-[10px] font-code bg-bg-primary text-text-muted border border-border-color px-2.5 py-1 rounded"
                >
                  {stack}
                </span>
              ))}
            </div>

            <a
              href="https://pragatix.in"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer bg-accent-cyan hover:bg-accent-cyan/90 text-[#050A18] font-bold px-6 py-2.5 rounded font-code text-xs shadow-cyan-glow hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all flex items-center space-x-2"
            >
              <span>VIEW_LIVE.sh</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
