"use client";
import { useEffect, useState, useRef } from "react";

const jsonLines = [
  { indent: 0, content: "{", color: "text-white" },
  { indent: 1, key: '"developer"', value: '"Pratyush Kumar"', keyColor: "text-vscode-blue", valueColor: "text-vscode-green" },
  { indent: 1, key: '"title"', value: '"Full Stack Engineer"', keyColor: "text-vscode-blue", valueColor: "text-vscode-orange" },
  { indent: 1, key: '"location"', value: '"India 🇮🇳"', keyColor: "text-vscode-blue", valueColor: "text-vscode-green" },
  { indent: 1, key: '"status"', value: '"open_to_work"', keyColor: "text-vscode-blue", valueColor: "text-vscode-yellow" },
  { indent: 1, key: '"skills"', value: null, keyColor: "text-vscode-blue", valueColor: "" },
  { indent: 2, content: "[", color: "text-white", sub: true },
  { indent: 3, value: '"React"', valueColor: "text-vscode-green", noKey: true },
  { indent: 3, value: '"Next.js"', valueColor: "text-vscode-green", noKey: true },
  { indent: 3, value: '"TypeScript"', valueColor: "text-vscode-green", noKey: true },
  { indent: 3, value: '"Node.js"', valueColor: "text-vscode-green", noKey: true },
  { indent: 3, value: '"AWS"', valueColor: "text-vscode-green", noKey: true },
  { indent: 2, content: "]", color: "text-white", sub: true },
  { indent: 1, key: '"experience"', value: '"5 years"', keyColor: "text-vscode-blue", valueColor: "text-vscode-purple" },
  { indent: 1, key: '"projects"', value: "12", keyColor: "text-vscode-blue", valueColor: "text-vscode-orange", noQuoteVal: true },
  { indent: 1, key: '"coffee_per_day"', value: "∞", keyColor: "text-vscode-blue", valueColor: "text-vscode-red", noQuoteVal: true },
  { indent: 0, content: "}", color: "text-white" },
];

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const cols = Math.floor(canvas.width / 18);
    const drops: number[] = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコサシスセソ{}[]()<>=/\\|+-*&^%$#@!~";
    const draw = () => {
      ctx.fillStyle = "rgba(1, 4, 9, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff8822";
      ctx.font = "12px JetBrains Mono";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = y * 18 < 60 ? "#00ff88" : "#00ff8818";
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
}

function TypedLine({ text, delay, className }: { text: string; delay: number; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return (
    <span className={className}>
      {displayed}
      {!done && <span className="animate-blink text-[#00ff88]">|</span>}
    </span>
  );
}

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= jsonLines.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00ff88]/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT — VSCode Panel */}
        <div className="relative">
          {/* Window chrome */}
          <div className="rounded-xl overflow-hidden border border-[#30363d] shadow-2xl shadow-black/50">
            {/* Title bar */}
            <div className="bg-[#010409] px-4 py-3 flex items-center gap-4 border-b border-[#30363d]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#161b22] rounded px-4 py-1 text-xs font-mono text-[#8b949e] border border-[#30363d]">
                  portfolio.json — VS Code
                </div>
              </div>
            </div>

            {/* Editor tabs */}
            <div className="bg-[#010409] flex border-b border-[#30363d]">
              <div className="px-4 py-2 bg-[#0d1117] border-r border-[#30363d] border-t-2 border-t-[#00ff88] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                <span className="font-mono text-xs text-white">portfolio.json</span>
              </div>
              <div className="px-4 py-2 flex items-center gap-2 opacity-40">
                <span className="font-mono text-xs text-[#8b949e]">README.md</span>
              </div>
            </div>

            {/* Editor body */}
            <div className="bg-[#0d1117] flex min-h-[420px]">
              {/* Line numbers */}
              <div className="bg-[#010409] px-3 pt-4 pb-4 text-right border-r border-[#30363d] min-w-[48px]">
                {jsonLines.map((_, i) => (
                  <div
                    key={i}
                    className={`font-mono text-xs leading-7 transition-colors ${
                      hoveredLine === i ? "text-[#e6edf3]" : "text-[#8b949e]/40"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code */}
              <div className="flex-1 p-4 overflow-x-auto">
                {jsonLines.map((line, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredLine(i)}
                    onMouseLeave={() => setHoveredLine(null)}
                    className={`font-mono text-sm leading-7 transition-all duration-200 ${
                      hoveredLine === i ? "bg-[#161b22]/50 rounded" : ""
                    } ${i < visibleLines ? "opacity-100" : "opacity-0"}`}
                    style={{ transition: `opacity 0.15s ease ${i * 0.08}s, background 0.2s ease` }}
                  >
                    <span style={{ paddingLeft: `${line.indent * 20}px` }} className="inline-block">
                      {line.content && !line.key && (
                        <span className={line.color}>{line.content}</span>
                      )}
                      {line.noKey && (
                        <>
                          <span className="text-[#8b949e] mr-2">,</span>
                          <span className={(line as any).valueColor}>{(line as any).value}</span>
                        </>
                      )}
                      {line.key && (
                        <>
                          <span className={(line as any).keyColor}>{line.key}</span>
                          <span className="text-white">: </span>
                          {line.value === null ? (
                            <span className="text-white">[</span>
                          ) : (line as any).noQuoteVal ? (
                            <span className={(line as any).valueColor}>{line.value}</span>
                          ) : (
                            <span className={(line as any).valueColor}>{line.value}</span>
                          )}
                          {line.value !== null && <span className="text-[#8b949e]">,</span>}
                        </>
                      )}
                      {(line as any).sub && (
                        <span className={line.color}>{line.content}</span>
                      )}
                    </span>
                  </div>
                ))}
                {/* Cursor */}
                <div className="font-mono text-sm leading-7 flex items-center gap-1">
                  <span style={{ paddingLeft: "20px" }} className="text-[#8b949e] text-xs">
                    // press any key to continue
                  </span>
                  <span className="inline-block w-2 h-4 bg-[#00ff88] animate-blink ml-1" />
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="bg-[#00ff88] px-4 py-1 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-black font-mono text-xs font-semibold">⎇ main</span>
                <span className="text-black/60 font-mono text-xs">✓ No errors</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black/60 font-mono text-xs">JSON</span>
                <span className="text-black/60 font-mono text-xs">UTF-8</span>
                <span className="text-black font-mono text-xs font-semibold">Ln 1, Col 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Animated intro */}
        <div className="relative flex flex-col gap-8">
          {/* Matrix rain background */}
          <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20">
            <MatrixRain />
          </div>

          <div className="relative z-10">
            {/* Greeting */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/50" />
              <span className="font-mono text-[#00ff88] text-sm">$ whoami</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/50" />
            </div>

            <h1 className="font-mono font-bold text-5xl xl:text-6xl leading-tight mb-2">
              <span className="text-[#8b949e]">Hello, I'm </span>
              <br />
              <span
                className="text-white animate-glitch"
                style={{ textShadow: "0 0 30px rgba(0,255,136,0.3)" }}
              >
                Pratyush Kumar
              </span>
            </h1>

            <div className="flex items-center gap-2 mb-6 font-mono">
              <span className="text-[#00ff88]">&gt;</span>
              <span className="text-[#8b949e]">Currently working as </span>
              <span className="text-[#0ea5e9] typewriter-cursor pr-1">Full Stack Dev_</span>
            </div>

            <p className="text-[#8b949e] font-sans leading-relaxed mb-8 max-w-md">
              I craft performant, scalable web applications with clean code and pixel-perfect
              interfaces. Passionate about developer tooling, systems design, and open source.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded font-mono text-xs border border-[#30363d] bg-[#161b22] text-[#8b949e] hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-6 py-3 bg-[#00ff88] text-black font-mono font-bold text-sm rounded hover:bg-[#00ff88]/90 transition-all duration-200"
                style={{ boxShadow: "0 0 20px rgba(0,255,136,0.3)" }}
              >
                <span className="relative z-10">./view_projects</span>
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border border-[#30363d] text-[#8b949e] font-mono font-bold text-sm rounded hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-200"
              >
                ./contact_me
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-[#30363d]">
              {[
                { label: "years_exp", value: "5+" },
                { label: "projects", value: "12" },
                { label: "commits", value: "2.4k" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-mono font-bold text-2xl text-[#00ff88]"
                    style={{ textShadow: "0 0 10px rgba(0,255,136,0.5)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-[#8b949e] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-mono text-xs text-[#8b949e]">scroll_down</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00ff88]/50 to-transparent" />
      </div>
    </section>
  );
}
