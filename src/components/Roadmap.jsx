import React from 'react';
import { Calendar, Target, Award, CheckCircle2, Shield } from 'lucide-react';

const Roadmap = () => {
  const roadmapData = [
    {
      year: "1st Year (Completed)",
      phaseName: "PHASE_1.bin",
      focus: ["AI Tools", "Prompt Engineering", "ChatGPT Ecosystem", "Claude AI", "AI Automation", "No-Code Tools", "Content Creation", "Productivity Systems"],
      achievements: [
        "Built strong foundation in AI tools and automation",
        "Explored LLM capabilities and prompt engineering",
        "Learned AI-assisted workflows and productivity systems"
      ],
      status: "COMPLETED_SUCCESSFULLY",
      statusStyle: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      accent: "text-emerald-400",
      nodeColor: "border-emerald-500"
    },
    {
      year: "2nd Year (Completed)",
      phaseName: "PHASE_2.bin",
      focus: ["Software Development", "Full Stack Development", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git & GitHub", "Docker", "SaaS Development", "System Design"],
      achievements: [
        "Built multiple production-ready applications",
        "Founded NexoraCrew",
        "Co-Founded Vibernox",
        "Developed College Placement Management System",
        "Worked on AI-powered products and SaaS platforms"
      ],
      status: "COMPLETED_SUCCESSFULLY",
      statusStyle: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      accent: "text-emerald-400",
      nodeColor: "border-emerald-500"
    },
    {
      year: "3rd Year (Current Year)",
      phaseName: "PHASE_3.bin",
      focus: ["Cybersecurity Fundamentals", "Network Security", "Linux Administration", "Ethical Hacking", "OWASP Top 10", "OSINT", "SOC Analysis", "Threat Intelligence", "Digital Forensics", "CTFs"],
      certifications: [
        "ISC2 Certified in Cybersecurity (CC)",
        "CompTIA Security+",
        "Security Blue Team Certifications"
      ],
      status: "IN_PROGRESS",
      statusStyle: "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10",
      accent: "text-accent-cyan",
      nodeColor: "border-accent-cyan"
    },
    {
      year: "4th Year",
      phaseName: "PHASE_4.bin",
      focus: ["Cloud Security", "DevSecOps", "Application Security", "IAM", "Container Security", "Kubernetes Security", "AWS Security", "Azure Security", "Threat Detection Engineering"],
      certifications: [
        "AWS Security Specialty",
        "CKS Kubernetes Security",
        "Azure Security Engineer"
      ],
      status: "PLANNED",
      statusStyle: "text-gray-400 border-[#1E293B] bg-transparent",
      accent: "text-gray-400",
      nodeColor: "border-[#1E293B]"
    },
    {
      year: "After Graduation",
      phaseName: "PHASE_5.bin",
      focus: ["AI Security Engineering", "LLM Security Architecture", "Platform Security", "Cloud Security Architecture", "Red Team Operations", "Security Research", "Product Security", "Enterprise Security"],
      certifications: [
        "CISSP",
        "OSCP",
        "Advanced Cloud Security Certifications"
      ],
      status: "FUTURE_OBJECTIVE",
      statusStyle: "text-gray-400 border-[#1E293B] bg-transparent",
      accent: "text-gray-400",
      nodeColor: "border-[#1E293B]"
    }
  ];

  const targetRoles = [
    "AI Security Engineer",
    "DevSecOps Engineer",
    "Cloud Security Engineer",
    "Application Security Engineer",
    "Platform Security Engineer"
  ];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ EXECUTION_PLAN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            CAREER_ROADMAP
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main Column: Vertical Timeline */}
          <div className="lg:col-span-8 relative">
            {/* Center line for timeline on desktop */}
            <div className="absolute left-4 md:left-6 top-2 bottom-2 w-0.5 bg-[#1E293B]" />

            <div className="space-y-10">
              {roadmapData.map((item, idx) => (
                <div key={idx} className="relative pl-12 md:pl-16 group">
                  
                  {/* Timeline Marker */}
                  <div className={`absolute left-2 md:left-4 top-1.5 w-4.5 h-4.5 rounded-full bg-[#0A0F1C] border-2 ${item.nodeColor} flex items-center justify-center z-10 shadow-sm`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  </div>

                  {/* Content card */}
                  <div className="bg-[#111827] rounded-xl p-6 border border-[#1E293B] hover:border-accent-cyan transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <h3 className={`text-base font-bold text-white flex items-center gap-2`}>
                        <Calendar size={15} className="text-accent-cyan" />
                        {item.year}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-[8px] font-code px-2 py-0.5 rounded border uppercase tracking-wider ${item.statusStyle}`}>
                          {item.status}
                        </span>
                        <span className="font-code text-[10px] text-gray-400">
                          {item.phaseName}
                        </span>
                      </div>
                    </div>

                    {/* Skill / Focus List */}
                    <div className="mb-4">
                      <span className="text-[9px] font-code text-gray-400 block mb-2 uppercase">VECTOR_FOCUS:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.focus.map((tech, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-xs font-code bg-[#0A0F1C] border border-[#1E293B] px-2.5 py-0.5 rounded text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements List */}
                    {item.achievements && (
                      <div className="mb-4 pt-3 border-t border-[#1E293B]/40">
                        <span className="text-[9px] font-code text-gray-400 block mb-2 uppercase">ACHIEVEMENTS:</span>
                        <ul className="space-y-1">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="text-xs text-gray-400 flex items-start space-x-2 leading-relaxed">
                              <span className="text-accent-cyan font-code">&gt;</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Target Certifications */}
                    {item.certifications && (
                      <div className="pt-3 border-t border-[#1E293B]/40">
                        <span className="text-[9px] font-code text-gray-400 block mb-2 uppercase">TARGET_CERTIFICATIONS:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.certifications.map((cert, cIdx) => (
                            <span 
                              key={cIdx} 
                              className="inline-flex items-center gap-1.5 text-xs font-code bg-[#0A0F1C] border border-[#1E293B] px-2.5 py-0.5 rounded text-white"
                            >
                              <Award size={12} className="text-accent-cyan" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Target Roles Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#111827] rounded-xl p-6 border border-accent-cyan/35 relative overflow-hidden">
              
              <div className="flex items-center gap-2 mb-6 border-b border-[#1E293B] pb-3">
                <Target className="text-accent-cyan" size={16} />
                <h3 className="font-code text-xs font-bold text-white tracking-widest">
                  &gt; TARGET_ROLES.cfg
                </h3>
              </div>

              <div className="space-y-3">
                {targetRoles.map((role, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#0A0F1C] border border-[#1E293B] rounded-lg hover:border-accent-cyan transition-colors group duration-300"
                  >
                    <span className="font-code text-xs text-gray-300 leading-tight group-hover:text-white">
                      {role}
                    </span>
                    <span className="font-code text-[10px] text-accent-cyan bg-accent-cyan/5 px-2 py-0.5 rounded border border-accent-cyan/20 shrink-0">
                      ROLE_0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Console logs */}
              <div className="mt-6 p-4 rounded-lg bg-[#0A0F1C] border border-[#1E293B] font-code text-[10px] text-gray-400 space-y-1 text-left">
                <p>ROADMAP_STATUS: UPDATED_SUCCESSFULLY</p>
                <p className="text-emerald-400">● EXECUTION_IN_PROGRESS</p>
                <p className="text-accent-cyan">● BUILDING_SECURE_SYSTEMS</p>
                <p className="text-indigo-400">● LEARNING_CONTINUOUSLY</p>
                <p className="text-white font-bold mt-1">● TARGET: AI_SECURITY_ENGINEER</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Roadmap;
