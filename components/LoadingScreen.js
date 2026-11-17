"use client";

import { useState, useEffect } from "react";
import styles from "../styles/LoadingScreen.module.css";
import { personalInfo } from "../data/portfolioData";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Short professional KS initials loading experience (850ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`${styles.loaderOverlay} ${!loading ? styles.hidden : ""}`}
      aria-hidden={!loading}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className={styles.loaderContent}>
        <div className={styles.initialsBadge}>
          <span className={styles.initialsText}>{personalInfo.initials}</span>
        </div>
        <div className={styles.nameText}>{personalInfo.name}</div>
        <div className={styles.roleText}>Frontend Developer</div>
        <div className={styles.loadingLine}>
          <div className={styles.loadingProgress} />
        </div>
      </div>
    </div>
  );
}
