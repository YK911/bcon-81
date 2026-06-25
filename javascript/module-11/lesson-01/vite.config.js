import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/news-api": {
        target: "https://newsapi.org",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/news-api/, ""),
      },
    },
  },
});
