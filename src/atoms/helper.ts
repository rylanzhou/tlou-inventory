import { materialsData, toolsData } from '~/data';
import { MaterialKeys, materialList, ToolKeys, toolList } from '~/enums';
import { MaterialState, ToolState } from '~/types';

export const initToolState = (): ToolState => {
  const toolsMap: ToolState = {};

  toolList.forEach((toolKey) => {
    toolsMap[toolKey] = {
      ...toolsData[toolKey],
      key: toolKey,
      count: Math.floor(4 * Math.random()), // between 0 - 3
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
      count: Math.floor(4 * Math.random()), // between 0 - 3
      capacity: materialKey === MaterialKeys.MELEE ? 1 : 3,
    };
  });

  return materialsMap;
};
