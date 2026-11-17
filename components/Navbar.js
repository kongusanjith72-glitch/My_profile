"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { personalInfo, navLinks } from "../data/portfolioData";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const sectionId = link.href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      // update URL hash without jump
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.topRow}>
          <Link
            href="#home"
            className={styles.brand}
            onClick={(e) => handleLinkClick(e, "#home")}
            aria-label={`${personalInfo.name} - Home`}
          >
            <div className={styles.brandLogo} aria-hidden="true">
              {personalInfo.initials}
            </div>
            <div className={styles.brandInfo}>
              <span className={styles.brandName}>{personalInfo.name}</span>
              <span className={styles.brandRole}>Frontend Developer</span>
            </div>
          </Link>

          <div className={styles.navActions}>
            <ThemeToggle />
          </div>
        </div>

        <nav className={styles.navMenuWrapper} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
