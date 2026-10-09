import React, { useState, useEffect, useRef } from 'react';
import { hero, social } from '../data/portfolio';

const TerminalOverlay = ({ active, onClose }) => {
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [booting, setBooting] = useState(true);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (active) {
      setBooting(true);
      setHistory([]);
      const timer = setTimeout(() => {
        setBooting(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [active]);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history, booting, active]);

  if (!active) return null;

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    const cmdLower = trimmed.toLowerCase();
    const args = cmdLower.split(' ');
    const primaryCmd = args[0];

    const newHistory = [...history, { type: 'input', text: `tharsan@nexoracrew:~$ ${trimmed}` }];

    switch (primaryCmd) {
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  whoami       → Displays full bio and identity
  ls           → Lists all portfolio sections
  ls projects  → Lists all 5 projects with descriptions
  ls certs     → Lists all 15 certifications
  cat resume   → Triggers resume download
  skills       → Shows capability tree in ASCII
  contact      → Shows all contact details
  social       → Shows all social links
  achievements → Lists all achievements with prizes
  clear        → Clears terminal screen
  exit         → Closes terminal, returns to portfolio`
        });
        break;
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `> THARSAN — Computer Science & Engineering (Cybersecurity) student and software engineer
> Location: Trichy, Tamil Nadu, India
> Specialization: Full-Stack Software Engineering, Cybersecurity & DevSecOps
> Status: Open to internships: Software Engineering, Cybersecurity, DevSecOps
> Email: stharsan13052007@gmail.com`
        });
        break;
      case 'ls':
        if (args[1] === 'projects') {
          newHistory.push({
            type: 'output',
            text: `1. PragatiX – Student Performance & Discipline Management Platform (Live on AWS & Google Play).
2. AI-Powered API Penetration Testing Agent (2 contributors).
3. SENTINEL.AI – Phishing Email Classifier & URL Threat Analyzer.
4. Vulnerability Scanner (Network security TCP port scanner).
5. MoM-to-Image Prompt Tool (Prompt engine live on Vercel).`
          });
        } else if (args[1] === 'certs') {
          newHistory.push({
            type: 'output',
            text: `1. Certified in Cybersecurity (CC) - ISC2
2. Certified Social Engineering Defense Practitioner (CSEDP) - The SecOps Group
3. Certified Cybersecurity Foundations (CORE) - Hackviser
4. Claude Code API Development - Anthropic
5. Introduction to Critical Infrastructure Protection - OPSWAT Academy
and other verified credentials (24 total)...`
          });
        } else {
          newHistory.push({
            type: 'output',
            text: `Sections available:
  - about
  - education
  - skills
  - experience
  - projects
  - case-studies
  - certifications
  - achievements
  - blog
  - github-stats
  - resume
  - contact`
          });
        }
        break;
      case 'cat':
        if (args[1] === 'resume') {
          newHistory.push({ type: 'output', text: 'Opening THARSAN_Resume.pdf...' });
          window.open(hero.resumeUrl, '_blank');
        } else {
          newHistory.push({ type: 'output', text: "Usage: cat resume" });
        }
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Capability Matrix:
==================
• Full-Stack Development (Spring Boot, React.js, Python, Node.js)
• Application Security & Hardening (JWT, bcrypt, OWASP Top 10)
• Cloud & Infrastructure (AWS EC2, RDS, CloudFront, Route 53)
• Security Testing & Network Analysis (Nmap, Burp Suite, Wireshark)
• CI/CD & DevSecOps Automation (GitHub Actions)`
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Direct Contact:
==============
Email: stharsan13052007@gmail.com
Discord: https://discord.gg/ZVBDVU65
Location: Trichy, Tamil Nadu, India`
        });
        break;
      case 'social':
        newHistory.push({
          type: 'output',
          text: `Social Links:
============
LinkedIn: ${social.linkedin}
GitHub: ${social.github}
Discord: https://discord.gg/ZVBDVU65
X (Twitter): ${social.x}
Reddit: ${social.reddit}
AWS Builder: ${social.awsBuilder}
Microsoft Learn: ${social.microsoftLearn}
Medium: ${social.medium}
TryHackMe: ${social.tryhackme}
LeetCode: ${social.leetcode}`
        });
        break;
      case 'achievements':
        newHistory.push({
          type: 'output',
          text: `Achievements & Milestones:
=========================
1. 1st Place — District Cybersecurity Poster
2. 2nd Place — JJCET Hackathon
3. Top 50 — Hack2Quest CTF
4. Top 25% — TryHackMe (19 rooms)`
        });
        break;
      case 'sudo':
        if (args[1] === 'hire' && args[2] === 'tharsan') {
          newHistory.push({
            type: 'output',
            text: 'ACCESS GRANTED — Initiating hire sequence... Redirecting to contact form...'
          });
          setHistory(newHistory);
          setInputValue('');
          setTimeout(() => {
            onClose();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 2000);
          return;
        } else {
          newHistory.push({ type: 'output', text: "sudo: permission denied" });
        }
        break;
      case 'exit':
        onClose();
        setInputValue('');
        return;
      default:
        newHistory.push({
          type: 'output',
          text: `bash: command not found: ${primaryCmd}. Type 'help' for commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputValue('');
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#000000] text-[#00FF41] font-mono p-6 overflow-y-auto flex flex-col text-xs sm:text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {booting ? (
        <div className="whitespace-pre-wrap select-none leading-relaxed">
          INITIALIZING THARSAN_OS v2.0...<br />
          LOADING SECURITY MODULES... [████████████] 100%<br />
          DECRYPTING IDENTITY... DONE<br />
          ACCESS GRANTED. WELCOME, OPERATOR.<br />
          Type 'help' for available commands.<br />
          tharsan@nexoracrew:~$
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[10px] text-zinc-500 border-b border-zinc-900 pb-2 flex justify-between select-none">
              <span>SYSTEM: OPERATIONAL</span>
              <span>PRESS 'exit' TO CLOSE</span>
            </div>
            
            {/* Terminal Log Output */}
            <div className="whitespace-pre-wrap leading-relaxed select-all">
              INITIALIZING THARSAN_OS v2.0...<br />
              LOADING SECURITY MODULES... [████████████] 100%<br />
              DECRYPTING IDENTITY... DONE<br />
              ACCESS GRANTED. WELCOME, OPERATOR.<br />
              Type 'help' for available commands.
            </div>

            <div className="space-y-2">
              {history.map((h, index) => (
                <div 
                  key={index} 
                  className={`whitespace-pre-wrap leading-relaxed ${h.type === 'input' ? 'text-white font-bold' : 'text-[#00FF41]/90'}`}
                >
                  {h.text}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Shell Input Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputValue);
            }}
            className="flex items-center space-x-2 pt-6 mt-auto border-t border-zinc-900"
          >
            <span className="shrink-0 select-none font-bold text-white">tharsan@nexoracrew:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent text-white border-none outline-none focus:ring-0 p-0 font-mono caret-[#00FF41]"
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
            />
          </form>
        </div>
      )}
      <div ref={terminalEndRef} />
    </div>
  );
};

export default TerminalOverlay;
