<template>
  <div class="knowee-sidebar">
    <Header></Header>
    <div class="p-10 text-lg font-bold text-red-900">tailwindcss</div>
    <div class="p-20 text-lg font-bold text-red-500">tailwindcss1</div>
    <div
      class="flex justify-between w-full p-10 text-lg font-bold text-red-900"
    >
      <span>2222</span>
      <div>3333333333</div>
    </div>
    <el-button type="success" @click="sayHello">通信测试</el-button>
    <el-button type="success" @click="open">打开pdf预览</el-button>
  </div>
</template>

<script setup lang="ts">
// import { Button } from "ant-design-vue";
import { ref, watch, computed, provide } from "vue";
import { useDraggable, useWindowSize, Position } from "@vueuse/core";
import Header from "@/pages/Header/index.vue";

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

<style scoped lang="scss"></style>
