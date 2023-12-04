import cls from 'classnames';

import { ToolKeys } from '~/enums';

import { BombSvg, MedkitSvg, Melee, MolotovSvg, ShivSvg, SmokeBombSvg } from './svgs';

import styles from './styles.module.scss';

const toolsList = [
  {
    name: ToolKeys.MEDKIT,
    icon: <MedkitSvg />,
  },
  {
    name: ToolKeys.MOLOTOV,
    icon: <MolotovSvg />,
  },
  {
    name: ToolKeys.SHIV,
    icon: <ShivSvg />,
  },
  {
    name: ToolKeys.SMOKE_BOMB,
    icon: <SmokeBombSvg />,
  },
  {
    name: ToolKeys.BOMB,
    icon: <BombSvg />,
  },
  {
    name: ToolKeys.MELEE_UPGRADE,
    icon: <Melee />,
  },
];

export default function Tools() {
  return (
    <div className={styles.Tools}>
      {toolsList.map(({ name, icon }) => (
        <div key={name} className={cls(styles.tile, styles[name])}>
          {icon}

          <div className={styles.number}>
            <span className={styles.count}>2</span>
            <span className={styles.capacity}>3</span>
          </div>
        </div>
      ))}
    </div>
  );
}
