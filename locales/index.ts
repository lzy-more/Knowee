import { createI18n } from "vue-i18n";
import enUS from "./en";
import zhCN from "./zh";

const message = {
  enUS: {
    ...enUS,
  },
  zhCN: {
    ...zhCN,
  },
  //   zhHK: {
  //     ...zhHK,
  //   },
};

const i18n = createI18n({
  locale: "enUS", // 设置语言类型
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: message,
  fallbackLocale: "zhCN",
});

export default i18n;
