import type { MaterialKeys, MaterialKeys, ToolKeys } from './enums';

export type Material = {
  name: string;
  id: string;
  count: number;
  capacity: number;
};

export type Tool = {
  key: ToolKeys;
  name: string;
  description: string;
  id: string;
  materials: MaterialKeys[];
  count: number;
  capacity: number;
};

export type InventoryState = {
  currentSelectedTool: Tool | null;
  tools: Partial<Record<ToolKeys, Tool>>;
  materials: Partial<Record<MaterialKeys, Material>>;
};
