<template lang="">
  <div>
    <h2>결재 테이블</h2>
    <!-- 해당 테이블은 결재요청이 들어온 모든 프로젝트를 담당하는 페이지, 클릭을 할 시 dialog가 떠 해당 결재요청이 들어온 문서의 내용이 보이며 버튼을 눌러 승인,반려,취소,삭제가 가능함 -->
  </div>
  <div class="buttons">
    <el-button type="primary">승인</el-button>
    <el-button type="danger">반려</el-button>
    <el-button type="info">취소</el-button>
    <el-button type="warning">삭제</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="date" label="날짜" width="180"></el-table-column>
    <el-table-column prop="name" label="제목"></el-table-column>
    <el-table-column prop="status" label="상태"></el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "ApprovalTable",
};
</script>
<style scoped>
.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
