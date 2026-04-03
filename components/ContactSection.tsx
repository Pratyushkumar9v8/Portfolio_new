"use client";
import { useEffect, useRef, useState } from "react";

const socials = [
  { label: "GitHub", handle: "@alexchen", icon: "GH", color: "#00ff88", href: "#" },
  { label: "LinkedIn", handle: "in/alexchen", icon: "LI", color: "#0ea5e9", href: "#" },
  { label: "Twitter", handle: "@alexchen_dev", icon: "TW", color: "#a855f7", href: "#" },
  { label: "Email", handle: "alex@example.com", icon: "✉", color: "#ffa657", href: "mailto:alex@example.com" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [termLines, setTermLines] = useState<{ text: string; color: string }[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const lines = [
      { text: `$ POST /api/contact`, color: "#00ff88" },
      { text: `> Payload: { name: "${formState.name}", email: "${formState.email}" }`, color: "#8b949e" },
      { text: `> Connecting to mail server...`, color: "#8b949e" },
      { text: `> Encrypting message with TLS...`, color: "#8b949e" },
      { text: `> Sending...`, color: "#8b949e" },
      { text: `✓ 200 OK — Message delivered!`, color: "#00ff88" },
    ];
    setTermLines([]);
    for (let i = 0; i < lines.length; i++) {
      await new Promise((r) => setTimeout(r, 300));
      setTermLines((prev) => [...prev, lines[i]]);
    }
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#010409] to-transparent" />
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#00ff88]/5 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/30" />
            <div className="font-mono text-[#00ff88] text-sm">
              <span className="text-[#8b949e]">// </span>05. CONTACT
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/30" />
          </div>
          <h2 className="font-mono font-bold text-4xl text-white mb-4">
            Let's <span className="text-[#00ff88]">build</span> something
          </h2>
          <p className="text-[#8b949e] font-sans max-w-md mx-auto">
            Currently open to new opportunities. Whether it's a project, a role, or just a chat about tech — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Contact form */}
          <div
            className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}
          >
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden">
              {/* Form header */}
              <div className="bg-[#010409] px-4 py-3 border-b border-[#30363d] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-[#8b949e] ml-2">contact.tsx</span>
              </div>

              {sent ? (
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <div className="font-mono text-[#00ff88] text-xl font-bold mb-2">Message sent!</div>
                  <div className="font-mono text-[#8b949e] text-sm">I'll get back to you within 24 hours.</div>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 font-mono text-xs text-[#8b949e] hover:text-[#00ff88] transition-colors"
                  >
                    ./send_another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="font-mono text-xs text-[#8b949e] block mb-1.5">
                      <span className="text-[#00ff88]">const</span> name =
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                      placeholder='"Your Name"'
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 font-mono text-sm text-white placeholder-[#8b949e]/40 focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/20 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono text-xs text-[#8b949e] block mb-1.5">
                      <span className="text-[#00ff88]">const</span> email =
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                      placeholder='"your@email.com"'
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 font-mono text-sm text-white placeholder-[#8b949e]/40 focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono text-xs text-[#8b949e] block mb-1.5">
                      <span className="text-[#00ff88]">const</span> message =
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                      placeholder='"Hello Alex, I wanted to reach out..."'
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 font-mono text-sm text-white placeholder-[#8b949e]/40 focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 rounded-lg font-mono font-bold text-sm text-black bg-[#00ff88] hover:bg-[#00ff88]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ boxShadow: "0 0 20px rgba(0,255,136,0.2)" }}
                  >
                    {sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ./sending...
                      </span>
                    ) : (
                      "$ send_message.sh"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Terminal output */}
            {termLines.length > 0 && (
              <div className="mt-4 rounded-xl border border-[#30363d] bg-[#010409] p-4 font-mono text-xs space-y-1">
                {termLines.map((line, i) => (
                  <div key={i} style={{ color: line.color }}>{line.text}</div>
                ))}
              </div>
            )}
          </div>

          {/* Right — Socials & info */}
          <div
            className="space-y-6 transition-all duration-700 delay-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)" }}
          >
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <div className="font-mono text-sm text-[#8b949e] mb-4">
                <span className="text-[#00ff88]">$</span> ls ./socials
              </div>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group flex items-center gap-4 p-3 rounded-lg border border-[#30363d] bg-[#0d1117] hover:border-opacity-50 transition-all duration-200"
                    style={{ "--hover-color": social.color } as React.CSSProperties}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: social.color + "15", color: social.color, border: `1px solid ${social.color}30` }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-mono text-sm text-white font-semibold">{social.label}</div>
                      <div className="font-mono text-xs" style={{ color: social.color }}>{social.handle}</div>
                    </div>
                    <div className="ml-auto font-mono text-[#8b949e] group-hover:translate-x-1 transition-transform duration-200">→</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="font-mono text-[#00ff88] text-sm font-bold">Available for work</span>
              </div>
              <p className="text-[#8b949e] text-sm font-sans">
                I'm currently open to full-time, contract, and freelance opportunities.
                Preferred stack: React/Next.js + Node/Go backends.
              </p>
              <div className="mt-4 font-mono text-xs text-[#8b949e]">
                <span className="text-[#00ff88]">response_time:</span> &lt; 24h
              </div>
            </div>

            {/* Location */}
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <div className="font-mono text-sm text-[#8b949e] mb-2">
                <span className="text-[#00ff88]">$</span> whereis alex
              </div>
              <div className="font-mono text-white">📍 India 🇮🇳</div>
              <div className="font-mono text-xs text-[#8b949e] mt-1">IST (UTC+5:30) · Open to remote</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8b949e]">
            <span className="text-[#00ff88]">©</span> 2024 Pratyush Kumar. Built with Next.js + Tailwind.
          </div>
          <div className="font-mono text-xs text-[#8b949e]">
            <span className="text-[#00ff88]">v1.0.0</span> · MIT License
          </div>
        </div>
      </div>
    </section>
  );
}
