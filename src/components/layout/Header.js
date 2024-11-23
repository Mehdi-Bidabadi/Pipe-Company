"use client";
import styles from "@/components/layout/Header.module.css";
import Image from "next/image";
import icon from "../../../public/icon.jpg";
import ir from "../../../public/img-language/IR.jpg";

import { GoSearch } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { LuShoppingBasket } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [count, setCount] = useState(0)
  const [chek, setChek] = useState(true)

  const hamberHandler = () => {
    if (chek === true) {
      setChek(false)
    } else {
      setChek(true)
    }

  }

  return (
    <>
      <div className={styles.container}>

        <div className={styles.language}>
          <div className={styles.logo}>
            <Image className={styles.img} src={icon} width={50} height={50} alt="icon-logo" />
            <h2>شرکت لوله سازی</h2>
          </div>
          <div className={styles.icon_lan}>
            <Image className={styles.img} src={ir} width={50} height={50} alt="icon-IR" />
          </div>
        </div>

        <div className={styles.box_search}>
          <div className={styles.search}>
            <input type="text" placeholder="جستجو..." />
            <div className={styles.icon_search}>
              <GoSearch />
            </div>
          </div>

          <div className={styles.sell}>
            <LuShoppingBasket />{ }
          </div>
        </div>


        <div className={styles.list}>
          {
            chek ?
              <div className={styles.habermenu} onClick={hamberHandler}>
                <IoMenu />
              </div> : <div className={styles.close} onClick={hamberHandler}><IoClose /></div>
          }

          <ul>
            <li>
              <Link className={styles.link} href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link className={styles.link} href="/about-us">درباره ما</Link>
            </li>
            <li><Link className={styles.link} href="/products">محصولات</Link></li>
            <li>پروژه ها</li>
            <li>
              <Link className={styles.link} href="/blog">مطالب و مقالات</Link>
            </li>
            <li>گواهینامه ها</li>
            <li>
              <Link className={styles.link} href="/cantactus">ارتباط با ما</Link>
            </li>
            <li>
              <Link className={styles.link} href="faq">سوالات متداول</Link>
            </li>
          </ul>



        </div>

      </div>
      {
        chek ? null :
          <div className={chek ? null : styles.sidbar}>
            <div className={styles.desc_list}>
            </div>
            <ul>
              <li><Link className={styles.link} href="/">صفحه اصلی</Link></li>
              <li><Link className={styles.link} href="/about-us">درباره ما</Link></li>
              <li><Link className={styles.link} href="/products">محصولات</Link></li>
              <li>پروژه ها</li>
              <li>
                <Link className={styles.link} href="/blog">مطالب و مقالات</Link>
              </li>
              <li>گواهینامه ها</li>
              <li>
                <Link className={styles.link} href="/cantactus">ارتباط با ما</Link>
              </li>
              <li>
                <Link className={styles.link} href="faq">سوالات متداول</Link>
              </li>
            </ul>
          </div>
      }

    </>
  )
}

export default Header; 