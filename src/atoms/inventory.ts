import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { InventoryState } from '~/types';

import { initInventoryState } from './helper';

export const inventoryAtom = atom<InventoryState>(initInventoryState());

export const currentSelectedToolAtom = atomWithDefault((get) => {
  const inventory = get(inventoryAtom);

  return inventory.currentSelectedTool;
});

export const toolsAtom = atomWithDefault((get) => {
  const inventory = get(inventoryAtom);

  return inventory.tools;
});

export const materialsAtom = atomWithDefault((get) => {
  const inventory = get(inventoryAtom);

  return inventory.materials;
});

export const isCraftingAtom = atomWithDefault((get) => {
  const inventory = get(inventoryAtom);

  return inventory.isCrafting;
});

export const craftingDisabledAtom = atomWithDefault((get) => {
  const currentSelectedTool = get(currentSelectedToolAtom);

  if (!currentSelectedTool) {
    return true;
  }

  // when the current tool's count reached capacity, or does not have enough materials to craft, disable craft button
  if (currentSelectedTool.count >= currentSelectedTool.capacity) {
    return true;
  }

  const materials = get(materialsAtom);
  if (currentSelectedTool.materials.some((material) => materials[material]!.count < 1)) {
    return true;
  }

  return false;
});
