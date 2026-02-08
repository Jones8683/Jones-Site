import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        games: resolve(__dirname, "games/index.html"),
        tetris: resolve(__dirname, "games/tetris/index.html"),
        flappy: resolve(__dirname, "games/flappy-bird/index.html"),
      },
    },
  },
});
