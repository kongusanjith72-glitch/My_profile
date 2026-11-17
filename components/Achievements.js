import { achievementsData } from "../data/portfolioData";
import { IconAward } from "./Icons";
import styles from "../styles/Achievements.module.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper" aria-label="Achievements and Activities">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engagement</span>
          <h2 className="section-title">Achievements & Activities</h2>
          <p className="section-subtitle">
            Active involvement in developer seminars, collegiate workshops, and ongoing engineering development.
          </p>
        </div>

        <div className={styles.achievementsGrid}>
          {achievementsData.map((item) => (
            <article key={item.title} className={styles.achievementCard}>
              <div className={styles.cardHeader}>
                <div className={styles.awardIcon} aria-hidden="true">
                  <IconAward size={22} />
                </div>
                <span className={styles.typeBadge}>{item.type}</span>
              </div>
              <h3 className={styles.achievementTitle}>{item.title}</h3>
              <p className={styles.achievementDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
