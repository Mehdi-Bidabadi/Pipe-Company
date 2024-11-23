import SlideShow from "../module/SlideShow";
import Banner from "../module/Banner";
import Slid from "../module/Slid";
import CompanyDesc from "../module/CompanyDesc";

import styles from "./HomePage.module.css";
import Support from "../module/Support";
import Customers from "../module/Customers";
import ReturnToTopButton from "../module/ReturnToTopButton";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      {/* <SlideShow /> */}
      <Slid />
      <CompanyDesc />
      <Support />
      <Customers />
      <ReturnToTopButton />
    </div>
  )
}

export default HomePage