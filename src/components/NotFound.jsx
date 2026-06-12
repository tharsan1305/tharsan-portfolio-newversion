import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-[#050A18] text-[#00D4FF] font-mono flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-md space-y-6 border border-accent-cyan/20 bg-bg-secondary/50 p-8 rounded-xl shadow-cyan-glow">
        <div className="text-accent-red font-bold text-lg animate-pulse">
          ERROR_404: PAGE_NOT_FOUND
        </div>
        <p className="text-xs text-text-muted">
          The page you requested does not exist in this system.
        </p>
        <div className="text-xs space-y-2 text-left bg-bg-primary/80 p-4 rounded border border-border-color">
          <div>&gt; cd /home</div>
          <div className="text-green-400 font-bold flex items-center space-x-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping shrink-0" />
            <span>REDIRECTING_TO_BASE...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
