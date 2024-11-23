import styles from "@/components/layout/Footer.module.css";
import Image from "next/image";

import icon from "../../../public/icon.jpg";

import { FaTelegram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.desc}>
          <div className={styles.title}>
            <p>شرکت تولیدی لوله ایران</p>
          </div>
          <div className={styles.logo}>
            <Image className={styles.img} src={icon} width={50} height={50} alt="icon" />
            <p>تولید انواع لوله و پروفیل در کلیه اندازه ها و ضخامت های مندرج در جداول، بنابرسفارش مشتریان گرامی در این واحد تولیدی امکان پذیر می باشد.</p>
          </div>
          <div className={styles.call}>
            <div style={{ color: "blue", backgroundColor: "#fff" }}><FaTelegram /></div>
            <div style={{ color: "#fff", backgroundColor: "green" }}><ImWhatsapp /></div>
            <div style={{ backgroundColor: "#fff", color: "blue" }}><FaFacebook /></div>
            <div><SiGooglemaps /></div>
            <div style={{ backgroundColor: "#fff", color: "blue" }}><TiSocialLinkedinCircular /></div>
          </div>
        </div>

        <div className={styles.list}>
          <p>لینک های مفید</p>
          <ul>
            <li>قوانین مقررات</li>
            <li>حریم شخصی</li>
            <li>همکاری با ما</li>
            <li>لینک های مفید</li>
            <li>سوالات متداول</li>
            <li>ارتباط با ما</li>
          </ul>
        </div>


        <div className={styles.address}>
          <span>تماس با ما</span>
          <div className={styles.addrss}>
            <p>آدرس دفتر مرکزی : تهران ، خیابان **** ، خیابان ***** ، خیابان سی و *** ، پلاک 3 ، طبقه سوم .</p>
          </div>
          <div className={styles.phone}>
            <p>تلفن دفتر:0212000000</p>
            <p>تلفن دفتر:0212000000</p>
            <p>پست الکترونیک:info@*********.com</p>
          </div>
        </div>
      </div>
      <div className={styles.cpy}>
        <p>تمامی حقوق این وبسایت متعلق به شرکت*****می باشد</p>
        <div>
          <span>برنامه نویس</span>
          <a href="#">Mehdi Bidabadi</a>
        </div>
      </div>
    </>
  )
}

export default Footer