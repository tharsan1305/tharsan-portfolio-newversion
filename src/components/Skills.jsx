import React from 'react';
import {
  Code2,
  Boxes,
  Cloud,
  Database,
  ShieldCheck,
  Wrench,
  Sparkles,
  Check,
  Terminal,
  RefreshCw,
  ShieldAlert,
  Lock,
  Bug,
  Wifi,
  Search,
  Eye,
  KeyRound,
  Radar,
  Zap
} from 'lucide-react';
import {
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiGithubactions,
  SiDocker,
  SiTerraform,
  SiGit,
  SiVercel,
  SiRailway,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiOpenai,
  SiAnthropic,
  SiScikitlearn,
  SiPostman,
  SiWireshark,
  SiBurpsuite,
  SiMetasploit,
  SiLinux,
  SiJsonwebtokens
} from 'react-icons/si';
import { FaJava, FaAws, FaCss3Alt } from 'react-icons/fa';
import { skillsGrouped } from '../data/portfolio';

const categoryIcons = {
  'AI & Machine Learning': Sparkles,
  Languages: Code2,
  Frameworks: Boxes,
  'Cloud & DevOps': Cloud,
  Databases: Database,
  Security: ShieldCheck,
  Tools: Wrench
};

const skillIconMap = {
  // Frameworks
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
  'React.js': { icon: SiReact, color: '#087EA4' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { icon: SiExpress, color: '#1E293B' },
  Flask: { icon: SiFlask, color: '#0F172A' },

  // Languages
  Python: { icon: SiPython, color: '#3776AB' },
  JavaScript: { icon: SiJavascript, color: '#CA8A04' },
  Java: { icon: FaJava, color: '#EA580C' },
  SQL: { icon: Database, color: '#2563EB' },
  HTML5: { icon: SiHtml5, color: '#E34F26' },
  CSS3: { icon: FaCss3Alt, color: '#1572B6' },

  // AI & Machine Learning
  'RAG Architecture': { icon: Sparkles, color: '#7C3AED' },
  'MongoDB Vector Search': { icon: SiMongodb, color: '#47A248' },
  'Claude API & LLMs': { icon: SiAnthropic, color: '#D97706' },
  'Prompt Engineering': { icon: Terminal, color: '#2563EB' },
  'OpenAI API': { icon: SiOpenai, color: '#10A37F' },
  'Vector Databases': { icon: Boxes, color: '#0284C7' },
  'scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
  'AI Security Guardrails': { icon: ShieldCheck, color: '#059669' },

  // Cloud & DevOps
  'AWS (EC2, RDS, CloudFront, Route 53)': { icon: FaAws, color: '#FF9900' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Terraform: { icon: SiTerraform, color: '#844FBA' },
  Git: { icon: SiGit, color: '#F05032' },
  Vercel: { icon: SiVercel, color: '#0F172A' },
  Railway: { icon: SiRailway, color: '#0B0D0E' },
  'CI/CD': { icon: RefreshCw, color: '#2563EB' },

  // Databases
  MySQL: { icon: SiMysql, color: '#00618A' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  SQLite: { icon: SiSqlite, color: '#003B57' },

  // Security
  'OWASP Top 10': { icon: ShieldAlert, color: '#DC2626' },
  'OWASP API Security': { icon: ShieldCheck, color: '#EA580C' },
  'Web Application Security': { icon: Lock, color: '#2563EB' },
  'Penetration Testing': { icon: Bug, color: '#DC2626' },
  'Network Security': { icon: Wifi, color: '#4F46E5' },
  'Vulnerability Assessment': { icon: Search, color: '#D97706' },
  'Threat Intelligence': { icon: Eye, color: '#7C3AED' },
  DevSecOps: { icon: ShieldCheck, color: '#059669' },
  'JWT Authentication': { icon: SiJsonwebtokens, color: '#D63AFF' },
  bcrypt: { icon: KeyRound, color: '#475569' },

  // Tools
  Nmap: { icon: Radar, color: '#2563EB' },
  'Burp Suite': { icon: SiBurpsuite, color: '#FF6633' },
  Wireshark: { icon: SiWireshark, color: '#1679A7' },
  'OWASP ZAP': { icon: Zap, color: '#0284C7' },
  Metasploit: { icon: SiMetasploit, color: '#1E293B' },
  Postman: { icon: SiPostman, color: '#FF6C37' },
  'Linux CLI': { icon: SiLinux, color: '#D97706' }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Skills
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Technical Capabilities
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Core technologies, frameworks, and security tooling utilized across production software engineering and infrastructure.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsGrouped.map((group, idx) => {
            const CategoryIcon = categoryIcons[group.category] || Code2;

            return (
              <div
                key={idx}
                className="card-base p-6 bg-white border-slate-200/90 hover:border-slate-300 transition-all shadow-2xs hover:shadow-sm"
              >
                {/* Category Header with Icon */}
                <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#2F6BFF]">
                    <CategoryIcon size={16} />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#1F3864] uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                
                {/* Skill Chips with Brand Icon and Hover Micro-interaction */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => {
                    const skillInfo = skillIconMap[skill] || { icon: Check, color: '#2F6BFF' };
                    const SkillIcon = skillInfo.icon;

                    return (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-150 cursor-default group"
                      >
                        <SkillIcon
                          size={14}
                          className="shrink-0 transition-transform duration-150 group-hover:scale-110"
                          style={{ color: skillInfo.color }}
                        />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
