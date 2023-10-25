<template lang="">
  <div class="buttons">
    <el-button type="primary" @click="editClick" v-show="!Status"
      >수정</el-button
    >
    <el-tooltip
      placement="left"
      content="모든 정보가 채워지면 저장이 가능합니다."
    >
      <el-button
        type="primary"
        @click="saveWork"
        v-show="Status"
        :disabled="!AllDataFinished"
        >저장</el-button
      >
    </el-tooltip>
    <el-button type="primary" @click="addRow" v-show="Status">추가</el-button>
    <el-button type="primary" v-show="Status" @click="clearData"
      >초기화</el-button
    >
  </div>
  <el-table :data="workData" border>
    <el-table-column width="60" label="삭제">
      <template #default="scope">
        <el-button
          type="danger"
          :icon="Delete"
          @click="deleteRow(scope.row)"
          circle
        />
      </template>
    </el-table-column>
    <el-table-column label="담당자" props="name">
      <template #default="scope">
        <div v-if="Status">
          <el-select placeholder="담당자" v-model="scope.row.name">
            <el-option
              v-for="item in Parti"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </div>
        <div v-else>{{ scope.row.name }}</div>
      </template>
    </el-table-column>
    <el-table-column label="업무" props="position">
      <template #default="scope">
        <div v-if="Status">
          <el-select placeholder="업무" v-model="scope.row.position">
            <el-option
              v-for="item in JobList.List"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </div>
        <div v-else>{{ scope.row.position }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="desc" label="업무내용">
      <template #default="scope">
        <div v-if="Status">
          <el-input
            v-model="scope.row.desc"
            type="textarea"
            placeholder="간단하게 작성해주세요"
          />
        </div>
        <div v-else>{{ scope.row.desc }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="deadLine" label="마감일">
      <template #default="scope">
        <div v-if="Status">
          <el-date-picker
            v-model="scope.row.deadLine"
            type="date"
            placeholder="마감일"
            :disabled-date="disabledTime"
            value-format="YYYY-MM-DD"
            format="YYYY/MM/DD"
            :default-value="new Date(defaultDate)"
          />
        </div>
        <div v-else>{{ scope.row.deadLine }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { Delete } from "@element-plus/icons";
import moment from "moment";
import { JobList } from "@/composables/jobList";
export default {
  name: "ShowAllocate",
  emits: ["saveWorks", "commitEdit"],
  data() {
    return {
      workData: [],
      Status: true,
      JobList,
      Delete,
    };
  },
  props: {
    Parti: {
      type: Array,
      default: () => {
        return [
          {
            name: "김철수",
          },
          { name: "박영희" },
        ];
      },
    },
    parentDate: {
      type: Object,
      default: () => {
        return {
          date1: ["2021-08-01", "2021-08-11"],
        };
      },
    },
  },
  methods: {
    addRow() {
      this.workData.push({
        name: "",
        position: "",
        desc: "",
        deadLine: "",
      });
    },
    saveWork() {
      console.log(this.workData);
      this.$emit("saveWorks", this.workData);
      this.$emit("commitEdit", true);
      this.Status = !this.Status;
    },
    editClick() {
      this.$emit("commitEdit", false);
      this.Status = !this.Status;
      console.log(this.Status);
    },
    deleteRow(row) {
      const index = this.workData.indexOf(row);
      if (index !== -1) {
        this.workData.splice(index, 1);
      }
    },
    dataInit() {
      if (this.workData.length === 0) {
        const defaultValue = this.Parti.map((item) => {
          return {
            name: item.name,
            position: "",
            desc: "",
            deadLine: "",
          };
        });
        this.workData = defaultValue;
      }
    },
    clearData() {
      this.workData = [];
      this.$message({
        type: "success",
        message: "초기화 되었습니다.",
      });
    },
  },
  computed: {
    TimeLines() {
      return this.parentDate;
    },
    disabledTime() {
      const startDate = moment(this.TimeLines[0]);
      const endDate = moment(this.TimeLines[1]);
      return (time) => {
        return time < startDate || time > endDate;
      };
    },
    defaultDate() {
      const startDate = moment(this.TimeLines[0]);
      return startDate;
    },
    AllDataFinished() {
      if (this.workData.length === 0) return false;
      const currentData = this.workData;
      const isDataCompleted = (currentData) => {
        return currentData.some((item) => {
          return (
            item.name.trim() === "" ||
            item.position.trim() === "" ||
            item.desc.trim() === "" ||
            item.deadLine.trim() === ""
          );
        });
      };
      return !isDataCompleted(currentData);
    },
  },
  mounted() {
    this.dataInit();
  },
};
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-left: auto;
}
</style>
