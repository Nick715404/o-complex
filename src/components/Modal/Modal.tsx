import styles from './Modal.module.scss';

type Props = {
  status: boolean;
}

export default function Modal({ status }: Props) {

  const handleClassname = () => {
    return status ? `${styles.modal} ${styles.active}` : `${styles.modal} ${styles.closed}`;
  }

  return (
    <div className={handleClassname()}>
      <div className={styles.modalWrapper}>
        <h2 className={styles.title}>Спасибо что выбрали нас!</h2>
        <p className={styles.text}>Надеемся вам понравилось!</p>
      </div>
    </div >
  )
}