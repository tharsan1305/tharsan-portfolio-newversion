import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, Download, Mail, Code2, Award, Briefcase, User, Layers, Sparkles, Check, ArrowRight } from 'lucide-react';
import { hero, projects, social } from '../data/portfolio';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef(null);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, [isOpen]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items = [
    // Quick Actions
    {
      id: 'resume',
      category: 'Actions',
      icon: Download,
      title: 'Download Resume (PDF)',
      subtitle: 'Tharsan S — AI Software Engineer Resume',
      action: () => {
        window.open(hero.resumeUrl, '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'email',
      category: 'Actions',
      icon: copiedEmail ? Check : Mail,
      title: copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address',
      subtitle: social.email,
      action: () => {
        navigator.clipboard.writeText(social.email);
        setCopiedEmail(true);
        setTimeout(() => {
          setCopiedEmail(false);
          setIsOpen(false);
        }, 800);
      }
    },
    {
      id: 'credly',
      category: 'Actions',
      icon: Award,
      title: 'View Credly Profile',
      subtitle: 'Verified digital badges and credentials',
      action: () => {
        window.open(social.credly, '_blank');
        setIsOpen(false);
      }
    },

    // Navigation Sections
    {
      id: 'sec-hero',
      category: 'Navigation',
      icon: User,
      title: 'Home / Hero',
      subtitle: 'AI Software Engineer intro & quick links',
      action: () => scrollToId('hero')
    },
    {
      id: 'sec-about',
      category: 'Navigation',
      icon: User,
      title: 'About Tharsan',
      subtitle: 'Background, education & focus areas',
      action: () => scrollToId('about')
    },
    {
      id: 'sec-experience',
      category: 'Navigation',
      icon: Briefcase,
      title: 'Work Experience',
      subtitle: 'PragatiX & NexoraCrew software engineering',
      action: () => scrollToId('experience')
    },
    {
      id: 'sec-projects',
      category: 'Navigation',
      icon: Layers,
      title: 'Featured Projects',
      subtitle: 'Production platforms, AI tools & scanners',
      action: () => scrollToId('projects')
    },
    {
      id: 'sec-skills',
      category: 'Navigation',
      icon: Code2,
      title: 'Technical Capabilities',
      subtitle: 'AI & ML, Languages, DevOps, Security',
      action: () => scrollToId('skills')
    },
    {
      id: 'sec-certifications',
      category: 'Navigation',
      icon: Award,
      title: 'Certifications & Badges',
      subtitle: 'ISC2, MongoDB RAG, Cisco AI, OPSWAT ICIP',
      action: () => scrollToId('certifications')
    },
    {
      id: 'sec-writing',
      category: 'Navigation',
      icon: FileText,
      title: 'Articles & Publications',
      subtitle: 'AWS Builder Center & security insights',
      action: () => scrollToId('writing')
    },
    {
      id: 'sec-contact',
      category: 'Navigation',
      icon: Mail,
      title: 'Contact',
      subtitle: 'Get in touch for internships & opportunities',
      action: () => scrollToId('contact')
    },

    // Projects
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      category: 'Projects',
      icon: Sparkles,
      title: p.title,
      subtitle: p.summary,
      action: () => scrollToId('projects')
    }))
  ];

  const filteredItems = items.filter((item) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle?.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const scrollToId = (id) => {
    setIsOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[75vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, skills, sections, or actions..."
            className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-slate-50 flex-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-400">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                    isSelected ? 'bg-blue-50/80 text-[#1F3864]' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected
                          ? 'bg-[#2F6BFF] text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-[#1F3864] truncate">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-[11px] text-slate-500 truncate max-w-sm">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <ArrowRight
                      size={12}
                      className={`transition-transform ${
                        isSelected ? 'text-[#2F6BFF] translate-x-0.5' : 'text-slate-300'
                      }`}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint Bar */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="font-semibold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px]">↑↓</kbd> Navigate</span>
            <span><kbd className="font-semibold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px]">↵</kbd> Select</span>
          </div>
          <div>
            <span><kbd className="font-semibold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px]">Ctrl+K</kbd> to toggle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
