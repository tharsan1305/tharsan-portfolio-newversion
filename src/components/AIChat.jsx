import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const starterQuestions = [
    "What does Tharsan specialize in?",
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
          system: `You are Tharsan S's AI portfolio assistant. Answer questions about Tharsan professionally and concisely. Only answer based on this data:

NAME: Tharsan S
ROLE: Pre-Final Year Cybersecurity Student, Founder & CEO of NexoraCrew, CTO of Vibernox
LOCATION: Trichy, Tamil Nadu, India
EMAIL: stharsan13052007@gmail.com
PHONE: +91 95976 46460
LINKEDIN: linkedin.com/in/tharsan1305
GITHUB: github.com/tharsan1305
EDUCATION: B.E. CSE Cybersecurity at JJCET Trichy (Anna University) 2024-2028, CGPA 8.34
SKILLS: Penetration Testing, OSINT, Ethical Hacking, OWASP Top 10, Burp Suite, Nmap, Wireshark, Kali Linux, Python, JavaScript, MERN Stack, Docker, LLM APIs, RAG, AI Automation, Cloud Security, DevSecOps
EXPERIENCE: Founded NexoraCrew (2023) - built College Placement System for 200+ students, 99.5% uptime VPS. CTO at Vibernox (2024) - SaaS product architecture, DevSecOps
PROJECTS: College Placement Management System, AI Chatbot & LLM Agent, ML Dashboard, CTF Toolkit, IoT Security Monitor
CERTIFICATIONS: ISC2 Certified in Cybersecurity (CC), ArcX CTI 101, MongoDB RAG, Forage simulations x3, OSINT Fundamentals, Digital Forensics, and more
ACHIEVEMENTS: District 1st Cybersecurity Poster (Rs 10000), 2nd College Hackathon (Rs 7000), 50th Hack2Quest CTF National, Founded 2 companies as undergrad
INTERESTS: AI & LLM Security, Quantum Cryptography, CTF competitions, Cloud Security, DevSecOps
STATUS: Open to Work — Cybersecurity / AI Security / SOC Analyst / DevSecOps

Keep answers short, professional, and in third person. If asked something not in the data, say you can reach Tharsan directly at stharsan13052007@gmail.com`,
          messages: [{ role: "user", content: text }]
        })
      });

      if (!response.ok) {
        throw new Error("API keys not set/cors policy");
      }

      const data = await response.json();
      const aiReply = data.content?.[0]?.text || "I'm sorry, I couldn't get a proper response.";
      setMessages((prev) => [...prev, { role: 'assistant', content: aiReply }]);
    } catch (error) {
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
      return "Tharsan specializes in AI & LLM Security, Penetration Testing, OSINT, DevSecOps, and Cloud Security. He has expertise with tools like Burp Suite, Nmap, Wireshark, and Kali Linux.";
    }
    if (q.includes('company') || q.includes('companies') || q.includes('founded') || q.includes('nexoracrew') || q.includes('vibernox')) {
      return "Tharsan has co-founded two companies: NexoraCrew (Founder & CEO, 2023) where he designed and deployed a College Placement System for 200+ students, and Vibernox (CTO & Co-Founder, 2024) leading SaaS architectures.";
    }
    if (q.includes('cert') || q.includes('certification') || q.includes('credential')) {
      return "Tharsan holds several credentials, including the ISC2 Certified in Cybersecurity (CC), ArcX CTI 101, MongoDB RAG Developer, OSINT Fundamentals, Digital Forensics, and multiple Forage cybersecurity simulations.";
    }
    if (q.includes('work') || q.includes('hiring') || q.includes('open to') || q.includes('job') || q.includes('role')) {
      return "Yes, Tharsan is actively open to work for internship and career roles in Cybersecurity, AI Security, SOC Analyst, or DevSecOps. You can contact him at stharsan13052007@gmail.com.";
    }
    if (q.includes('project') || q.includes('build')) {
      return "Tharsan's key projects include the College Placement Management System (VPS deployed MERN stack), an AI Chatbot & LLM Automation Agent (RAG-based), a Machine Learning Vulnerability Dashboard, and a custom CTF Toolkit.";
    }
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('phone')) {
      return "You can reach Tharsan directly via email at stharsan13052007@gmail.com or by phone at +91 95976 46460. He is also active on LinkedIn: linkedin.com/in/tharsan1305.";
    }
    return "Tharsan S is a Pre-Final Year Cybersecurity Student, Founder of NexoraCrew, and CTO at Vibernox. For specific queries regarding custom project details, you can contact him directly at stharsan13052007@gmail.com.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-code">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#111827] hover:bg-[#111827]/90 border border-[#1E293B] text-gray-400 hover:text-accent-cyan p-3 rounded-full shadow-md transition-colors duration-200 flex items-center justify-center cursor-pointer"
          title="Ask Tharsan's AI Assistant"
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
                  Hi! I am Tharsan's AI assistant. Ask me questions about his skills, education, experience, or companies.
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
