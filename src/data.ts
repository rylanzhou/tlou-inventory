import { MaterialKeys, ToolKeys } from '~/enums';
import type { Material, Tool } from '~/types';

type MaterialData = Omit<Material, 'count' | 'capacity'>;
type ToolData = Omit<Tool, 'count' | 'capacity' | 'key'>;

export const materialsData: Record<MaterialKeys, MaterialData> = {
  [MaterialKeys.ALCOHOL]: {
    name: 'alcohol',
    id: 'dcabe78d1e347bc99e8843cf2fb6bfe1028de8e7',
  },
  [MaterialKeys.RAG]: {
    name: 'rag',
    id: '566857bf4b9c09af00bec525cdbc3213f5026c74',
  },
  [MaterialKeys.SUGAR]: {
    name: 'sugar',
    id: '1ddc7660712edccada070226827db40736fc3600',
  },
  [MaterialKeys.EXPLOSIVE]: {
    name: 'explosive',
    id: '8431958c56184e0ceaa2797aaeca20bbd99b9b05',
  },
  [MaterialKeys.BINDING]: {
    name: 'binding',
    id: 'd75d5238aa130c7546535f779c852329ae2386dc',
  },
  [MaterialKeys.BLADE]: {
    name: 'blade',
    id: '2645f8abf0f6ccf73ecc5e2ff6288d38d96438ac',
  },
  [MaterialKeys.MELEE]: {
    name: 'melee weapon',
    id: '7a0de49af7a5423949f3116cde75dec3c2d3ae95',
  },
};

export const toolsData: Record<ToolKeys, ToolData> = {
  [ToolKeys.MEDKIT]: {
    name: 'Health Kit',
    description: 'Restores health when injuries.',
    id: '805c0c7e799f994f8b494a3ce6edfcb0d9382686',
    materials: [MaterialKeys.ALCOHOL, MaterialKeys.RAG],
  },
  [ToolKeys.MOLOTOV]: {
    name: 'Molotov',
    description: 'Explodes on impact, and fire lingers in the area.',
    id: '5343da0d1759cc027d74a568070a90e6c2351ada',
    materials: [MaterialKeys.ALCOHOL, MaterialKeys.RAG],
  },
  [ToolKeys.SHIV]: {
    name: 'Shiv',
    description:
      'Instantly kills enemies from stealth and saves from clicker grabs. Breaks after three uses, or after saving from a clicker grab.',
    id: 'b07ce5366253dd57b950f10a9173f4c518f60c20',
    materials: [MaterialKeys.BINDING, MaterialKeys.BLADE],
  },
  [ToolKeys.SMOKE_BOMB]: {
    name: 'Smoke Bomb',
    description:
      'Stuns enemies in a small area on impact and generates a concealing cloud of smoke.',
    id: 'bd5dfe6e3258890e3867407ba44118fb13eaab11',
    materials: [MaterialKeys.SUGAR, MaterialKeys.EXPLOSIVE],
  },
  [ToolKeys.BOMB]: {
    name: 'Bomb',
    description: 'Detonates on enemy proximity. Can be deployed in place or thrown.',
    id: '39563ca26516a1a927e3cdc168f788a9b422ac9f',
    materials: [MaterialKeys.EXPLOSIVE, MaterialKeys.BLADE],
  },
  [ToolKeys.MELEE_UPGRADE]: {
    name: 'Melee Upgrade',
    description: 'Improves your melee weapon with three instant kill strikes.',
    id: 'd34786f32187cbefeea586386e99ae195a06b416',
    materials: [MaterialKeys.BINDING, MaterialKeys.BLADE, MaterialKeys.MELEE],
  },
};
