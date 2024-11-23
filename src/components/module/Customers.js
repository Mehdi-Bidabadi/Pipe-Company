import styles from "./Customer.module.css"

function Customers() {
   
    const customres = [
        1,2,3,4,5,6,7
    ]
  return (
    <div className={styles.container}>
        <div className={styles.customer}>
            <span></span>
            <p>مشتریان ما</p>
            <span></span>
        </div>
        <div className={styles.box}>
        {customres.map((e,index) => (
            <div className={styles.card} key={index}>
                <p>{e}</p>
            </div>
        ))}
            </div>
    </div>
  )
}

export default Customers