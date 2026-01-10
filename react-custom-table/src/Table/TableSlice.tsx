// TableSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { TableColumn, TableRow } from "./tableTypes.ts"

interface TableState {
  columns: TableColumn[]
  dataTable: TableRow[]
  pageSize: number
  page: number
  loaded: boolean;
}

const initialState: TableState = {
  columns: [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "type", header: "Type" },
    { key: "age", header: "Age" },
  ],
  dataTable: [
    { id: 1, name: "Tom", type: "Cat", age: 2 },
    { id: 2, name: "Jerry", type: "Mouse", age: 1 },
    { id: 3, name: "Spike", type: "Dog", age: 5 },
    { id: 4, name: "Kitty", type: "Cat", age: 3 },
    { id: 5, name: "Max", type: "Dog", age: 4 },
    { id: 6, name: "Luna", type: "Cat", age: 1 },
    { id: 7, name: "Rocky", type: "Dog", age: 6 },
  ],
  pageSize: 5,
  page: 0,
  loaded: false,
}

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setColumns(state, action: PayloadAction<TableColumn[]>) {
      state.columns = action.payload
    },
    setDataTable(state, action: PayloadAction<TableRow[]>) {
      state.dataTable = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload
    },
    deleteRowById(state, action: PayloadAction<number | string>) {
      const id = String(action.payload);
      state.dataTable = state.dataTable.filter(r => String(r.id) !== id);
    },
    setLoaded(state, action: PayloadAction<boolean>) {
      state.loaded = action.payload
    }
  },
})

export const {
  setColumns,
  setDataTable,
  setPage,
  setPageSize,
  deleteRowById,
  setLoaded
} = tableSlice.actions

export default tableSlice.reducer
