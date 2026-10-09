export const hero = {
  name: "THARSAN S",
  title: "AI Software Engineer | AI DevOps & AI Security",
  tagline: "Building and securing AI-powered, full-stack production software.",
  location: "Trichy, Tamil Nadu, India",
  email: "stharsan13052007@gmail.com",
  statusText: "Open to internships: Software Engineering, Cybersecurity, DevSecOps",
  resumeUrl: "https://drive.google.com/file/d/1DyVzrbLzgAZUUNWorQ1KZSsO5iSrk4VT/view?usp=sharing",
  pragatixLive: "https://pragatix.in",
  pragatixPlayStore: "https://play.google.com/store/apps/details?id=jjcet.PragatiX",
  stats: [
    { label: "Academic Standing", value: "8.3/10 CGPA" },
    { label: "Platform Reach", value: "100+ users served" },
    { label: "Production Launch", value: "Sep 7, 2026 production launch" },
    { label: "Hackathon", value: "2nd place JJCET Hackathon" }
  ]
};

export const about = {
  name: "THARSAN S",
  title: "AI Software Engineer | AI DevOps & AI Security",
  location: "Trichy, Tamil Nadu, India",
  email: "stharsan13052007@gmail.com",
  github: "https://github.com/tharsan1305",
  linkedin: "https://linkedin.com/in/tharsan1305",
  paragraphs: [
    "I'm a pre-final-year Computer Science & Engineering (Cybersecurity) student at J.J. College of Engineering and Technology, Trichy, with a CGPA of 8.3/10. I build and secure full-stack software using Spring Boot, React, Python and AWS.",
    "I work on PragatiX, a production platform for my college that launched on September 7, 2026. I led application security activities and also worked on the React UI/UX and the database. Since September 2025 I have also built client web applications at NexoraCrew using React, Node.js, Express.js and MongoDB. I am looking for a Software Engineering, Cybersecurity or DevSecOps internship."
  ],
  chips: [
    "CGPA 8.3/10",
    "Production launch Sep 7, 2026",
    "100+ users served",
    "2nd Place JJCET Hackathon"
  ]
};

export const experience = [
  {
    role: "Software Engineer & Security Engineer",
    company: "PragatiX",
    companySub: "J.J. College Platform",
    period: "Sep 2026 – Present",
    location: "Trichy, Tamil Nadu, India",
    website: "https://pragatix.in",
    playStore: "https://play.google.com/store/apps/details?id=jjcet.PragatiX",
    appStore: "https://apps.apple.com/us/app/pragatix/id6814354285",
    bullets: [
      "Led application security activities for the production academic platform, with production launch on September 7, 2026, hosted on AWS (EC2, RDS, CloudFront, Route 53).",
      "Engineered React UI/UX, database integration, and role-based access control for student, faculty, and administrative tiers.",
      "Published production mobile application on Google Play Store and Apple App Store, and manage ongoing release and app-store submission activities."
    ],
    tech: ["Spring Boot", "MySQL", "React.js", "Flutter", "AWS", "GitHub Actions", "DevSecOps"]
  },
  {
    role: "Software Engineer",
    company: "NexoraCrew",
    companySub: "Client Solutions",
    period: "Sep 2025 – Present",
    location: "Trichy, Tamil Nadu, India",
    website: "https://nexoracrew.com",
    bullets: [
      "Engineered a 3-tier client platform with React, Node.js/Express.js, and MongoDB deployed on Vercel and Railway for 100+ users with role-based access control.",
      "Reduced manual administrative effort by about 70% through automated reporting and centralized dashboards.",
      "Implemented security-hardened authentication flows with bcrypt hashing and rate limiting."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Railway", "RBAC"]
  }
];

export const projects = [
  {
    id: "pragatix",
    title: "PragatiX: Student Performance & Discipline Management Platform",
    summary: "A production platform for J.J. College of Engineering and Technology with separate student, staff and admin portals, on web and mobile. Started Sep 2026, production launch Sep 7, 2026.",
    overview: "A production platform for J.J. College of Engineering and Technology with separate student, staff and admin portals, on web and mobile. Started Sep 2026, production launch Sep 7, 2026.",
    theProblem: "The college needed one secure place to track student performance, discipline and milestones, and a way to keep students and staff engaged with verified academic progress.",
    whatIBuilt: "A Spring Boot REST API with a MySQL database, a React web frontend, and a Flutter mobile app. The student portal has a dashboard with discipline score, attendance tracking, milestones and an activities view. Staff and admin portals handle activity review, record verification and discipline management. I designed the React UI/UX and worked on the database.",
    tech: ["Spring Boot", "MySQL", "React.js", "Flutter", "GitHub Actions", "AWS (EC2, RDS, CloudFront, Route 53)", "JWT", "bcrypt"],
    securityAndQuality: "I led application security activities: JWT-based role access, bcrypt password hashing, security headers, rate limiting, CORS protection, and dependency vulnerability scanning in the GitHub Actions CI/CD pipeline. I also authored internal security and compliance policies covering data handling, access control and release governance.",
    outcome: "Live in production and published on Google Play. I manage ongoing release and app-store submission activities across Google Play and the Apple App Store.",
    categories: ["Production", "Security"],
    live: "https://pragatix.in",
    github: null,
    playStore: "https://play.google.com/store/apps/details?id=jjcet.PragatiX",
    appStore: "https://apps.apple.com/us/app/pragatix/id6814354285"
  },
  {
    id: "api-agent",
    title: "AI-Powered API Penetration Testing Agent",
    summary: "A Python agent that automates API security testing. Built collaboratively with 2 contributors.",
    overview: "A Python agent that automates API security testing. Built collaboratively with 2 contributors.",
    theProblem: "Manual API security reviews are slow, and their findings are scattered and hard to compare between scans.",
    whatIBuilt: "The agent discovers endpoints from OpenAPI/Swagger specs, Postman collections or a base URL, then runs active tests against the OWASP API Security Top 10: BOLA/IDOR, broken authentication, JWT tampering (alg=none, weak HMAC), rate-limit abuse, and injection (SQLi, NoSQLi, XSS, SSTI, path traversal). It uses the OpenAI API for AI-driven triage, executive summaries and secure code patch suggestions, with heuristic fallbacks when the LLM is disabled.",
    tech: ["Python", "OpenAI API", "REST APIs", "OWASP API Security Top 10"],
    securityAndQuality: "Automates active tests against OWASP API Security Top 10 vulnerabilities including authorization bypasses, algorithmic JWT flaws, and injection vectors.",
    outcome: "Generates HTML, PDF, JSON and Markdown reports and tracks new, resolved and unchanged findings across scans.",
    categories: ["AI & ML", "Security"],
    live: null,
    github: "https://github.com/tharsan1305",
    playStore: null,
    appStore: null
  },
  {
    id: "sentinel-ai",
    title: "SENTINEL.AI: Phishing Email Classifier & URL Threat Analyzer",
    summary: "A dashboard that inspects email bodies and embedded links for phishing.",
    overview: "A dashboard that inspects email bodies and embedded links for phishing.",
    theProblem: "Phishing attacks and malicious links are increasingly deceptive, requiring real-time automated inspection of raw message content and URLs.",
    whatIBuilt: "A Flask web app that uses TF-IDF vectorization and a Multinomial Naive Bayes model to classify emails, plus a URL threat analysis engine. It shows threat scores, diagnostic logs and an email sandbox simulator, with real-time prediction.",
    tech: ["Python", "Flask", "TF-IDF", "Multinomial Naive Bayes", "HTML5", "CSS3", "JavaScript"],
    securityAndQuality: "Combines feature extraction with lexical URL heuristics and risk-based threat scoring to deliver transparent security diagnostic breakdowns.",
    outcome: "Shows threat scores, diagnostic logs and an email sandbox simulator, with real-time prediction.",
    categories: ["AI & ML", "Security"],
    live: "https://phishing-email-detection-model-psi.vercel.app/",
    github: "https://github.com/tharsan1305",
    playStore: null,
    appStore: null
  },
  {
    id: "vuln-scanner",
    title: "Vulnerability Scanner",
    summary: "A Python network security tool with a Flask web dashboard.",
    overview: "A Python network security tool with a Flask web dashboard.",
    theProblem: "Network administrators need rapid, accessible network reconnaissance utilities to identify open exposure vectors without cumbersome tooling.",
    whatIBuilt: "Real-time TCP port scanning, service enumeration and vulnerability detection with security risk classification. Users can download scan reports.",
    tech: ["Python", "Flask", "Nmap", "Socket Programming", "SQLite", "HTML5", "CSS3", "JavaScript"],
    securityAndQuality: "Structured port probes, banner grabbing, and risk grading based on known service signatures and security classifications.",
    outcome: "Users can download scan reports with security risk classification.",
    categories: ["Security"],
    live: "https://vulnerability-scanner-eight-delta.vercel.app/",
    github: "https://github.com/tharsan1305/Vulnerability-Scanner",
    playStore: null,
    appStore: null
  },
  {
    id: "mom-tool",
    title: "MoM-to-Image Generation & Prompt Engineering Tool (Personal Project)",
    summary: "A web tool that turns meeting minutes into structured AI prompts and visual summaries.",
    overview: "A web tool that turns meeting minutes into structured AI prompts and visual summaries.",
    theProblem: "Extracting actionable visual concepts and structured prompts from lengthy meeting notes is manual and inconsistent.",
    whatIBuilt: "A prompt-engineering module that summarizes meeting notes into generative prompts, with custom parameter control and template styles, and an image generation pipeline.",
    tech: ["Python", "React.js", "Prompt Engineering", "Vercel"],
    securityAndQuality: "Parameter validation and prompt sanitization with deterministic template formatting.",
    outcome: "The prompt engine is live on Vercel with real users. The image pipeline is built end-to-end but not deployed yet.",
    categories: ["AI & ML"],
    live: null,
    github: "https://github.com/tharsan1305",
    playStore: null,
    appStore: null
  },
  {
    id: "placement-system",
    title: "Case study: College Placement Management System (NexoraCrew)",
    summary: "A 3-tier platform with student, staff and admin portals using React, Node.js/Express.js and MongoDB, deployed on Vercel and Railway, with JWT-based role-based access control.",
    overview: "A 3-tier recruitment platform engineered for campus recruitment drives at J.J. College of Engineering & Technology, serving 100+ users.",
    theProblem: "The college had no central system for placements. Staff tracked applications in spreadsheets, students had no portal to apply or track status, and admins had no real-time visibility.",
    whatIBuilt: "A 3-tier platform with student, staff and admin portals using React, Node.js/Express.js and MongoDB, deployed on Vercel and Railway, with JWT-based role-based access control. Automated reporting and dashboards.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Railway", "RBAC"],
    securityAndQuality: "JWT auth, bcrypt hashing, rate limiting, CORS.",
    outcome: "Serves 100+ users and reduced manual administrative effort by about 70%.",
    categories: ["Production"],
    live: "https://nexoracrew.com",
    github: null,
    playStore: null,
    appStore: null
  }
];

export const skillsGrouped = [
  {
    category: "AI & Machine Learning",
    skills: ["RAG Architecture", "MongoDB Vector Search", "Claude API & LLMs", "Prompt Engineering", "OpenAI API", "Vector Databases", "scikit-learn", "AI Security Guardrails"]
  },
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "Java", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks",
    skills: ["Spring Boot", "React.js", "Node.js", "Express.js", "Flask"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, RDS, CloudFront, Route 53)", "GitHub Actions", "Docker", "Terraform", "Git", "Vercel", "Railway", "CI/CD"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"]
  },
  {
    category: "Security",
    skills: ["OWASP Top 10", "OWASP API Security", "Web Application Security", "Penetration Testing", "Network Security", "Vulnerability Assessment", "Threat Intelligence", "DevSecOps", "JWT Authentication", "bcrypt"]
  },
  {
    category: "Tools",
    skills: ["Nmap", "Burp Suite", "Wireshark", "OWASP ZAP", "Metasploit", "Postman", "Linux CLI"]
  }
];

export const education = [
  {
    degree: "B.E. Computer Science & Engineering (Cybersecurity)",
    institution: "J.J. College of Engineering and Technology",
    affiliation: "Anna University",
    period: "2024 – 2028",
    score: "CGPA: 8.3 / 10",
    description: "Focused on Software Engineering, Cybersecurity, Computer Networks, and Cloud Infrastructure through core coursework, project implementations, and practical research.",
    isPrimary: true
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "Santhanam Vidhyalaya",
    affiliation: "CBSE",
    period: "2023",
    score: "Completed",
    description: "Focused on computer science, mathematics, and analytical problem-solving.",
    isPrimary: false
  },
  {
    degree: "Secondary School Certificate (Class X)",
    institution: "Kamakoti Vidyalaya",
    affiliation: "ICSE",
    period: "2021",
    score: "Completed",
    description: "Built foundation in science, mathematics, and computing principles.",
    isPrimary: false
  }
];

export const badgeCertifications = [
  {
    title: "ISC2 Candidate",
    issuer: "ISC2",
    image: "https://images.credly.com/size/680x680/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png",
    credentialUrl: "https://www.credly.com/badges/3c8c1446-a14e-41ab-aea5-d899194d9afa/public_url",
    alt: "ISC2 Candidate Badge"
  },
  {
    title: "Building RAG Apps Using MongoDB",
    issuer: "MongoDB",
    image: "https://images.credly.com/size/160x160/images/2aff887d-ee1e-479f-b26f-dcb20d647bd6/blob",
    credentialUrl: "https://www.credly.com/users/tharsan1305",
    alt: "Building RAG Apps Using MongoDB Badge"
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    image: "https://images.credly.com/size/160x160/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob",
    credentialUrl: "https://www.credly.com/users/tharsan1305",
    alt: "Introduction to Modern AI Badge"
  },
  {
    title: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT",
    image: "https://images.credly.com/size/160x160/images/f9f3c533-9b5a-47eb-8a3e-5734663116c0/image.png",
    credentialUrl: "https://learn.opswatacademy.com/certificate/VizAGeux_A",
    alt: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP) Badge"
  }
];

export const certifications = [
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "Jun 2026",
    category: "Security",
    credentialId: null,
    verificationUrl: "https://www.credly.com/badges/3c8c1446-a14e-41ab-aea5-d899194d9afa/public_url"
  },
  {
    name: "Certified Social Engineering Defense Practitioner (CSEDP)",
    issuer: "The SecOps Group",
    date: "Jun 2026",
    category: "Security",
    credentialId: "11623889",
    verificationUrl: null
  },
  {
    name: "Certified Cybersecurity Foundations (CORE)",
    issuer: "Hackviser",
    date: "Jul 2026",
    category: "Security",
    credentialId: "HV-CORE-MO1IKK9E",
    verificationUrl: "https://hackviser.com/verify?id=HV-CORE-MO1IKK9E"
  },
  {
    name: "Claude Code API Development",
    issuer: "Anthropic",
    date: "Oct 2025",
    category: "AI & Development",
    credentialId: null,
    verificationUrl: null
  },
  {
    name: "Introduction to Critical Infrastructure Protection",
    issuer: "OPSWAT Academy",
    date: "Jul 2026",
    category: "Security",
    credentialId: "VizAGeux_A",
    verificationUrl: "https://learn.opswatacademy.com/certificate/VizAGeux_A"
  }
];

export const additionalCertifications = [
  {
    name: "Cyber Threat Intelligence Analyst",
    issuer: "ArcX",
    date: "Jun 2026"
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "Jun 2026"
  },
  {
    name: "Introduction to Cloud Job Simulation",
    issuer: "Datacom",
    date: "Jun 2026"
  },
  {
    name: "Cybersecurity Job Simulation",
    issuer: "Mastercard",
    date: "Jun 2026"
  },
  {
    name: "RAG Application Development",
    issuer: "MongoDB",
    date: "May 2026"
  },
  {
    name: "Responsible AI: Adversarial Attacks on LLMs",
    issuer: "DCG Coimbatore",
    date: "May 2026"
  },
  {
    name: "Datacom Cyber Security Operations Simulation",
    issuer: "Forage",
    date: "May 2026"
  },
  {
    name: "Deloitte Australia Cyber Job Simulation",
    issuer: "Forage",
    date: "May 2026"
  },
  {
    name: "Tata Cybersecurity Analyst Simulation",
    issuer: "Forage",
    date: "May 2026"
  },
  {
    name: "OSINT Fundamentals",
    issuer: "Security Blue Team",
    date: "Dec 2025"
  },
  {
    name: "Cybersecurity Career Starter Certification",
    issuer: "Hack & Fix",
    date: "Dec 2025"
  },
  {
    name: "Certified Phishing Prevention Specialist",
    issuer: "Hack & Fix",
    date: "Dec 2025"
  },
  {
    name: "Digital Forensics",
    issuer: "Red Team Leader",
    date: "Nov 2025"
  },
  {
    name: "Networking Fundamentals",
    issuer: "HP LIFE",
    date: "Sep 2025"
  },
  {
    name: "CTF Competition Certificate",
    issuer: "CyberHeal",
    date: "Aug 2025"
  },
  {
    name: "Git & GitHub for Developers",
    issuer: "EduPyramids",
    date: "Jun 2025"
  },
  {
    name: "Cybersecurity, Python & Web Development",
    issuer: "Udemy",
    date: "Jun 2025"
  }
];

export const achievements = [
  {
    title: "1st Place — District Cybersecurity Poster Competition",
    org: "Trichy District",
    award: "First Prize (₹10,000)",
    description: "Awarded 1st place in the district-level cybersecurity awareness poster competition."
  },
  {
    title: "2nd Place — JJCET Hackathon",
    org: "J.J. College of Engineering & Technology",
    award: "Second Prize (₹7,000)",
    description: "Developed and presented a working technical software prototype in the college hackathon."
  },
  {
    title: "Top 50 — Hack2Quest CTF",
    org: "National Level CTF Competition (2025)",
    award: "Top 50 Rank",
    description: "Competed in national capture-the-flag challenges spanning web security, cryptography, and forensics."
  },
  {
    title: "Top 25% — TryHackMe",
    org: "TryHackMe Platform",
    award: "Rank: Top 25%",
    description: "Completed 19 security labs and earned 3 badges covering security pathways and hands-on rooms.",
    profileUrl: "https://tryhackme.com/p/stharsan13052007",
    stats: {
      rank: "Top 25%",
      rooms: 19,
      badges: 3
    }
  }
];

export const blog = [
  {
    platform: "AWS Builder Center",
    title: "Why Amazon EC2 Is the Heart of AWS: A Real-World Example with an Online Shop",
    date: "October 2026",
    description: "A beginner-friendly guide to Amazon EC2, using a festival-sale online shop to show load balancing and auto scaling, with steps to launch your first instance and best practices for security and cleanup.",
    link: "https://builder.aws.com/content/3KRTk2TITjBS0uxfSz39GOYoIcp/why-amazon-ec2-is-the-heart-of-aws-a-real-world-example-with-an-online-shop"
  },
  {
    platform: "Medium",
    title: "Zero Trust Security: Why \"Verify Identity\" Isn't Enough Anymore (And What's Next for AI Agents)",
    date: "June 2026",
    description: "An analysis of Zero Trust architecture, modern machine-to-machine authentication challenges, and identity boundaries for autonomous AI agents.",
    link: "https://medium.com/@stharsan.cs"
  },
  {
    platform: "LinkedIn",
    title: "Why Most Cybersecurity Students Never Get Hired",
    date: "May 29, 2026",
    description: "Explores the gap between theoretical certifications and practical engineering execution, with actionable recommendations for aspiring security engineers.",
    link: "https://linkedin.com/in/tharsan1305"
  },
  {
    platform: "LinkedIn",
    title: "Product-Based vs Service-Based Cybersecurity Jobs",
    date: "May 26, 2026",
    description: "A breakdown of engineering responsibilities, career growth paths, and required technical depth across product vs. service organizations.",
    link: "https://linkedin.com/in/tharsan1305"
  }
];

export const social = {
  linkedin: "https://linkedin.com/in/tharsan1305",
  github: "https://github.com/tharsan1305",
  credly: "https://www.credly.com/users/tharsan1305",
  x: "https://x.com/THARSANat6",
  twitter: "https://x.com/THARSANat6",
  discord: "https://discord.gg/ZVBDVU65",
  reddit: "https://www.reddit.com/u/Tharsan13/s/D2sHUcW0xU",
  awsBuilder: "https://builder.aws.com/community/@tharsan",
  microsoftLearn: "https://learn.microsoft.com/en-gb/users/tharsan13/",
  leetcode: "https://leetcode.com/u/stharsan13",
  medium: "https://medium.com/@stharsan.cs",
  tryhackme: "https://tryhackme.com/p/stharsan13052007",
  email: "stharsan13052007@gmail.com"
};
