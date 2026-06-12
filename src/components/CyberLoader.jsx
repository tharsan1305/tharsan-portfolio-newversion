import React from 'react';

const CyberLoader = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center font-code select-none">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-accent-cyan/20 border-t-accent-cyan animate-spin" />
        
        {/* Inner Ring */}
        <div className="absolute inset-2 rounded-full border-2 border-accent-purple/20 border-b-accent-purple animate-spin-reverse" />
        
        {/* Pulsing Core */}
        <div className="w-4 h-4 rounded-full bg-accent-cyan shadow-cyan-glow animate-pulse" />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <span className="text-xs text-accent-cyan font-bold tracking-widest animate-pulse">
          &gt; INITIALIZING 3D ENVIRONMENT...
        </span>
        <span className="text-[9px] text-text-muted mt-1">
          SHADERS & POLYGONS COMPILING
        </span>
      </div>
    </div>
  );
};

export default CyberLoader;
