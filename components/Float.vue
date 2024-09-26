<template>
  <div class="float">互1111口</div>
  <button @click="open">打开</button>
  <Demo2></Demo2>
</template>

<script setup lang="ts">
import Demo2 from "@/components/Demo2.vue";
const open = () => {
  console.log(111111111333333);

  browser.tabs.create({
    url: browser.runtime.getURL("/get-started.html"),
    active: true,
  });
};
</script>

<style lang="scss">
// @import "@/assets/variables.scss";
.float {
  background-color: blue;
  font-size: 80px;
  width: 300px;
  border: 30px solid red;
  //   color: $primary-color;
}
</style>
