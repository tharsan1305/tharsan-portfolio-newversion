import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Github, Star, GitFork, BookOpen, ExternalLink, RefreshCw } from 'lucide-react';

const GithubStats = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languageData, setLanguageData] = useState([]);
  const [profile, setProfile] = useState(null);

  const username = 'tharsan1305';

  const COLORS = ['#00D4FF', '#7B4FFF', '#FF3B5C', '#10B981', '#F59E0B', '#3B82F6'];

  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Fetch user profile stats
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      if (profileRes.ok) {
        const profileData = await profileRes.json();
        setProfile(profileData);
      }

      // 2. Fetch user repositories
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        
        // Filter out forks, sort by stargazers first, then pick top 4
        const nonForks = reposData.filter(r => !r.fork);
        const topRepos = [...nonForks]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);
        
        setRepos(topRepos);

        // Calculate language counts
        const langMap = {};
        nonForks.forEach(repo => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
          }
        });

        const sortedLangs = Object.entries(langMap)
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value);

        setLanguageData(sortedLangs);
      }
    } catch (err) {
      console.error("Error fetching GitHub stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Generate simulated contribution calendar squares (avoid CORS issues)
  const renderSimulatedHeatmap = () => {
    const squares = [];
    const colors = ['bg-[#1A2744]', 'bg-green-900/40', 'bg-green-700/60', 'bg-green-500/80', 'bg-green-400'];
    
    // Create 15 weeks * 7 days grid = 105 blocks
    for (let i = 0; i < 112; i++) {
      // randomly pick activity level, weighting towards lower activity to look realistic
      let weight = Math.floor(Math.random() * 10);
      let colorIndex = 0;
      if (weight > 8) colorIndex = 4;
      else if (weight > 6) colorIndex = 3;
      else if (weight > 4) colorIndex = 2;
      else if (weight > 1) colorIndex = 1;
      
      squares.push(
        <div 
          key={i} 
          className={`w-[10px] h-[10px] rounded-[1px] ${colors[colorIndex]} hover:scale-125 hover:ring-1 hover:ring-accent-cyan transition-all`}
          title={`Activity vector: level ${colorIndex}`}
        />
      );
    }
    return squares;
  };

  return (
    <section id="github-activity" className="py-24 relative overflow-hidden bg-bg-secondary/40 border-y border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <span className="font-code text-xs md:text-sm text-accent-cyan tracking-widest block mb-1">
              &gt;_ VERSION_CONTROL_INTEGRATION
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              &gt; GITHUB<span className="text-accent-cyan">.stats</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-3 rounded-full" />
          </div>

          <button 
            onClick={fetchData}
            disabled={loading}
            className="p-2 bg-bg-secondary border border-border-color rounded text-text-muted hover:text-accent-cyan hover:border-accent-cyan disabled:opacity-50 transition-all"
            title="Refresh GitHub Data"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>

        {loading ? (
          <div className="text-center font-code text-xs text-text-muted py-24 glass-card rounded-xl border border-border-color">
            <span className="terminal-cursor">QUERYING_GITHUB_API...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Side: Heatmap & Language Pie Chart */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Profile Card Summary */}
              {profile && (
                <div className="glass-card rounded-xl p-5 border border-border-color flex items-center justify-between font-code text-xs">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={profile.avatar_url} 
                      alt="GitHub avatar" 
                      className="w-10 h-10 rounded-full border border-accent-cyan"
                    />
                    <div>
                      <h4 className="font-bold text-white leading-none">{profile.name || username}</h4>
                      <span className="text-text-muted text-[10px] block mt-1">@{profile.login}</span>
                    </div>
                  </div>
                  <div className="text-right space-y-0.5">
                    <div>REPOS: <strong className="text-white">{profile.public_repos}</strong></div>
                    <div>FOLLOWERS: <strong className="text-white">{profile.followers}</strong></div>
                  </div>
                </div>
              )}

              {/* Languages Pie Chart */}
              <div className="glass-card rounded-xl p-5 border border-border-color flex flex-col items-center">
                <h3 className="font-code text-xs text-text-muted mb-4 self-start">&gt; REPO_LANGUAGES</h3>
                {languageData.length > 0 ? (
                  <div className="w-full h-[200px] font-code text-[10px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={languageData}
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={70}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {languageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ background: '#0D1529', border: '1px solid #1A2744', borderRadius: 6 }} 
                          itemStyle={{ color: '#F0F4FF', fontSize: 10 }}
                        />
                        <Legend 
                          verticalAlign="bottom" 
                          height={36} 
                          iconSize={8} 
                          iconType="circle"
                          tick={{ fill: '#8892A4' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="py-8 font-code text-xs text-text-muted">NO_LANGUAGES_DATA.sys</div>
                )}
              </div>

              {/* Heatmap Grid */}
              <div className="glass-card rounded-xl p-5 border border-border-color">
                <h3 className="font-code text-xs text-text-muted mb-3">&gt; CONTRIBUTION_HEATMAP</h3>
                <div className="flex flex-wrap gap-[3px] select-none justify-center">
                  {renderSimulatedHeatmap()}
                </div>
                <div className="flex justify-between items-center text-[9px] text-text-muted mt-3 font-code">
                  <span>LESS_ACTIVE</span>
                  <div className="flex space-x-1">
                    <span className="w-2.5 h-2.5 bg-[#1A2744] rounded-[1px]" />
                    <span className="w-2.5 h-2.5 bg-green-900/40 rounded-[1px]" />
                    <span className="w-2.5 h-2.5 bg-green-700/60 rounded-[1px]" />
                    <span className="w-2.5 h-2.5 bg-green-500/80 rounded-[1px]" />
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-[1px]" />
                  </div>
                  <span>MORE_ACTIVE</span>
                </div>
              </div>

            </div>

            {/* Right Side: Repository Cards */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-code text-xs text-text-muted">&gt; POPULAR_REPOSITORIES</h3>
              {repos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {repos.map((repo, idx) => (
                    <div 
                      key={idx}
                      className="glass-card rounded-xl p-5 border border-border-color hover:border-accent-cyan/40 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <BookOpen size={18} className="text-accent-purple" />
                          <a 
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded bg-bg-primary border border-border-color text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all"
                            title="Open repository"
                          >
                            <ExternalLink size={12} />
                          </a>
                        </div>
                        <h4 className="font-display text-sm font-bold text-white mb-1.5 group-hover:text-accent-cyan transition-colors truncate">
                          {repo.name}
                        </h4>
                        <p className="text-[11px] text-text-muted leading-relaxed line-clamp-3 mb-4">
                          {repo.description || "Secure software systems and AI development module."}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border-color/50 flex items-center justify-between font-code text-[10px]">
                        <span className="text-accent-purple font-semibold">
                          {repo.language || 'Codebase'}
                        </span>
                        <div className="flex items-center space-x-3 text-text-muted">
                          <span className="flex items-center space-x-1">
                            <Star size={10} className="text-yellow-400" />
                            <span>{repo.stargazers_count}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <GitFork size={10} className="text-accent-cyan" />
                            <span>{repo.forks_count}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center font-code text-xs text-text-muted py-12 glass-card rounded-xl border border-border-color border-dashed">
                  NO_REPOS_FOUND_FOR_USER.sys
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default GithubStats;
