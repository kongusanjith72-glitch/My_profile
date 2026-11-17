"use client";

import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "./Icons";
import styles from "../styles/ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("sk_theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("sk_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={styles.themeBtn}
        aria-label="Toggle dark/light theme"
        disabled
      >
        <span style={{ width: 18, height: 18 }} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.themeBtn}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
    </button>
  );
}
