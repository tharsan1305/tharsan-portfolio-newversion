import React from 'react';
import { Award, Users, Rocket, Trophy } from 'lucide-react';
import { CountUpNumber } from './CountUp';

const HighlightsStrip = () => {
  return (
    <div className="section-container -mt-6 sm:-mt-8 mb-16 relative z-20">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        
        {/* Stat 1: 8.3/10 CGPA */}
        <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pl-3 first:pl-0">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
            <Award size={20} />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              <CountUpNumber target={8.3} decimals={1} />
              <span className="text-slate-500 font-semibold text-sm sm:text-base">/10</span>
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">
              Academic CGPA
            </div>
          </div>
        </div>

        {/* Stat 2: 100+ users served */}
        <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pl-4">
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
            <Users size={20} />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              <CountUpNumber target={100} />
              <span className="text-emerald-600 font-bold">+</span>
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">
              Users served
            </div>
          </div>
        </div>

        {/* Stat 3: Sep 7, 2026 production launch */}
        <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-4">
          <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
            <Rocket size={20} />
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              Sep 7, 2026
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">
              Production launch
            </div>
          </div>
        </div>

        {/* Stat 4: 2nd place JJCET Hackathon */}
        <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-4">
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 shrink-0">
            <Trophy size={20} />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              <CountUpNumber target={2} />
              <span className="text-amber-600 font-bold text-sm">nd</span>
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">
              Place JJCET Hackathon
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HighlightsStrip;
