"use client"
import React, { useState, useEffect } from "react";
import styles from "./ReturnToTopButton.module.css";

function ReturnToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
    className={`${styles.returnToTopButton} ${
      isVisible ? styles.visible : ""
    }`}
    onClick={scrollToTop}
  >
    ↑
  </button>
  )
}

export default ReturnToTopButton