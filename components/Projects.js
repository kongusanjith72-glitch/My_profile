import { projectsData } from "../data/portfolioData";
import { IconFolder, IconGitHub } from "./Icons";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper" aria-label="Featured Projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Curated web applications demonstrating practical problem solving and frontend implementation.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.cardTop}>
                <div className={styles.folderIcon} aria-hidden="true">
                  <IconFolder size={22} />
                </div>
                <span className={styles.projectNumber}>0{index + 1}</span>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectTagline}>{project.tagline}</div>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techStack} aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubBtn}
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    <IconGitHub size={16} />
                    View Repository
                  </a>
                ) : (
                  <span className={styles.repoNotice}>
                    Academic / In-Progress Project
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
