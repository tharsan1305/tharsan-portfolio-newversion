import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Writing from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#DBEAFE] selection:text-[#1F3864]">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Tharsan S | Software Engineer</title>
        <meta name="title" content="Tharsan S | Software Engineer" />
        <meta
          name="description"
          content="Portfolio of Tharsan S, a Computer Science & Engineering (Cybersecurity) student and software engineer specializing in full-stack engineering, cybersecurity, and DevSecOps."
        />
        <meta name="keywords" content="Tharsan S, Software Engineer, Cybersecurity, DevSecOps, Spring Boot, React, Python, AWS, Full-Stack Developer, Trichy" />
        <meta name="author" content="Tharsan S" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tharsans.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tharsans.com/" />
        <meta property="og:title" content="Tharsan S | Software Engineer" />
        <meta
          property="og:description"
          content="Portfolio of Tharsan S, a Computer Science & Engineering (Cybersecurity) student and software engineer specializing in full-stack engineering, cybersecurity, and DevSecOps."
        />
        <meta property="og:image" content="https://tharsans.com/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tharsans.com/" />
        <meta property="twitter:title" content="Tharsan S | Software Engineer" />
        <meta
          property="twitter:description"
          content="Portfolio of Tharsan S, a Computer Science & Engineering (Cybersecurity) student and software engineer specializing in full-stack engineering, cybersecurity, and DevSecOps."
        />
        <meta property="twitter:image" content="https://tharsans.com/og-image.png" />

        {/* JSON-LD Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Tharsan S",
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
              "https://tharsans.com/"
            ]
          })}
        </script>
      </Helmet>

      {/* Sticky White Navbar */}
      <Navbar />

      {/* Main Sections in Required Order */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Experience */}
        <Experience />

        {/* 4. Projects & Case Studies */}
        <Projects />

        {/* 5. Skills */}
        <Skills />

        {/* 6. Education */}
        <Education />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Achievements */}
        <Achievements />

        {/* 9. Writing */}
        <Writing />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Back to Top floating button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-white border border-slate-200 text-[#1F3864] hover:text-[#2F6BFF] hover:border-blue-300 shadow-md transition-all duration-200 cursor-pointer ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}

export default App;
