"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IconArrowUp } from "./Icons";
import styles from "../styles/BackToTop.module.css";

export default function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith("/resume")) return;
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [pathname]);

  if (pathname?.startsWith("/resume")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
      aria-label="Back to top of page"
      title="Back to top"
    >
      <IconArrowUp size={20} />
    </button>
  );
}
