import { certificationsData } from "../data/portfolioData";
import { IconCertificate } from "./Icons";
import styles from "../styles/Certifications.module.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper" aria-label="Certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Recognized computer application qualification strengthening practical foundations.
          </p>
        </div>

        <div className={styles.certGrid}>
          {certificationsData.map((cert) => (
            <article key={cert.title} className={styles.certCard}>
              <div className={styles.certIcon} aria-hidden="true">
                <IconCertificate size={26} />
              </div>
              <div className={styles.certContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <div className={styles.certIssuer}>{cert.issuer}</div>
                <p className={styles.certDesc}>{cert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
