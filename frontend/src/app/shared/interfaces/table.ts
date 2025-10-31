
export interface IColDef {
  label: string;
  keys: string[];
  width?: number;
}

export interface ITable {
  cols: IColDef[];
  data: any[];
  pageSize?: number;
  pageIndex?: number;
  totalItems?: number;
  onPageChange?: (event: any) => void;
  onClick?: (row: any) => void;
}
