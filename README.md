# 🤖 Dev Portfolio — Next.js

A stunning developer portfolio with a VS Code theme, matrix rain animations, robotic animations, and a full developer aesthetic.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## 📁 Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout with scanline effect
│   ├── page.tsx          # Main page composing all sections
│   └── globals.css       # Global styles, animations, fonts
├── components/
│   ├── Navbar.tsx         # Sticky nav with active state
│   ├── HeroSection.tsx    # VS Code JSON panel + matrix rain
│   ├── ProjectsSection.tsx # Project cards + robot + terminal
│   ├── AboutSection.tsx   # Skills, timeline, fun facts
│   └── ContactSection.tsx # Contact form + socials
├── tailwind.config.ts     # Custom colors and animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Features

- **Hero Section**: Live VS Code editor with animated JSON revealing your info, matrix rain canvas animation
- **Projects Section**: Cards with per-project robot mascots, live terminal deployment simulation on hover
- **About Section**: Animated skill bars, career timeline, fun facts grid
- **Contact Section**: Styled form with terminal output animation, social links
- **Global**: Scanline effect, green glow theme, monospace font, smooth scroll

## ✏️ Customization

### Update your info in `components/HeroSection.tsx`:
```ts
// Change name, title, location, skills
const jsonLines = [
  { key: '"developer"', value: '"Your Name"', ... },
  { key: '"title"', value: '"Your Title"', ... },
  ...
]
```

### Update projects in `components/ProjectsSection.tsx`:
```ts
const projects = [
  { name: "YourProject", description: "...", tech: ["..."], ... },
  ...
]
```

### Update contact/socials in `components/ContactSection.tsx`:
```ts
const socials = [
  { label: "GitHub", handle: "@yourhandle", href: "https://github.com/you" },
  ...
]
```

## 🛠️ Built With
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Custom CSS animations (no extra animation libraries needed)
