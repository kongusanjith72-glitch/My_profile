import { internshipExperiences } from "../data/portfolioData";
import { IconBriefcase, IconCheck } from "./Icons";
import styles from "../styles/Internship.module.css";

export default function Internship() {
  return (
    <section id="internship" className={`section-wrapper ${styles.internshipSection}`} aria-label="Internship Experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Industry Training</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Hands-on technical exposure in frontend web development and collaborative workflows.
          </p>
        </div>

        <div className={styles.experienceList}>
          {internshipExperiences.map((exp, expIdx) => (
            <article key={exp.organization + expIdx} className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.roleGroup}>
                  <div className={styles.orgIcon} aria-hidden="true">
                    <IconBriefcase size={26} />
                  </div>
                  <div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <div className={styles.orgName}>{exp.organization}</div>
                  </div>
                </div>
                <div className={styles.badgeGroup}>
                  {exp.duration && (
                    <span className={styles.durationBadge}>{exp.duration}</span>
                  )}
                  <span className={styles.internBadge}>{exp.type || "Internship"}</span>
                </div>
              </div>

              {exp.description && (
                <p className={styles.expDescription}>{exp.description}</p>
              )}

              <div className={styles.highlightsList}>
                {exp.highlights.map((item, index) => (
                  <div key={index} className={styles.highlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <IconCheck size={18} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {exp.takeaway && (
                <div className={styles.takeawayNote}>
                  <strong>Professional Impact:</strong> {exp.takeaway}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
