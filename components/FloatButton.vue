<template>
  <div
    class="floating-btn"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- 悬停时显示的内容 -->
    <transition name="expand">
      <div class="hover-content">
        <div class="float-screenshot">
          <div>截图</div>
        </div>
      </div>
    </transition>
    <!-- 可见的主图标 -->
    <div class="icon-btn" @click="openBar">
      <img src="../assets/imgs/logo.png" alt="Screenshot" width="28" />
      <span class="ctrl">Ctrl+I</span>
      <!-- 使用你需要的图标（可以换成图片）-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isHovered = ref(false);
const emits = defineEmits(["open"]);
const openBar = () => {
  emits("open");
};
</script>

<style scoped lang="scss">
.floating-btn {
  position: fixed;
  right: 0;
  bottom: 50%; /* 根据需要调整 */
  cursor: pointer;
  user-select: none;
  transition: transform 0.15s ease-in-out;
  transform: translateX(50px);
  &:hover {
    transform: translateX(0);
  }
}

.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #cadfff;
  background-color: #fff;
  padding: 8px;
  z-index: 999899;
  border-radius: 30px 0 0 30px;
  // transform: translateX(35px);
  .ctrl {
    margin-left: 8px;
  }
}
.hover-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;
  .float-screenshot {
    width: 40px;
    height: 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
