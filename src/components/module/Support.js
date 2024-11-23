"use client"
import { useEffect, useState } from "react";
import styles from "./Support.module.css";

function Support() {

    const [showContainer, setShowContainer] = useState(false);
    const [showSupport, setShowSupport] = useState(false);

    useEffect(() => {
        // Show the container first
        setShowContainer(true);

        // Show the support section after a delay
        const timer = setTimeout(() => {
            setShowSupport(true);
        }, 500); // 500ms delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div>
        {showContainer && (
            <div className={styles.container}>
                {showSupport && (
                    <div className={styles.support}>
                        <div className={styles.desc}>
                            <p>ما آمادگی پاسخگویی در زمینه های تخصصی را داریم</p>
                            <span>اگر میخواهید توضیحات بیشتری دریافت نمایید و یا هرگونه سوالی دارید تماس بگیرید</span>
                        </div>
                        <div className={styles.call}>
                            <button>تماس با ما</button>
                            <button>ارتباط با ما</button>
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
    )
}

export default Support