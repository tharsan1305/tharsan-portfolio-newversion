import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Above-the-fold components (loaded synchronously to prevent visual jumps)
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';

// Lightweight skeleton fallback for lazy loaded sections
const SectionSkeleton = () => (
  <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-pulse select-none pointer-events-none">
    <div className="h-4 bg-bg-secondary/30 w-24 sm:w-36 rounded border border-border-color/20" />
    <div className="h-8 bg-bg-secondary/30 w-48 sm:w-72 rounded border border-border-color/20" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
      <div className="h-48 bg-bg-secondary/30 rounded-xl border border-border-color/20" />
      <div className="h-48 bg-bg-secondary/30 rounded-xl border border-border-color/20" />
      <div className="h-48 bg-bg-secondary/30 rounded-xl border border-border-color/20" />
    </div>
  </div>
);

// High-performance helper: lazy imports components wrapped inside a memoized container and Suspense boundary.
const memoLazy = (importFn) => {
  const LazyComponent = React.lazy(importFn);
  const MemoizedComponent = React.memo((props) => (
    <React.Suspense fallback={<SectionSkeleton />}>
      <LazyComponent {...props} />
    </React.Suspense>
  ));
  MemoizedComponent.displayName = 'MemoLazyWrapper';
  return MemoizedComponent;
};

// Asynchronously split and load sections below the fold
const About = memoLazy(() => import('./components/About'));
const Education = memoLazy(() => import('./components/Education'));
const Skills = memoLazy(() => import('./components/Skills'));
const Experience = memoLazy(() => import('./components/Experience'));
const Projects = memoLazy(() => import('./components/Projects'));
const CaseStudies = memoLazy(() => import('./components/CaseStudies'));
const Certifications = memoLazy(() => import('./components/Certifications'));
const Achievements = memoLazy(() => import('./components/Achievements'));
const Blog = memoLazy(() => import('./components/Blog'));
const GithubStats = memoLazy(() => import('./components/GithubStats'));
const Resume = memoLazy(() => import('./components/Resume'));
const Contact = memoLazy(() => import('./components/Contact'));
const AIChat = memoLazy(() => import('./components/AIChat'));
const TerminalOverlay = memoLazy(() => import('./components/TerminalOverlay'));
const NotFound = memoLazy(() => import('./components/NotFound'));

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [terminalActive, setTerminalActive] = useState(false);
  const [is404, setIs404] = useState(false);

  // Check URL pathname for 404 handler
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/' && path !== '/index.html' && path !== '') {
      setIs404(true);
    }
  }, []);

  // Optimized, throttled scroll handler using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // 1. Scroll-to-top visibility toggle
          if (window.scrollY > 400) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }

          // 2. Top page progress bar indicator
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const scrollPercent = (window.scrollY / totalHeight) * 100;
            const bar = document.getElementById('scroll-bar-indicator');
            if (bar) {
              bar.style.width = `${scrollPercent}%`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSplashComplete = () => {
    setLoading(false);
  };

  const triggerTerminal = () => {
    setTerminalActive(true);
  };

  // Render 404 page if path is invalid
  if (is404) {
    return <NotFound />;
  }

  // Snappy transition config (reduced to 0.4s max easeOut)
  const motionConfig = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const divider = <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/15 to-transparent select-none pointer-events-none" />;

  return (
    <>
      {/* Dynamic SEO Tags using React Helmet */}
      <Helmet>
        <title>THARSAN | Software Engineer | Cybersecurity & DevSecOps</title>
        <meta name="description" content="Computer Science & Engineering (Cybersecurity) student and software engineer who builds and secures full-stack production software with Spring Boot, React, Python and AWS." />
        <meta name="keywords" content="THARSAN, Software Engineer, Cybersecurity, DevSecOps, Cloud Security, Spring Boot, React, Python, AWS, Portfolio, Trichy" />
        <meta name="author" content="THARSAN" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tharsans.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tharsans.com/" />
        <meta property="og:title" content="THARSAN | Software Engineer | Cybersecurity & DevSecOps" />
        <meta property="og:description" content="Computer Science & Engineering (Cybersecurity) student and software engineer who builds and secures full-stack production software with Spring Boot, React, Python and AWS." />
        <meta property="og:image" content="https://tharsans.com/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tharsans.com/" />
        <meta property="twitter:title" content="THARSAN | Software Engineer | Cybersecurity & DevSecOps" />
        <meta property="twitter:description" content="Computer Science & Engineering (Cybersecurity) student and software engineer who builds and secures full-stack production software with Spring Boot, React, Python and AWS." />
        <meta property="twitter:image" content="https://tharsans.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "THARSAN",
            jobTitle: "Software Engineer",
            url: "https://tharsans.com/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tiruchirappalli",
              addressRegion: "Tamil Nadu",
              addressCountry: "India"
            },
            sameAs: [
              "https://linkedin.com/in/tharsan1305",
              "https://github.com/tharsan1305",
              "https://discord.gg/ZVBDVU65",
              "https://x.com/THARSANat6",
              "https://builder.aws.com/community/@tharsan",
              "https://learn.microsoft.com/en-gb/users/tharsan13/",
              "https://tryhackme.com/p/stharsan13052007",
              "https://tharsans.com/"
            ]
          })}
        </script>
      </Helmet>

      {/* Optimized Mouse Pointer */}
      <CustomCursor />

      {/* Boot sequence terminal loader */}
      <AnimatePresence>
        {loading && <Splash onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen text-text-primary overflow-x-hidden selection:bg-accent-cyan/30 selection:text-accent-cyan bg-[#050A18]">
          
          {/* tsParticles node-network link background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <ParticlesBackground />
          </div>

          {/* Navigation Bar with Logo click listener */}
          <Navbar onLogoClick={triggerTerminal} />

          {/* Terminal overlay easter egg */}
          <TerminalOverlay active={terminalActive} onClose={() => setTerminalActive(false)} />

          {/* All Sections */}
          <main className="relative z-10">
            {/* 1. Hero Section */}
            <Hero />

            {divider}

            {/* 2. About Section */}
            <motion.div {...motionConfig}>
              <About />
            </motion.div>

            {divider}

            {/* 3. Education Section */}
            <motion.div {...motionConfig}>
              <Education />
            </motion.div>

            {divider}

            {/* 4. Skills Section */}
            <motion.div {...motionConfig}>
              <Skills />
            </motion.div>

            {divider}

            {/* 5. Experience Section */}
            <motion.div {...motionConfig}>
              <Experience />
            </motion.div>

            {divider}

            {/* 6. Projects Section */}
            <motion.div {...motionConfig}>
              <Projects />
            </motion.div>

            {divider}

            {/* Case Studies Section */}
            <motion.div {...motionConfig}>
              <CaseStudies />
            </motion.div>

            {divider}

            {/* 7. Certifications Section */}
            <motion.div {...motionConfig}>
              <Certifications />
            </motion.div>

            {divider}

            {/* 8. Achievements Section */}
            <motion.div {...motionConfig}>
              <Achievements />
            </motion.div>

            {divider}

            {/* 9. Blog Section */}
            <motion.div {...motionConfig}>
              <Blog />
            </motion.div>

            {divider}

            {/* 10. GitHub Activity Section */}
            <motion.div {...motionConfig}>
              <GithubStats />
            </motion.div>

            {divider}

            {/* 11. Resume Section */}
            <motion.div {...motionConfig}>
              <Resume />
            </motion.div>

            {divider}

            {/* 14. Contact Section */}
            <motion.div {...motionConfig}>
              <Contact />
            </motion.div>
          </main>

          {/* Floating AI Chat Assistant */}
          <AIChat />


          {/* Back to Top floating button */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-40 p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-gray-400 hover:text-accent-cyan hover:border-accent-cyan shadow-md transition-all duration-200 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      )}
    </>
  );
}

export default App;
