"use client"
import { useState } from "react";

import styles from "@/components/module/SlideShow.module.css";


const photos = [
    "https://via.placeholder.com/800x200?text=Photo+1",
    "https://via.placeholder.com/800x200?text=Photo+2",
    "https://via.placeholder.com/800x200?text=Photo+3",
    "https://via.placeholder.com/800x200?text=Photo+4",
];

function SlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={{ textAlign: "center", margin: "20px", }}>
            <div style={{ position: "relative", width: "100%", margin: "auto" }}>
                <img className={styles.img}
                    src={photos[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <button className={styles.button}
                    onClick={handlePrev}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "#e81111",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",

                    }}
                >
                    &#8592;
                </button>
                <button
                    onClick={handleNext}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "#e81111",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",

                    }}
                >
                    &#8594;
                </button>
                
            </div>
            <p>Photo {currentIndex + 1} of {photos.length}</p>
        </div>
    )
}

export default SlideShow