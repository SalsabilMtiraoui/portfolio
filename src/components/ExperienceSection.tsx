import { useInView } from '../hooks/useTypewriter';
import { experience } from '../data/content';

export const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner" ref={ref as React.Ref<HTMLDivElement>}>
        <div className={`section-reveal ${inView ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="label-line" />
            <span>04 / experience</span>
          </div>

          <h2 className="section-title">Experience</h2>

          <div className="timeline">
            {experience.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-left">
                  <div className="timeline-dot">{e.icon}</div>
                  {i < experience.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-body">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{e.role}</h3>
                    <span className="timeline-period">{e.period}</span>
                  </div>
                  <div className="timeline-company">{e.company}</div>
                  <p className="timeline-desc">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
