import cls from 'classnames';

import BombSvg from './svgs/Bomb';
import MedkitSvg from './svgs/Medkit';
import Melee from './svgs/Melee';
import MolotovSvg from './svgs/Molotov';
import ShivSvg from './svgs/Shiv';
import SmokeBombSvg from './svgs/SmokeBomb';

import styles from './styles.module.scss';

const toolsList = [
  {
    name: 'medkit',
    svg: <MedkitSvg />,
  },
  {
    name: 'molotov',
    svg: <MolotovSvg />,
  },
  {
    name: 'shiv',
    svg: <ShivSvg />,
  },
  {
    name: 'smoke-bomb',
    svg: <SmokeBombSvg />,
  },
  {
    name: 'bomb',
    svg: <BombSvg />,
  },
  {
    name: 'melee',
    svg: <Melee />,
  },
];

export default function Tools() {
  return (
    <div className={styles.Tools}>
      {toolsList.map(({ name, svg }) => (
        <div key={name} className={cls(styles.tile, styles[name])}>
          {svg}

          <div className={styles.number}>
            <span className={styles.count}>2</span>
            <span className={styles.capacity}>3</span>
          </div>
        </div>
      ))}
    </div>
  );
}
