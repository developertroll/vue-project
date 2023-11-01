<template lang="">
  <div>
    <h2>결재 테이블</h2>
    <!-- 해당 테이블은 결재요청이 들어온 모든 프로젝트를 담당하는 페이지, 클릭을 할 시 dialog가 떠 해당 결재요청이 들어온 문서의 내용이 보이며 버튼을 눌러 승인,반려,취소,삭제가 가능함 -->
  </div>
  <div class="buttons">
    <el-button type="primary" @click="approvalSubmit('승인')">승인</el-button>
    <el-button type="danger" @click="approvalSubmit('반려')">반려</el-button>
    <el-button type="info" @click="approvalSubmit('취소')">취소</el-button>
    <el-button type="warning" @click="approvalSubmit('삭제')">삭제</el-button>
  </div>
  <el-table
    :data="appData"
    style="width: 100%"
    @selection-change="handleSelect"
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="type" label="종류"></el-table-column>
    <el-table-column prop="update" label="날짜"></el-table-column>
    <el-table-column label="제목">
      <template #default="scope">
        <DocumentedProjectV2
          :project="scope.row"
          v-if="scope.row.type === '계획'"
        />
        <div v-else>
          {{ scope.row.title }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="상태"></el-table-column>
  </el-table>
</template>
<script>
import { ApprovalList } from "@/composables/approvalList";
import { projectPlanList } from "@/composables/projectPlanList";
import DocumentedProjectV2 from "./DocumentedProjectV2.vue";
import { ElMessageBox } from "element-plus";
export default {
  name: "ApprovalTable",
  components: {
    DocumentedProjectV2,
  },
  data() {
    return {
      tableData: [],
      ApprovalList,
      projectPlanList,
      selectedRow: [],
      type: "",
    };
  },
  methods: {
    handleSelect(selection) {
      this.selectedRow = selection;
    },
    approvalSubmit(type) {
      console.log(type);
      ElMessageBox.confirm(
        "선택된 요청들을 " + type + "하시겠습니까?",
        "info",
        {
          confirmButtonText: "승인",
          cancelButtonText: "취소",
          type: "info",
        }
      )
        .then(() => {
          for (const element of this.selectedRow) {
            let original = this.ApprovalList.findList(element);
            if (original.status === "수정") {
              this.ApprovalList.changeStatus(original, type);
              this.ApprovalList.modifyCompletion(original);
            } else if (type === "승인") {
              this.ApprovalList.changeStatus(original, type);
              this.ApprovalList.completion(original);
            }
          }
          this.$message({
            type: "success",
            message: "처리되었습니다!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "취소되었습니다",
          });
        });
    },
  },
  computed: {
    appData() {
      let newList = [];
      this.ApprovalList.requestList.forEach((item) => {
        // console.log(item);
        if (item.type === "업무") {
          newList.push({
            type: item.type,
            update: item.update,
            title: item.name + " " + item.position + "업무 보고",
            status: item.status,
            name: item.name,
            parent: item.parent,
          });
        } else {
          newList.push({
            type: item.type,
            update: item.update,
            title: item.title,
            status: item.status,
          });
        }
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
