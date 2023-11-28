import styles from './styles.module.scss';

export default function Text() {
  return (
    <div className={styles.Text}>
      <h2>SHIV</h2>
      <p className={styles.description}>
        Instantly kills enemies from stealth and saves from clicker grabs. Breaks after three uses,
        or after saving from a clicker grab.
      </p>
      <p className={styles.recipe}>
        Recipe requires <span>binding</span> and <span>blade</span>.
      </p>
    </div>
  );
}
