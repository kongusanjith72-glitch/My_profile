"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo, heroData } from "../data/portfolioData";
import { IconArrowRight, IconMail, IconDownload } from "./Icons";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Typing effect logic
  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      setDisplayedText(heroData.typingTexts[0]);
      return;
    }

    const currentFullText = heroData.typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Backspacing
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % heroData.typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.heroSection} aria-label="Hero Section">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          {/* Status Badge */}
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>{personalInfo.statusBadge}</span>
          </div>

          {/* Welcome Message */}
          <p className={styles.welcomeText}>{heroData.welcomeMessage}</p>

          {/* Main Heading */}
          <h1 className={styles.mainHeading}>
            {heroData.headingGreeting}{" "}
            <span className="gradient-text">{heroData.headingName}</span>
          </h1>

          {/* Typing Text */}
          <div className={styles.typingWrapper} aria-label="Professional Roles">
            <span className={styles.typingPrefix}>I am a</span>
            <span className={styles.typingDynamic}>
              {displayedText}
              {!reducedMotion && <span className={styles.cursor}>|</span>}
            </span>
          </div>

          {/* Professional Bio */}
          <p className={styles.bioText}>{heroData.bio}</p>

          {/* Action Buttons */}
          <div className={styles.heroActions}>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className={styles.btnPrimary}
            >
              {heroData.ctaExplore}
              <IconArrowRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className={styles.btnSecondary}
            >
              <IconMail size={16} />
              {heroData.ctaContact}
            </a>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download="Sanjith_Resume.pdf"
                className={styles.btnSecondary}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Sanjith Kalithasan's Resume"
              >
                <IconDownload size={16} />
                Download Resume
              </a>
            )}
          </div>
        </div>

        {/* Profile Image Frame */}
        <div className={styles.heroMediaWrapper}>
          <div className={styles.photoFrame}>
            <Image
              src={personalInfo.profilePhoto}
              alt={`${personalInfo.name} - Frontend Developer`}
              width={426}
              height={512}
              priority
              className={styles.profileImage}
            />
            <div className={styles.photoBadge}>
              <span className={styles.badgeHighlight}>{personalInfo.initials}</span>
              <span>Krishnagiri, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
