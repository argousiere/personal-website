import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".json", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,

      scss: {
        prependData: '@use "src/app.scss" as *;',
      },
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: adapter(),
    vite: {
      server: {
        fs: {
          allow: ["."],
        },
      },

      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/app.scss" as *;',
          },
        },
      },
    },
  },
};

export default config;
