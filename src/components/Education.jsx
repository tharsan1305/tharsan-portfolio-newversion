import React from 'react';
import { Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ ACADEMIC_RECORDS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            EDUCATION
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1E293B] transform -translate-x-1/2" />

          {/* Timeline Cards */}
          <div className="space-y-12 relative">
            {education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-center md:justify-between w-full relative ${isEven ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#0A0F1C] border-2 flex items-center justify-center z-10 ${edu.isCurrent ? 'border-accent-cyan' : 'border-[#1E293B]'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${edu.isCurrent ? 'bg-accent-cyan animate-pulse' : 'bg-gray-500'}`} />
                  </div>

                  {/* Spacer Column for Desktop */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div className={`bg-[#111827] rounded-xl p-6 border ${edu.isCurrent ? 'border-accent-cyan/50' : 'border-[#1E293B]'} hover:border-accent-cyan transition-colors duration-200`}>
                      
                      {/* Header row: year + status badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2 text-gray-400 font-code text-xs">
                          <Calendar size={12} className="text-accent-cyan" />
                          <span>{edu.year}</span>
                        </div>
                        <span className={`text-[9px] font-code px-2 py-0.5 rounded border uppercase tracking-wider ${edu.isCurrent ? 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20 font-bold' : 'bg-transparent text-gray-400 border-[#1E293B]'}`}>
                          {edu.status}
                        </span>
                      </div>

                      {/* Degree / Title */}
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center space-x-2 leading-snug">
                        <GraduationCap size={18} className="text-accent-cyan shrink-0" />
                        <span>{edu.degree}</span>
                      </h3>

                      {/* Institution */}
                      <h4 className="text-sm font-semibold text-accent-cyan mb-1">
                        {edu.institution}
                      </h4>

                      {/* Board / Affiliation */}
                      <p className="text-xs text-gray-400 font-code mb-3">
                        Board/Affiliation: {edu.affiliation}
                      </p>

                      {/* Score / CGPA Badge */}
                      {edu.score && (
                        <div className="flex items-center space-x-2 mb-3">
                          <Award size={13} className={edu.isCgpa ? 'text-accent-cyan' : 'text-gray-400'} />
                          <span className={`text-xs font-code font-bold px-2.5 py-0.5 rounded border ${edu.isCgpa ? 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10' : 'text-gray-300 border-[#1E293B] bg-[#0A0F1C]'}`}>
                            {edu.score}
                          </span>
                        </div>
                      )}

                      {/* Caption / Description */}
                      {edu.description && (
                        <p className="text-xs text-gray-400 leading-relaxed font-sans pt-2.5 border-t border-[#1E293B]/40">
                          {edu.description}
                        </p>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
