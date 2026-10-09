import React from 'react';
import { ExternalLink } from 'lucide-react';
import { blog, social } from '../data/portfolio';

const Writing = () => {
  return (
    <section id="writing" className="py-20 bg-[#F1F5FC] border-b border-slate-200/80">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
            Writing
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#1F3864] tracking-tight">
            Articles &amp; Publications
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
            Insights on cloud, cybersecurity architecture, career readiness, and engineering execution.
          </p>
        </div>

        {/* 4 Article Cards in a 2x2 grid on desktop, 1 col on mobile, equal card heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blog.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base card-hover p-6 bg-white border-slate-200/90 flex flex-col justify-between group text-left h-full"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span
                    className={`font-bold px-2.5 py-0.5 rounded-full border ${
                      article.platform === 'AWS Builder Center'
                        ? 'text-orange-800 bg-orange-50 border-orange-200'
                        : 'text-[#2F6BFF] bg-blue-50 border-blue-200/80'
                    }`}
                  >
                    {article.platform}
                  </span>
                  <span className="font-medium text-slate-400">{article.date}</span>
                </div>

                <h3 className="text-base font-extrabold text-[#1F3864] group-hover:text-[#2F6BFF] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#2F6BFF] group-hover:text-[#2557D6]">
                <span>Read article</span>
                <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* View all articles link */}
        <div className="mt-10 text-center">
          <a
            href={social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 hover:text-[#2F6BFF] transition-all"
          >
            <span>View all articles</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Writing;
