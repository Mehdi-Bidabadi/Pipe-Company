"use client"
import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Image from "next/image";
import { desc } from "../helper/help";

import { LuShoppingBasket } from "react-icons/lu";
import Categories from "./Categories";

function Products() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))


            

    }, [data])

    
    return (
        <div className={styles.container}>
            <div>
                <Categories />
            </div>
            <div className={styles.box_card}>
                {data.map((e) => (
                    <div className={styles.card} key={e.id}>
                        <div className={styles.box_img}>
                            <img src={e.image} />
                            <span>{desc(e.title)}</span>
                        </div>
                        <div className={styles.box_price}>
                            <p>{desc(e.description)}</p>
                            <article>{e.price}</article>
                        </div>
                        <div className={styles.box_shop}>
                            {/* <span><LuShoppingBasket /></span> */}
                            <div className={styles.number}>
                                <p className={styles.Subtraction}>-</p>
                                <span>{count}</span>
                                <p className={styles.sum}>+</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Products