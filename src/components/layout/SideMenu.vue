<template lang="">
  <el-row class="tac">
    <el-col>
      <el-menu :collapse="isCollapse">
        <el-sub-menu
          v-for="menu in adminCheckedMenu"
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
import {
  Location,
  Setting,
  Document,
  Briefcase,
  OfficeBuilding,
} from "@element-plus/icons";
import { reactive, toRefs } from "vue";
import { MemberList } from "@/composables/memberList";
export default {
  name: "SideMenu",
  components: {
    Location,
    Setting,
    Document,
    Briefcase,
    OfficeBuilding,
  },
  props: {
    isCollapse: {
      type: Boolean,
    },
  },
  emits: ["menuSelect"],
  computed: {
    adminCheckedMenu() {
      if (MemberList.currentMember === MemberList.currentAdmin) {
        return this.menuItem;
      } else {
        return this.menuItem.filter((item) => item.label !== "관리자");
      }
    },
  },
  setup(props, context) {
    const state = reactive({
      menuItem: [
        {
          label: "조직관리",
          index: "org",
          icon: "OfficeBuilding",
          submenus: [
            { label: "조직도", index: "orgChart", path: "org" },
            { label: "일정표", index: "orgCalendar", path: "org" },
          ],
        },
        {
          label: "프로젝트 관리",
          index: "project",
          icon: "Document",
          submenus: [
            { label: "프로젝트 계획", index: "projectPlan", path: "project" },
            { label: "대기중인 계획", index: "protoPlanV2", path: "project" },
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
          icon: "Briefcase",
          submenus: [
            { label: "결재", index: "ApprovalMain", path: "Approval" },
          ],
        },
        {
          label: "개인 페이지",
          index: "member",
          icon: "location",
          submenus: [
            { label: "개인 페이지", index: "privatePage", path: "member" },
            { label: "메세지", index: "messageMain", path: "member" },
          ],
        },
        {
          label: "관리자",
          index: "admin",
          icon: "setting",
          submenus: [
            { label: "구성원 추가", index: "addUser", path: "admin" },
            { label: "공지 게시판", index: "noticeMain", path: "mainPage" },
            // { label: "메인페이지 테스트", index: "mainPage", path: "mainPage" },
            // {
            //   label: "개인 페이지 테스트",
            //   index: "privatePage",
            //   path: "member",
            // },
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
