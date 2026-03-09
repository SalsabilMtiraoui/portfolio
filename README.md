# 🧑‍💻 Salsabil Mtiraoui — Portfolio

Personal portfolio website built with **React + TypeScript**, showcasing projects, skills, and experience.
This portfolio was built using modern tools, including AI-assisted coding, which I used to prototype faster. I carefully reviewed, adapted and tested all code to ensure I understand how it works.

## 🚀 Getting Started

```bash
npm install
npm run dev
# → http://localhost:5173
```

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav with active section tracking
│   ├── HeroSection.tsx     # Typewriter animation, rotating roles
│   ├── AboutSection.tsx    # Bio + terminal JSON card + education
│   ├── SkillsSection.tsx   # Animated skill bars
│   ├── ProjectsSection.tsx # Filterable project cards
│   ├── ExperienceSection.tsx # Timeline
│   └── ContactSection.tsx  # Contact cards + availability
├── data/
│   └── content.ts          # All personal data in one place
├── hooks/
│   └── useTypewriter.ts    # Typewriter + IntersectionObserver hooks
├── App.tsx
└── App.css                 # Full design system
```

## ✨ Features

- Typewriter animation for name + rotating role titles
- Smooth scroll single-page navigation
- Active section detection in navbar
- Skill bars that animate on scroll into view
- Project filter by category (frontend / data / ml)
- Timeline for experience
- Terminal-inspired design aesthetic
- Mobile responsive

## 🛠 Tech Stack

React 18 · TypeScript · CSS · Vite

