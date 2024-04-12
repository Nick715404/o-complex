import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <span className={styles.headerTitle}>Тестовое задание</span>
        </div>
      </div>
    </header>
  )
}