import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onLogoClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Scroll detection for adding background transparency & border shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 5) {
      setClickCount(0);
      if (onLogoClick) onLogoClick();
    }
  };

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Education', target: 'education' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Internships', target: 'internships' },
    { label: 'Projects', target: 'projects' },
    { label: 'Case Studies', target: 'case-studies' },
    { label: 'Certs', target: 'certifications' },
    { label: 'Achievements', target: 'achievements' },
    { label: 'Blog', target: 'blog' },
    { label: 'Events', target: 'seminars' },
    { label: 'Now', target: 'now' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0D1529]">
        <div 
          className="h-full bg-accent-cyan transition-all duration-75"
          id="scroll-bar-indicator"
          style={{ width: '0%' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick} 
            className="cursor-pointer flex items-center space-x-2 focus:outline-none bg-transparent border-none"
          >
            <span className="font-display text-2xl font-bold tracking-widest text-accent-cyan shadow-sm transition-transform duration-200">
              T<span className="text-white">S</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                activeClass="text-accent-cyan font-bold border-b border-accent-cyan"
                className="text-gray-400 hover:text-white px-2.5 py-1 cursor-pointer font-code text-[11px] lg:text-xs xl:text-sm transition-colors duration-200 border-b border-transparent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Glowing Hire Me CTA */}
            <Link
              to="contact"
              smooth={true}
              duration={400}
              offset={-80}
              className="cursor-pointer bg-transparent border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 px-4 py-2 rounded-md font-code text-xs transition-colors duration-200 shadow-sm"
            >
              HIRE_ME.sh
            </Link>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-1.5 rounded-full border border-[#1E293B] bg-[#111827]/40"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[60px] bg-bg-secondary/95 backdrop-blur-xl border-b border-border-color transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden pointer-events-none'}`}
      >
        <div className="px-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={400}
              activeClass="text-accent-cyan font-bold pl-2 border-l-2 border-accent-cyan"
              className="block text-text-muted hover:text-text-primary py-2 cursor-pointer font-code text-sm transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              &gt; {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border-color flex justify-center">
            <Link
              to="contact"
              smooth={true}
              duration={400}
              offset={-80}
              className="w-full text-center cursor-pointer bg-bg-primary border border-accent-cyan text-accent-cyan py-2 rounded-md font-code text-sm transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              HIRE_ME.sh
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
