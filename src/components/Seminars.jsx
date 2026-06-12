import React from 'react';
import { Calendar, MapPin, Award, CheckCircle2, Play } from 'lucide-react';
import { seminars } from '../data/portfolio';

const Seminars = () => {

  const getRoleColor = (role) => {
    switch (role) {
      case 'Delegate':
        return 'text-accent-purple bg-accent-purple/10 border-accent-purple/20';
      case 'Participant':
        return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20';
      default:
        return 'text-green-400 bg-green-400/10 border-green-400/20';
    }
  };

  return (
    <section id="seminars" className="py-24 relative overflow-hidden bg-grid-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-purple tracking-widest block mb-1">
            &gt;_ PUBLIC_ENGAGEMENTS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; EVENTS<span className="text-accent-purple">.attended</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mt-3 rounded-full" />
        </div>

        {/* Seminars Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seminars.map((ev, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-xl p-5 border border-border-color hover:border-accent-cyan/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-3 font-code text-[10px]">
                  <span className={`px-2 py-0.5 rounded border font-bold ${getRoleColor(ev.role)}`}>
                    {ev.role.toUpperCase()}
                  </span>
                  <div className="flex items-center space-x-1 text-text-muted">
                    <Calendar size={11} />
                    <span>{ev.date}</span>
                  </div>
                </div>

                {/* Event Name */}
                <h4 className="font-display text-base font-bold text-white leading-snug mb-1">
                  {ev.name}
                </h4>

                {/* Organizer */}
                <p className="text-xs text-accent-cyan font-code mb-3">
                  @{ev.organizer}
                </p>

                {/* Details */}
                <div className="space-y-1.5 font-code text-xs text-text-muted pt-3 border-t border-border-color/50 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <MapPin size={12} className="text-accent-red shrink-0" />
                    <span className="truncate">{ev.location}</span>
                  </div>
                  <div className="flex items-start space-x-1.5 pt-1">
                    <Play size={10} className="text-accent-purple shrink-0 mt-1" />
                    <span>Topic: <strong className="text-text-primary font-sans">{ev.topic}</strong></span>
                  </div>
                </div>
              </div>

              {/* Certificate code footer if available */}
              {ev.certificate && (
                <div className="pt-2 mt-auto border-t border-border-color/40 flex items-center justify-between text-[9px] font-code">
                  <span className="text-text-muted">CERTIFICATE_ID:</span>
                  <span className="text-green-400 font-bold select-all bg-bg-primary px-2 py-0.5 rounded border border-green-500/20 flex items-center space-x-1">
                    <CheckCircle2 size={10} />
                    <span>{ev.certificate}</span>
                  </span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Seminars;
