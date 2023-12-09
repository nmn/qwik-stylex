import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import styleX from "./vite-stylex-plugin/index.mjs";
import Inspect from "vite-plugin-inspect";

export default defineConfig(() => {
  return {
    plugins: [Inspect(), styleX(), qwikCity(), qwikVite(), tsconfigPaths()],
    dev: { headers: { "Cache-Control": "public, max-age=0" } },
    preview: { headers: { "Cache-Control": "public, max-age=600" } },
  };
});
