<template lang="">
  <div class="header-contanier">
    <div>
      <h1>프로젝트 관리 시스템</h1>
    </div>
    <div>
      <el-button type="primary">Hello</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "BasicHeader",
};
</script>
<style scoped>
h1 {
  font-size: 16px;
}
.header-contanier {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
}
</style>
