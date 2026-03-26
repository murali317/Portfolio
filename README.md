<div align="center">

# ✦ Muralikrishna Devarakonda — Portfolio

### _Crafted with React · TypeScript · Framer Motion_

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Portfolio-63b3ed?style=for-the-badge)](https://github.com/murali317/Portfolio)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## 🧠 About This Project

A **modern, production-grade personal portfolio** built from scratch — no templates, no cookie-cutter designs. Every component, animation, and interaction was handcrafted to showcase real UI engineering skills.

> Built to impress — not just to exist.

---

## ✨ Features

| Feature                          | Details                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------- |
| 🎨 **Dark / Light Theme**        | Persisted via `localStorage`, smooth CSS variable transitions                 |
| 🌊 **Particle Canvas**           | Custom WebGL-style canvas animation with connection lines                     |
| ⌨️ **Typewriter Effect**         | Smooth role cycling with delete animation, built from scratch                 |
| 🖱️ **Custom Cursor**             | Dot + ring follower, hides on interactive elements, disabled on touch devices |
| 📜 **Scroll Progress Bar**       | Fixed top indicator tracking page scroll position                             |
| 🏗️ **Framer Motion Animations**  | `whileInView`, stagger delays, layout animations, `AnimatePresence`           |
| 📬 **Rate-limited Contact Form** | Formspree backend + 60s cooldown with countdown timer via `localStorage`      |
| 💼 **Experience Timeline**       | Accordion cards, pulsing "Current" dot, highlighted metrics                   |
| 🔍 **Filterable Skills Grid**    | Progress bars animated on scroll, per-category filtering                      |
| 🖼️ **Project Cards**             | Hover overlays, image zoom, live demo + GitHub links                          |
| 📱 **Pixel-Perfect Responsive**  | Breakpoints at 1024px, 768px, 480px — mobile drawer nav                       |
| ✦ **"Hire Me!" CTA**             | Fixed floating button with pulsing glow animation                             |

---

## 🛠️ Tech Stack

```
Frontend        React 19 · TypeScript · JSX
Build Tool      Vite 8 (Rolldown)
Styling         Tailwind CSS 4 · CSS Custom Properties (theming)
Animation       Framer Motion 12
Icons           Lucide React · Custom inline SVGs (brand icons)
Forms           Formspree (serverless, no backend needed)
State           React Context API (ThemeContext) · useState
Fonts           Inter · Fira Code (Google Fonts)
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Fixed nav, scroll-aware, mobile drawer
│   ├── sections/
│   │   ├── Hero.tsx            # Particle canvas + typewriter
│   │   ├── About.tsx           # Bio, stats, resume download
│   │   ├── Experience.tsx      # Vertical timeline accordion
│   │   ├── Skills.tsx          # Filterable skill cards + progress bars
│   │   ├── Projects.tsx        # Project grid with hover overlays
│   │   ├── Services.tsx        # Service cards
│   │   └── Contact.tsx         # Form + socials (rate-limited)
│   └── ui/
│       └── SocialIcons.tsx     # Custom SVG brand icons
├── context/
│   └── ThemeContext.tsx        # Dark/light theme provider
├── data/
│   ├── personal.ts             # Name, bio, links, services
│   ├── projects.ts             # Project metadata
│   ├── skills.ts               # Skills with levels + colors
│   └── experience.ts           # Work history
├── App.tsx                     # Root — ScrollProgress, CustomCursor, HireMeButton
├── main.tsx                    # Entry — wraps with ThemeProvider
└── index.css                   # CSS variables, utility classes, keyframes
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/murali317/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Production build
npm run build
```

---

## 🌐 Deployment

Deploys to **Netlify** in one click:

1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

Every `git push` triggers an automatic redeploy.

---

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-murali.k.devarakonda@gmail.com-63b3ed?style=flat-square&logo=gmail)](mailto:murali.k.devarakonda@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-murali317-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/murali317)
[![GitHub](https://img.shields.io/badge/GitHub-murali317-333?style=flat-square&logo=github)](https://github.com/murali317)
[![YouTube](https://img.shields.io/badge/YouTube-TheIndianWebbie-ff0000?style=flat-square&logo=youtube)](https://www.youtube.com/@TheIndianWebbie/)

</div>

---

<div align="center">

Built with ❤️ by **Muralikrishna Devarakonda** &nbsp;·&nbsp; React + TypeScript + Framer Motion

_"Always Do The Right Karma 💛"_

</div>
