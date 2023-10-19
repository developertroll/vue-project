<template lang="">
  <el-dialog v-model="testshow" width="80%" height="90%">
    <template #header="{ titleId, titleClass }">
      <div class="dialogHeader">
        <h2 :id="titleId" :class="titleClass">
          <!-- 프로젝트가 가진 제목 -->111
        </h2>
      </div></template
    >
    <!-- 프로젝트가 가진 내용물 -->
    <el-descriptions direction="vertical" :column="4" border>
      <el-descriptions-item label="프로젝트 제목">
        <!-- 플젝 제목 -->111
      </el-descriptions-item>
      <el-descriptions-item label="프로젝트 일자">
        <!-- 플젝 기간 -->222
      </el-descriptions-item>
      <el-descriptions-item label="프로젝트 참가인원">
        <!--showMember -->333
      </el-descriptions-item>
      <el-descriptions-item label="상태">
        <!-- 결재상태 -->444
      </el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>
<script>
export default {
  name: "DocumentedProject",
  data() {
    return {
      testshow: true,
    };
  },
};
</script>
<style scoped>
.dialogHeader {
  background-color: #409eff;
  height: 2rem;
}
</style>
