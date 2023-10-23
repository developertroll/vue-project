<template lang="">
  <div class="detailHeader">
    <el-button type="primary">뒤로</el-button>
    <h1>프로젝트 제목</h1>
  </div>
  <div>
    <h2>작업현황</h2>
    <ShowAllocate />
    <h2>기한</h2>
    <h2>프로젝트 설명</h2>
  </div>
</template>
<script>
import ShowAllocate from "./common/ShowAllocate.vue";

export default {
  name: "projectOngoingDetail",
  components: {
    ShowAllocate,
  },
};
</script>
<style lang=""></style>
