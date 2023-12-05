import { materialsData, toolsData } from '~/data';
import { MaterialKeys, materialList, ToolKeys, toolList } from '~/enums';
import { InventoryState } from '~/types';

export const initInventoryState = (): InventoryState => {
  const toolsMap: InventoryState['tools'] = {};

  toolList.forEach((toolKey) => {
    toolsMap[toolKey] = {
      ...toolsData[toolKey],
      key: toolKey,
      // count: Math.floor(4 * Math.random()), // between 0 - 3
      count: 2,
      capacity: toolKey === ToolKeys.MELEE_UPGRADE ? 1 : 3,
    };
  });

  return {
    currentSelectedTool: toolsMap[ToolKeys.MEDKIT] || null,
    tools: toolsMap,
    isCrafting: false,
    materials: initMaterialState(),
  };
};

export const initMaterialState = (): InventoryState['materials'] => {
  const materialsMap: InventoryState['materials'] = {};

  materialList.forEach((materialKey) => {
    materialsMap[materialKey] = {
      ...materialsData[materialKey as MaterialKeys],
      count: 1.75,
      capacity: materialKey === MaterialKeys.MELEE ? 1 : 3,
    };
  });

  return materialsMap;
};
