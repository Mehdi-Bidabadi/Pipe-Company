"use client"
import styles from "./Faq.module.css";
import Accordion from './Accordion';;

function Faq() {
    const faqData = [
        { question: "پروفیل چیست؟", answer: "پروفیل بستری برای ..." },
        { question: "چگونه می توانم ثبت نام کنم؟", answer: "برای ثبت نام به صفحه ثبت نام مراجعه کنید..." },
        { question: "چه خدماتی ارائه می دهید؟", answer: "ما انواع خدمات  را ارائه می دهیم ..." },
        // Add more questions and answers
      ];
  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.title}>سوالات متداول</h1>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <Accordion key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}

export default Faq;