import React, { useState } from 'react';
import { ExternalLink, Calendar, Linkedin, BookOpen, Star } from 'lucide-react';
import { blog } from '../data/portfolio';

const categoryColors = {
  "Cybersecurity Careers":      "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10",
  "Career Development":         "text-indigo-400 border-indigo-400/20 bg-indigo-400/10",
  "Cybersecurity Awareness":    "text-amber-400 border-amber-400/20 bg-amber-400/10",
  "Student Growth":             "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
  "AI & Future Careers":        "text-purple-400 border-purple-400/20 bg-purple-400/10",
  "AI Security":                "text-purple-400 border-purple-400/20 bg-purple-400/10",
  "Startups & Entrepreneurship":"text-orange-400 border-orange-400/20 bg-orange-400/10",
};

const filters = ["ALL", "LINKEDIN", "FEATURED", "SECURITY", "PRIVACY", "CAREER", "STARTUPS", "AI"];

const Blog = () => {
  const [active, setActive] = useState("ALL");

  const filtered = blog.filter(post => {
    if (active === "ALL") return true;
    if (active === "LINKEDIN") return post.platform === "LinkedIn";
    if (active === "FEATURED") return post.featured;
    if (active === "SECURITY") return post.category?.toLowerCase().includes("security") || post.tags?.some(t => t.toLowerCase() === "security");
    if (active === "PRIVACY") return post.category?.toLowerCase().includes("privacy") || post.tags?.some(t => t.toLowerCase() === "privacy");
    if (active === "CAREER") return post.category?.toLowerCase().includes("career") || post.category?.toLowerCase().includes("student");
    if (active === "STARTUPS") return post.category?.toLowerCase().includes("startup");
    if (active === "AI") return post.category?.toLowerCase().includes("ai") || post.tags?.some(t => t.toLowerCase() === "ai");
    return true;
  });

  const topicTags = ["Cybersecurity Careers", "AI & Technology", "Student Growth", "Startups", "Security Awareness", "Learning Roadmaps"];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#0A0F1C] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
              &gt;_ TECHNICAL_PUBLICATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              BLOG.feed
            </h2>
            <div className="w-12 h-0.5 bg-accent-cyan mt-3" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-code text-xs">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-3 py-1.5 rounded border transition-colors ${active === f ? 'bg-[#111827] text-accent-cyan border-accent-cyan/50 font-bold' : 'bg-transparent text-gray-400 border-transparent hover:text-white hover:bg-[#111827]/40'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Author stats banner */}
        <div className="bg-[#111827] border border-accent-cyan/25 rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-2.5 bg-[#0A0F1C] rounded-lg border border-[#1E293B]">
              <Linkedin size={18} className="text-accent-cyan" />
            </div>
            <div>
              <div className="font-code text-xs text-gray-400">ACTIVE_WRITER</div>
              <div className="text-white font-bold text-sm mt-0.5">9+ Published Articles on Medium & LinkedIn</div>
              <div className="font-code text-[10px] text-gray-400 mt-0.5">
                Sharing insights on cybersecurity, AI security, privacy, careers, startups, and emerging technologies.
              </div>
            </div>
          </div>
          <a
            href="https://medium.com/@stharsan.cs"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 flex items-center space-x-2 text-xs font-code font-bold bg-[#0A0F1C] border border-accent-cyan/35 hover:border-accent-cyan text-accent-cyan px-4 py-2 rounded-lg transition-colors"
          >
            <span>VIEW_MEDIUM.sh</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filtered.map((post, idx) => {
            const catColor = categoryColors[post.category] || "text-gray-400 border-gray-400/20 bg-gray-400/10";
            return (
              <div
                key={idx}
                className={`bg-[#111827] rounded-xl p-5 border transition-all duration-200 flex flex-col justify-between ${post.featured ? 'border-accent-cyan/40 hover:border-accent-cyan' : 'border-[#1E293B] hover:border-accent-cyan/50'}`}
              >
                <div>
                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-code bg-blue-600/10 text-blue-400 border border-blue-600/20 px-2 py-0.5 rounded uppercase">
                        {post.platform}
                      </span>
                      {post.featured && (
                        <span className="text-[9px] font-code flex items-center space-x-0.5 text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2 py-0.5 rounded">
                          <Star size={9} className="fill-current" /><span>FEATURED</span>
                        </span>
                      )}
                      <span className={`text-[9px] font-code px-2 py-0.5 rounded border ${catColor}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-[10px] font-code text-gray-400">
                      <Calendar size={10} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug hover:text-accent-cyan transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-[#1E293B]/60 mt-3 flex items-center justify-between font-code text-xs">
                  <span className="text-[9px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">
                    {post.status}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 text-accent-cyan hover:underline text-[10px]"
                  >
                    <span>{post.button || "READ_ON_LINKEDIN"}</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="flex items-center justify-center pt-2">
          <a
            href="https://linkedin.com/in/tharsan1305"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-xs font-code border border-accent-cyan/30 hover:border-accent-cyan text-accent-cyan hover:bg-accent-cyan/5 px-6 py-3 rounded-lg transition-all"
          >
            <Linkedin size={14} />
            <span>VIEW_ALL_ON_LINKEDIN.exe</span>
          </a>
        </div>

        {/* Topic Tags */}
        <div className="mt-8 pt-6 border-t border-[#1E293B]/50">
          <span className="font-code text-[10px] text-gray-400 block mb-3 uppercase">CONTENT_TOPICS:</span>
          <div className="flex flex-wrap gap-2">
            {topicTags.map((t, idx) => (
              <span key={idx} className="text-[10px] font-code bg-[#111827] text-gray-400 border border-[#1E293B] px-2.5 py-1 rounded">
                #{t.toUpperCase().replace(/ /g, '_')}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
