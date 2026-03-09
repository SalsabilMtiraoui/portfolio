# 🧑‍💻 Salsabil Mtiraoui — Portfolio

Personal portfolio website built with **React + TypeScript**, showcasing projects, skills, and experience.
This portfolio was created with the assistance of AI (Claude) as part of my learning process. Due to time constraints, I used AI tools to help structure and implement the website so that I could present a working portfolio while actively learning web development concepts. My goal was not only to showcase my projects but also to experiment with modern development tools and accelerate my understanding of front-end technologies. I reviewed, adapted, and learned from the generated code throughout the process.

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

## 📝 To customize

Edit `src/data/content.ts` to update all personal info, projects, and skills — no need to touch any components.
