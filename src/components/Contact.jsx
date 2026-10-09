import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaMediumM, FaMicrosoft } from 'react-icons/fa';
import { FaXTwitter, FaReddit, FaAws, FaDiscord } from 'react-icons/fa6';
import { SiTryhackme, SiLeetcode } from 'react-icons/si';
import { social } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate cyber handshake transmission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
            &gt;_ INITIATE_SOCKET_CONNECTION
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            &gt; CONTACT<span className="text-accent-cyan">.init</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <h3 className="font-code text-xs text-text-muted mb-6">&gt; SECURE_MESSAGE_TRANSMISSION</h3>
              
              {status === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 font-code text-xs space-y-3 animate-fade-in text-center my-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-bold text-green-400">PAYLOAD_TRANSMITTED_SUCCESSFULLY</h4>
                  <p className="text-text-muted leading-relaxed max-w-sm mx-auto">
                    Session socket established. THARSAN will receive your encrypted message package shortly. Code: 200 OK.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-code text-xs text-text-primary">
                  {/* Name & Email Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-text-muted">SENDER_NAME *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#050A18] border border-border-color focus:border-accent-cyan rounded-lg p-3 text-text-primary focus:outline-none transition-all placeholder:text-text-muted/40"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-text-muted">SENDER_EMAIL *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#050A18] border border-border-color focus:border-accent-cyan rounded-lg p-3 text-text-primary focus:outline-none transition-all placeholder:text-text-muted/40"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-text-muted">SUBJECT</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#050A18] border border-border-color focus:border-accent-cyan rounded-lg p-3 text-text-primary focus:outline-none transition-all placeholder:text-text-muted/40"
                      placeholder="Internship / Engineering inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-text-muted">PAYLOAD_CONTENT *</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#050A18] border border-border-color focus:border-accent-cyan rounded-lg p-3 text-text-primary focus:outline-none transition-all placeholder:text-text-muted/40"
                      placeholder="Write your request message details here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-accent-cyan hover:bg-accent-cyan/95 text-[#050A18] font-bold px-6 py-3.5 rounded-lg flex items-center justify-center space-x-2 shadow-cyan-glow hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all disabled:opacity-50 font-code"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>ESTABLISHING_HANDSHAKE...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>SEND_PAYLOAD.sh</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Right Side: Details & Grid of Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Coordinates Box */}
            <div className="glass-card rounded-xl p-6 border border-border-color space-y-4">
              <h3 className="font-code text-xs text-text-muted pb-2 border-b border-border-color/60">&gt; HOST_COORDINATES</h3>
              
              <div className="space-y-3 font-code text-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-cyan/15 text-accent-cyan flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block">EMAIL</span>
                    <a href={`mailto:${social.email}`} className="text-text-primary hover:text-accent-cyan font-bold transition-all select-all">{social.email}</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-red/15 text-accent-red flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block">LOCATION</span>
                    <span className="text-text-primary font-bold">Palakari, Trichy, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid with Hover Glow */}
            <div className="glass-card rounded-xl p-6 border border-border-color flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-code text-xs text-text-muted pb-2 border-b border-border-color/60 mb-4">&gt; REMOTE_SHELL_CONNECTIONS</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={social.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                  >
                    <FaLinkedinIn size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                    <span>LINKEDIN</span>
                  </a>
                  
                  <a 
                    href={social.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                  >
                    <FaGithub size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                    <span>GITHUB</span>
                  </a>

                  <a 
                    href={social.discord} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-[#5865F2] hover:border-[#5865F2] transition-all group font-code text-xs"
                  >
                    <FaDiscord size={14} className="text-[#5865F2] group-hover:scale-110 transition-transform" />
                    <span>DISCORD</span>
                  </a>

                  <a 
                    href={social.medium} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                  >
                    <FaMediumM size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                    <span>MEDIUM</span>
                  </a>

                  <a 
                    href={social.tryhackme} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                  >
                    <SiTryhackme size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                    <span>TRYHACKME</span>
                  </a>

                  {/* LeetCode */}
                  <a 
                    href={social.leetcode} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                  >
                    <SiLeetcode size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                    <span>LEETCODE</span>
                  </a>

                  {/* Microsoft Learn */}
                  {social.microsoftLearn && (
                    <a 
                      href={social.microsoftLearn} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                    >
                      <FaMicrosoft size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                      <span>MS LEARN</span>
                    </a>
                  )}

                  {/* X (Twitter) */}
                  {social.x && (
                    <a 
                      href={social.x} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                    >
                      <FaXTwitter size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                      <span>X (TWITTER)</span>
                    </a>
                  )}

                  {/* Reddit */}
                  {social.reddit && (
                    <a 
                      href={social.reddit} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                    >
                      <FaReddit size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                      <span>REDDIT</span>
                    </a>
                  )}

                  {/* AWS Builder Center */}
                  {social.awsBuilder && (
                    <a 
                      href={social.awsBuilder} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2.5 p-3 bg-bg-primary/50 border border-border-color rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all group font-code text-xs"
                    >
                      <FaAws size={14} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                      <span>AWS BUILDER</span>
                    </a>
                  )}

                  {/* Discord Channel — full width */}
                  <a 
                    href="https://discord.gg/ZVBDVU65" 
                    target="_blank" 
                    rel="noreferrer"
                    className="col-span-2 flex items-center justify-between p-3 bg-[#5865F2]/5 border border-[#5865F2]/25 hover:border-[#5865F2] rounded-lg text-text-muted hover:text-[#5865F2] transition-all group font-code text-xs"
                  >
                    <div className="flex items-center space-x-2.5">
                      <FaDiscord size={16} className="text-[#5865F2] group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="block text-white font-bold text-[11px]">DISCORD_SERVER</span>
                        <span className="text-[9px] text-gray-400">Join Discord Server</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5 shrink-0">
                      <span className="text-[9px] font-code bg-[#5865F2]/10 text-[#5865F2] border border-[#5865F2]/20 px-2 py-0.5 rounded uppercase">COMMUNITY</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5865F2] animate-pulse" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 pt-4 border-t border-border-color/60 space-y-3 font-code text-[11px]">
                <div className="flex items-center space-x-2 text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <span>AVAILABILITY: Open to internships: Software Engineering, Cybersecurity, DevSecOps</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Software Engineering", "Cybersecurity", "DevSecOps", "Cloud Security", "Spring Boot", "React", "Python", "AWS"].map((f, i) => (
                    <span key={i} className="text-[9px] font-code bg-[#0A0F1C] border border-[#1E293B] text-gray-300 px-2 py-0.5 rounded">{f}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
