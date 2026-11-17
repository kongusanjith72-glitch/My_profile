import Link from "next/link";
import styles from "../styles/NotFound.module.css";
import { IconArrowRight } from "../components/Icons";

export const metadata = {
  title: "404 - Page Not Found | Sanjith Kalithasan",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className={styles.notFoundContainer} role="main">
      <div className={styles.errorCode}>404</div>
      <h1 className={styles.errorTitle}>Page Not Found</h1>
      <p className={styles.errorDescription}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className={styles.homeBtn}>
        Back to Home
        <IconArrowRight size={16} />
      </Link>
    </main>
  );
}
