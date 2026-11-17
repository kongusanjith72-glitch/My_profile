import { educationData } from "../data/portfolioData";
import { IconGraduationCap } from "./Icons";
import styles from "../styles/Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section-wrapper" aria-label="Education Details">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal degrees in Computer Applications establishing core computer science fundamentals.
          </p>
        </div>

        <div className={styles.educationGrid}>
          {educationData.map((item, index) => (
            <article key={index} className={styles.educationCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <IconGraduationCap size={24} />
                </div>
                <span className={styles.periodBadge}>{item.period}</span>
              </div>

              <h3 className={styles.degreeTitle}>{item.degree}</h3>
              <div className={styles.institution}>{item.institution}</div>
              <div className={styles.location}>{item.location}</div>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
