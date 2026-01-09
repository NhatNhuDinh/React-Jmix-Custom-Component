/* eslint-disable @typescript-eslint/no-explicit-any */
// types.ts
export interface Column {
  key: string;
  header: string;
}

export interface RowData {
  [key: string]: any;
}
