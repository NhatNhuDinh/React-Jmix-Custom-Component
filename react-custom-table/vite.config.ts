import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": {},
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/custom-table-element.tsx"),
      name: "CustomTable",
      fileName: () => "react-custom-table.js",
      formats: ["es"],
    }
  },
});
