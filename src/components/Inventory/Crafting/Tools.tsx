import cls from 'classnames';
import { useAtom, useAtomValue } from 'jotai';

import { craftingDisabledAtom, currentSelectedToolAtom, isCraftingAtom, toolsAtom } from '~/atoms';
import { ToolKeys, toolList } from '~/enums';
import { Tool } from '~/types';

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
  const craftingDisabled = useAtomValue(craftingDisabledAtom);
  const [isCrafting, setIsCrafting] = useAtom(isCraftingAtom);

  const handleToolSelect = (tool?: Tool) => () => {
    if (!tool || isCrafting) return;

    console.log('here');
    setCurrentSelectedTool(tool);
  };

  return (
    <div className={styles.Tools}>
      {toolList.map((toolKey) => {
        const isActive = currentSelectedTool?.key === toolKey;

        return (
          <div
            key={toolKey}
            tabIndex={1}
            className={cls(styles.tile, styles[toolKey], {
              [styles.active]: isActive,
              [styles.crafting]: isActive && isCrafting,
              [styles.insufficient]: (tools[toolKey]?.count || 0) < 1,
            })}
            onMouseOver={handleToolSelect(tools[toolKey])}
            onFocus={handleToolSelect(tools[toolKey])}
            onMouseDown={() => !craftingDisabled && setIsCrafting(true)}
            onMouseUp={() => setIsCrafting(false)}
          >
            {toolIconMap[toolKey]}

            <div className={styles.number}>
              <span className={styles.count}>{tools[toolKey]?.count ?? 0}</span>
              <span className={styles.capacity}>{tools[toolKey]?.capacity ?? 0}</span>
            </div>

            <div className={styles.background} />
          </div>
        );
      })}
    </div>
  );
}
