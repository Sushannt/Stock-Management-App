import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://103.166.62.80/MC_StockMgmtPilkhua",
        changeOrigin: true,
        pathRewrite: { "^/api": "/api" },
      },
    },
  },
});
