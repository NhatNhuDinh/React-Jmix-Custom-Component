// tableTypes.ts
export interface TableColumn {
  key: string
  header: string
}

export type TableRow = Record<string, unknown>