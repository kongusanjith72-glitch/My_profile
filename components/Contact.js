"use client";

import { useState } from "react";
import { personalInfo, contactData } from "../data/portfolioData";
import {
  IconMail,
  IconCopy,
  IconCheck,
  IconPhone,
  IconWhatsApp,
  IconLocation,
} from "./Icons";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="contact" className={`section-wrapper ${styles.contactSection}`} aria-label="Contact Sanjith">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">{contactData.sectionTitle}</h2>
          <p className="section-subtitle">{contactData.sectionSubtitle}</p>
        </div>

        {/* Let's Work Together Banner */}
        <div className={styles.invitationCard}>
          <div className={styles.invitationBadge}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "var(--status-available)",
                display: "inline-block",
              }}
              aria-hidden="true"
            />
            <span>{personalInfo.statusBadge}</span>
          </div>
          <h3 className={styles.invitationTitle}>{contactData.invitationTitle}</h3>
          <p className={styles.invitationText}>{contactData.invitationText}</p>
        </div>

        {/* Contact Channels Grid */}
        <div className={styles.contactGrid}>
          {/* Email Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              <IconMail size={24} />
            </div>
            <h4 className={styles.cardTitle}>Email Address</h4>
            <div className={styles.cardDetail}>{personalInfo.email}</div>

            <div className={styles.btnGroup}>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`${styles.actionBtn} ${styles.primaryAction}`}
                aria-label="Send email to Sanjith Kalithasan"
              >
                <IconMail size={16} />
                Send Email
              </a>

              <div style={{ position: "relative", width: "100%" }}>
                {copied && (
                  <span className={styles.copiedToast} role="alert">
                    Copied to clipboard!
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`${styles.actionBtn} ${styles.secondaryAction}`}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <IconCheck size={16} />
                      Email Copied!
                    </>
                  ) : (
                    <>
                      <IconCopy size={16} />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              <IconPhone size={24} />
            </div>
            <h4 className={styles.cardTitle}>Phone & WhatsApp</h4>
            <div className={styles.cardDetail}>{personalInfo.phoneFormatted}</div>

            <div className={styles.btnGroup}>
              <a
                href={personalInfo.telUrl}
                className={`${styles.actionBtn} ${styles.primaryAction}`}
                aria-label="Call Sanjith Kalithasan directly"
              >
                <IconPhone size={16} />
                Call Me
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.whatsappAction}`}
                aria-label="Chat with Sanjith Kalithasan on WhatsApp"
              >
                <IconWhatsApp size={16} />
                WhatsApp Me
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              <IconLocation size={24} />
            </div>
            <h4 className={styles.cardTitle}>Location</h4>
            <div className={styles.cardDetail}>{personalInfo.location}</div>

            <div className={styles.btnGroup}>
              <div
                style={{
                  padding: "0.75rem 1rem",
                  background: "var(--bg-tertiary)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.8125rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.5",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                Open to on-site, hybrid, or remote frontend developer opportunities across India.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
