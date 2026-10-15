import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Building2, ExternalLink, X, ChevronRight, Sparkles } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { events } from '../data/events';

// Status badge color mapping
const getStatusChip = (status) => {
  switch (status) {
    case 'Attended':
    case 'Completed':
      return {
        label: status,
        classes: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        dot: 'bg-emerald-500'
      };
    case 'Upcoming':
      return {
        label: status,
        classes: 'text-blue-700 bg-blue-50 border-blue-200',
        dot: 'bg-blue-500'
      };
    case 'Participating':
      return {
        label: status,
        classes: 'text-amber-800 bg-amber-50 border-amber-200',
        dot: 'bg-amber-500'
      };
    default:
      return {
        label: status,
        classes: 'text-slate-700 bg-slate-50 border-slate-200',
        dot: 'bg-slate-400'
      };
  }
};

// Sort comparator: Upcoming & Participating first, then newest completed
const sortEvents = (items) => {
  const priority = {
    'Upcoming': 1,
    'Participating': 2,
    'Attended': 3,
    'Completed': 4
  };

  return [...items].sort((a, b) => {
    const pA = priority[a.status] || 99;
    const pB = priority[b.status] || 99;
    if (pA !== pB) return pA - pB;
    // Newest first by date
    const dateA = a.startDate || '';
    const dateB = b.startDate || '';
    return dateB.localeCompare(dateA);
  });
};

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Focus trap refs
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  const sortedEvents = sortEvents(events);

  // Dynamic filter categories with counts
  const categories = [
    { label: 'All', count: events.length },
    { label: 'Hackathons', count: events.filter((e) => e.type === 'Hackathon').length },
    { label: 'Conferences', count: events.filter((e) => e.type === 'Conference').length },
    { label: 'Workshops', count: events.filter((e) => e.type === 'Workshop').length },
    { label: 'Meetups', count: events.filter((e) => e.type === 'Meetup').length }
  ].filter((cat) => cat.count > 0 || cat.label === 'All');

  // Filtered events
  const filteredEvents = sortedEvents.filter((event) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Hackathons') return event.type === 'Hackathon';
    if (activeCategory === 'Conferences') return event.type === 'Conference';
    if (activeCategory === 'Workshops') return event.type === 'Workshop';
    if (activeCategory === 'Meetups') return event.type === 'Meetup';
    return true;
  });

  // Dynamic counters
  const totalEvents = events.length;
  const activeOrUpcoming = events.filter((e) => e.status === 'Upcoming' || e.status === 'Participating').length;
  const attendedOrCompleted = events.filter((e) => e.status === 'Attended' || e.status === 'Completed').length;
  const hackathonCount = events.filter((e) => e.type === 'Hackathon').length;
  const meetupCount = events.filter((e) => e.type === 'Meetup').length;
  const conferenceCount = events.filter((e) => e.type === 'Conference').length;

  // Open modal handler
  const handleOpenModal = (event, eventTarget) => {
    triggerRef.current = eventTarget;
    setSelectedEvent(event);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setSelectedEvent(null);
    if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
      triggerRef.current.focus();
    }
  };

  // Keyboard navigation and focus trap in modal
  useEffect(() => {
    if (!selectedEvent) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    const focusTimer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedEvent]);

  // Check if an event has extra detail fields
  const hasExtraDetails = (e) => {
    return Boolean(
      (e.shortDescription && e.shortDescription.trim()) ||
      (e.topics && e.topics.length > 0) ||
      (e.takeaway && e.takeaway.trim()) ||
      (e.team && e.team.length > 0) ||
      (e.result && e.result.trim()) ||
      e.linkedinUrl
    );
  };

  return (
    <section id="events" className="py-20 bg-white border-b border-slate-200/80">
      {/* Invisible anchor target for tech-meetups-hackathons */}
      <span id="tech-meetups-hackathons" className="sr-only">Tech Meetups &amp; Hackathons</span>
      
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
              Tech Meetups &amp; Hackathons
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight">
              Tech Meetups &amp; Hackathons
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-[65ch]">
              Competitions and events where I build, learn and meet the community.
            </p>
          </div>

          {/* Dynamic Counters Strip */}
          <div className="flex items-center gap-3 self-start sm:self-auto shrink-0 bg-slate-50 border border-slate-200/90 rounded-xl p-2.5 text-xs text-slate-600">
            <div className="px-2">
              <span className="block font-extrabold text-[#1F3864] text-base leading-tight">{totalEvents}</span>
              <span className="text-[11px] text-slate-500">Total</span>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div className="px-2">
              <span className="block font-extrabold text-emerald-600 text-base leading-tight">{attendedOrCompleted}</span>
              <span className="text-[11px] text-slate-500">Attended</span>
            </div>
            {activeOrUpcoming > 0 && (
              <>
                <div className="w-px h-6 bg-slate-200" />
                <div className="px-2">
                  <span className="block font-extrabold text-amber-600 text-base leading-tight">{activeOrUpcoming}</span>
                  <span className="text-[11px] text-slate-500">Active</span>
                </div>
              </>
            )}
            {hackathonCount > 0 ? (
              <>
                <div className="w-px h-6 bg-slate-200" />
                <div className="px-2">
                  <span className="block font-extrabold text-[#2F6BFF] text-base leading-tight">{hackathonCount}</span>
                  <span className="text-[11px] text-slate-500">Hackathons</span>
                </div>
              </>
            ) : meetupCount > 0 ? (
              <>
                <div className="w-px h-6 bg-slate-200" />
                <div className="px-2">
                  <span className="block font-extrabold text-[#2F6BFF] text-base leading-tight">{meetupCount}</span>
                  <span className="text-[11px] text-slate-500">{meetupCount === 1 ? 'Meetup' : 'Meetups'}</span>
                </div>
              </>
            ) : conferenceCount > 0 ? (
              <>
                <div className="w-px h-6 bg-slate-200" />
                <div className="px-2">
                  <span className="block font-extrabold text-[#2F6BFF] text-base leading-tight">{conferenceCount}</span>
                  <span className="text-[11px] text-slate-500">{conferenceCount === 1 ? 'Conference' : 'Conferences'}</span>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Event category filters">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                  isActive
                    ? 'bg-[#1F3864] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 border border-transparent'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Events Grid (Buttons with accessible focus states) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map((event, idx) => {
            const chip = getStatusChip(event.status);

            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => handleOpenModal(event, e.currentTarget)}
                className="card-base card-hover p-5 bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between text-left group transition-all duration-200 hover:border-[#2F6BFF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] h-full cursor-pointer relative"
                aria-label={`View details for ${event.name}`}
              >
                <div>
                  {/* Top Bar: Type Badge, Date, Status Chip */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {event.type}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-slate-500">
                        {event.displayDate || event.startDate || 'TBA'}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded-full border ${chip.classes}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${chip.dot}`} aria-hidden="true" />
                        {chip.label}
                      </span>
                    </div>
                  </div>

                  {/* Event Name */}
                  <h3 className="text-base font-extrabold text-[#1F3864] group-hover:text-[#2F6BFF] transition-colors leading-snug mb-2">
                    {event.name}
                  </h3>

                  {/* Organizer & Location */}
                  <div className="space-y-1 mb-4 text-xs text-slate-600">
                    {event.organizer && (
                      <div className="flex items-center gap-1.5">
                        <Building2 size={13} className="text-slate-400 shrink-0" aria-hidden="true" />
                        <span className="truncate">{event.organizer}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-400 shrink-0" aria-hidden="true" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Row: View details link + Optional Direct LinkedIn Button */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#2F6BFF] group-hover:text-[#2557D6] inline-flex items-center gap-1">
                    <span>View details</span>
                    <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </span>

                  {event.linkedinUrl && (
                    <a
                      href={event.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 p-1.5 text-slate-400 hover:text-[#0A66C2] hover:bg-blue-50/70 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
                      aria-label={`Open LinkedIn post for ${event.name} in a new tab`}
                      title="View LinkedIn post"
                    >
                      <FaLinkedin size={15} />
                    </a>
                  )}
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* ======================================================== */}
      {/* Centered Modal Popup (Max Width 480px)                   */}
      {/* ======================================================== */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 transition-opacity animate-in fade-in"
          onClick={handleCloseModal}
          role="presentation"
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-[480px] overflow-hidden relative flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
          >
            {/* Modal Header */}
            <div className="p-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-3 bg-slate-50/60">
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {/* Status chip */}
                  {(() => {
                    const chip = getStatusChip(selectedEvent.status);
                    return (
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${chip.classes}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${chip.dot}`} aria-hidden="true" />
                        {chip.label}
                      </span>
                    );
                  })()}

                  {/* Type */}
                  <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {selectedEvent.type}
                  </span>

                  {/* Result if present */}
                  {selectedEvent.result && (
                    <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                      {selectedEvent.result}
                    </span>
                  )}
                </div>

                <h3 id="event-modal-title" className="text-lg sm:text-xl font-extrabold text-[#1F3864] leading-snug">
                  {selectedEvent.name}
                </h3>

                {/* One line: date and location */}
                {(selectedEvent.displayDate || selectedEvent.startDate || selectedEvent.location) && (
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 flex-wrap">
                    {(selectedEvent.displayDate || selectedEvent.startDate) && (
                      <span className="font-semibold text-slate-700">
                        {selectedEvent.displayDate || selectedEvent.startDate}
                      </span>
                    )}
                    {(selectedEvent.displayDate || selectedEvent.startDate) && selectedEvent.location && (
                      <span className="text-slate-300">•</span>
                    )}
                    {selectedEvent.location && (
                      <span>{selectedEvent.location}</span>
                    )}
                  </p>
                )}
              </div>

              {/* Close X Button */}
              <button
                ref={closeBtnRef}
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
                aria-label="Close modal dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Content blocks (hide every block whose field is empty) */}
            <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              
              {/* Organizer if present */}
              {selectedEvent.organizer && (
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <Building2 size={15} className="text-[#2F6BFF] shrink-0" aria-hidden="true" />
                  <span>Organized by <strong className="text-[#1F3864]">{selectedEvent.organizer}</strong></span>
                </div>
              )}

              {hasExtraDetails(selectedEvent) ? (
                <>
                  {/* "About the event": shortDescription */}
                  {selectedEvent.shortDescription && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        About the event
                      </h4>
                      <p className="text-slate-700 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                        {selectedEvent.shortDescription}
                      </p>
                    </div>
                  )}

                  {/* Topic chips from topics[] */}
                  {selectedEvent.topics && selectedEvent.topics.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Topics
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedEvent.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-[#1F3864] border border-blue-100"
                          >
                            <Sparkles size={11} className="text-[#2F6BFF]" aria-hidden="true" />
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* "What I learned": takeaway */}
                  {selectedEvent.takeaway && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        What I learned
                      </h4>
                      <blockquote className="border-l-3 border-[#2F6BFF] pl-3 py-1 italic text-slate-700 bg-blue-50/30 rounded-r-lg">
                        "{selectedEvent.takeaway}"
                      </blockquote>
                    </div>
                  )}

                  {/* Team list only if team[] exists and has items */}
                  {selectedEvent.team && selectedEvent.team.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Team
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedEvent.team.map((member, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Fallback when an event has no extra details */
                <p className="text-xs text-slate-500 italic py-3 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  Details will be added after the event.
                </p>
              )}

            </div>

            {/* Modal Footer: Primary button "View LinkedIn post" (only if linkedinUrl exists) */}
            {selectedEvent.linkedinUrl && (
              <div className="p-4 border-t border-slate-100 bg-slate-50/80">
                <a
                  href={selectedEvent.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0A66C2] hover:bg-[#084e96] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2"
                >
                  <FaLinkedin size={15} />
                  <span>View LinkedIn post</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default Events;
