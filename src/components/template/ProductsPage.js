import styles from './ProductsPage.module.css';
import Products from '../module/Products';

function ProductsPage() {
  return (
    <div className={styles.container}> 
      <Products />
    </div>
  )
}

export default ProductsPage