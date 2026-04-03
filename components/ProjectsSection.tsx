"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    name: "NeuralDeploy",
    description: "AI-powered CI/CD pipeline that auto-scales based on traffic patterns. Reduced deployment time by 70% using ML-driven resource allocation.",
    tech: ["Next.js", "Python", "K8s", "TensorFlow"],
    status: "PRODUCTION",
    stars: 847,
    commits: 342,
    color: "#00ff88",
    link: "#",
    featured: true,
  },
  {
    id: "02",
    name: "GraphSync",
    description: "Real-time collaborative graph editor with conflict-free replicated data types (CRDTs) for multi-user canvas editing.",
    tech: ["React", "WebSockets", "Rust", "Redis"],
    status: "BETA",
    stars: 512,
    commits: 189,
    color: "#0ea5e9",
    link: "#",
    featured: true,
  },
  {
    id: "03",
    name: "CodeVault",
    description: "End-to-end encrypted code snippet manager with syntax highlighting for 200+ languages and zero-knowledge architecture.",
    tech: ["TypeScript", "PostgreSQL", "WebCrypto", "Bun"],
    status: "LIVE",
    stars: 1203,
    commits: 456,
    color: "#a855f7",
    link: "#",
    featured: false,
  },
  {
    id: "04",
    name: "DevMetrics",
    description: "Engineering velocity dashboard that aggregates GitHub, Jira, and Linear data into actionable team insights.",
    tech: ["Vue", "GraphQL", "ClickHouse", "Docker"],
    status: "LIVE",
    stars: 234,
    commits: 127,
    color: "#ffa657",
    link: "#",
    featured: false,
  },
];

function RobotArm({ color }: { color: string }) {
  return (
    <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-60 transition-opacity duration-500">
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        {/* Mount */}
        <rect x="35" y="110" width="10" height="10" rx="2" fill={color} opacity="0.5" />
        {/* Arm segment 1 */}
        <g style={{ transformOrigin: "40px 110px", animation: "armSwing 3s ease-in-out infinite" }}>
          <rect x="37" y="70" width="6" height="40" rx="3" fill={color} opacity="0.7" />
          <circle cx="40" cy="70" r="5" fill={color} />
          {/* Arm segment 2 */}
          <g style={{ transformOrigin: "40px 70px", animation: "armSwing 2s ease-in-out infinite reverse" }}>
            <rect x="37" y="35" width="6" height="35" rx="3" fill={color} opacity="0.8" />
            <circle cx="40" cy="35" r="4" fill={color} />
            {/* Claw */}
            <g style={{ transformOrigin: "40px 35px" }}>
              <line x1="40" y1="20" x2="30" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" style={{ animation: "claw-open 2s ease-in-out infinite" }} />
              <line x1="40" y1="20" x2="50" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" style={{ animation: "claw-open 2s ease-in-out infinite reverse" }} />
              <circle cx="40" cy="20" r="3" fill={color} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function CircuitLines() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 800 600">
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 0 50 L 30 50 L 30 20 L 70 20 L 70 50 L 100 50" stroke="#00ff88" strokeWidth="1" fill="none" />
          <path d="M 50 0 L 50 30 L 80 30 L 80 70 L 50 70 L 50 100" stroke="#00ff88" strokeWidth="1" fill="none" />
          <circle cx="30" cy="50" r="3" fill="#00ff88" />
          <circle cx="70" cy="50" r="3" fill="#00ff88" />
          <circle cx="50" cy="30" r="3" fill="#00ff88" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

function BotIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ animation: "robotBob 3s ease-in-out infinite" }}>
      <style>{`
        @keyframes robotBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
      `}</style>
      {/* Body */}
      <rect x="12" y="20" width="24" height="22" rx="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5" />
      {/* Head */}
      <rect x="14" y="8" width="20" height="14" rx="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5" />
      {/* Antenna */}
      <line x1="24" y1="8" x2="24" y2="4" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="3" r="2" fill={color} />
      {/* Eyes */}
      <rect x="17" y="12" width="4" height="4" rx="1" fill={color} style={{ animation: "eyeBlink 3s infinite", transformOrigin: "19px 14px" }} />
      <rect x="27" y="12" width="4" height="4" rx="1" fill={color} style={{ animation: "eyeBlink 3s infinite 0.1s", transformOrigin: "29px 14px" }} />
      {/* Mouth */}
      <path d="M 18 19 Q 24 22 30 19" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Arms */}
      <rect x="6" y="22" width="6" height="14" rx="3" fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
      <rect x="36" y="22" width="6" height="14" rx="3" fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
      {/* Chest panel */}
      <rect x="18" y="25" width="12" height="8" rx="2" stroke={color} strokeWidth="1" opacity="0.5" />
      <circle cx="21" cy="29" r="1.5" fill={color} opacity="0.8" />
      <circle cx="24" cy="29" r="1.5" fill={color} opacity="0.4" />
      <circle cx="27" cy="29" r="1.5" fill={color} opacity="0.6" />
      {/* Legs */}
      <rect x="16" y="42" width="6" height="5" rx="2" fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
      <rect x="26" y="42" width="6" height="5" rx="2" fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleProjectHover = (projectName: string) => {
    setActiveProject(projectName);
    const lines = [
      `$ git clone https://github.com/alexchen/${projectName.toLowerCase()}`,
      `> Cloning into '${projectName.toLowerCase()}'...`,
      `> remote: Counting objects: done.`,
      `> Resolving deltas: done.`,
      `$ cd ${projectName.toLowerCase()} && npm install`,
      `> Added 847 packages in 3.2s`,
      `$ npm run dev`,
      `> Ready on http://localhost:3000 ✓`,
    ];
    setTerminalLines([]);
    lines.forEach((line, i) => {
      setTimeout(() => setTerminalLines((prev) => [...prev, line]), i * 150);
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 overflow-hidden">
      <CircuitLines />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#010409]/50 to-[#0d1117]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="font-mono text-[#00ff88] text-sm">
              <span className="text-[#8b949e]">// </span>02. PROJECTS
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
            <div className="font-mono text-xs text-[#8b949e]">
              {projects.length} repositories
            </div>
          </div>
          <h2 className="font-mono font-bold text-4xl text-white">
            Built with <span className="text-[#00ff88]">&lt;passion/&gt;</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Project cards - left 2 columns */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.id}
                onMouseEnter={() => handleProjectHover(project.name)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative rounded-xl border border-[#30363d] bg-[#161b22] p-5 cursor-pointer transition-all duration-300 hover:border-opacity-100 overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.3s ease, box-shadow 0.3s ease`,
                  borderColor: activeProject === project.name ? project.color + "50" : undefined,
                  boxShadow: activeProject === project.name ? `0 0 20px ${project.color}20` : undefined,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: `radial-gradient(circle at top right, ${project.color}08, transparent 70%)` }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BotIcon color={project.color} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#8b949e]">{project.id}</span>
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-full border"
                          style={{ color: project.color, borderColor: project.color + "40", background: project.color + "10" }}
                        >
                          {project.status}
                        </span>
                      </div>
                      <h3 className="font-mono font-bold text-white text-lg leading-tight">{project.name}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-[#8b949e] text-sm leading-relaxed mb-4 font-sans">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs px-2 py-0.5 bg-[#0d1117] rounded border border-[#30363d] text-[#8b949e]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#8b949e]">
                    <span>⭐ {project.stars}</span>
                    <span>⎇ {project.commits} commits</span>
                  </div>
                  <a
                    href={project.link}
                    className="font-mono text-xs transition-all duration-200"
                    style={{ color: project.color }}
                  >
                    ./explore →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel — Terminal */}
          <div
            className="lg:col-span-1 transition-all duration-700 delay-500"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            {/* Floating robot */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl opacity-30 rounded-full" style={{ background: activeProject ? projects.find(p => p.name === activeProject)?.color : "#00ff88" }} />
                <div style={{ animation: "robotBob 3s ease-in-out infinite" }}>
                  <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
                    <style>{`
                      @keyframes robotBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                      @keyframes blink2 { 0%, 90%, 100% { transform: scaleY(1); } 95% { transform: scaleY(0.05); } }
                      @keyframes pulse2 { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
                    `}</style>
                    {/* Head */}
                    <rect x="25" y="15" width="50" height="45" rx="10" fill="#161b22" stroke="#00ff88" strokeWidth="2" />
                    {/* Antenna */}
                    <line x1="50" y1="15" x2="50" y2="5" stroke="#00ff88" strokeWidth="2" />
                    <circle cx="50" cy="4" r="4" fill="#00ff88" style={{ animation: "pulse2 2s infinite" }} />
                    {/* Eyes */}
                    <rect x="33" y="27" width="12" height="10" rx="3" fill="#00ff88" opacity="0.9" style={{ animation: "blink2 4s infinite", transformOrigin: "39px 32px" }} />
                    <rect x="55" y="27" width="12" height="10" rx="3" fill="#00ff88" opacity="0.9" style={{ animation: "blink2 4s infinite 0.2s", transformOrigin: "61px 32px" }} />
                    {/* Smile */}
                    <path d="M 38 46 Q 50 54 62 46" stroke="#00ff88" strokeWidth="2" fill="none" strokeLinecap="round" />
                    {/* Body */}
                    <rect x="22" y="62" width="56" height="50" rx="8" fill="#161b22" stroke="#00ff88" strokeWidth="1.5" />
                    {/* Chest panel */}
                    <rect x="32" y="72" width="36" height="22" rx="4" stroke="#00ff88" strokeWidth="1" opacity="0.4" />
                    <circle cx="40" cy="83" r="5" fill="#00ff88" opacity="0.2" stroke="#00ff88" strokeWidth="1" style={{ animation: "pulse2 1.5s infinite" }} />
                    <circle cx="50" cy="83" r="5" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" strokeWidth="1" style={{ animation: "pulse2 1.5s infinite 0.5s" }} />
                    <circle cx="60" cy="83" r="5" fill="#a855f7" opacity="0.2" stroke="#a855f7" strokeWidth="1" style={{ animation: "pulse2 1.5s infinite 1s" }} />
                    {/* Arms */}
                    <rect x="8" y="65" width="14" height="35" rx="7" fill="#161b22" stroke="#00ff88" strokeWidth="1.5" style={{ transformOrigin: "15px 65px", animation: "armSwing 4s ease-in-out infinite" }} />
                    <rect x="78" y="65" width="14" height="35" rx="7" fill="#161b22" stroke="#00ff88" strokeWidth="1.5" style={{ transformOrigin: "85px 65px", animation: "armSwing 4s ease-in-out infinite reverse" }} />
                    {/* Legs */}
                    <rect x="34" y="112" width="14" height="18" rx="5" fill="#161b22" stroke="#00ff88" strokeWidth="1.5" />
                    <rect x="52" y="112" width="14" height="18" rx="5" fill="#161b22" stroke="#00ff88" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="rounded-xl border border-[#30363d] bg-[#010409] overflow-hidden">
              <div className="px-4 py-2 bg-[#161b22] border-b border-[#30363d] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-[#8b949e] ml-2">terminal — bash</span>
              </div>
              <div className="p-4 min-h-[220px] font-mono text-xs">
                {terminalLines.length === 0 ? (
                  <div className="text-[#8b949e] flex flex-col gap-1">
                    <span className="text-[#00ff88]">$ _</span>
                    <span className="text-[#8b949e] mt-2">// Hover a project to deploy</span>
                    <span className="text-[#8b949e]/50">// Robot is standing by...</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    {terminalLines.map((line, i) => (
                      <div
                        key={i}
                        className={line.startsWith("$") ? "text-[#00ff88]" : line.startsWith(">") ? "text-[#8b949e]" : "text-white"}
                      >
                        {line}
                      </div>
                    ))}
                    <span className="animate-blink text-[#00ff88]">▋</span>
                  </div>
                )}
              </div>
            </div>

            {/* GitHub link */}
            <a
              href="#"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#30363d] font-mono text-sm text-[#8b949e] hover:border-[#00ff88]/30 hover:text-[#00ff88] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View all on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
