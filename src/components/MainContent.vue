<template>
  <h2 class="content-title">
    {{ contents.label }}
  </h2>
  <component :is="targetComponent"></component>
</template>
<script>
import { defineAsyncComponent } from "vue";
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
      targetComponent: null,
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
<style></style>
