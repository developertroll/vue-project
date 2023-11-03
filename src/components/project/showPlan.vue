<template lang="">
  <div class="buttons" v-if="projectPlan === '예정'">
    <el-button type="primary" @click="createPlan">생성</el-button>
    <el-tooltip :disabled="!multiCheck" :content="modifyButton" placement="top">
      <el-button type="warning" :disabled="multiCheck" @click="modifyPlan"
        >수정</el-button
      >
    </el-tooltip>
    <el-tooltip
      :disabled="!onGoingCheck"
      content="이미 진행중인 프로젝트의 삭제는 불가능합니다. 삭제를 원할 시 관리자에게 연락해주세요"
      placement="top"
    >
      <el-button type="danger" :disabled="onGoingCheck" @click="deletePlan"
        >삭제</el-button
      >
    </el-tooltip>
  </div>
  <el-table
    :data="PlanList"
    border
    style="width: 100%"
    @selection-change="handleSelect"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="title" label="제목">
      <template #default="scope">
        <DocumentedProjectV2 :project="scope.row" />
      </template>
    </el-table-column>
    <el-table-column prop="desc" label="설명" />
    <el-table-column prop="member" label="참가인원" />
    <el-table-column prop="status" label="상태" />
    <el-table-column prop="startDate" label="시작일" />
  </el-table>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import moment from "moment";
import { ElMessageBox } from "element-plus";
import DocumentedProjectV2 from "../Approval/DocumentedProjectV2.vue";
export default {
  name: "projectPlan",
  emits: ["createPlan", "modifyPlan", "deletePlan"],
  components: {
    DocumentedProjectV2,
  },
  props: {
    projectPlan: {
      type: String,
      default: "예정",
      validator: (value) => {
        return ["예정", "진행", "완료"].includes(value);
      },
    },
  },
  data() {
    return {
      currentProject: null,
      tableData: [],
      projectPlanList,
      selectedRow: [],
      modifyToolTip: [
        "이미 진행중인 프로젝트는 수정할 수 없습니다. 수정이 필요하면 관리자에게 연락해주세요",
        "2개 이상의 프로젝트를 선택하면 수정 할 수 없습니다",
        "이미 진행중인 프로젝트는 수정할 수 없습니다, 수정은 1개의 프로젝트만 선택해야합니다",
      ],
    };
  },
  computed: {
    PlanList() {
      const rawList = this.projectPlanList.callPlanList();
      const filteredList = rawList.filter((item) => {
        const startDate = moment(item.date1[0]);
        const currentDate = moment();
        const startDiff = currentDate.diff(startDate, "days");
        const status =
          item.status === "완료"
            ? "완료"
            : startDiff < 0
            ? "진행예정"
            : item.status;

        if (this.projectPlan === "완료" && status !== "완료") {
          return false;
        }
        if (this.projectPlan === "진행" && status !== "진행예정") {
          return false;
        }
        return true;
      });
      return filteredList.map((item) => {
        const text = item.Partipacants.map((member) => member.name).join(", ");
        const startDate = moment(item.date1[0]);
        const currentDate = moment();
        const startDiff = currentDate.diff(startDate, "days");
        const status =
          item.status === "완료"
            ? "완료"
            : startDiff < 0
            ? "진행예정"
            : item.status;
        return {
          title: item.title,
          desc: item.desc,
          member: text,
          status: status,
          startDate: item.date1[0],
        };
      });
    },
    multiCheck() {
      return this.onGoingCheck || this.selectedRow.length > 1;
    },
    onGoingCheck() {
      return (
        this.selectedRow.some((item) => item.status !== "진행예정") &&
        this.selectedRow.length > 0
      );
    },
    modifyButton() {
      if (this.selectedRow.length > 1 && this.onGoingCheck) {
        return this.modifyToolTip[2];
      } else if (this.selectedRow.length > 1) {
        return this.modifyToolTip[1];
      } else if (this.onGoingCheck) {
        return this.modifyToolTip[0];
      } else {
        return "완료";
      }
    },
  },
  methods: {
    createPlan() {
      this.$emit("createPlan");
    },
    handleSelect(selection) {
      this.selectedRow = selection;
    },
    modifyPlan() {
      this.$emit("modifyPlan", this.selectedRow[0]);
    },
    deletePlan() {
      ElMessageBox.confirm(
        "선택된 프로젝트 계획들을 취소하시겠습니까?",
        "경고",
        {
          confirmButtonText: "승인",
          cancelButtonText: "취소",
          type: "warning",
        }
      )
        .then(() => {
          for (const element of this.selectedRow) {
            console.log(element);
            const original = this.projectPlanList.List.find(
              (item) => item.title === element.title
            );
            console.log(original);
            this.projectPlanList.deletePlanWork(original);
          }
          this.$message({
            type: "success",
            message: "취소되었습니다",
          });
        })
        .catch(() =>
          this.$message({
            type: "info",
            message: "취소되었습니다",
          })
        );
    },
  },
};
</script>
<style scoped>
.buttons {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
