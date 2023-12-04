import cls from 'classnames';
import { useAtom, useAtomValue } from 'jotai';

import { currentSelectedToolAtom, toolsAtom } from '~/atoms';
import { ToolKeys, toolList } from '~/enums';

import { BombSvg, MedkitSvg, Melee, MolotovSvg, ShivSvg, SmokeBombSvg } from './svgs';

import styles from './styles.module.scss';

const toolIconMap: Record<ToolKeys, JSX.Element> = {
  [ToolKeys.MEDKIT]: <MedkitSvg />,
  [ToolKeys.MOLOTOV]: <MolotovSvg />,
  [ToolKeys.SHIV]: <ShivSvg />,
  [ToolKeys.SMOKE_BOMB]: <SmokeBombSvg />,
  [ToolKeys.BOMB]: <BombSvg />,
  [ToolKeys.MELEE_UPGRADE]: <Melee />,
};

export default function Tools() {
  const tools = useAtomValue(toolsAtom);
  const [currentSelectedTool, setCurrentSelectedTool] = useAtom(currentSelectedToolAtom);

  return (
    <div className={styles.Tools}>
      {toolList.map((toolKey) => (
        <div
          key={toolKey}
          className={cls(styles.tile, styles[toolKey], {
            [styles.active]: currentSelectedTool?.key === toolKey,
          })}
          onMouseOver={() => setCurrentSelectedTool(tools[toolKey]!)}
        >
          {toolIconMap[toolKey]}

          <div className={styles.number}>
            <span className={styles.count}>{tools[toolKey]?.count ?? 0}</span>
            <span className={styles.capacity}>{tools[toolKey]?.capacity ?? 0}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
