import { MaterialKeys } from '~/enums';
import Icon from '~components/Icon';

import styles from './styles.module.scss';

const itemIconSize = '2rem';

const materialList = [
  {
    name: MaterialKeys.ALCOHOL,
    icon: <Icon name="water_drop" fill={1} size={itemIconSize} />,
  },
  {
    name: MaterialKeys.RAG,
    icon: <Icon name="tab_duplicate" weight={300} size={itemIconSize} />,
  },
  {
    name: MaterialKeys.SUGAR,
    icon: <Icon name="storefront" fill={1} size={itemIconSize} />,
  },
  {
    name: MaterialKeys.EXPLOSIVE,
    icon: <Icon name="explosion" size={itemIconSize} />,
  },
  {
    name: MaterialKeys.BINDING,
    icon: <Icon name="measuring_tape" size={itemIconSize} />,
  },
  {
    name: MaterialKeys.BLADE,
    icon: <Icon name="cut" weight={300} size={itemIconSize} />,
  },
  {
    name: MaterialKeys.MELEE,
    icon: <Icon name="handyman" weight={300} size={itemIconSize} />,
  },
];

export default function Material() {
  return (
    <div className={styles.Material}>
      <ul className={styles['material-list']}>
        {materialList.map(({ name, icon }) => (
          <li key={name}>
            <div className={styles.item}>{icon}</div>
            <div className={styles.count}>2</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
