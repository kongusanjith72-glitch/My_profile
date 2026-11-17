import { currentlyLearning } from "../data/portfolioData";
import { IconSparkles } from "./Icons";
import styles from "../styles/CurrentlyLearning.module.css";

export default function CurrentlyLearning() {
  return (
    <section className="section-wrapper" aria-label="Currently Learning">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Continuous Growth</span>
          <h2 className="section-title">Currently Learning</h2>
          <p className="section-subtitle">
            Expanding my engineering capabilities with modern industry technologies and frameworks.
          </p>
        </div>

        <div className={styles.learningGrid}>
          {currentlyLearning.map((item) => (
            <div key={item.title} className={styles.learningCard}>
              <div className={styles.cardHeader}>
                <span className={styles.learningBadge}>{item.badge}</span>
                <IconSparkles size={16} className="text-purple" />
              </div>
              <h3 className={styles.learningTitle}>{item.title}</h3>
              <p className={styles.learningDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
