<template>
  <div class="knowee-sidebar">
    <p class="text-lg text-red-500 font-bold p-8">tailwindcss</p>
    <el-button type="success" @click="sayHello">通信测试</el-button>
    <el-button type="success" @click="open">打开pdf预览</el-button>
  </div>
</template>

<script setup lang="ts">
// import { Button } from "ant-design-vue";
import { ref, watch, computed, provide } from "vue";
import { useDraggable, useWindowSize, Position } from "@vueuse/core";

const sayHello = async () => {
  const response = await browser.runtime.sendMessage({
    type: "hello",
    name: "Aaron",
  });

  console.log(response, "responseresponseresponseresponse");
};
const open = async () => {
  const response = await browser.runtime.sendMessage({
    type: "pdfViewer",
    name: "pdfViewer",
  });
  console.log("pdfViewer", response);
};
browser.runtime.onMessage.addListener(async (message) => {
  console.log("Content script recieved message:", message);
  return Math.random();
});
</script>

<style scoped lang="scss">
.knowee-sidebar {
  pointer-events: auto;
  position: fixed;
  right: 0;
  top: 50%;
  //   background-color: blueviolet;
}
</style>
