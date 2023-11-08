<template lang="">
  <el-row class="tac">
    <el-col>
      <el-menu :collapse="isCollapse">
        <el-sub-menu
          v-for="menu in menuItem"
          :key="menu.index"
          :index="menu.index"
        >
          <template #title>
            <el-icon><component :is="menu.icon" /></el-icon>
            <span>{{ menu.label }}</span>
          </template>
          <el-menu-item
            @click="handleSelect(item)"
            v-for="item in menu.submenus"
            :key="item.index"
            :index="item.index"
            >{{ item.label }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { Location, Setting } from "@element-plus/icons";
import { reactive, toRefs } from "vue";
export default {
  name: "SideMenu",
  components: {
    Location,
    Setting,
  },
  props: {
    isCollapse: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const state = reactive({
      menuItem: [
        {
          label: "조직관리",
          index: "org",
          icon: "location",
          submenus: [
            { label: "조직도", index: "orgChart", path: "org" },
            { label: "구성원", index: "orgMember", path: "org" },
            { label: "일정표", index: "orgCalendar", path: "org" },
          ],
        },
        {
          label: "프로젝트 관리",
          index: "project",
          icon: "setting",
          submenus: [
            { label: "프로젝트 계획", index: "projectPlan", path: "project" },
            {
              label: "진행중인 프로젝트",
              index: "projectOngoing",
              path: "project",
            },
            {
              label: "완성된 프로젝트",
              index: "projectCompleted",
              path: "project",
            },
          ],
        },
        {
          label: "결재",
          index: "Approval",
          icon: "location",
          submenus: [
            { label: "결재", index: "ApprovalMain", path: "Approval" },
            { label: "구성원", index: "orgChart", path: "org" },
          ],
        },
        {
          label: "관리자",
          index: "admin",
          icon: "setting",
          submenus: [
            { label: "구성원 관리", index: "addUser", path: "admin" },
            { label: "공지 작성", index: "writeNotice", path: "admin" },
          ],
        },
      ],
    });
    const handleSelect = (item) => {
      context.emit("menuSelect", item);
    };

    return {
      ...toRefs(state),
      handleSelect,
    };
  },
};
</script>
<style>
.tac {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-menu-item {
  height: 100%;
}
</style>
