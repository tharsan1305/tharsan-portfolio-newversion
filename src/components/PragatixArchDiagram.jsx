import React from 'react';

const PragatixArchDiagram = () => {
  return (
    <div className="w-full bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200/80 overflow-x-auto">
      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
        <span>Production Cloud &amp; App Architecture</span>
        <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-semibold">
          AWS 3-Tier Architecture
        </span>
      </div>

      <svg
        viewBox="0 0 720 230"
        className="w-full h-auto min-w-[580px] max-w-full select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PragatiX Cloud Architecture Diagram: React and Flutter clients connecting via Route 53 and CloudFront to Spring Boot on EC2, MySQL on RDS, and deployment via GitHub Actions"
      >
        <defs>
          {/* Arrow marker */}
          <marker
            id="arch-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#2F6BFF" />
          </marker>

          {/* Gradients */}
          <linearGradient id="client-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5FC" />
          </linearGradient>

          <linearGradient id="aws-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EFF6FF" />
          </linearGradient>
        </defs>

        {/* CONNECTION PATHS WITH ANIMATED SOFT DASHES */}
        {/* Clients to Route 53 */}
        <path
          d="M 120 70 L 175 70"
          fill="none"
          stroke="#2F6BFF"
          strokeWidth="1.75"
          className="animate-dash-line"
          markerEnd="url(#arch-arrow)"
        />

        {/* Route 53 to CloudFront */}
        <path
          d="M 275 70 L 315 70"
          fill="none"
          stroke="#2F6BFF"
          strokeWidth="1.75"
          className="animate-dash-line"
          markerEnd="url(#arch-arrow)"
        />

        {/* CloudFront to Spring Boot on EC2 */}
        <path
          d="M 425 70 L 465 70"
          fill="none"
          stroke="#2F6BFF"
          strokeWidth="1.75"
          className="animate-dash-line"
          markerEnd="url(#arch-arrow)"
        />

        {/* Spring Boot EC2 to MySQL RDS */}
        <path
          d="M 575 70 L 615 70"
          fill="none"
          stroke="#2F6BFF"
          strokeWidth="1.75"
          className="animate-dash-line"
          markerEnd="url(#arch-arrow)"
        />

        {/* GitHub Actions CI/CD to Spring Boot on EC2 (Vertical Deploy line) */}
        <path
          d="M 520 160 L 520 102"
          fill="none"
          stroke="#2F6BFF"
          strokeWidth="1.75"
          className="animate-dash-line"
          markerEnd="url(#arch-arrow)"
        />

        {/* NODE 1: CLIENTS (React & Flutter) */}
        <g transform="translate(10, 25)">
          <rect
            width="110"
            height="90"
            rx="10"
            fill="url(#client-grad)"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          <text x="55" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1F3864">
            CLIENT TIER
          </text>
          <line x1="12" y1="32" x2="98" y2="32" stroke="#E2E8F0" strokeWidth="1" />
          <rect x="15" y="40" width="80" height="18" rx="4" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="55" y="53" textAnchor="middle" fontSize="9" fontWeight="600" fill="#2563EB">
            React.js Web
          </text>
          <rect x="15" y="63" width="80" height="18" rx="4" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="55" y="76" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0284C7">
            Flutter Mobile
          </text>
        </g>

        {/* NODE 2: ROUTE 53 */}
        <g transform="translate(175, 35)">
          <rect
            width="100"
            height="70"
            rx="10"
            fill="url(#aws-grad)"
            stroke="#93C5FD"
            strokeWidth="1"
          />
          <text x="50" y="24" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1E40AF">
            DNS ROUTING
          </text>
          <text x="50" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1F3864">
            Route 53
          </text>
          <text x="50" y="58" textAnchor="middle" fontSize="8" fill="#64748B">
            pragatix.in
          </text>
        </g>

        {/* NODE 3: CLOUDFRONT */}
        <g transform="translate(315, 35)">
          <rect
            width="110"
            height="70"
            rx="10"
            fill="url(#aws-grad)"
            stroke="#93C5FD"
            strokeWidth="1"
          />
          <text x="55" y="24" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1E40AF">
            CDN &amp; SSL
          </text>
          <text x="55" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1F3864">
            CloudFront
          </text>
          <text x="55" y="58" textAnchor="middle" fontSize="8" fill="#64748B">
            Edge Caching
          </text>
        </g>

        {/* NODE 4: SPRING BOOT ON EC2 */}
        <g transform="translate(465, 30)">
          <rect
            width="110"
            height="80"
            rx="10"
            fill="#FFFFFF"
            stroke="#2F6BFF"
            strokeWidth="1.5"
          />
          <text x="55" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2F6BFF">
            AWS EC2
          </text>
          <text x="55" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1F3864">
            Spring Boot
          </text>
          <text x="55" y="56" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569">
            REST API
          </text>
          <text x="55" y="70" textAnchor="middle" fontSize="8" fill="#64748B">
            JWT &amp; bcrypt
          </text>
        </g>

        {/* NODE 5: MYSQL ON RDS */}
        <g transform="translate(615, 35)">
          <rect
            width="95"
            height="70"
            rx="10"
            fill="url(#aws-grad)"
            stroke="#93C5FD"
            strokeWidth="1"
          />
          <text x="47.5" y="24" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1E40AF">
            AWS RDS
          </text>
          <text x="47.5" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1F3864">
            MySQL
          </text>
          <text x="47.5" y="58" textAnchor="middle" fontSize="8" fill="#64748B">
            Managed DB
          </text>
        </g>

        {/* NODE 6: GITHUB ACTIONS PIPELINE */}
        <g transform="translate(430, 160)">
          <rect
            width="180"
            height="50"
            rx="8"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          <text x="90" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0F172A">
            GitHub Actions CI/CD Pipeline
          </text>
          <text x="90" y="38" textAnchor="middle" fontSize="8" fill="#64748B">
            Automated Builds &amp; EC2 Deployment
          </text>
        </g>

        {/* Flow label */}
        <text x="525" y="140" textAnchor="start" fontSize="8" fontWeight="600" fill="#2563EB">
          CI/CD Deploy
        </text>
      </svg>
    </div>
  );
};

export default PragatixArchDiagram;
