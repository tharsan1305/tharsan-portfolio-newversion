import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { GooglePlayIcon, AppleIcon } from './StoreIcons';
import PragatixArchDiagram from './PragatixArchDiagram';

const ProjectDetailModal = ({ project, onClose }) => {
  // Lock body scroll while modal is active
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="pr-8 border-b border-slate-100 pb-5 mb-6">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Project Details
          </div>
          <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {project.title}
          </h3>

          {/* Quick Links Row if real links exist */}
          {(project.live || project.github || project.playStore || project.appStore) && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-3.5 border-t border-slate-100">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors"
                >
                  <span>Live</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <Github size={12} />
                  <span>Source</span>
                </a>
              )}
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <GooglePlayIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Play</span>
                  <ExternalLink size={11} className="text-emerald-600" />
                </a>
              )}
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                >
                  <AppleIcon className="w-3.5 h-3.5 text-slate-900" />
                  <span>Apple App Store</span>
                  <ExternalLink size={11} className="text-slate-500" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Modal Content Sections with exact requested headings */}
        <div className="space-y-6 text-sm text-slate-600">
          
          {/* 1. Overview */}
          {project.overview && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="leading-relaxed">
                {project.overview}
              </p>
            </div>
          )}

          {/* 2. Problem */}
          {project.theProblem && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                The problem
              </h4>
              <p className="leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200/60">
                {project.theProblem}
              </p>
            </div>
          )}

          {/* 3. What I built */}
          {project.whatIBuilt && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                What I built
              </h4>
              <p className="leading-relaxed">
                {project.whatIBuilt}
              </p>
            </div>
          )}

          {/* Architecture diagram for PragatiX */}
          {project.id === 'pragatix' && (
            <div>
              <PragatixArchDiagram />
            </div>
          )}

          {/* 4. Tech stack */}
          {project.tech && project.tech.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Tech stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-chip text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 5. Security and quality */}
          {project.securityAndQuality && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Security and quality
              </h4>
              <p className="leading-relaxed bg-blue-50/50 p-3.5 rounded-lg border border-blue-100 text-slate-700">
                {project.securityAndQuality}
              </p>
            </div>
          )}

          {/* 6. Outcome */}
          {project.outcome && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Outcome
              </h4>
              <p className="leading-relaxed bg-emerald-50/50 p-3.5 rounded-lg border border-emerald-100 text-slate-800 font-medium">
                {project.outcome}
              </p>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
              >
                <span>Live</span>
                <ExternalLink size={12} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
              >
                <Github size={12} />
                <span>Source</span>
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
              >
                <GooglePlayIcon className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google Play</span>
                <ExternalLink size={11} className="text-emerald-600" />
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
              >
                <AppleIcon className="w-3.5 h-3.5 text-slate-900" />
                <span>App Store</span>
                <ExternalLink size={11} className="text-slate-500" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors ml-auto"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailModal;
