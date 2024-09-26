<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
defineProps({
  msg: String,
});

const count = ref(0);
const { locale } = useI18n();
const changeLang = () => {
  // 切换语言：enUS 和 zhCN 互换
  console.log(`Current locale: ${locale.value}`);

  locale.value = locale.value === "enUS" ? "zhCN" : "enUS";
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button @click="changeLang" class="lang">切换语言</button>
    <p>{{ $t("message.hello", { name: "111111" }) }}</p>
  </div>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
.card {
  position: fixed;
  right: 16px;
  top: 16px;
  width: 250px;
  height: 200px;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: pink;
  border-radius: 8px;
  color: black;
  .lang {
    color: aqua;
  }
}
</style>
