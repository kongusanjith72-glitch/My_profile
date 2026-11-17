import { whatICanDo } from "../data/portfolioData";
import {
  IconResponsive,
  IconCode,
  IconDesign,
  IconLayout,
  IconDatabase,
  IconLearning,
} from "./Icons";
import styles from "../styles/WhatICanDo.module.css";

const iconMap = {
  responsive: IconResponsive,
  code: IconCode,
  design: IconDesign,
  layout: IconLayout,
  database: IconDatabase,
  learning: IconLearning,
};

export default function WhatICanDo() {
  return (
    <section className="section-wrapper" aria-label="What I Can Do">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">What I Can Do</h2>
          <p className="section-subtitle">
            Practical development strengths and design capabilities I bring to web engineering projects.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {whatICanDo.map((item) => {
            const IconComponent = iconMap[item.iconName] || IconCode;
            return (
              <article key={item.title} className={styles.serviceCard}>
                <div className={styles.iconBox} aria-hidden="true">
                  <IconComponent size={24} />
                </div>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceDesc}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
