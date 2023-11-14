<template lang="">
  <el-container class="main">
    <el-header
      ><BasicHeader @mainPage="mainPage" @handleCommand="handleCommand"
    /></el-header>
    <el-container>
      <el-aside :width="menuWidth"
        ><SideMenu
          :isCollapse="isCollapse"
          @menuSelect="
            (item) => {
              $emit('menuSelect', item);
            }
          "
      /></el-aside>
      <el-main><slot></slot></el-main>
    </el-container>
  </el-container>
</template>
<script>
import BasicHeader from "./BasicHeader.vue";
import SideMenu from "./SideMenu.vue";
import useBreakPoints from "@/composables/useBreakPoint";
import { computed } from "vue";
export default {
  name: "BasicLayout",
  emits: ["menuSelect", "mainPage"],
  components: {
    BasicHeader,
    SideMenu,
  },
  setup() {
    const { type } = useBreakPoints();
    const isCollapse = computed(() => type.value === "sm");
    const menuWidth = computed(() => (isCollapse.value ? "65px" : "200px"));
    return {
      isCollapse,
      menuWidth,
    };
  },
  methods: {
    mainPage() {
      this.$emit("mainPage");
    },
    handleCommand(command) {
      this.$emit("handleCommand", command);
    },
  },
};
</script>
<style>
.el-header {
  background: #79bbff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  height: 100%;
}
</style>
