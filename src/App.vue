<template>
  <div>
    <BasicLayout
      @menuSelect="
        (item) => {
          contents = item;
        }
      "
    >
      <MainContent :contents="contents" />
    </BasicLayout>
  </div>
</template>

<script>
import BasicLayout from "./components/layout/BasicLayout.vue";
import MainContent from "./components/MainContent.vue";
export default {
  name: "App",
  components: {
    BasicLayout,
    MainContent,
  },
  data() {
    return {
      contents: {
        label: "조직도",
        index: "orgChart",
        path: "org",
      },
    };
  },
};
</script>

<style></style>
