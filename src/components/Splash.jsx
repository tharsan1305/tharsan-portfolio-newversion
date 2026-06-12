import React, { useState, useEffect } from 'react';

const Splash = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const bootLogs = [
    "Initializing THARSAN_OS v4.2.0-secure...",
    "SECURE BOOT: ENABLED (ISC2-CC compliant)",
    "Loading Crypto modules: SHA-256, RSA-4096, Kyber-1024...",
    "Testing API Gateways (NexoraCrew & Vibernox SaaS)...",
    "Verifying digital certificates (15 Certifications loaded)...",
    "Establishing encrypted connection to SOC analyzer...",
    "System integrity: 100% OK. Booting THARSAN Portfolio..."
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    
    // Print logs progressively
    const logInterval = setInterval(() => {
      if (currentLogIndex < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 220);

    // Progress bar loader
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && logs.length === bootLogs.length) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        const completeTimer = setTimeout(() => {
          onComplete();
        }, 300); // match transition duration
        return () => clearTimeout(completeTimer);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, logs, onComplete]);

  return (
    <div className={`fixed inset-0 bg-[#050A18] z-[9999] flex flex-col justify-between p-6 md:p-12 font-code select-none transition-all duration-300 ${fadeOut ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100'}`}>
      <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col justify-start">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border-color pb-3 mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-accent-red animate-pulse" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-accent-cyan" />
            <span className="text-text-muted text-xs pl-2">guest@tharsans: ~</span>
          </div>
          <span className="text-accent-cyan text-xs font-bold font-display animate-pulse">RECON MODE ACTIVE</span>
        </div>

        {/* Boot Logs */}
        <div className="space-y-2 text-xs md:text-sm text-text-primary flex-grow overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="flex items-start">
              <span className="text-accent-cyan mr-2 font-bold select-none">&gt;</span>
              <span className={index === bootLogs.length - 1 ? "text-green-400 font-bold" : ""}>
                {log}
              </span>
            </div>
          ))}
          {logs.length < bootLogs.length && (
            <div className="flex items-start">
              <span className="text-accent-cyan mr-2 font-bold select-none">&gt;</span>
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar & Loader */}
      <div className="max-w-4xl mx-auto w-full mt-6">
        <div className="flex justify-between items-center text-xs text-text-muted mb-2 font-code">
          <span>DECRYPTING CORE FILES...</span>
          <span className="text-accent-cyan font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-[#0D1529] h-2 rounded-full overflow-hidden border border-border-color">
          <div 
            className="h-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-red transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center text-[10px] text-text-muted mt-3 select-none">
          SYSTEM SHIFT LEFT: ACTIVE | COMPILER: VITE 5 | DEPLOY: READY
        </div>
      </div>
    </div>
  );
};

export default Splash;
