import { useCallback, useEffect, useRef } from 'react';
import cls from 'classnames';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import {
  craftingDisabledAtom,
  craftToolAtom,
  currentSelectedToolAtom,
  isCraftingAtom,
  toolsAtom,
} from '~/atoms';
import { ToolKeys, toolList } from '~/enums';
import { type Tool } from '~/types';

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
  const craftTool = useSetAtom(craftToolAtom);

  const toolsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toolsSectionRef.current?.focus();
  }, []);

  const handleToolSelect = useCallback(
    (tool?: Tool) => () => {
      if (!tool || isCrafting) return;

      setCurrentSelectedTool(tool);
    },
    [isCrafting, setCurrentSelectedTool],
  );

  const handleMouseDown = useCallback(() => {
    if (craftingDisabled || isCrafting) return;

    craftTool(currentSelectedTool?.key);
  }, [craftingDisabled, currentSelectedTool, isCrafting, craftTool]);

  // give up crafting
  const handleMouseUp = useCallback(() => {
    setIsCrafting(false);
  }, [setIsCrafting]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'e') {
        handleMouseDown();
      }
    },
    [handleMouseDown],
  );

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'e') {
        handleMouseUp();
      }
    },
    [handleMouseUp],
  );

  return (
    <div
      ref={toolsSectionRef}
      className={styles.Tools}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      {toolList.map((toolKey) => {
        const isActive = currentSelectedTool?.key === toolKey;

        return (
          <div
            key={toolKey}
            tabIndex={0}
            className={cls(styles.tile, styles[toolKey], {
              [styles.active]: isActive,
              [styles.crafting]: isActive && isCrafting,
              [styles.insufficient]: (tools[toolKey]?.count || 0) < 1,
            })}
            onFocus={handleToolSelect(tools[toolKey])}
            onMouseDown={handleMouseDown}
            onMouseOver={handleToolSelect(tools[toolKey])}
            onMouseUp={handleMouseUp}
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
