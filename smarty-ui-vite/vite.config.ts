import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    // 添加JSX插件
  vueJsx({
  
    }),
    
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    })
  ],
 
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },
});