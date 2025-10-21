/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // ✅ add this line
    globals: true,        // ✅ optional, for Jest-style APIs
    setupFiles: "./src/tests/setup.ts", // ✅ we'll add setup file next
  },
});
