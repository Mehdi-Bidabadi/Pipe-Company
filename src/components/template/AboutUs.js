import styles from './AboutUs.module.css';

import a from "../../../public/images/slide/s1.jpg"
import b from "../../../public/images/slide/s3.jpg"
import c from "../../../public/images/slide/s2.jpg"
import Image from 'next/image';
import BoxConsulting from '../module/BoxConsulting';

function AboutUs() {
    return (

        <div className={styles.container}>
            <h1 className={styles.title}>درباره ما</h1>
            <p className={styles.description}>
                به [نام شرکت شما] خوش آمدید! ما متعهد به ارائه خدمات درجه یک و ایجاد روابط پایدار با مشتریان خود هستیم.
            </p>
            <section className={styles.section}>
                <h2>ماموریت ما</h2>
                <p>
                    برای نوآوری و رهبری با یکپارچگی، ارائه ارزش برای مشتریان و تقویت رشد در جوامع خود.
                </p>
            </section>
            <section className={styles.section}>
                <h2>ارزش های ما</h2>
                <ul className={styles.valuesList}>
                    <li>صداقت</li>
                    <li>نوآوری</li>
                    <li>مشتری محوری</li>
                    <li>تعالی</li>
                </ul>
            </section>

            <BoxConsulting />

            <section className={styles.photosSection}>
                <h2>تیم ما</h2>
                <div className={styles.photosGrid}>
                    <figure className={styles.photo}>
                        <Image src={a} width={300} height={300} alt='همکار 1' />
                        <figcaption>همکار ۱</figcaption>
                    </figure>
                    <figure className={styles.photo}>
                        <Image src={b} width={300} height={300} alt='همکار 2' />

                        <figcaption>همکار ۲</figcaption>
                    </figure>
                    <figure className={styles.photo}>
                        <Image src={c} width={300} height={300} alt='همکار 3' />

                        <figcaption>همکار ۳</figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;