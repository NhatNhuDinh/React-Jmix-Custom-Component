/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Middleware } from "@reduxjs/toolkit";
import { eventReceived } from "../jmixSlice";
import { deleteRowById, setDataTable, setLoaded } from "../../Table/TableSlice";
import { sendToJmix } from "../jmixBus";

function corrId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export const tableMiddleware: Middleware = (store) => (next) => (action: any) => {
  if (action.type !== eventReceived.type) return next(action);

  const msg = action.payload;

  switch (msg.type) {
    case "TABLE_TRIGGER_LOAD": {
      const p = msg.payload ?? {};
      store.dispatch(setLoaded(false));

      sendToJmix(
        "DATA_REQUESTED",
        {
          target: "list",
          page: p.page ?? 0,
          pageSize: p.pageSize ?? 5,
          filters: p.filters ?? {},
        },
        msg.correlationId ?? corrId()
      );
      break;
    }

    case "LIST_FULL_DATA": {
      const rows = msg.payload?.rows ?? [];
      store.dispatch(setDataTable(rows));  
      store.dispatch(setLoaded(true));
      break;
    }

    case "DELETE_ROW_OK": {
      const rowId = msg.payload?.rowId;
      if (rowId != null) store.dispatch(deleteRowById(rowId));
      break;
    }


    case "ROW_DELETE_FAILED": {
      console.error(msg.payload?.message ?? "Delete failed");
      break;
    }

    default:
      break;
  }

  return next(action);
};
