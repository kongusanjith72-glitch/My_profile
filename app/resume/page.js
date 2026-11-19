import Link from "next/link";
import styles from "../../styles/ResumePage.module.css";
import { IconDownload, IconArrowRight } from "../../components/Icons";

export const metadata = {
  title: "Resume | Sanjith Kalithasan",
  description: "Official Curriculum Vitae / Resume of Sanjith Kalithasan - Frontend Developer & MCA Student.",
};

export default function ResumePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Top Floating Action Header */}
      <nav className={styles.topBar} aria-label="Resume Actions">
        <Link href="/" className={styles.backBtn} aria-label="Back to Portfolio Home">
          ← Back to Portfolio
        </Link>
        <div className={styles.topBarActions}>
          <a
            href="/Sanjith_Resume.pdf"
            download="Sanjith_Resume.pdf"
            className={styles.downloadBtn}
            aria-label="Download PDF Resume"
          >
            <IconDownload size={16} />
            Download PDF
          </a>
        </div>
      </nav>

      {/* Printable / Clean Paper Sheet */}
      <main className={styles.resumeSheet} role="main" aria-label="Resume Document">
        {/* Document Header */}
        <header className={styles.docHeader}>
          <h1 className={styles.nameTitle}>SANJITH K</h1>
          <div className={styles.contactLine}>
            Krishnagiri, Tamil Nadu | Ph: 6379348905 |{" "}
            <a href="mailto:sanjithsanji70@gmail.com" className={styles.linkValue}>
              sanjithsanji70@gmail.com
            </a>
          </div>

          <div className={styles.contactLinksGrid}>
            <span className={styles.linkLabel}>Linked in</span>
            <span>
              :{" "}
              <a
                href="https://www.linkedin.com/in/sanjith-kalithasan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkValue}
              >
                https://www.linkedin.com/in/sanjith-kalithasan
              </a>
            </span>

            <span className={styles.linkLabel}>Github</span>
            <span>
              :{" "}
              <a
                href="https://github.com/Sanjith-web"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkValue}
              >
                https://github.com/Sanjith-web
              </a>
            </span>

            <span className={styles.linkLabel}>Portfolio</span>
            <span>
              :{" "}
              <a
                href="https://my-profile-olive-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkValue}
              >
                https://my-profile-olive-mu.vercel.app/
              </a>
            </span>
          </div>
        </header>

        {/* Career Objective */}
        <section className={styles.sectionBlock} aria-labelledby="career-obj-heading">
          <h2 id="career-obj-heading" className={styles.sectionHeading}>
            CAREER OBJECTIVE:
          </h2>
          <p className={styles.objectiveText}>
            To secure a challenging position in a reputable organization where I can leverage my programming,
            problem-solving, and technical skills to contribute to the company&apos;s growth and objectives. I am
            eager to apply my knowledge, learn new technologies, and collaborate effectively within a
            team-oriented environment.
          </p>
        </section>

        {/* Educational Qualification */}
        <section className={styles.sectionBlock} aria-labelledby="edu-heading">
          <h2 id="edu-heading" className={styles.sectionHeading}>
            EDUCATIONAL QUALIFICATION:
          </h2>

          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <span className={styles.eduDegree}>Master of Computer Application</span>
              <span className={styles.eduYears}>2025-2027</span>
            </div>
            <div className={styles.eduInstitute}>Karpagam Academy of Higher Education, Coimbatore</div>
            <div className={styles.eduScore}>CGPA: 8.4 (Semester 3)</div>
          </div>

          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <span className={styles.eduDegree}>Bachelor of Computer Application</span>
              <span className={styles.eduYears}>2022-2025</span>
            </div>
            <div className={styles.eduInstitute}>Sri Vidya Mandir Arts and Science College, Krishnagiri</div>
            <div className={styles.eduScore}>CGPA: 7.928</div>
          </div>

          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <span className={styles.eduDegree}>Higher Secondary Certificate</span>
              <span className={styles.eduYears}>2021-2022</span>
            </div>
            <div className={styles.eduInstitute}>Mullai Matric Higher Secondary School, Dharmapuri</div>
            <div className={styles.eduScore}>Percentage: 61.6</div>
          </div>

          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <span className={styles.eduDegree}>Secondary School Leaving Certificate</span>
              <span className={styles.eduYears}>2019-2020</span>
            </div>
            <div className={styles.eduInstitute}>Mullai Matric Higher Secondary School, Dharmapuri</div>
            <div className={styles.eduScore}>Percentage: 86.6</div>
          </div>
        </section>

        {/* Internship */}
        <section className={styles.sectionBlock} aria-labelledby="internship-heading">
          <h2 id="internship-heading" className={styles.sectionHeading}>
            INTERNSHIP:
          </h2>
          <div className={styles.internshipItem}>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                In May 2024, I undertook a 15-day internship in <strong>Web Development</strong> at NSIC –
                Technical Services Centre, Guindy, Chennai.
              </li>
              <li className={styles.bulletItem}>
                <strong>LEARNING OBJECTIVE:</strong> Gained practical experience in front-end web development
                using HTML, CSS, and JavaScript. Developed responsive and user-friendly web pages with an
                effective user interface. Learned to create interactive web elements using JavaScript and DOM
                manipulation. Worked on website layout, styling, debugging, and cross-browser compatibility.
                Improved problem-solving, teamwork, and technical skills through hands-on development tasks.
              </li>
            </ul>
          </div>
        </section>

        {/* Project */}
        <section className={styles.sectionBlock} aria-labelledby="project-heading">
          <h2 id="project-heading" className={styles.sectionHeading}>
            PROJECT:
          </h2>
          <div className={styles.projectDetails}>
            <div className={styles.projectRow}>
              <span className={styles.rowLabel}>TITLE</span>
              <span className={styles.rowValue}>: Event Finder Management System</span>
            </div>
            <div className={styles.projectRow}>
              <span className={styles.rowLabel}>DURATION</span>
              <span className={styles.rowValue}>: 45 DAYS</span>
            </div>
            <div className={styles.projectRow}>
              <span className={styles.rowLabel}>ABSTRACT</span>
              <span className={styles.rowValue}>
                : Developed an Event Finder Management System to help users discover, manage, and register for
                events efficiently. Implemented features for user registration, event searching by location,
                event booking, and viewing registered event details. Designed the system with a structured
                database to securely store user and event information. Enhanced user experience and reduced
                manual effort through an organized and user-friendly digital platform.
              </span>
            </div>
          </div>
        </section>

        {/* Area of Interest */}
        <section className={styles.sectionBlock} aria-labelledby="interest-heading">
          <h2 id="interest-heading" className={styles.sectionHeading}>
            AREA OF INTEREST:
          </h2>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>UI/UX Design</li>
            <li className={styles.bulletItem}>Web Development</li>
          </ul>
        </section>

        {/* Technical & Soft Skills Two Column Grid */}
        <div className={styles.twoColGrid}>
          {/* Technical Skills */}
          <section className={styles.sectionBlock} aria-labelledby="tech-skills-heading">
            <h2 id="tech-skills-heading" className={styles.sectionHeading}>
              TECHNICAL SKILLS:
            </h2>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                <strong>Languages:</strong> Java, Frontend Development, React
              </li>
              <li className={styles.bulletItem}>
                <strong>Database:</strong> MySQL
              </li>
              <li className={styles.bulletItem}>
                <strong>Operating System:</strong> Windows
              </li>
              <li className={styles.bulletItem}>
                <strong>Office Tools:</strong> MS Office: Word, Excel, Power Point
              </li>
            </ul>
          </section>

          {/* Soft Skills */}
          <section className={styles.sectionBlock} aria-labelledby="soft-skills-heading">
            <h2 id="soft-skills-heading" className={styles.sectionHeading}>
              SOFT SKILLS:
            </h2>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>Team work</li>
              <li className={styles.bulletItem}>Time Management</li>
              <li className={styles.bulletItem}>Adaptability</li>
              <li className={styles.bulletItem}>Self-Motivator</li>
            </ul>
          </section>
        </div>

        {/* Certificates */}
        <section className={styles.sectionBlock} aria-labelledby="certificate-heading">
          <h2 id="certificate-heading" className={styles.sectionHeading}>
            CERTIFICATE:
          </h2>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              Diploma in Computer Application (DCA) Offered by Computer Software College (CSC).
            </li>
            <li className={styles.bulletItem}>
              Participated in &ldquo;International Conference Mathematical Modelling and Intelligent System
              (ICMMIS)&rdquo;, (MARCH 2024).
            </li>
          </ul>
        </section>

        {/* Languages Known */}
        <section className={styles.sectionBlock} aria-labelledby="lang-heading">
          <h2 id="lang-heading" className={styles.sectionHeading}>
            LANGUAGE KNOWN:
          </h2>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>Tamil</li>
            <li className={styles.bulletItem}>English</li>
          </ul>
        </section>

        {/* Declaration */}
        <section className={styles.declarationBlock} aria-labelledby="declaration-heading">
          <h2 id="declaration-heading" className={styles.sectionHeading}>
            DECLARATION
          </h2>
          <p className={styles.declarationText}>
            I hereby declare that the information provided above is true and correct to the best of my knowledge
            and belief.
          </p>

          <div className={styles.signatureRow}>
            <div>
              <div className={styles.signItem}>Place: Krishnagiri</div>
              <div className={styles.signItem}>Date:</div>
            </div>
            <div className={styles.signItem}>[SANJITH K]</div>
          </div>
        </section>
      </main>
    </div>
  );
}
