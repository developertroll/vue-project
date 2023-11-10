<template>
  <el-card type="card" class="main-content">
    <h1 class="content-title" v-if="handlerExecuted">
      {{ handlerComponent.label }}
    </h1>
    <h1 class="content-title" v-else>{{ contents.label }}</h1>
    <div class="target-component">
      <component :is="targetComponent" @handleMain="handlers" />
    </div>
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
          label: "메인 페이지",
          path: "mainPage",
          index: "mainPage",
        };
      },
    },
  },
  data() {
    return {
      targetComponent: shallowRef(null),
      handlerExecuted: false,
      handlerComponent: null,
    };
  },
  watch: {
    contents: {
      deep: true,
      handler: function (newValue) {
        this.targetComponent = defineAsyncComponent(() =>
          import(`./${newValue.path}/${newValue.index}.vue`)
        );
        this.handlerExecuted = false;
      },
      immediate: true,
    },
  },
  methods: {
    handlers(item) {
      this.targetComponent = defineAsyncComponent(() =>
        import(`./${item.path}/${item.index}.vue`)
      );
      this.handlerComponent = item;
      this.handlerExecuted = true;
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
