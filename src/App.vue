<template>
  <div>
    <BasicLayout
      @menuSelect="
        (item) => {
          contents = item;
        }
      "
      @mainPage="mainPage"
      @handleCommand="handleCommand"
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
    handleCommand(command) {
      const path = this.translateCommand(command.type);
      const index = this.translateIndex(path);
      this.contents = {
        label: command.type,
        index: index,
        path: path,
      };
    },
    translateCommand(command) {
      switch (command) {
        case "프로젝트":
          return "project";
        case "결재":
          return "Approval";
        case "일정":
          return "org";
        default:
          return "mainPage";
      }
    },
    translateIndex(path) {
      switch (path) {
        case "project":
          return "projectPlan";
        case "Approval":
          return "ApprovalMain";
        case "org":
          return "orgChart";
        default:
          return "mainPage";
      }
    },
  },
};
</script>

<style></style>
