import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';
import { hero, social } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-[#F1F5FC] border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Feel free to reach out for software engineering internships, technical collaborations, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-base p-6 sm:p-7 bg-white border-slate-200/90 shadow-2xs">
              <h3 className="text-base font-extrabold text-[#1F3864] mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#2F6BFF] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${hero.email}`}
                      className="font-bold text-[#1F3864] hover:text-[#2F6BFF] transition-colors"
                    >
                      {hero.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#2F6BFF] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Location</div>
                    <div className="font-bold text-[#1F3864]">{hero.location}</div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Professional Profiles
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#2F6BFF] hover:bg-blue-50/60 transition-colors border border-slate-200 shadow-2xs"
                  >
                    <FaLinkedin size={15} className="text-[#2F6BFF]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors border border-slate-200 shadow-2xs"
                  >
                    <FaGithub size={15} className="text-slate-800" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={social.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors border border-slate-200 shadow-2xs"
                  >
                    <FaMedium size={15} className="text-slate-800" />
                    <span>Medium</span>
                  </a>
                  <a
                    href={social.tryhackme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50/60 transition-colors border border-slate-200 shadow-2xs"
                  >
                    <SiTryhackme size={15} className="text-red-500" />
                    <span>TryHackMe</span>
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700">
                <p className="font-bold text-[#1E40AF] mb-0.5">Internship Availability</p>
                <p className="font-normal text-slate-600">Open to software engineering, cybersecurity, and DevSecOps internship opportunities.</p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-base p-6 sm:p-8 bg-white border-slate-200/90 shadow-2xs">
              <h3 className="text-base font-extrabold text-[#1F3864] mb-6">
                Send a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Thank you for reaching out. Your message has been sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2F6BFF] transition-colors bg-white shadow-2xs"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2F6BFF] transition-colors bg-white shadow-2xs"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2F6BFF] transition-colors bg-white resize-y shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#2F6BFF] hover:bg-[#2557D6] shadow-sm transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
