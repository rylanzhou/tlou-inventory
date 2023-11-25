import styles from './styles.module.scss';

export default function Action() {
  return (
    <div className={styles.Action}>
      <div className={styles.option}>
        <div className={styles['long-control-key']}>E</div>
        <span>CRAFT</span>
      </div>
      <div className={styles.option}>
        <div className={styles['control-key']}>ESC</div>
        <span>BACK</span>
      </div>
    </div>
  );
}
