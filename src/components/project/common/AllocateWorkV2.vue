<template lang="">
  <div class="buttons">
    <el-button type="primary" @click="editClick" v-show="!Status"
      >수정</el-button
    >
    <el-button type="primary" @click="saveWork" v-show="Status">저장</el-button>
    <el-button type="primary" @click="addRow" v-show="Status">추가</el-button>
    <el-button type="primary" v-show="Status">초기화</el-button>
  </div>
  <el-table :data="workData" border>
    <el-table-column type="index" width="50"></el-table-column>
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
    <el-table-column prop="update" label="마감일">
      <template #default="scope">
        <div v-if="Status">
          <el-date-picker
            v-model="scope.row.update"
            type="date"
            placeholder="마감일"
            :disabled-date="disabledTime"
            value-format="YYYY-MM-DD"
            format="YYYY/MM/DD"
            :default-value="new Date(defaultDate)"
          />
        </div>
        <div v-else>{{ scope.row.update }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import moment from "moment";
import { JobList } from "@/composables/jobList";
export default {
  name: "ShowAllocate",
  data() {
    return {
      workData: [
        {
          name: "김철수",
          position: "개발",
          desc: "바닥만들기",
          update: "2023-08-01",
        },
        {
          name: "박영희",
          position: "디버그",
          desc: "바닥고치기 ",
          update: "2023-08-02",
        },
      ],
      Status: false,
      JobList,
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
          date1: ["2023-08-01", "2023-08-12"],
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
        update: "",
      });
    },
    saveWork() {
      console.log(this.workData);
      this.Status = !this.Status;
    },
    editClick() {
      this.Status = !this.Status;
      console.log(this.Status);
    },
  },
  computed: {
    disabledTime() {
      const startDate = moment(this.parentDate.date1[0]);
      const endDate = moment(this.parentDate.date1[1]);
      return (time) => {
        return time < startDate || time > endDate;
      };
    },
    defaultDate() {
      const startDate = moment(this.parentDate.date1[0]);
      return startDate;
    },
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
