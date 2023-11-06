<template lang="">
  <el-col>
    <el-row :span="12">{{ currentMember }}</el-row>
    <el-row :span="12">님, 반갑습니다!</el-row>
  </el-col>
  <el-col>
    <!-- 프로젝트 일정, 업무 -->
    <el-row :span="8"></el-row>
    <el-row :span="16"></el-row>
  </el-col>
  <el-col>
    <!-- 공지사항, 당일 일정 -->
    <el-row :span="12"></el-row>
    <el-row :span="12"></el-row>
  </el-col>
</template>
<script>
export default {
  name: "mainPage",
  data() {
    return {
      currentMember: "김철수",
    };
  },
};
</script>
<style lang=""></style>
