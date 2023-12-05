import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { ToolKeys } from '~/enums';
import { Tool } from '~/types';

import { initMaterialState, initToolState } from './helper';

export const craftTimeoutAtom = atomWithDefault<NodeJS.Timeout | null>(() => null);

export const toolsAtom = atomWithDefault(() => initToolState());

export const materialsAtom = atomWithDefault(() => initMaterialState());

export const currentSelectedToolAtom = atomWithDefault((get) => {
  const tools = get(toolsAtom);

  return { ...tools[ToolKeys.MEDKIT] } as Tool;
});

/**
 * Atom to toggle whether crafting is in progress. The state is updated when the user presses or lifts the mouse.
 */
export const isCraftingAtom = atom(false, (get, set, isCrafting: boolean) => {
  console.log(isCrafting);
  const timeout = get(craftTimeoutAtom);

  if (!isCrafting) {
    if (timeout) {
      clearTimeout(timeout);
      set(craftTimeoutAtom, null);
    }
  }

  set(isCraftingAtom, isCrafting);
});

/**
 * Read-only atom based on current selected tool and materials to determine if crafting is disabled
 */
export const craftingDisabledAtom = atom((get) => {
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

/**
 * Write-only atom to update states when successfully crafted a tool
 */
export const craftToolAtom = atom(null, (get, set, toolKey?: ToolKeys) => {
  if (!toolKey) {
    return;
  }

  set(isCraftingAtom, true);

  // start timeout, and when time's up
  set(
    craftTimeoutAtom,
    setTimeout(() => {
      // if still crafting, then
      if (get(isCraftingAtom)) {
        // 1. increase tool count by 1
        const tools = get(toolsAtom);
        tools[toolKey]!.count += 1;

        // 2. decrease all material used by 1
        const materials = get(materialsAtom);
        tools[toolKey]!.materials.forEach((material) => {
          materials[material]!.count -= 1;
        });

        // 3. we are currently not crafting anymore
        set(isCraftingAtom, false);
        // 4. update tools database
        set(toolsAtom, tools);
        // 5. update materials database
        set(materialsAtom, materials);
        // 6. update current selected tool object. passing a new object to trigger successive updates of craftingDisabledAtom
        set(currentSelectedToolAtom, { ...tools[toolKey]! });
        // 7. clear timeout
        set(craftTimeoutAtom, null);
      }
    }, 2000),
  );
});
