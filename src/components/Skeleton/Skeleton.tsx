import styles from './Skeleton.module.scss';

export default function Skeleton() {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.productsWrapper}>
          {[...Array(20)].map((index: number) => (
            <div key={index} className={`${styles.product} ${styles.loading}`}>
              <div className={styles.productContent}>
                <div className={styles.productImgBox} />
                <h3 className={styles.productTitle} />
                <div className={styles.productDescr}>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                </div>
              </div>
              <div className={styles.productBottom}>
                <span className={styles.productPrice} />
                <div className={styles.btn} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}