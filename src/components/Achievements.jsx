import React from 'react';
import { Trophy, Award, Target, Shield, ExternalLink } from 'lucide-react';
import { achievements } from '../data/portfolio';

const iconMap = {
  0: Trophy,
  1: Award,
  2: Target,
  3: Shield
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Achievements
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Honors &amp; Milestones
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Recognitions in technical hackathons, cybersecurity poster symposiums, and CTF competitions.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, idx) => {
            const IconComponent = iconMap[idx] || Award;
            return (
              <div
                key={idx}
                className="card-base card-hover p-6 bg-white border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2F6BFF] flex items-center justify-center">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                      {ach.award}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#1F3864] leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {ach.org}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* If TryHackMe, show compact stats & link */}
                {ach.profileUrl && (
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Rooms: <strong className="text-slate-800">{ach.stats.rooms}</strong></span>
                      <span>Badges: <strong className="text-slate-800">{ach.stats.badges}</strong></span>
                    </div>
                    <a
                      href={ach.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2F6BFF] hover:text-[#2557D6] hover:underline"
                    >
                      <span>View profile</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
