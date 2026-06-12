import React from 'react';
import { Mail, Phone, Shield, Zap } from 'lucide-react';
import { about, hero } from '../data/portfolio';
import DynamicIcon from './DynamicIcon';
import avatarImg from '../assets/avatar.png';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ SYSTEM_PROFILE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            ABOUT_ME
          </h2>
          <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Profile Details Card */}
          <div className="lg:col-span-4 bg-[#111827] border border-[#1E293B] rounded-xl p-6 relative">
            
            {/* Small avatar headshot in About card */}
            <div className="flex flex-col items-center text-center space-y-4 pb-6 border-b border-[#1E293B]">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-[#1E293B]">
                <img 
                  src={avatarImg} 
                  alt="Tharsan S profile" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-none">{hero.name}</h3>
                <span className="text-xs font-code text-accent-cyan block mt-1.5">{hero.title}</span>
              </div>
            </div>

            {/* Meta Table Details */}
            <div className="pt-6 space-y-4 font-code text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">PRONOUNS:</span>
                <span className="text-white font-bold">{about.pronouns}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">DATE_OF_BIRTH:</span>
                <span className="text-white font-bold">{about.dob}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">NATIONALITY:</span>
                <span className="text-white font-bold">Indian</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">STATUS:</span>
                <span className="text-emerald-400 font-bold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>ACTIVE_RECON</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">LANGUAGES:</span>
                <span className="text-white font-bold">{about.languages.join(', ')}</span>
              </div>
            </div>

            {/* Direct Contact Buttons inside card */}
            <div className="mt-6 pt-4 border-t border-[#1E293B] space-y-2.5 font-code text-[11px]">
              <a href={`mailto:${hero.email}`} className="flex items-center space-x-2 text-gray-400 hover:text-accent-cyan transition-colors font-medium">
                <Mail size={14} className="text-accent-cyan" />
                <span>{hero.email}</span>
              </a>
              <a href={`tel:${hero.phone}`} className="flex items-center space-x-2 text-gray-400 hover:text-accent-cyan transition-colors font-medium">
                <Phone size={14} className="text-accent-cyan" />
                <span>{hero.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Side: narrative bio, interests, hobbies */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Paragraph */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 md:p-8">
              <h3 className="font-code text-xs text-accent-cyan mb-4 select-none">&gt;_ SYSTEM_MANIFEST</h3>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                {about.bio.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Interests Badge list */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 tracking-widest font-code flex items-center uppercase">
                <span className="text-accent-cyan mr-2">&gt;</span> SPECIALIZATION_VECTORS
              </h4>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-code font-semibold px-3 py-1.5 rounded-md bg-[#111827] border border-[#1E293B] hover:border-accent-cyan text-white transition-colors duration-200"
                  >
                    #{interest.toUpperCase().replace(/ & /g, '_').replace(/ /g, '_')}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies Grid with Dynamic Icons */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 tracking-widest font-code flex items-center uppercase">
                <span className="text-accent-cyan mr-2">&gt;</span> OTHER_ACTIVITIES.sys
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {about.hobbies.map((hobby, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center space-x-3 p-3 bg-[#111827] border border-[#1E293B] rounded-lg hover:border-accent-cyan transition-all"
                  >
                    <div className="p-2 bg-[#0A0F1C] rounded-md text-accent-cyan">
                      <DynamicIcon name={hobby.icon} size={15} />
                    </div>
                    <span className="font-code text-[11px] md:text-xs text-white font-medium tracking-wide">
                      {hobby.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            {about.currentFocus && about.currentFocus.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-white mb-4 tracking-widest font-code flex items-center uppercase">
                  <span className="text-accent-cyan mr-2">&gt;</span> CURRENT_FOCUS.sys
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.currentFocus.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-1.5 text-xs font-code bg-[#111827] border border-[#1E293B] hover:border-accent-cyan px-3 py-1.5 rounded-md text-white transition-colors duration-200"
                    >
                      <Zap size={11} className="text-accent-cyan shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Mission Section */}
            {about.mission && (
              <div className="bg-[#111827] border border-accent-cyan/25 rounded-xl p-5 font-code text-xs">
                <span className="text-gray-400 block mb-2 font-bold uppercase tracking-widest">&gt;_ MISSION</span>
                <p className="text-white leading-relaxed font-semibold">
                  {about.mission}
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
