<template>
  <div>
    <BasicLayout
      @menuSelect="
        (item) => {
          contents = item;
        }
      "
      @mainPage="mainPage"
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
        label: "메인 페이지",
        index: "mainPage",
        path: "mainPage",
      },
    };
  },
  methods: {
    mainPage() {
      this.contents = {
        label: "메인 페이지",
        index: "mainPage",
        path: "mainPage",
      };
    },
  },
};
</script>

<style></style>
