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
  extraDescription?: string;
  id: string;
  materials: MaterialKeys[];
  count: number;
  capacity: number;
};

export type ToolState = Partial<Record<ToolKeys, Tool>>;
export type MaterialState = Partial<Record<MaterialKeys, Material>>;
