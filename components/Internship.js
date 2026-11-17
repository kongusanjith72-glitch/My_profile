import { internshipExperience } from "../data/portfolioData";
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

        <article className={styles.experienceCard}>
          <div className={styles.cardHeader}>
            <div className={styles.roleGroup}>
              <div className={styles.orgIcon} aria-hidden="true">
                <IconBriefcase size={26} />
              </div>
              <div>
                <h3 className={styles.roleTitle}>{internshipExperience.role}</h3>
                <div className={styles.orgName}>{internshipExperience.organization}</div>
              </div>
            </div>
            <span className={styles.internBadge}>Frontend Internship</span>
          </div>

          <div className={styles.highlightsList}>
            {internshipExperience.highlights.map((item, index) => (
              <div key={index} className={styles.highlightItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <IconCheck size={18} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.takeawayNote}>
            <strong>Professional Impact:</strong> {internshipExperience.takeaway}
          </div>
        </article>
      </div>
    </section>
  );
}
