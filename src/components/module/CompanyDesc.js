import styles from "@/components/module/CompanyDesc.module.css";
import Image from "next/image";

import imgB from "../../../public/images/slide/PAG A1.jpg";
import Link from "next/link";

function CompanyDesc() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div></div>
                <h3>شرکت در یک نگاه</h3>
                <div></div>
            </div>
            <div className={styles.desc}>
                <div className={styles.p_desc}>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                        حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                        در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                        و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                        و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی
                        نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                    <div className={styles.link}>
                        <Link href="/company-description">معرفی بیشتر ...</Link>
                    </div>
                </div>
                <div className={styles.img_desc}>
                    <Image className={styles.imgb} src={imgB} width={600} height={300} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default CompanyDesc