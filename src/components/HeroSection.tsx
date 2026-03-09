import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { profile } from '../data/content';

const roles = [
  'Data Science Student',
  'Frontend Developer',
  'ML Enthusiast',
  'Coding Instructor',
];

export const HeroSection = () => {
  const { displayed: name } = useTypewriter(profile.name, 55, 300);
  const [roleIdx, setRoleIdx] = useState(0);
  const { displayed: role, done } = useTypewriter(roles[roleIdx], 50, 1200);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setRoleIdx(i => (i + 1) % roles.length), 2000);
    return () => clearTimeout(t);
  }, [done, roleIdx]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="grid-lines" />
        {[...Array(20)].map((_, i) => (
          <div key={i} className="hero-dot" style={{
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 23 + 10) % 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + (i % 4)}s`,
          }} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-pre">
          <span className="prompt">~/portfolio</span>
          <span className="cmd"> $ whoami</span>
        </div>

        <h1 className="hero-name">
          {name}
          {name.length < profile.name.length && <span className="cursor" />}
        </h1>

        <div className="hero-role-line">
          <span className="prompt-arrow">→ </span>
          <span className="hero-role">{role}</span>
          <span className="cursor blink" />
        </div>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            view projects
          </button>
          <button className="btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            contact me
          </button>
        </div>

        <div className="hero-meta">
          <span>📍 Switzerland</span>
          <span>🎓 UniNE + EPFL</span>
          <a href={profile.github} target="_blank" rel="noreferrer">⌥ GitHub</a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};
