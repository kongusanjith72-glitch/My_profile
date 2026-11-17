import Image from "next/image";
import { personalInfo, aboutData } from "../data/portfolioData";
import { IconLocation, IconBriefcase } from "./Icons";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={`section-wrapper ${styles.aboutSection}`} aria-label="About Me">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Overview</span>
          <h2 className="section-title">{aboutData.sectionTitle}</h2>
          <p className="section-subtitle">{aboutData.sectionSubtitle}</p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Main Story & Career Objective */}
          <div className={styles.aboutTextColumn}>
            {aboutData.paragraphs.map((para, index) => (
              <p key={index} className={styles.aboutParagraph}>
                {para}
              </p>
            ))}

            <div className={styles.objectiveCard}>
              <div className={styles.objectiveTitle}>
                <IconBriefcase size={16} />
                Career Objective
              </div>
              <p className={styles.objectiveText}>
                &ldquo;{personalInfo.careerObjective}&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Facts Card */}
          <aside className={styles.factsCard} aria-label="Quick Highlights">
            <div className={styles.factsHeader}>
              <div className={styles.factsAvatar} aria-hidden="true">
                <Image
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  width={48}
                  height={48}
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.factsTitleGroup}>
                <h3>{personalInfo.name}</h3>
                <p>{personalInfo.title}</p>
              </div>
            </div>

            <div className={styles.factsList}>
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Career Status</span>
                <span className={styles.factValue}>{personalInfo.statusDescription}</span>
              </div>

              <div className={styles.factItem}>
                <span className={styles.factLabel}>Current Program</span>
                <span className={styles.factValue}>Master of Computer Applications (MCA)</span>
              </div>

              <div className={styles.factItem}>
                <span className={styles.factLabel}>Location</span>
                <span className={styles.factValue}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                    <IconLocation size={14} />
                    {personalInfo.location}
                  </span>
                </span>
              </div>

              <div className={styles.factItem}>
                <span className={styles.factLabel}>Languages Known</span>
                <div className={styles.languagePills}>
                  {personalInfo.languages.map((lang) => (
                    <span key={lang.name} className={styles.pill}>
                      {lang.name} ({lang.proficiency.split(" ")[0]})
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.factItem}>
                <span className={styles.factLabel}>Key Focus Areas</span>
                <span className={styles.factValue}>
                  Frontend Engineering, Responsive UI, Accessible Design
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
