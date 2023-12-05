import { CSSProperties } from 'react';
import cls from 'classnames';
import { useAtomValue } from 'jotai';

import { currentSelectedToolAtom, isCraftingAtom, materialsAtom } from '~/atoms';
import Icon from '~/components/Icon';
import { MaterialKeys, materialList, ToolKeys } from '~/enums';

import { Loading } from './svgs';

import styles from './styles.module.scss';

const itemIconSize = '2rem';

const materialIconMap: Record<MaterialKeys, JSX.Element> = {
  [MaterialKeys.ALCOHOL]: <Icon name="water_drop" fill={1} size={itemIconSize} />,
  [MaterialKeys.RAG]: <Icon name="tab_duplicate" weight={300} size={itemIconSize} />,
  [MaterialKeys.SUGAR]: <Icon name="storefront" fill={1} size={itemIconSize} />,
  [MaterialKeys.EXPLOSIVE]: <Icon name="explosion" size={itemIconSize} />,
  [MaterialKeys.BINDING]: <Icon name="measuring_tape" size={itemIconSize} />,
  [MaterialKeys.BLADE]: <Icon name="cut" weight={300} size={itemIconSize} />,
  [MaterialKeys.MELEE]: <Icon name="handyman" weight={300} size={itemIconSize} />,
};

export default function Material() {
  const materials = useAtomValue(materialsAtom);
  const currentSelectedTool = useAtomValue(currentSelectedToolAtom);
  const isCrafting = useAtomValue(isCraftingAtom);

  return (
    <div className={styles.Material}>
      <ul
        className={cls(styles['material-list'], {
          [styles.more]: currentSelectedTool?.key === ToolKeys.MELEE_UPGRADE,
        })}
      >
        {materialList.map((materialKey) => {
          const isActive = currentSelectedTool?.materials.includes(materialKey);
          return (
            <li
              key={materialKey}
              className={cls({
                [styles.active]: isActive,
                [styles.insufficient]: (materials[materialKey]?.count || 0) < 1,
              })}
            >
              <div
                className={styles.item}
                style={{ '--portion': materials[materialKey]!.count % 1 } as CSSProperties}
              >
                <Loading
                  className={styles.progress}
                  shouldAnimate={isActive && isCrafting}
                  toProgress={isActive && isCrafting ? 0 : 100}
                />
                {materialIconMap[materialKey]}
              </div>
              <div className={styles.count}>{Math.floor(materials[materialKey]!.count)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
