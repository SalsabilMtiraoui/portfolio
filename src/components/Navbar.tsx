import { useState, useEffect } from 'react';

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('home')}>
          <span className="logo-bracket">[</span>
          sm
          <span className="logo-bracket">]</span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {sections.map(s => (
            <button
              key={s}
              className={`nav-item ${active === s ? 'active' : ''}`}
              onClick={() => scrollTo(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(p => !p)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};
