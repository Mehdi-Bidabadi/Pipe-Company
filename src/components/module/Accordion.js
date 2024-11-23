"use client"
import React, { useState } from 'react';
import styles from "./Accordion.module.css";

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.faqItem}>
            <div
                className={styles.faqQuestion}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>{question}</h3>
                <span className={isOpen ? styles.iconOpen : styles.iconClosed}>
                    {isOpen ? '-' : '+'}
                </span>
            </div>
            {isOpen && <div className={styles.faqAnswer}>
                {answer}
                <div>
                    <video className={styles.video}
                        width="640"
                        height="360"
                        controls
                        style={{ border: '1px solid #ccc' }}
                    >
                        <source src="/path-to-your-video/video.mp4" type="video/mp4" />
                        <source src="/path-to-your-video/video.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>}
        </div>
    )
}

export default Accordion