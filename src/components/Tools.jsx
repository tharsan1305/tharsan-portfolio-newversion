import React from 'react';
import { Terminal, ShieldAlert, Cpu, GitBranch, Box, Server, Activity, Search, Eye, Flame, Code, Globe, MessageSquareCode, Shuffle, Figma } from 'lucide-react';
import { tools } from '../data/portfolio';
import DynamicIcon from './DynamicIcon';

const Tools = () => {
  
  // Categorize tools for clean grouping
  const categories = {
    'Security': { title: 'SECURITY_AUDITING', icon: ShieldAlert, color: 'text-accent-red' },
    'Cloud': { title: 'CLOUD_AND_SERVER', icon: Server, color: 'text-accent-purple' },
    'AI': { title: 'INTELLIGENCE_SYSTEMS', icon: Cpu, color: 'text-accent-cyan' },
    'Dev': { title: 'DEV_AND_PROTOTYPING', icon: Code, color: 'text-accent-cyan' },
    'OS': { title: 'OPERATING_SYSTEMS', icon: Terminal, color: 'text-green-400' }
  };

  const getToolsByCategory = (catKey) => {
    return tools.filter(t => t.category === catKey);
  };

  return (
    <section id="tools" className="py-24 relative overflow-hidden bg-bg-secondary/25 border-y border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ ENVIRONMENTAL_CONFIGURATION
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; TOOLS<span className="text-accent-cyan">.config</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-3 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, config]) => {
            const GroupIcon = config.icon;
            const groupTools = getToolsByCategory(key);
            
            return (
              <div 
                key={key}
                className="glass-card rounded-xl p-5 border border-border-color hover:border-accent-purple/30 transition-all"
              >
                {/* Group Header */}
                <div className="flex items-center space-x-2 pb-3 border-b border-border-color/65 mb-4">
                  <GroupIcon className={config.color} size={18} />
                  <span className="font-code text-xs font-bold text-white tracking-wider">
                    {config.title}
                  </span>
                </div>

                {/* Tools Grid within group */}
                <div className="grid grid-cols-2 gap-2">
                  {groupTools.map((tool, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-2 p-2 bg-bg-primary/55 border border-border-color/60 hover:border-accent-cyan/35 rounded-lg transition-all"
                    >
                      <div className="text-accent-cyan">
                        <DynamicIcon name={tool.icon} size={14} />
                      </div>
                      <span className="font-code text-[10px] text-text-muted truncate group-hover:text-text-primary">
                        {tool.name}
                      </span>
                    </div>
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

export default Tools;
