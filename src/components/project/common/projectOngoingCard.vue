<template lang="">
  <el-card class="card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>{{ project.title }}</span>
        <el-button type="primary" @click="detailClick" v-if="!detailed"
          >상세</el-button
        >
        <el-button type="primary" @click="detailClick" v-if="detailed"
          >축소</el-button
        >
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
      <el-progress :percentage="progress" type="circle" show-text="true">
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
    <div v-if="detailed">
      <el-divider />
      <div>
        <span class="title">기간</span>
        <p class="descBox">
          {{ startTime }} ~ {{ endTime }}
          <el-divider />
        </p>
      </div>

      <div>
        <span class="title">설명</span>
        <p class="descBox">
          {{ description }}
        </p>
      </div>
      <span class="title">참가 인원</span>
      <ShowAllocate :project="project" />
    </div>
    <div class="card-footer">
      <span>마지막 업데이트: {{ project.update }}</span>
    </div>
  </el-card>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import ShowAllocate from "./ShowAllocate.vue";
import moment from "moment";
export default {
  name: "projectOngoingCard",
  emits: ["detailClick"],
  components: {
    ShowAllocate,
  },
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: "",
          date1: "",
          desc: "",
          participants: [],
          works: [],
          update: "",
        };
      },
    },
  },
  data() {
    return {
      projectPlanList,
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
      detailed: false,
    };
  },
  computed: {
    startTime() {
      return this.project.date1[0];
    },
    endTime() {
      return this.project.date1[1];
    },
    currentTime() {
      return moment().format("YYYY-MM-DD");
    },
    remainingTime() {
      const start = moment(this.startTime);
      const end = moment(this.endTime);
      const current = moment(this.currentTime);
      return Math.round(
        (current.diff(start, "days") / end.diff(start, "days")) * 100
      );
    },
    progress() {
      const total = this.project.works.length;
      const done = this.project.works.filter((work) => work.A).length;
      return Math.round((done / total) * 100);
    },
    description() {
      return this.project.desc;
    },
  },
  methods: {
    detailClick() {
      this.detailed = !this.detailed;
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
.card-footer {
  display: flex;
  justify-content: flex-end;
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

.title {
  font-size: 20px;
  font-weight: bold;
  display: block;
}

.descBox {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 15px;
  display: block;
}
</style>
