import { useInView } from '../hooks/useTypewriter';
import { profile, education } from '../data/content';

export const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section">
      <div className="section-inner" ref={ref as React.Ref<HTMLDivElement>}>
        <div className={`section-reveal ${inView ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="label-line" />
            <span>01 / about</span>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Who I am</h2>
              <p className="about-bio">{profile.bio}</p>
              <p className="about-bio" style={{ marginTop: '1rem' }}>
                I speak French and Arabic natively, English at C1 level, and German at B2. 
                Outside of tech, I compete in sports — which taught me discipline, team spirit, and how to handle pressure.
              </p>
            </div>

            <div className="about-right">
              <div className="terminal-box">
                <div className="terminal-header">
                  <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                  <span className="terminal-title">profile.json</span>
                </div>
                <pre className="terminal-body">{`{
  "name": "Salsabil Mtiraoui",
  "location": "Switzerland",
  "studying": "Data Science",
  "university": ["UniNE", "EPFL"],
  "languages": {
    "fr": "native",
    "ar": "native",
    "en": "C1",
    "de": "B2"
  },
  "looking_for": "internship",
  "interests": [
    "machine learning",
    "frontend dev",
    "data analytics",
    "education tech"
  ]
}`}</pre>
              </div>

              <div className="edu-list">
                {education.map((e, i) => (
                  <div key={i} className="edu-item">
                    <span className="edu-icon">{e.icon}</span>
                    <div>
                      <div className="edu-degree">{e.degree}</div>
                      <div className="edu-school">{e.school}</div>
                      <div className="edu-detail">{e.detail} — <span className="edu-period">{e.period}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
