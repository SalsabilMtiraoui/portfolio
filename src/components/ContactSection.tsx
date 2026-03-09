import { useInView } from '../hooks/useTypewriter';
import { profile } from '../data/content';

export const ContactSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="section">
      <div className="section-inner" ref={ref as React.Ref<HTMLDivElement>}>
        <div className={`section-reveal ${inView ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="label-line" />
            <span>05 / contact</span>
          </div>

          <h2 className="section-title">Get in touch</h2>
          <p className="contact-sub">
            Looking for internship opportunities — especially in ed-tech, data, or frontend.
            Feel free to reach out!
          </p>

          <div className="contact-grid">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <span className="contact-icon">✉</span>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">{profile.email}</div>
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">⌥</span>
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">SalsabilMtiraoui</div>
              </div>
            </a>
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">{profile.phone}</div>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Switzerland</div>
              </div>
            </div>
          </div>

          <div className="contact-terminal">
            <div className="terminal-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="terminal-title">available_for.txt</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-green">✓</span> Frontend internship (React / TypeScript)</p>
              <p><span className="t-green">✓</span> Data Science internship</p>
              <p><span className="t-green">✓</span> Ed-tech / learning platform teams</p>
              <p><span className="t-green">✓</span> On-site or hybrid — open to relocation</p>
              <p><span className="t-green">✓</span> Start: June – September 2026</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>Built with React + TypeScript by Salsabil Mtiraoui — 2026</span>
        <span className="footer-stack">React · TypeScript · CSS · Vite</span>
      </footer>
    </section>
  );
};
