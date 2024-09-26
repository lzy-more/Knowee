import { defineConfig } from "wxt";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-vue"],
  manifest: {
    permissions: [
      "tabs",
      "storage",
      "cookies",
      "activeTab",
      "scripting",
      "webRequest",
      "<all_urls>",
    ],
    web_accessible_resources: [
      {
        resources: ["pages/pdf/*"],
        matches: ["<all_urls>"],
        use_dynamic_url: true,
      },
    ],
    host_permissions: ["http://*/*", "https://*/*", "<all_urls>"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 这里使用 `additionalData` 来全局引入 SCSS 文件
        additionalData: `@import "@/assets/variables.scss";`,
        javascriptEnabled: true,
      },
    },
  },
  // plugins: [
  //   // ...
  //   Components({
  //     resolvers: [
  //       AntDesignVueResolver({
  //         importStyle: false, // css in js
  //       }),
  //     ],
  //   }),
  // ],
});
