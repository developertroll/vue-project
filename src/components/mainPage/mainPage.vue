<template lang="">
  <div class="title">{{ currentMember }} 님, 반갑습니다!</div>
  <!-- 프로젝트 일정, 업무 -->
  <el-space wrap fill :fillRatio="90" size="large">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>진행중인 프로젝트</span>
          <el-button type="primary" @click="handleClick(0)">상세</el-button>
        </div>
      </template>
      <mainTable :currentMember="currentMember" currentTable="projectPlan" />
    </el-card>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>진행중인 업무</span>
          <el-button type="primary" @click="handleClick(1)">상세</el-button>
        </div>
      </template>
      <mainTable :currentMember="currentMember" currentTable="workList" />
    </el-card>
    <!-- 공지사항, 당일 일정 -->
    <el-card>
      <template #header>
        <div class="card-header">
          <span>최근 공지사항</span>
          <el-button type="primary" @click="handleClick(2)">상세</el-button>
        </div>
      </template>
      <noticeBoard :main="false" />
    </el-card>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>오늘 일정</span>
          <el-button type="primary" @click="handleClick(3)">상세</el-button>
        </div>
      </template>
      <mainTable :currentMember="currentMember" currentTable="eventList" />
    </el-card>
  </el-space>
</template>
<script>
import noticeBoard from "./noticeBoard.vue";
import mainTable from "./mainTable.vue";
import { MemberList } from "@/composables/memberList";
export default {
  name: "mainPage",
  emits: ["handleMain"],
  components: {
    mainTable,
    noticeBoard,
  },
  data() {
    return {
      emitterMenus: [
        { label: "프로젝트 계획", index: "projectPlan", path: "project" },
        {
          label: "진행중인 프로젝트",
          index: "projectOngoing",
          path: "project",
        },
        { label: "공지 게시판", index: "noticeMain", path: "mainPage" },
        { label: "일정표", index: "orgCalendar", path: "org" },
      ],
    };
  },
  methods: {
    handleClick(number) {
      this.$emit("handleMain", this.emitterMenus[number]);
    },
  },
  computed: {
    currentMember() {
      return MemberList.currentMember;
    },
  },
};
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-header span {
  font-size: 1.5rem;
  font-weight: bold;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
