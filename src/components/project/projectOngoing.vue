<template lang="">
  <!-- 해당 div는 작업 전 테스트용으로만 만들어진것. 이후 삭제예정 -->
  <div>
    진행중인 프로젝트
    <DocumentedProject v-if="devTest === 1" />
    <ApprovalTable v-if="devTest === 2" />
    <AllocateWorkVue v-if="devTest === 3" />
    <el-button type="primary" @click="devTest = 1">상세 프로젝트</el-button>
    <el-button type="primary" @click="devTest = 2">상세 프로젝트</el-button>
    <el-button type="primary" @click="devTest = 3">상세 프로젝트</el-button>
  </div>
  <el-card class="card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>프로젝트 이름</span>
        <el-button type="primary">상세</el-button>
      </div>
    </template>
    <div class="circleBox">
      <el-progress
        :percentage="remainingTime"
        type="circle"
        show-text="true"
        :color="customColors"
      >
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">기한</span>
        </template>
      </el-progress>
      <el-progress :percentage="50" type="circle" show-text="true">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">진행도</span>
        </template>
      </el-progress>
      <el-progress :percentage="80" type="circle" show-text="true">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">승인</span>
        </template>
      </el-progress>
    </div>
    <ShowAllocate />
    <div class="card-footer">
      <span>마지막 업데이트: {{ endTime }}</span>
    </div>
  </el-card>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>프로젝트 이름</span>
        <el-button type="primary">상세</el-button>
      </div>
    </template>
    <div class="demo-progress">
      <el-progress :percentage="50" />
      <el-progress :percentage="100" :format="format" />
      <el-progress :percentage="100" status="success" />
      <el-progress :percentage="100" status="warning" />
      <el-progress :percentage="50" status="exception" />

      <el-progress
        :percentage="remainingTime"
        type="circle"
        show-text="true"
        :color="customColors"
      >
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">기한</span>
        </template>
      </el-progress>
      {{ startTime }}
    </div>
  </el-card>
</template>
<script>
import DocumentedProject from "@/components/project/common/DocumentedProject.vue";
import ApprovalTable from "@/components/project/common/ApprovalTable.vue";
import AllocateWorkVue from "./common/AllocateWork.vue";
import ShowAllocate from "./common/ShowAllocate.vue";
import moment from "moment";

export default {
  name: "projectOngoing",
  components: {
    DocumentedProject,
    ApprovalTable,
    AllocateWorkVue,
    ShowAllocate,
  },
  data() {
    return {
      startTime: "2023-10-11",
      endTime: "2023-10-27",
      currentTime: "2023-10-26",
      customColors: [
        {
          percentage: 50,
          color: "rgb(255, 194, 0)",
        },
        {
          percentage: 70,
          color: "rgb(255, 133, 0)",
        },
        {
          percentage: 90,
          color: "#f56c6c",
        },
      ],
      devTest: 0,
    };
  },
  computed: {
    remainingTime() {
      const start = moment(this.startTime);
      const end = moment(this.endTime);
      const current = moment(this.currentTime);
      return Math.round(
        (current.diff(start, "days") / end.diff(start, "days")) * 100
      );
    },
  },
  setup() {
    const format = (percentage) =>
      percentage === 100 ? "Full" : `${percentage}%`;
    return {
      format,
    };
  },
};
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.card {
  margin-top: 10px;
  margin-bottom: 10px;
}
.circleBox {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
