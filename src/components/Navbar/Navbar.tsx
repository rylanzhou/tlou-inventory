import cls from 'classnames';

import Icon from '~/components/Icon';

import styles from './styles.module.scss';

const iconSize = '2.3rem';

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={cls(styles['control-key'])}>R</div>

      <div className={styles.divider} />

      <ul className={styles.menu}>
        <li className={styles.active}>
          <Icon name="construction" size={iconSize} weight={300} />
        </li>
        <li>
          <Icon fill={1} name="pill" size={iconSize} weight={250} />
        </li>
        <li>
          <Icon fill={1} name="note_stack" size={iconSize} weight={250} />
        </li>
      </ul>

      <div className={styles.divider} />

      <div className={cls(styles['control-key'], styles.active)}>T</div>
    </div>
  );
}
