import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useTypewriter';
import { skills } from '../data/content';

const SkillBar = ({ skill, animate }: { skill: typeof skills[0]; animate: boolean }) => {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setW(skill.level), 100);
    return () => clearTimeout(t);
  }, [animate, skill.level]);

  return (
    <div className="skill-item">
      <div className="skill-top">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: `${w}%`,
            background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`,
            boxShadow: animate ? `0 0 10px ${skill.color}44` : 'none',
            transition: 'width 1.1s cubic-bezier(0.34,1.4,0.64,1)',
          }}
        />
      </div>
      <div className="skill-tags">
        {skill.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner" ref={ref as React.Ref<HTMLDivElement>}>
        <div className={`section-reveal ${inView ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="label-line" />
            <span>02 / skills</span>
          </div>

          <h2 className="section-title">Technical Stack</h2>

          <div className="skills-grid">
            {skills.map(s => (
              <SkillBar key={s.name} skill={s} animate={inView} />
            ))}
          </div>

          <div className="also-know">
            <span className="also-label">Also comfortable with:</span>
            {['LaTeX', 'Linux', 'Jupyter', 'pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'Tableau'].map(t => (
              <span key={t} className="also-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
