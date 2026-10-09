import React from 'react';
import { Users, Zap, ShieldCheck, Trophy } from 'lucide-react';
import { impactMetrics } from '../data/portfolio';

const icons = [Users, Zap, ShieldCheck, Trophy];

const ImpactMetrics = () => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 mb-10 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_12px_32px_-12px_rgba(31,56,100,0.12)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {impactMetrics.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between ${
                  idx > 0 && idx % 2 === 0 ? 'pt-5 lg:pt-0' : ''
                } ${idx % 2 === 1 ? 'pt-5 sm:pt-0' : ''} ${
                  idx > 0 ? 'lg:pl-7' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-blue-50 text-[#2F6BFF] border border-blue-100">
                    <Icon size={11} />
                    <span>{item.badge}</span>
                  </span>
                </div>

                <div className="my-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F3864] tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5 leading-snug">
                    {item.label}
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
