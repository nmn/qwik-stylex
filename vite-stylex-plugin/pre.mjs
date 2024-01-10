import { transformSync } from "@babel/core";
import { babelPluginTailwindToStylex } from "tailwind-to-stylex";

export default function styleXVitePlugin() {
  return {
    name: "vite-plugin-tw-to-stylex",

    shouldTransformCachedModule() {
      return false;
    },

    async transform(inputCode, id) {
      if (!inputCode.includes("tw") && !inputCode.includes("stylex")) {
        return;
      }

      const isJSLikeFile =
        id.endsWith(".js") || id.endsWith(".jsx") || id.endsWith(".tsx");

      if (!isJSLikeFile) {
        return;
      }

      const result = transformSync(inputCode, {
        babelrc: false,
        plugins: [
          ["@babel/syntax-typescript", { isTSX: true }],
          babelPluginTailwindToStylex(),
        ],
      });

      let code = result.code.replaceAll(/_stylex\.props/g, "_stylex.attrs");

      // let code = await transformTailwind.default(inputCode);
      code = code.replace("const _styles = _stylex.create({});", "");
      inputCode = code;

      return { code: code };
    },

    enforce: "pre",
  };
}
