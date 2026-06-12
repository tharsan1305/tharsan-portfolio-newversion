import React from 'react';
import { 
  Brain, Cpu, MessageSquareCode, Zap, Atom, 
  Shield, ShieldAlert, Search, Flame, Activity, 
  RefreshCw, GitBranch, Workflow, Cloud, Shuffle, Terminal
} from 'lucide-react';
import { interestsList } from '../data/portfolio';

const Interests = () => {
  const getInterestIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain size={18} className="text-accent-cyan" />;
      case 'Cpu': return <Cpu size={18} className="text-accent-cyan" />;
      case 'MessageSquareCode': return <MessageSquareCode size={18} className="text-accent-cyan" />;
      case 'Zap': return <Zap size={18} className="text-accent-cyan" />;
      case 'Atom': return <Atom size={18} className="text-accent-cyan" />;
      case 'Shield': return <Shield size={18} className="text-accent-cyan" />;
      case 'ShieldAlert': return <ShieldAlert size={18} className="text-accent-cyan" />;
      case 'Search': return <Search size={18} className="text-accent-cyan" />;
      case 'Flame': return <Flame size={18} className="text-accent-cyan" />;
      case 'Activity': return <Activity size={18} className="text-accent-cyan" />;
      case 'RefreshCw': return <RefreshCw size={18} className="text-accent-cyan" />;
      case 'GitBranch': return <GitBranch size={18} className="text-accent-cyan" />;
      case 'Workflow': return <Workflow size={18} className="text-accent-cyan" />;
      case 'Cloud': return <Cloud size={18} className="text-accent-cyan" />;
      case 'Shuffle': return <Shuffle size={18} className="text-accent-cyan" />;
      default: return <Terminal size={18} className="text-accent-cyan" />;
    }
  };

  return (
    <section id="interests" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ PASSION_AREAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            INTERESTS & PASSIONS
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {interestsList.map((interest, idx) => (
            <div 
              key={idx}
              className="bg-[#111827] border border-[#1E293B] hover:border-accent-cyan rounded-xl p-5 transition-colors duration-200 flex items-start space-x-3.5"
            >
              <div className="p-2.5 bg-[#0A0F1C] rounded-lg text-accent-cyan shrink-0 mt-0.5 border border-[#1E293B]">
                {getInterestIcon(interest.icon)}
              </div>
              <div>
                <h3 className="font-sans text-sm font-bold text-white mb-1.5 leading-snug">
                  {interest.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {interest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Interests;
