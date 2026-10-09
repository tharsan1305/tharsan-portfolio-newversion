import React from 'react';
import { Code2, Boxes, Cloud, Database, ShieldCheck, Wrench, Check, Sparkles } from 'lucide-react';
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
            Core technologies and tools utilized in full-stack engineering, cloud infrastructure, and security assessments.
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
                
                {/* Skill Chips with small icon and hover lift */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 hover:text-[#1F3864] hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-150 cursor-default"
                    >
                      <Check size={11} className="text-[#2F6BFF] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
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
