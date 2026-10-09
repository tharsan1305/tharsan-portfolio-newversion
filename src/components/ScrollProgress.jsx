import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#2F6BFF] via-[#60A5FA] to-[#1F3864] transition-[width] duration-150 ease-out shadow-xs"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
