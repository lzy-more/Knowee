import { ContentScriptContext } from "wxt/client";
import App from "@/pages/App.vue";
import { createApp } from "vue";
// import "./reset.css";
import i18n from "../locales/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "~/assets/tailwind.css";
export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",
  runAt: "document_end",

  async main(ctx) {
    const ui = await defineOverlay(ctx);
    console.log("看看有没有注入");

    // Mount initially
    ui.mount();

    // Re-mount when page changes
    ctx.addEventListener(window, "wxt:locationchange", (event) => {
      ui.mount();
    });
  },
});

function defineOverlay(ctx: ContentScriptContext) {
  return createShadowRootUi(ctx, {
    name: "knowee-overlay",
    position: "modal",
    anchor: "body",
    zIndex: 99999,
    onMount(container, _shadow, shadowHost) {
      const app = createApp(App);
      app.use(i18n);
      app.use(ElementPlus);
      app.mount(container);

      shadowHost.style.pointerEvents = "auto";
      return app;
    },
    onRemove(app) {
      app?.unmount();
    },
  });
}
