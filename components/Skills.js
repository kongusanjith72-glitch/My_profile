import { technicalSkills } from "../data/portfolioData";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={`section-wrapper ${styles.skillsSection}`} aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies and tools I work with daily, with verified and realistic proficiencies.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {technicalSkills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillTop}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>

              <span className={styles.categoryTag}>{skill.category}</span>

              <div
                className={styles.barTrack}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={`${skill.name} proficiency`}
              >
                <div
                  className={styles.barFill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className={styles.skillDesc}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
