import { materialsData, toolsData } from '~/data';
import { MaterialKeys, materialList, ToolKeys, toolList } from '~/enums';
import type { MaterialState, ToolState } from '~/types';

const portionArray = [0, 0.25, 0.5, 0.75];

export const initToolState = (): ToolState => {
  const toolsMap: ToolState = {};

  toolList.forEach((toolKey) => {
    toolsMap[toolKey] = {
      ...toolsData[toolKey],
      key: toolKey,
      // 0 - 1 for melee upgrade, 0 - 3 for others
      count: Math.floor((toolKey === ToolKeys.MELEE_UPGRADE ? 2 : 4) * Math.random()),
      capacity: toolKey === ToolKeys.MELEE_UPGRADE ? 1 : 3,
    };
  });

  return toolsMap;
};

export const initMaterialState = (): MaterialState => {
  const materialsMap: MaterialState = {};

  materialList.forEach((materialKey) => {
    materialsMap[materialKey] = {
      ...materialsData[materialKey as MaterialKeys],
      // 0 - 1 for melee, 0 - 3 for others
      count:
        materialKey === MaterialKeys.MELEE
          ? Math.floor(2 * Math.random())
          : Math.floor(3 * Math.random()) +
            portionArray[Math.floor(portionArray.length * Math.random())],
      capacity: materialKey === MaterialKeys.MELEE ? 1 : 3,
    };
  });

  return materialsMap;
};
