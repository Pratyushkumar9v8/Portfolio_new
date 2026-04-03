"use client";
import { useEffect, useRef, useState } from "react";

const experience = [
  {
    id: "EXP_001",
    title: "Senior Full Stack Engineer",
    company: "TechCorp Inc",
    period: "Jan 2024 – Present",
    type: "Full-time",
    color: "#00ff88",
    bullets: [
      "Architected a microservices migration reducing deploy time by 70%",
      "Led a team of 6 engineers across frontend, backend, and infra",
      "Built real-time analytics dashboard serving 50k+ daily active users",
      "Improved core web vitals (LCP < 1.2s) across all client-facing apps",
    ],
  },
  {
    id: "EXP_002",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "Jun 2022 – Dec 2023",
    type: "Full-time",
    color: "#0ea5e9",
    bullets: [
      "Built B2B SaaS product from 0 → 1 using Next.js + Node.js + Postgres",
      "Designed multi-tenant auth system with JWT + RBAC",
      "Implemented WebSocket-based collaborative editing feature",
      "Owned full CI/CD pipeline on AWS (ECS + RDS + CloudFront)",
    ],
  },
  {
    id: "EXP_003",
    title: "Frontend Developer",
    company: "Agency Co",
    period: "Aug 2020 – May 2022",
    type: "Full-time",
    color: "#a855f7",
    bullets: [
      "Delivered 12+ client projects on time with pixel-perfect accuracy",
      "Created a reusable component library adopted across 5 teams",
      "Optimised bundle sizes by 40% through code-splitting & lazy loading",
      "Mentored 2 junior developers in React and accessibility best practices",
    ],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science",
    institution: "University",
    year: "2016 – 2020",
    grade: "First Class with Distinction",
    color: "#ffa657",
  },
];

const certifications = [
  { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2023", color: "#ffa657" },
  { name: "Meta React Developer Certificate", issuer: "Meta / Coursera", year: "2022", color: "#0ea5e9" },
  { name: "Google Cloud Professional", issuer: "Google Cloud", year: "2023", color: "#00ff88" },
];

const techStack = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "GraphQL", "REST"] },
  { category: "Data", items: ["PostgreSQL", "Redis", "MongoDB", "Prisma", "ClickHouse"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"] },
];

export default function ResumeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeExp, setActiveExp] = useState("EXP_001");
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    setPrinting(true);
    setTimeout(() => {
      setPrinting(false);
      // In production: window.open("/Naveen_Mastamardi_Resume.pdf")
    }, 2000);
  };

  const active = experience.find((e) => e.id === activeExp)!;

  return (
    <section id="resume" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#010409]/60 to-[#0d1117]" />
      {/* Grid bg */}
      <div className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(0,255,136,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.02) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}>
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="font-mono text-[#00ff88] text-sm"><span className="text-[#8b949e]">// </span>04. RESUME</div>
              <div className="h-px flex-1 bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
            </div>
            <h2 className="font-mono font-bold text-4xl text-white">
              My <span className="text-[#00ff88]">./career</span> path
            </h2>
          </div>
          {/* Download button */}
          <button
            onClick={handleDownload}
            className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-[#00ff88]/30 bg-[#00ff88]/5 font-mono text-sm text-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-200 w-fit"
            style={{ boxShadow: "0 0 15px rgba(0,255,136,0.1)" }}>
            {printing ? (
              <>
                <span className="w-4 h-4 border-2 border-[#00ff88]/30 border-t-[#00ff88] rounded-full animate-spin" />
                generating...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                ./download_resume.pdf
              </>
            )}
          </button>
        </div>

        {/* Resume card — mimics a PDF viewer */}
        <div className="rounded-xl border border-[#30363d] bg-[#010409] overflow-hidden transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.15s" }}>

          {/* PDF viewer chrome */}
          <div className="bg-[#161b22] border-b border-[#30363d] px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="font-mono text-xs text-[#8b949e] ml-2 flex items-center gap-2">
                <span className="text-[#ff5f57]">PDF</span>
                <span>Naveen_Mastamardi_Resume.pdf</span>
              </div>
            </div>
            <div className="font-mono text-xs text-[#8b949e]">Page 1 / 1</div>
          </div>

          {/* Resume content */}
          <div className="p-8 lg:p-12 bg-[#0d1117]">
            {/* Resume header */}
            <div className="border border-[#30363d] rounded-xl p-6 mb-8 bg-[#161b22] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/3 rounded-full blur-2xl" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-xs text-[#8b949e] mb-1">$ whoami</div>
                  <h3 className="font-mono font-bold text-3xl text-white mb-1">Pratyush Kumar</h3>
                  <div className="font-mono text-[#00ff88] text-base">Full Stack Engineer</div>
                  <div className="flex flex-wrap gap-3 mt-3 font-mono text-xs text-[#8b949e]">
                    <span>📍 India</span>
                    <span>✉ naveen@example.com</span>
                    <span>🔗 github.com/naveen-m</span>
                    <span>💼 linkedin.com/in/naveen-m</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <div className="font-mono text-xs">
                    <span className="text-[#8b949e]">experience: </span>
                    <span className="text-[#00ff88]">5+ years</span>
                  </div>
                  <div className="font-mono text-xs">
                    <span className="text-[#8b949e]">type: </span>
                    <span className="text-[#0ea5e9]">full-time</span>
                  </div>
                  <div className="font-mono text-xs">
                    <span className="text-[#8b949e]">status: </span>
                    <span className="text-[#28c840] flex items-center justify-end gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                      available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_280px] gap-8">
              {/* LEFT col */}
              <div className="space-y-8">
                {/* Experience */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/20 px-2 py-0.5 rounded">EXPERIENCE</span>
                    <div className="h-px flex-1 bg-[#30363d]" />
                  </div>

                  {/* Tab switcher */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {experience.map((exp) => (
                      <button key={exp.id} onClick={() => setActiveExp(exp.id)}
                        className="font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200"
                        style={activeExp === exp.id
                          ? { color: exp.color, borderColor: exp.color + "50", background: exp.color + "10" }
                          : { color: "#8b949e", borderColor: "#30363d", background: "transparent" }}>
                        {exp.company}
                      </button>
                    ))}
                  </div>

                  {/* Active experience */}
                  <div className="rounded-xl border p-5 transition-all duration-300"
                    style={{ borderColor: active.color + "30", background: active.color + "05" }}>
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <div className="font-mono font-bold text-white text-base">{active.title}</div>
                        <div className="font-mono text-sm" style={{ color: active.color }}>{active.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-xs text-[#8b949e]">{active.period}</div>
                        <span className="font-mono text-xs px-2 py-0.5 rounded border mt-1 inline-block"
                          style={{ color: active.color, borderColor: active.color + "30", background: active.color + "10" }}>
                          {active.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {active.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-sm text-[#8b949e]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: active.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-[#0ea5e9] bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-2 py-0.5 rounded">TECH STACK</span>
                    <div className="h-px flex-1 bg-[#30363d]" />
                  </div>
                  <div className="space-y-3">
                    {techStack.map((cat) => (
                      <div key={cat.category} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-[#8b949e] w-24 flex-shrink-0 pt-0.5">{cat.category}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((item) => (
                            <span key={item} className="font-mono text-xs px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-colors">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT col */}
              <div className="space-y-6">
                {/* Education */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-[#ffa657] bg-[#ffa657]/10 border border-[#ffa657]/20 px-2 py-0.5 rounded">EDUCATION</span>
                    <div className="h-px flex-1 bg-[#30363d]" />
                  </div>
                  {education.map((edu, i) => (
                    <div key={i} className="rounded-xl border border-[#30363d] bg-[#161b22] p-4">
                      <div className="font-mono font-semibold text-white text-sm mb-1">{edu.degree}</div>
                      <div className="font-mono text-xs text-[#ffa657] mb-1">{edu.institution}</div>
                      <div className="font-mono text-xs text-[#8b949e]">{edu.year}</div>
                      <div className="font-mono text-xs text-[#00ff88] mt-2 border border-[#00ff88]/20 bg-[#00ff88]/5 px-2 py-0.5 rounded inline-block">{edu.grade}</div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/20 px-2 py-0.5 rounded">CERTS</span>
                    <div className="h-px flex-1 bg-[#30363d]" />
                  </div>
                  <div className="space-y-3">
                    {certifications.map((cert, i) => (
                      <div key={i} className="rounded-xl border border-[#30363d] bg-[#161b22] p-4 hover:border-[#a855f7]/20 transition-colors">
                        <div className="flex items-start gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: cert.color }} />
                          <div className="font-mono text-xs text-white font-semibold leading-snug">{cert.name}</div>
                        </div>
                        <div className="font-mono text-xs text-[#8b949e] pl-4">{cert.issuer}</div>
                        <div className="font-mono text-xs pl-4 mt-1" style={{ color: cert.color }}>{cert.year}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-4">
                  <div className="font-mono text-xs text-[#8b949e] mb-3">$ ls ./profiles</div>
                  {[
                    { label: "GitHub", handle: "github.com/naveen-m", color: "#00ff88" },
                    { label: "LinkedIn", handle: "linkedin.com/in/naveen-m", color: "#0ea5e9" },
                    { label: "Portfolio", handle: "naveen.dev", color: "#a855f7" },
                  ].map((link) => (
                    <a key={link.label} href="#"
                      className="flex items-center justify-between py-2 border-b border-[#30363d] last:border-0 group">
                      <span className="font-mono text-xs text-[#8b949e] group-hover:text-white transition-colors">{link.label}</span>
                      <span className="font-mono text-xs group-hover:translate-x-0.5 transition-transform" style={{ color: link.color }}>{link.handle} →</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
