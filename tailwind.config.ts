import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vscode-bg": "#0d1117",
        "vscode-sidebar": "#010409",
        "vscode-tab": "#161b22",
        "vscode-border": "#30363d",
        "vscode-green": "#3fb950",
        "vscode-blue": "#79c0ff",
        "vscode-purple": "#d2a8ff",
        "vscode-orange": "#ffa657",
        "vscode-red": "#ff7b72",
        "vscode-yellow": "#e3b341",
        "vscode-cyan": "#56d364",
        "accent-green": "#00ff88",
        "accent-blue": "#0ea5e9",
        "accent-purple": "#a855f7",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans: ["'Space Grotesk'", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "typewriter": "typewriter 3s steps(30) forwards",
        "blink": "blink 1s step-end infinite",
        "scan": "scan 3s linear infinite",
        "orbit": "orbit 6s linear infinite",
        "orbit-reverse": "orbit 6s linear infinite reverse",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "robot-bob": "robotBob 3s ease-in-out infinite",
        "glitch": "glitch 3s infinite",
        "matrix-fall": "matrixFall 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88" },
          "100%": { boxShadow: "0 0 10px #00ff88, 0 0 25px #00ff88, 0 0 50px #00ff88" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        robotBob: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(-2deg)" },
          "75%": { transform: "translateY(-5px) rotate(2deg)" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)" },
          "92%": { transform: "translate(-2px, 1px)" },
          "94%": { transform: "translate(2px, -1px)" },
          "96%": { transform: "translate(-1px, 2px)" },
          "98%": { transform: "translate(1px, -2px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        matrixFall: {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
