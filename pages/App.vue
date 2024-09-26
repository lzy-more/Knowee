<template>
  <div id="knowee-overlay">
    <!-- 悬浮按钮 -->
    <FloatButton @open="open"></FloatButton>
    <!-- 侧边栏 -->
    <div id="sidebar" :class="[isOpen ? 'open' : 'closed']">
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import FloatButton from "@/components/FloatButton.vue";
const isOpen = ref(false);
const open = () => {
  isOpen.value = !isOpen.value;
};
watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.maxWidth = "calc(100vw - 420px)";
  } else {
    document.body.style.maxWidth = "100vw";
  }
  document.body.style.transition = "all 300ms ease-in-out";
});
</script>

<style scoped lang="scss">
#knowee-overlay {
  position: fixed;
  z-index: 240;
  top: 0px;
  right: 0px;
  pointer-events: auto;
}
#sidebar {
  position: absolute;
  box-shadow: 0 8px 16px #919eab29;
  background-color: #fff;
  width: 420px;
  height: 100vh;
  overflow: hidden;
  z-index: 2147483647;
  transition: all 0.5s ease;
}

#sidebar.open {
  left: calc(420px * -1);
}

#sidebar.closed {
  left: 0px;
}
</style>
