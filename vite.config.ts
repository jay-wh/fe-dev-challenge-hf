/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

const configPath = path.resolve(__dirname, "vitest.setup.ts");

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [configPath],
  },
});
