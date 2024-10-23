import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/styles/globals.scss';`,
    },
  }),
  vite: {
    ssr: {
      noExternal: ["svelte-preprocess"],
    },
  },
  onwarn: (warning, handler) => {
    if (warning.code.startsWith("a11y-")) return;
    if (warning.code === "missing-exports-condition") return;
    if (warning.code === "a11y-no-static-element-interactions") return;
    if (warning.code === "svelte-ignore a11y-autofocus") return;
    if (warning.code.startsWith("css-unused-selector")) return;
    handler(warning);
  },
};

export default config;
