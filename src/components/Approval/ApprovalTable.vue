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
  <el-table :data="appData" style="width: 100%">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="type" label="종류"></el-table-column>
    <el-table-column prop="date" label="날짜"></el-table-column>
    <el-table-column label="제목">
      <template #default="scope">
        <div style="display: flex; align-items: center" class="apvName">
          <span @click="clickHandle(scope.row)">{{ scope.row.title }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="상태"></el-table-column>
  </el-table>
</template>
<script>
import { ApprovalList } from "@/composables/approvalList";
import { projectPlanList } from "@/composables/projectPlanList";
export default {
  name: "ApprovalTable",
  data() {
    return {
      tableData: [],
      ApprovalList,
      projectPlanList,
    };
  },
  methods: {
    clickHandle(row) {
      console.log("click", row);
      const newList = this.projectPlanList.searchList(row.title);
      console.log("find?", this.projectPlanList.searchList(row.title));
      this.$emit("dialogClick", newList);
    },
  },
  computed: {
    appData() {
      const newList = [];
      this.ApprovalList.requestList.forEach((item) => {
        newList.push({
          type: item.type,
          date: item.date,
          title: item.title,
          status: item.status,
        });
      });
      return newList;
    },
  },
};
</script>
<style scoped>
.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
.apvName {
  cursor: pointer;
}
.apvName :hover {
  color: #409eff;
}
</style>
