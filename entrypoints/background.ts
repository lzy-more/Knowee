export default defineBackground(() => {
  browser.runtime.onMessage.addListener(async (message) => {
    let queryOptions = { active: true, lastFocusedWindow: true };

    const [tab]: any = await browser.tabs.query(queryOptions);
    console.log(
      tab,
      "tabtabtabtabtabtabtabtabtabtabtabtabtabtabtabtabtabtabtab"
    );

    // Only respond to hello messages
    if (message.type === "hello") {
      browser.tabs.sendMessage(tab.id, {
        type: "background",
        params: {
          msg: "111111111",
        },
      });

      // Returning a promise will send a response back to the sender
      return Promise.resolve(`Hello ${message.name},background发出的消息!`);
    }
    if (message.type === "pdfViewer") {
      return Promise.resolve({ success: "ok" });
    }
  });
  browser.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason !== "install") return;

    // // Open a tab on install
    // await browser.tabs.create({
    //   url: browser.runtime.getURL("/viewer.html"),
    //   active: true,
    // });
  });
  // 新建tab
  browser.tabs.onActivated.addListener(async (info: any) => {
    let tab = await browser.tabs.get(info.tabId);
    redirectIfIsPdf(tab);
  });
  //当前tab更新
  browser.tabs.onUpdated.addListener(
    async (tabId: any, info: any, Tab: any) => {
      let queryOptions = { active: true, lastFocusedWindow: true };

      let [tab] = await browser.tabs.query(queryOptions);
      redirectIfIsPdf(tab);
    }
  );
  //右上角图标点击
  browser.action.onClicked.addListener(async (tab: any) => {});
  // 检测-pdf重定向
  async function redirectIfIsPdf(tab: any) {
    if (!tab || !tab.id) {
      return false;
    }
    let isPdf: boolean =
      tab && tab.url && (tab.url.endsWith(".pdf") || tab.url.endsWith(".PDF"));
    if (isPdf) {
      browser.tabs.update({
        url: browser.runtime.getURL(
          `/viewer.html?file=${tab.url}#pagemode=thumbs`
        ),
        active: true,
      });
    }
  }
});
