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
