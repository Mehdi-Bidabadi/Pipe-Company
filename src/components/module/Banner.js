"use client";
import { useState, useEffect } from "react";

import styles from "@/components/module/Banner.module.css";

import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

// Photo paths (use public directory paths)
const photos = [
  "/slid-header/2.jpg",
  "/slid-header/4.jpg",
  "/slid-header/6.jpg",
  "/slid-header/7.jpg",
  "/slid-header/S1.jpg",
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  return (
    <div className={styles.container}>
      <img
        src={photos[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />
      <span className={styles.prev} onClick={handlePrev}>
        <MdOutlineNavigateBefore />
      </span>
      <span className={styles.next} onClick={handleNext}>
        <MdNavigateNext />
      </span>
    </div>
  )
}

export default Banner;