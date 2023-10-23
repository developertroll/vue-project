<template lang="">
  <el-table :data="workData">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column prop="name" label="작업자"></el-table-column>
    <el-table-column prop="position" label="업무"></el-table-column>
    <el-table-column prop="part" label="상태"></el-table-column>
    <el-table-column prop="update" label="변경일"></el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "ShowAllocate",
  data() {
    return {
      workData: [
        {
          name: "김철수",
          position: "개발",
          part: "진행중",
          update: "2021-08-01",
        },
        {
          name: "박영희",
          position: "디버그",
          part: "진행중",
          update: "2021-08-02",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
