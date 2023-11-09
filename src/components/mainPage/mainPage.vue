<template lang="">
  <el-col>
    <el-row :span="12">{{ currentMember }}</el-row>
    <el-row :span="12">님, 반갑습니다!</el-row>
  </el-col>
  <el-col>
    <!-- 프로젝트 일정, 업무 -->
    <el-row :span="8">
      <el-card>
        <template #header>
          <span>진행중인 프로젝트</span>
        </template>
        <mainTable :currentMember="currentMember" :currentTable="projectPlan" />
      </el-card>
    </el-row>
    <el-row :span="16">
      <el-card>
        <template #header>
          <span>진행중인 업무</span>
        </template>
      </el-card>
      <mainTable :currentMember="currentMember" :currentTable="workList" />
    </el-row>
  </el-col>
  <el-col>
    <!-- 공지사항, 당일 일정 -->
    <el-row :span="12">
      <el-card>
        <template #header>
          <span>공지사항</span>
        </template>
      </el-card>
    </el-row>
    <el-row :span="12">
      <el-card>
        <template #header>
          <span>오늘 일정</span>
        </template>
        <mainTable
          :currentMember="currentMember"
          :currentTable="eventList"
        /> </el-card
    ></el-row>
  </el-col>
</template>
<script>
import mainTable from "./mainTable.vue";
export default {
  name: "mainPage",
  components: {
    mainTable,
  },

  data() {
    return {
      currentMember: "김철수",
    };
  },
};
</script>
<style lang=""></style>
