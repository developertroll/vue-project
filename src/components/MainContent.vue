<template>
  <el-card type="card" class="main-content">
    <h1 class="content-title">{{ contents.label }}</h1>
    <component :is="targetComponent" class="target-component" />
  </el-card>
</template>
<script>
import { defineAsyncComponent, shallowRef } from "vue";
export default {
  name: "MainContent",
  props: {
    contents: {
      type: Object,
      default() {
        return {
          label: "Test Menu",
          path: "Test",
          index: "TestMenu",
        };
      },
    },
  },
  data() {
    return {
      targetComponent: shallowRef(null),
    };
  },
  watch: {
    contents: {
      deep: true,
      handler: function (newValue) {
        this.targetComponent = defineAsyncComponent(() =>
          import(`./${newValue.path}/${newValue.index}.vue`)
        );
      },
    },
  },
};
</script>
<style scoped>
.content-title {
  margin-bottom: 2rem;
  padding: 0.5rem;
  display: block;
}
/* targetComponent에 대한 스타일 */
.target-component {
  background-color: white;
}

/* MainContent에 대한 스타일 */
.main-content {
  background-color: #ecf5ff; /* 원하는 배경색으로 변경 */
  height: 100%;
}

/* 제목 부분에 대한 스타일 */
.main-content .content-title {
  background-color: transparent; /* 제목 부분의 배경색을 투명하게 설정 */
}
</style>
