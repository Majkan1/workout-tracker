import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "url"

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
})
