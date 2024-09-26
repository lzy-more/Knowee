import { createApp } from "vue";
import App from "@/pages/App.vue";

let rootEle = document.getElementById("knowee-root");

if (!rootEle) {
  rootEle = document.createElement("div");
  rootEle.id = "knowee-root";
  document.body.appendChild(rootEle);
}

const parentWrapper = document.createElement("div");

let appRoot = document.querySelector(".knowee-main");

if (!appRoot) {
  appRoot = document.createElement("div");
  appRoot.className = "knowee-main";
}

let shadow = rootEle.shadowRoot;
if (!shadow) {
  shadow = rootEle.attachShadow({ mode: "open" });
}
parentWrapper.appendChild(appRoot);
shadow.appendChild(parentWrapper);
const app = createApp(App);
app.mount(appRoot);
