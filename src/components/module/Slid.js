import Image from "next/image";

import styles from "@/components/module/Slide.module.css";

import imgB from "../../../public/images/slide/PAG A1.jpg";
import img1 from "../../../public/images/slide/s1.jpg";
import img2 from "../../../public/images/slide/s2.jpg";
import img3 from "../../../public/images/slide/s3.jpg";
import img4 from "../../../public/images/slide/s4.jpg";

function Slid() {
    const combinedClasses = `${styles.img} ${styles.img1}`;
    return (
        <div className={styles.container}>
            {/* If using all images, enter the class img_s1 */}
            <div className={styles.img_s1}>
                <div>
                    <p>درجه اول</p>
                    <Image className={styles.img} src={img1} width={420} height={230} alt="img-slide" />
                </div>
                <div className={styles.n}>
                    <p>درجه اول</p>
                    <Image className={styles.img} src={img2} width={420} height={230} alt="img-slide" />
                </div>
                <div className={styles.grew}>
                    <p>درجه اول</p>
                    <Image className={combinedClasses} src={img3} width={420} height={230} alt="img-slide" />
                </div>
                {/* <div>
                <p>درجه اول</p>
                <Image className={styles.img} src={img4} width={420} height={230} alt="img-slide" />
                </div> */}
            </div>

            {/* <div className={styles.img_b}>
                <Image className={styles.img} src={imgB} width={630} height={460} alt="img-slide" />
            </div> */}
        </div>
    )
}

export default Slid