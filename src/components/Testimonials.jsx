import React from 'react';
import { MessageSquare, Heart, MessageCircle, Quote, Linkedin } from 'lucide-react';
import { testimonials, social } from '../data/portfolio';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-grid-dots">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 text-center">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ COLLABORATION_FEEDBACK
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; TESTIMONIALS<span className="text-accent-cyan">.verified</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-3 rounded-full mx-auto" />
        </div>

        {/* Carousel / Grid of Testimonials */}
        <div className="space-y-6">
          {testimonials.map((test, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-xl p-6 md:p-8 border border-border-color relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-accent-cyan/15 pointer-events-none">
                <Quote size={80} />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:space-x-6">
                
                {/* Visual Avatar Placeholder */}
                <div className="w-14 h-14 rounded-full bg-accent-cyan/10 border border-accent-cyan/35 flex items-center justify-center text-accent-cyan shrink-0 mb-4 md:mb-0">
                  <MessageCircle size={24} className="animate-pulse" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-sm md:text-base text-text-muted italic leading-relaxed mb-6 font-sans">
                    "{test.message}"
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border-color/60 font-code text-xs">
                    <div>
                      <h4 className="font-bold text-white leading-none">{test.name}</h4>
                      <span className="text-accent-purple text-[10px] block mt-1.5">{test.role} at {test.company}</span>
                    </div>
                    
                    <a 
                      href={test.link || social.linkedin} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 text-accent-cyan hover:underline shrink-0 self-start sm:self-auto"
                    >
                      <Linkedin size={14} />
                      <span>{test.link ? "VIEW_PROFILE.sh" : "RECOMMEND_ON_LINKEDIN.exe"}</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
