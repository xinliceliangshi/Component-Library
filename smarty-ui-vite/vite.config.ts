import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import unocss from "./config/unocss";
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
  unocss(), 
    // 添加JSX插件
  vueJsx({
  
    }),
    
    vue(),
   
  ],
 
  build: {
    rollupOptions,
    minify:false,
    cssCodeSplit: true, 
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },
});