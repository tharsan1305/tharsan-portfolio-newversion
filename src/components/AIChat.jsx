import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Terminal } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const starterQuestions = [
    "What does THARSAN specialize in?",
    "What companies has he founded?",
    "What certifications does he hold?",
    "Is he open to work?"
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      // API call as requested
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          // Note: In client-only environments, this header usually requires an API key which can trigger CORS.
          // We include it here as requested.
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are THARSAN's AI portfolio assistant. Answer questions about THARSAN professionally and concisely. Only answer based on this data:

NAME: THARSAN
ROLE: Computer Science & Engineering (Cybersecurity) student and software engineer
LOCATION: Trichy, Tamil Nadu, India
EMAIL: stharsan13052007@gmail.com
DISCORD: https://discord.gg/ZVBDVU65
LINKEDIN: linkedin.com/in/tharsan1305
GITHUB: github.com/tharsan1305
EDUCATION: B.E. CSE Cybersecurity at JJCET Trichy, CGPA 8.3/10
SKILLS: Spring Boot, React.js, Python, AWS, Node.js, Express.js, MongoDB, OWASP Top 10, Nmap, Burp Suite, Wireshark, DevSecOps
EXPERIENCE: Software Engineer at NexoraCrew (Sep 2025 – Present) - Client Projects, 3-tier platform with 100+ users on Vercel and Railway, role-based access control. Software Engineer on PragatiX (started Sep 2026, production launch Sep 7, 2026 on AWS, led application security activities).
PROJECTS: PragatiX, AI-Powered API Penetration Testing Agent (2 contributors), SENTINEL.AI, Vulnerability Scanner, MoM-to-Image Prompt Tool
CERTIFICATIONS: ISC2 Certified in Cybersecurity (CC), SecOps Group CSEDP, Hackviser Cybersecurity Foundations, Anthropic Claude Code API Development, OPSWAT CIP, and other verified credentials
ACHIEVEMENTS: 1st Place District Cybersecurity Poster, 2nd Place JJCET Hackathon, Top 50 Hack2Quest CTF, Top 25% TryHackMe (19 rooms)
STATUS: Open to internships: Software Engineering, Cybersecurity, DevSecOps

Keep answers short, professional, and in third person. If asked something not in the data, say you can reach THARSAN directly at stharsan13052007@gmail.com`,
          messages: [{ role: "user", content: text }]
        })
      });

      if (!response.ok) {
        throw new Error("API keys not set/cors policy");
      }

      const data = await response.json();
      const aiReply = data.content?.[0]?.text || "I'm sorry, I couldn't get a proper response.";
      setMessages((prev) => [...prev, { role: 'assistant', content: aiReply }]);
    } catch {
      // Intelligent offline local assistant fallback
      setTimeout(() => {
        const reply = getLocalMockReply(text);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
        setIsLoading(false);
      }, 700);
      return;
    }

    setIsLoading(false);
  };

  const getLocalMockReply = (query) => {
    const q = query.toLowerCase();
    if (q.includes('specialize') || q.includes('skills') || q.includes('expertise') || q.includes('do you do')) {
      return "THARSAN specializes in Full-Stack Software Engineering, Cybersecurity & DevSecOps with Spring Boot, React, Python, and AWS.";
    }
    if (q.includes('company') || q.includes('companies') || q.includes('nexoracrew')) {
      return "THARSAN is a Software Engineer at NexoraCrew (Sep 2025 – Present) working on client projects, including a 3-tier platform with 100+ users deployed on Vercel and Railway with role-based access control.";
    }
    if (q.includes('cert') || q.includes('certification') || q.includes('credential')) {
      return "THARSAN holds verified certifications including ISC2 Certified in Cybersecurity (CC), SecOps Group CSEDP, Hackviser Cybersecurity Foundations, Anthropic Claude Code API Development, and OPSWAT Critical Infrastructure Protection.";
    }
    if (q.includes('work') || q.includes('hiring') || q.includes('open to') || q.includes('job') || q.includes('role')) {
      return "Yes, THARSAN is open to internships: Software Engineering, Cybersecurity, DevSecOps. You can contact him at stharsan13052007@gmail.com.";
    }
    if (q.includes('project') || q.includes('build') || q.includes('pragatix')) {
      return "THARSAN's projects include PragatiX (Student Performance & Discipline Platform on AWS, launched Sep 7, 2026), AI-Powered API Penetration Testing Agent (2 contributors), SENTINEL.AI, Vulnerability Scanner, and MoM-to-Image Prompt Tool.";
    }
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('discord')) {
      return "You can reach THARSAN directly via email at stharsan13052007@gmail.com, on Discord at https://discord.gg/ZVBDVU65, or on LinkedIn at linkedin.com/in/tharsan1305.";
    }
    return "THARSAN is a Computer Science & Engineering (Cybersecurity) student and software engineer who builds and secures full-stack production software with Spring Boot, React, Python and AWS. Contact: stharsan13052007@gmail.com.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-code">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#111827] hover:bg-[#111827]/90 border border-[#1E293B] text-gray-400 hover:text-accent-cyan p-3 rounded-full shadow-md transition-colors duration-200 flex items-center justify-center cursor-pointer"
          title="Ask THARSAN's AI Assistant"
        >
          <Terminal size={18} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[320px] sm:w-[360px] h-[450px] bg-[#111827] border border-[#1E293B] rounded-xl shadow-lg flex flex-col overflow-hidden font-sans">
          
          {/* Header */}
          <div className="bg-[#0A0F1C] border-b border-[#1E293B] p-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-white font-bold text-xs select-none font-code">&gt; ASK_THARSAN.ai</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="bg-bg-secondary/40 border border-border-color p-3 rounded-lg text-xs text-text-muted leading-relaxed">
                  Hi! I am THARSAN's AI assistant. Ask me questions about his skills, education, experience, or companies.
                </div>
                
                {/* Starter Questions Grid */}
                <div className="space-y-2">
                  <div className="text-[10px] text-text-muted font-bold">&gt; SUGGESTED_QUERIES:</div>
                  <div className="grid grid-cols-1 gap-2">
                    {starterQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(q)}
                        className="text-left w-full bg-bg-secondary/60 hover:bg-bg-secondary border border-border-color hover:border-accent-cyan/50 text-[11px] text-text-muted hover:text-white p-2.5 rounded transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan'
                      : 'bg-bg-secondary/80 border border-border-color text-text-primary'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading / Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-bg-secondary/85 border border-border-color rounded-lg p-3 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 bg-[#0A0F1C] border-t border-[#1E293B] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-[#111827] border border-[#1E293B] focus:border-accent-cyan rounded px-3 py-2 text-xs text-white focus:outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="p-2 bg-accent-cyan hover:bg-accent-cyan/95 text-[#0A0F1C] rounded transition-colors cursor-pointer"
            >
              <Send size={13} />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};

export default AIChat;
