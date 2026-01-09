import type { Middleware } from "@reduxjs/toolkit";
import { tableMiddleware } from "./table";

export const jmixMiddlewares: Middleware[] = [tableMiddleware];
