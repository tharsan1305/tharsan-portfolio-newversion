import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download, Search } from 'lucide-react';
import { hero } from '../data/portfolio';

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Education', target: 'education' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Writing', target: 'writing' },
  { label: 'Contact', target: 'contact' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 2px Blue Scroll Progress Bar at the Top */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#2F6BFF] z-50 transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-0'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-1'
        }`}
      >
        <div className="section-container">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
            
            {/* Logo / Brand Name */}
            <Link
              to="hero"
              smooth={true}
              duration={400}
              className="cursor-pointer font-extrabold text-[#1F3864] text-lg tracking-tight hover:text-[#2F6BFF] transition-colors flex items-center gap-2"
            >
              <span>THARSAN S</span>
            </Link>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={350}
                  activeClass="text-[#2F6BFF] font-semibold bg-blue-50/80"
                  className="px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer font-medium transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Action: Quick Search (Ctrl+K) & Download Resume */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#2F6BFF] bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-colors shadow-2xs cursor-pointer"
                aria-label="Quick Search (Ctrl+K)"
                title="Quick Search (Ctrl+K)"
              >
                <Search size={13} className="text-slate-400" />
                <span>Search</span>
                <kbd className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.2 rounded text-slate-500 font-mono shadow-2xs">⌘K</kbd>
              </button>

              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Download Tharsan S - AI Software Engineer Resume"
                aria-label="Download Tharsan S - AI Software Engineer Resume"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-[#2F6BFF] bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all shadow-xs"
              >
                <Download size={13} />
                <span>Resume</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase ml-0.5">PDF</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="section-container py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={350}
                  activeClass="text-[#2F6BFF] font-semibold bg-blue-50"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 cursor-pointer transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-command-palette'));
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Search size={15} />
                  <span>Quick Search (⌘K)</span>
                </button>
                <a
                  href={hero.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-[#2F6BFF] hover:bg-[#2557D6] rounded-lg shadow-xs transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={15} />
                  <span>Download resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
