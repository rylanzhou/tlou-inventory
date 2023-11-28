import Icon from '~components/Icon';

import styles from './styles.module.scss';

const itemIconSize = '2rem';

export default function Material() {
  return (
    <div className={styles.Material}>
      <ul className={styles['material-list']}>
        <li>
          <div className={styles.item}>
            <Icon name="water_drop" fill={1} size={itemIconSize} />
          </div>
          <div className={styles.count}>2</div>
        </li>
        <li>
          <div className={styles.item}>
            <Icon name="tab_duplicate" weight={300} size={itemIconSize} />
          </div>
          <div className={styles.count}>2</div>
        </li>
        <li>
          <div className={styles.item}>
            <Icon name="storefront" fill={1} size={itemIconSize} />
          </div>
          <div className={styles.count}>2</div>
        </li>
        <li>
          <div className={styles.item}>
            <Icon name="explosion" size={itemIconSize} />
          </div>
          <div className={styles.count}>2</div>
        </li>
        <li>
          <div className={styles.item}>
            <Icon name="measuring_tape" size={itemIconSize} />
          </div>
          <div className={styles.count}>2</div>
        </li>
        <li>
          <div className={styles.item}>
            <Icon name="cut" weight={300} size={itemIconSize} />
          </div>
          <div className={styles.count}>2</div>
        </li>
        <li>
          <div className={styles.item}>
            <Icon name="handyman" weight={300} size={itemIconSize} />
          </div>
          <div className={styles.count}>2</div>
        </li>
      </ul>
    </div>
  );
}
