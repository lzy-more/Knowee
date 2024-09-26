<template>
  <div class="color">艳娥1111111111</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.color {
  //   color: $primary-color;
}
</style>
