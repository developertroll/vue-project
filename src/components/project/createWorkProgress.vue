<template lang="">
  <el-button type="primary" @click="reporting = !reporting">업무보고</el-button>
  <el-dialog v-model="reporting" append-to-body>
    <template #header="{ titleId, titleClass }">
      <div class="dialogHeader">
        <h2 :id="titleId" :class="titleClass">참여인원</h2>
      </div>
    </template>
    <el-table :data="tableData">
      <el-table-column prop="title" label="제목"></el-table-column>
      <el-table-column prop="position" label="담당업무"></el-table-column>
      <el-table-column prop="deadLine" label="마감기한"></el-table-column>
    </el-table>
    <!-- 이 보고 내용만 수정이 가능하고 저 위는 리마인드용으로 테이블로 띄울것임 -->
    <el-form>
      <el-form-item label="업무보고">
        <el-input
          v-model="report"
          placeholder="업무보고"
          type="textarea"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <div class="center">
          <el-button type="primary" @click="onSubmit">제출</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { ApprovalList } from "@/composables/approvalList";
import moment from "moment";
export default {
  name: "createWorkProgress",
  props: {
    work: {
      type: Object,
      required: true,
      default: () => {},
    },
    project: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      report: "",
      ApprovalList,
      reporting: false,
    };
  },
  computed: {
    updateDate() {
      return moment().format("YYYY-MM-DD");
    },
    tableData() {
      const newList = [];
      console.log(this.work);
      newList.push({
        title: this.work.name,
        position: this.work.position,
        deadLine: this.work.deadLine,
        status: "업무보고",
      });
      return newList;
    },
  },
  methods: {
    onSubmit() {
      this.ApprovalList.request(
        {
          ...this.work,
          report: this.report,
          update: this.updateDate,
          parent: this.project,
        },
        "업무",
        "업무보고"
      );
      this.$message({
        message: "업무보고가 제출되었습니다.",
        type: "success",
      });
      this.reporting = false;
    },
  },
};
</script>
<style scoped>
.dialogHeader {
  background-color: #409eff;
  height: 2.5rem;
}
.dialogHeader h2 {
  font-size: 1.25rem;
  padding: 0.5rem;
  color: white;
  text-align: center;
}
</style>
