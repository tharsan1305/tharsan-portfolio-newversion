import React from 'react';
import { Trophy, Award, Sparkles } from 'lucide-react';
import { achievements } from '../data/portfolio';
import DynamicIcon from './DynamicIcon';

const Achievements = () => {
  const [thmImageFailed, setThmImageFailed] = React.useState(false);

  const getAchievementStyle = (index) => {
    switch (index) {
      case 0: // District 1st
        return {
          border: 'border-amber-500/30',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          iconColor: 'text-amber-400'
        };
      case 1: // 2nd Place
        return {
          border: 'border-slate-400/30',
          badge: 'bg-slate-400/10 text-slate-300 border-slate-400/20',
          iconColor: 'text-slate-300'
        };
      default:
        return {
          border: 'border-[#1E293B] hover:border-accent-cyan/40',
          badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
          iconColor: 'text-accent-cyan'
        };
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ MILESTONES_AND_AWARDS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            ACHIEVEMENTS
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, idx) => {
            const style = getAchievementStyle(idx);
            return (
              <div 
                key={idx}
                className={`bg-[#111827] rounded-xl p-6 border ${style.border} hover:border-accent-cyan transition-colors duration-200 flex flex-col justify-between relative group overflow-hidden`}
              >
                {/* Visual sparkles for top 2 achievements */}
                {idx < 2 && (
                  <div className="absolute top-2 right-2 text-amber-500/40">
                    <Sparkles size={14} />
                  </div>
                )}

                {/* Icon */}
                <div>
                  <div className={`w-12 h-12 rounded-lg bg-[#0A0F1C] border border-[#1E293B] flex items-center justify-center ${style.iconColor} mb-4`}>
                    <DynamicIcon name={ach.icon} size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-bold text-white leading-snug group-hover:text-accent-cyan transition-colors mb-2">
                    {ach.title}
                  </h3>

                  {/* Org */}
                  <p className="font-code text-[11px] text-gray-400 mb-4">
                    @{ach.org}
                  </p>
                </div>

                {/* Prize Badge */}
                <div className="mt-auto pt-3 border-t border-[#1E293B]/50">
                  <span className={`inline-block font-code text-[10px] font-bold px-2.5 py-1 rounded border ${style.badge}`}>
                    {ach.prize.toUpperCase()}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* TryHackMe Live Badge */}
        <div className="mt-12 max-w-xl mx-auto">
          <div className="bg-[#111827] rounded-xl p-5 sm:p-6 border border-accent-cyan/30 hover:border-accent-cyan/60 hover:scale-[1.02] transition-all duration-300 flex flex-col relative group overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            
            <div className="space-y-4">
              <span className="font-code text-[9px] bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 px-2 py-0.5 rounded font-bold">
                LIVE_RANK: UPDATED_AUTOMATICALLY
              </span>
              <h3 className="font-code text-xs font-bold text-white tracking-widest uppercase">
                &gt; TRYHACKME_RANK
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="rounded border border-accent-cyan/15 bg-accent-cyan/5 p-2">
                  <span className="block font-code text-[8px] text-gray-500 uppercase">Rank</span>
                  <span className="font-code text-xs text-accent-cyan font-bold">Top 25%</span>
                </div>
                <div className="rounded border border-accent-cyan/15 bg-accent-cyan/5 p-2">
                  <span className="block font-code text-[8px] text-gray-500 uppercase">Completed Rooms</span>
                  <span className="font-code text-xs text-accent-cyan font-bold">19</span>
                </div>
                <div className="rounded border border-accent-cyan/15 bg-accent-cyan/5 p-2">
                  <span className="block font-code text-[8px] text-gray-500 uppercase">Badges</span>
                  <span className="font-code text-xs text-accent-cyan font-bold">3</span>
                </div>
              </div>
            </div>

            <div className="mt-5 w-full">
              <div className="w-full aspect-[16/9] rounded-lg border border-accent-cyan/30 bg-[#050B16] flex items-center justify-center overflow-hidden shadow-[inset_0_0_24px_rgba(34,211,238,0.08)]">
                {thmImageFailed ? (
                  <span className="font-code text-[10px] text-accent-cyan/70 text-center px-4">
                    TRYHACKME_PROFILE_PREVIEW_UNAVAILABLE
                  </span>
                ) : (
                  <img
                    src="https://res.cloudinary.com/dgqlb8j2x/image/upload/v1781289948/Screenshot_2026-06-13_001444_mpenih.png"
                    alt="TryHackMe profile preview"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      setThmImageFailed(true);
                    }}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <a 
                href="https://tryhackme.com/p/stharsan13052007" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-code text-[10px] text-accent-cyan hover:underline"
              >
                VIEW_THM_PROFILE.sh
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
