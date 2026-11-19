"use client";

import { usePathname } from "next/navigation";
import { personalInfo, navLinks } from "../data/portfolioData";
import { IconLinkedIn, IconGitHub, IconMail, IconLocation } from "./Icons";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/resume")) {
    return null;
  }

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Site Footer">
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <div className={styles.brandInitials} aria-hidden="true">
                {personalInfo.initials}
              </div>
              <span className={styles.brandName}>{personalInfo.name}</span>
            </div>
            <div className={styles.brandTitle}>{personalInfo.title}</div>
            <p className={styles.brandBio}>
              Aspiring Frontend Developer dedicated to creating accessible, responsive, and modern web experiences.
            </p>

            <div className={styles.socialRow}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Sanjith Kalithasan on LinkedIn"
              >
                <IconLinkedIn size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Sanjith Kalithasan on GitHub"
              >
                <IconGitHub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className={styles.footerColTitle}>Navigation</h4>
            <ul className={styles.footerLinksList}>
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                    onClick={(e) => handleScrollTo(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 & Location */}
          <div>
            <h4 className={styles.footerColTitle}>Explore More</h4>
            <ul className={styles.footerLinksList}>
              {navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                    onClick={(e) => handleScrollTo(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "1.25rem" }} className={styles.contactSummary}>
              <div className={styles.summaryItem}>
                <IconLocation size={14} />
                <span>{personalInfo.location}</span>
              </div>
              <div className={styles.summaryItem}>
                <IconMail size={14} />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Crafted with Next.js &amp; Modern Semantic CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
