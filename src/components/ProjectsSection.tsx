import { useState } from 'react';
import { useInView } from '../hooks/useTypewriter';
import { projects } from '../data/content';

type Filter = 'all' | 'frontend' | 'data' | 'ml';

const typeLabel: Record<string, string> = { frontend: '⚛ Frontend', data: '🗄 Data', ml: '🤖 ML' };
const typeColor: Record<string, string> = { frontend: '#61dafb', data: '#00b4d8', ml: '#a78bfa' };

export const ProjectsSection = () => {
  const { ref, inView } = useInView();
  const [filter, setFilter] = useState<Filter>('all');

  const shown = projects.filter(p => filter === 'all' || p.type === filter);

  return (
    <section id="projects" className="section">
      <div className="section-inner" ref={ref as React.Ref<HTMLDivElement>}>
        <div className={`section-reveal ${inView ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="label-line" />
            <span>03 / projects</span>
          </div>

          <div className="projects-header">
            <h2 className="section-title">Work & Projects</h2>
            <div className="filter-row">
              {(['all', 'frontend', 'data', 'ml'] as Filter[]).map(f => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {shown.map((p, i) => (
              <div
                key={p.id}
                className={`project-card ${p.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {p.featured && <div className="featured-badge">★ featured</div>}
                <div className="project-top">
                  <div>
                    <span className="project-type" style={{ color: typeColor[p.type] }}>
                      {typeLabel[p.type]}
                    </span>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-sub">{p.subtitle}</p>
                  </div>
                  <span className="project-year">{p.year}</span>
                </div>

                <p className="project-desc">{p.description}</p>

                <ul className="project-highlights">
                  {p.highlights.map(h => (
                    <li key={h}><span className="bullet">▸</span>{h}</li>
                  ))}
                </ul>

                <div className="project-footer">
                  <div className="project-tech">
                    {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  {p.github !== '#' && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      ↗ GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
