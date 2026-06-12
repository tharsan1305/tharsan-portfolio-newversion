import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { 
  Shield, Brain, Cloud, Code, Terminal, 
  FileCode, BarChart3, Network, Cpu, Database, Info 
} from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Cybersecurity');

  const tabs = [
    { id: 'Cybersecurity', label: 'Cybersecurity', icon: Shield, data: skills.cybersecurity || [] },
    { id: 'Security Tools', label: 'Security Tools', icon: Terminal, data: skills.securityTools || [] },
    { id: 'AI-ML-DL', label: 'AI / ML / DL', icon: Brain, data: skills.aiMl || [] },
    { id: 'Full Stack', label: 'Full Stack', icon: Code, data: skills.fullStack || [] },
    { id: 'Languages', label: 'Languages', icon: FileCode, data: skills.languages || [] },
    { id: 'Data Science', label: 'Data Science', icon: BarChart3, data: skills.dataScience || [] },
    { id: 'Networking', label: 'Networking', icon: Network, data: skills.networking || [] },
    { id: 'OS-Linux', label: 'OS & Linux', icon: Cpu, data: skills.linuxOs || [] },
    { id: 'Cloud-DevOps', label: 'Cloud & DevOps', icon: Cloud, data: skills.cloudDevOps || [] },
    { id: 'Databases', label: 'Databases', icon: Database, data: skills.databases || [] }
  ];

  const radarData = [
    { subject: 'Cybersecurity', A: 87, fullMark: 100 },
    { subject: 'AI & LLM', A: 92, fullMark: 100 },
    { subject: 'Security Tools', A: 88, fullMark: 100 },
    { subject: 'Cloud & DevOps', A: 82, fullMark: 100 },
    { subject: 'Development', A: 90, fullMark: 100 },
    { subject: 'Databases', A: 85, fullMark: 100 },
  ];

  const topSkillsList = [
    "OSINT", "Nmap", "Python", "React.js", "MongoDB",
    "RAG", "Prompt Engineering", "AI Automation",
    "Penetration Testing", "OWASP Top 10"
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20';
      case 'Advanced':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      default:
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    }
  };

  const getBarColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-accent-cyan';
      case 'Advanced':
        return 'bg-indigo-500';
      default:
        return 'bg-emerald-500';
    }
  };

  const TabsAndBars = () => (
    <div className="space-y-6">
      {/* Tab Swiping Buttons */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-[#1E293B]">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-md font-code text-xs transition-colors border ${isActive ? 'bg-[#111827] text-accent-cyan border-[#1E293B]' : 'bg-transparent text-gray-400 border-transparent hover:text-white hover:bg-[#111827]/40'}`}
            >
              <TabIcon size={13} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Current Active Tab's Skills list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentTab.data.map((item, idx) => {
          const isTopSkill = topSkillsList.includes(item.name);
          return (
            <div 
              key={idx} 
              className={`bg-[#111827] border rounded-lg p-4 transition-colors duration-200 ${isTopSkill ? 'border-accent-cyan/40 hover:border-accent-cyan bg-[#111827]/90' : 'border-[#1E293B] hover:border-accent-cyan'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-code text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {item.name}
                  </span>
                  {isTopSkill && (
                    <span className="text-[8px] font-code bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/35 px-1.5 py-0.2 rounded font-bold uppercase">
                      TOP
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-code text-xs text-gray-400 font-semibold">
                    {item.percent}%
                  </span>
                  <span className={`text-[9px] font-code px-2 py-0.5 rounded border ${getLevelBadgeColor(item.level)}`}>
                    {item.level}
                  </span>
                </div>
              </div>
              
              {/* Skill Progress Bar */}
              <div className="w-full bg-[#0A0F1C] h-1.5 rounded-full overflow-hidden border border-[#1E293B]">
                <div 
                  className={`h-full ${getBarColor(item.level)}`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ CAPABILITY_MATRIX
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            SKILLS
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3 mb-4" />
          
          {/* Tooltip Description */}
          <div className="flex items-start space-x-2 text-gray-400 bg-[#111827] border border-[#1E293B] rounded-lg p-3 max-w-3xl">
            <Info size={16} className="text-accent-cyan mt-0.5 shrink-0" />
            <p className="font-code text-[11px] sm:text-xs leading-relaxed">
              Skill levels are based on projects, certifications, hands-on labs, CTFs, research, and continuous learning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Radar Chart (Recharts overview) */}
          <div className="lg:col-span-4 bg-[#111827] border border-[#1E293B] rounded-xl p-6 flex flex-col items-center justify-center">
            <h3 className="font-code text-xs text-gray-400 mb-4 self-start">&gt; CAPABILITY_RADAR</h3>
            <div className="w-full h-[250px] flex items-center justify-center font-code text-xs select-none">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#1E293B" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    stroke="#94A3B8" 
                    tick={{ fill: '#94A3B8', fontSize: 9, fontFamily: 'JetBrains Mono' }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]} 
                    tick={{ fill: '#94A3B8', fontSize: 8 }}
                    axisLine={false}
                  />
                  <Radar
                    name="THARSAN"
                    dataKey="A"
                    stroke="#06B6D4"
                    fill="#6366F1"
                    fillOpacity={0.15}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] font-code text-gray-400 mt-2 text-center uppercase tracking-wider">
              Core Vector Matrix Map
            </p>
          </div>

          {/* Clean Skills matrix list */}
          <div className="lg:col-span-8">
            <TabsAndBars />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
