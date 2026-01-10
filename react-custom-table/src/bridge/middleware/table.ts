/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Middleware } from "@reduxjs/toolkit";
import { eventReceived } from "../jmixSlice";
// import { sendToJmix } from "../jmixBus";

import {deleteRow, setLoaded } from "../../Table/TableSlice";


export const tableMiddleware: Middleware = (store) => (next) => (action: any) => {
    if (action.type !== eventReceived.type) return next(action);

    const msg = action.payload;
    // console.log("tableMiddleware received message", msg);
    switch (msg.type) {
        case "TABLE_LOAD": {
            store.dispatch(setLoaded(true));
            break;
        }
        case "ROW_DELETE": {
            console.log("Deleting row at index", msg.payload.rowIndex);
            
            store.dispatch(deleteRow(msg.payload.rowIndex));
            break;
        }

        default:
            break;
    }

    return next(action);
};
