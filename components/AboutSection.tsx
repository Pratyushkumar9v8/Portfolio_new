"use client";
import { useEffect, useRef, useState } from "react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], level: 95, color: "#00ff88" },
  { category: "Backend", items: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"], level: 88, color: "#0ea5e9" },
  { category: "Database", items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "Prisma"], level: 82, color: "#a855f7" },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"], level: 78, color: "#ffa657" },
];

const timeline = [
  { year: "2024", role: "Senior Full Stack Engineer", company: "TechCorp Inc", description: "Led a team of 6 engineers to rebuild the core product from monolith to microservices." },
  { year: "2022", role: "Full Stack Developer", company: "StartupXYZ", description: "Built the entire frontend and backend infrastructure for a B2B SaaS product from scratch." },
  { year: "2020", role: "Frontend Developer", company: "Agency Co", description: "Developed pixel-perfect, accessible web apps for Fortune 500 clients." },
  { year: "2019", role: "B.Tech Computer Science", company: "University", description: "Specialized in distributed systems and software engineering principles." },
];

function SkillBar({ category, level, color, items, delay }: { category: string; level: number; color: string; items: string[]; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setAnimated(true), delay); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-semibold" style={{ color }}>{category}</span>
        <span className="font-mono text-xs text-[#8b949e]">{level}%</span>
      </div>
      <div className="h-2 bg-[#0d1117] rounded-full overflow-hidden mb-3 border border-[#30363d]">
        <div className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%", background: `linear-gradient(90deg, ${color}80, ${color})`, boxShadow: `0 0 8px ${color}60` }} />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="font-mono text-xs px-2 py-0.5 rounded border"
            style={{ color: color + "cc", borderColor: color + "30", background: color + "08" }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function AvatarFrame() {
  return (
    <div className="relative w-full aspect-square max-w-[300px] mx-auto">
      <style>{`
        @keyframes scanPhoto { 0% { top: -4px; } 100% { top: 105%; } }
        @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotateSlowRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes avatarPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes eyeBlink { 0%,88%,100% { transform: scaleY(1); } 92% { transform: scaleY(0.05); } }
      `}</style>
      {/* Rotating rings */}
      <div className="absolute inset-0 rounded-2xl border border-[#00ff88]/15 pointer-events-none"
        style={{ animation: "rotateSlow 14s linear infinite" }} />
      <div className="absolute -inset-2 rounded-3xl border border-dashed border-[#00ff88]/08 pointer-events-none"
        style={{ animation: "rotateSlowRev 22s linear infinite" }} />

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00ff88] rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00ff88] rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00ff88] rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00ff88] rounded-br-lg" />

      {/* Photo container */}
      <div className="absolute inset-3 rounded-xl overflow-hidden bg-[#161b22] border border-[#30363d]">
        {/* Scan line */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-xl">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent"
            style={{ animation: "scanPhoto 2.5s linear infinite" }} />
        </div>
        <img src="/photo.jpg" alt="Pratyush Kumar" className="w-full h-full object-cover" />
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]">
          <svg width="150" height="170" viewBox="0 0 150 170" fill="none">
            {/* Hair */}
            <path d="M40 50 Q42 18 75 16 Q108 18 110 50 Q105 28 75 26 Q45 28 40 50Z" fill="#00ff88" opacity="0.6" />
            {/* Head */}
            <ellipse cx="75" cy="58" rx="34" ry="38" fill="#1c2333" stroke="#00ff88" strokeWidth="1.5" />
            {/* Face */}
            <ellipse cx="75" cy="62" rx="27" ry="32" fill="#2a3548" />
            {/* Eyes */}
            <g style={{ transformOrigin: "62px 55px", animation: "eyeBlink 4s infinite" }}>
              <ellipse cx="62" cy="55" rx="5.5" ry="6.5" fill="#0d1117" />
              <ellipse cx="62" cy="55" rx="2.5" ry="3" fill="#00ff88" style={{ animation: "avatarPulse 2s infinite" }} />
            </g>
            <g style={{ transformOrigin: "88px 55px", animation: "eyeBlink 4s infinite 0.3s" }}>
              <ellipse cx="88" cy="55" rx="5.5" ry="6.5" fill="#0d1117" />
              <ellipse cx="88" cy="55" rx="2.5" ry="3" fill="#00ff88" style={{ animation: "avatarPulse 2s infinite 0.5s" }} />
            </g>
            {/* Nose */}
            <path d="M75 63 L71 72 L79 72" stroke="#8b949e" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* Smile */}
            <path d="M64 78 Q75 87 86 78" stroke="#00ff88" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Neck */}
            <rect x="66" y="93" width="18" height="14" rx="5" fill="#2a3548" />
            {/* Shoulders / body */}
            <path d="M28 170 Q30 128 52 118 L67 108 L75 116 L83 108 L98 118 Q120 128 122 170Z"
              fill="#161b22" stroke="#00ff88" strokeWidth="1.5" />
            {/* Collar */}
            <path d="M67 108 L75 122 L83 108" stroke="#00ff88" strokeWidth="1.5" fill="none" />
            {/* Code badge */}
            <rect x="58" y="138" width="34" height="18" rx="4" fill="#0d1117" stroke="#00ff88" strokeWidth="1" opacity="0.7" />
            <text x="63" y="151" fill="#00ff88" fontSize="11" fontFamily="monospace">&lt;NM/&gt;</text>
          </svg>
          <div className="font-mono text-[#00ff88] text-xs font-bold mt-1">Pratyush Kumar</div>
          <div className="font-mono text-[#8b949e] text-xs opacity-50">add photo → /public/photo.jpg</div>
        </div>
      </div>

      {/* Online badge */}
      <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] rounded-full px-2.5 py-1 z-20">
        <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
        <span className="font-mono text-xs text-[#00ff88]">available</span>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-transparent to-[#0d1117]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="font-mono text-[#00ff88] text-sm"><span className="text-[#8b949e]">// </span>03. ABOUT</div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
          </div>
          <h2 className="font-mono font-bold text-4xl text-white">
            The <span className="text-[#00ff88]">developer</span> behind the code
          </h2>
        </div>

        {/* PHOTO + ABOUT ME */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.15s" }}>

          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <AvatarFrame />
          </div>

          {/* About me */}
          <div className="flex flex-col justify-center">
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden">
              {/* Fake editor tabs */}
              <div className="bg-[#010409] flex border-b border-[#30363d] px-4 py-2 items-center gap-3">
                <div className="flex gap-1.5 mr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="px-3 py-1 bg-[#0d1117] border-b-2 border-b-[#00ff88] rounded-t font-mono text-xs text-white">about_me.md</div>
                <div className="px-3 py-1 font-mono text-xs text-[#8b949e] opacity-50">README.md</div>
              </div>

              <div className="p-6 space-y-5">
                {/* Name */}
                <div>
                  <div className="font-mono text-xs text-[#8b949e] mb-1"># Developer Profile</div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-mono font-bold text-2xl text-white">Pratyush Kumar</h3>
                    <span className="font-mono text-xs text-[#00ff88] border border-[#00ff88]/30 bg-[#00ff88]/5 px-2 py-0.5 rounded">
                      Full Stack Engineer
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-3 font-sans text-sm text-[#8b949e] leading-relaxed border-l-2 border-[#00ff88]/30 pl-4">
                  <p>
                    Hey! I'm <span className="text-white font-semibold">Pratyush Kumar</span> — a passionate full-stack
                    engineer who loves turning complex problems into elegant, performant software. With 5+ years in the
                    industry, I've shipped products used by thousands of users across multiple domains.
                  </p>
                  <p>
                    I specialize in the <span className="text-[#0ea5e9]">React / Next.js</span> ecosystem on the frontend
                    and <span className="text-[#a855f7]">Node.js / Python</span> on the backend. I care deeply about clean
                    architecture, developer experience, and writing code that the next engineer will actually enjoy reading.
                  </p>
                  <p>
                    When I'm not shipping features, you'll find me contributing to open source, writing technical articles,
                    or deep-diving into systems papers over a strong cup of coffee. ☕
                  </p>
                </div>

                {/* Quick info */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { label: "location", value: "India 🇮🇳", color: "#00ff88" },
                    { label: "timezone", value: "IST (UTC+5:30)", color: "#0ea5e9" },
                    { label: "languages", value: "JS, TS, Python", color: "#a855f7" },
                    { label: "focus", value: "Web & Cloud", color: "#ffa657" },
                    { label: "interests", value: "OSS, DevTools", color: "#00ff88" },
                    { label: "availability", value: "Open to work ✓", color: "#28c840" },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#0d1117] rounded-lg p-3 border border-[#30363d] hover:border-[#00ff88]/20 transition-colors">
                      <div className="font-mono text-xs text-[#8b949e] mb-1">{item.label}:</div>
                      <div className="font-mono text-xs font-semibold truncate" style={{ color: item.color }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS + TIMELINE */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="transition-all duration-700 delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}>
            <div className="font-mono text-sm text-[#8b949e] mb-4">
              <span className="text-[#00ff88]">$</span> cat experience.log
            </div>
            <div className="relative">
              <div className="absolute left-[52px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/50 via-[#30363d] to-transparent" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-[52px] text-right flex-shrink-0">
                      <span className="font-mono text-xs text-[#00ff88]">{item.year}</span>
                    </div>
                    <div className="relative flex-1 pb-4">
                      <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-[#00ff88] bg-[#0d1117] group-hover:bg-[#00ff88] transition-colors duration-200" />
                      <div className="font-mono font-semibold text-white text-sm">{item.role}</div>
                      <div className="font-mono text-xs text-[#0ea5e9] mb-1">{item.company}</div>
                      <p className="text-[#8b949e] text-xs leading-relaxed font-sans">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 transition-all duration-700 delay-500"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)" }}>
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <div className="font-mono text-sm text-[#8b949e] mb-6">
                <span className="text-[#00ff88]">$</span> cat skills.json | jq
              </div>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.category} {...skill} delay={i * 150} />
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <div className="font-mono text-sm text-[#8b949e] mb-4">
                <span className="text-[#00ff88]">$</span> ./fun_facts.sh
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "☕", label: "cups of coffee", value: "~3/day" },
                  { icon: "🌙", label: "night owl", value: "confirmed" },
                  { icon: "📖", label: "tech blogs/month", value: "12+" },
                  { icon: "🎵", label: "coding playlist", value: "lo-fi" },
                ].map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1 p-3 rounded-lg bg-[#0d1117] border border-[#30363d] hover:border-[#00ff88]/30 transition-colors">
                    <span className="text-xl">{fact.icon}</span>
                    <span className="font-mono text-[#00ff88] text-sm font-bold">{fact.value}</span>
                    <span className="font-mono text-[#8b949e] text-xs">{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
