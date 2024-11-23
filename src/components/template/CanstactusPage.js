"use client";

import { useState, useEffect } from "react";
import styles from "./CanstactusPage.module.css";
import Faq from "../module/Faq";

function CanstactusPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        captcha: "",
    });

    const [captchaValue, setCaptchaValue] = useState("");
    const [captchaError, setCaptchaError] = useState(false);

    // تابع برای تولید کد Captcha
    const generateCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return captcha;
    };

    // تولید کد Captcha در سمت کلاینت
    useEffect(() => {
        setCaptchaValue(generateCaptcha());
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClear = () => {
        setFormData({ name: "", email: "", message: "", captcha: "" });
        setCaptchaError(false);
        setCaptchaValue(generateCaptcha()); // تولید کپچای جدید
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.captcha !== captchaValue) {
            setCaptchaError(true);
            return;
        }
        alert("فرم با موفقیت ارسال شد!");
        handleClear();
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>تماس با ما</h1>
                <p className={styles.description}>
                    برای ارتباط با ما می‌توانید از طریق فرم زیر یا اطلاعات تماس استفاده کنید.
                </p>
                <div className={styles.contactContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">نام:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">ایمیل:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">پیام:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label>کد امنیتی:</label>
                            <div className={styles.captchaContainer}>
                                <span className={styles.captcha}>{captchaValue}</span>
                                <button
                                    type="button"
                                    className={styles.refreshCaptcha}
                                    onClick={() => setCaptchaValue(generateCaptcha())}
                                >
                                    🔄
                                </button>
                            </div>
                            <input
                                type="text"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleInputChange}
                                required
                            />
                            {captchaError && (
                                <p className={styles.error}>کد امنیتی اشتباه است!</p>
                            )}
                        </div>
                        <div className={styles.buttonGroup}>
                            <button type="submit" className={styles.submitButton}>
                                ارسال
                            </button>
                            <button
                                type="button"
                                className={styles.clearButton}
                                onClick={handleClear}
                            >
                                پاک‌سازی
                            </button>
                        </div>
                    </form>
                    <div className={styles.contactInfo}>
                        <h2>اطلاعات تماس</h2>
                        <p>آدرس: تهران، خیابان لاله‌زار، پلاک 123</p>
                        <p>تلفن: 021-12345678</p>
                        <p>ایمیل: info@lalezar-bazar.ir</p>
                    </div>
                </div>
            </div>

                <Faq />
            
        </>
    );
}

export default CanstactusPage;