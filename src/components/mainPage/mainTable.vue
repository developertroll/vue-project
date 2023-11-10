<template lang="">
  <!-- <el-table :data="tableData">
    <el-table-column
      v-for="(value, key) in tableData[0]"
      :label="key"
      :prop="key"
      :key="key"
    />
  </el-table> -->
  <div v-if="tableData === []">없음</div>
  <div v-else>
    <el-table :data="tableData" border>
      <el-table-column
        v-for="(value, key) in tableData[0]"
        :label="key"
        :prop="key"
        :key="key"
        show-overflow-tooltip
      />
    </el-table>
  </div>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import { eventList } from "@/composables/eventList";
// import { ApprovalList } from "@/composables/approvalList";
import moment from "moment";
export default {
  name: "mainTable",
  props: {
    currentMember: {
      type: String,
      required: true,
    },
    currentTable: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.currentTable + ":", this.currentMember);
  },
  computed: {
    tableData() {
      switch (this.currentTable) {
        case "projectPlan": {
          let result = projectPlanList.findProjectByName(this.currentMember);
          let data = [];
          result.forEach((element) => {
            if (
              element.date1[0] < moment().format("YYYY-MM-DD") &&
              element.date1[1] > moment().format("YYYY-MM-DD")
            ) {
              data.push({
                제목: element.title,
                시작일: element.date1[0],
                마감일: element.date1[1],
                설명: element.desc,
                갱신일: element.update,
              });
            }
          });
          return data;
        }

        case "eventList": {
          // eventList에서 eventList 배열에 name이 currentMember이고 start나 end가 오늘인것만 필터링
          let result = eventList.eventList.filter(
            (element) =>
              element.member.find((item) => item.name === this.currentMember) &&
              (moment(element.start).isSame(moment(), "day") ||
                moment(element.end).isSame(moment(), "day"))
          );
          let data = [];
          result.forEach((element) => {
            let text = element.member.map((member) => member.name).join(", ");
            data.push({
              제목: element.title,
              설명: element.desc,
              참가인원: text,
            });
          });
          return data;
        }
        case "workList": {
          // workList에서 works 배열에 name이 currentMember이고 그 deadLine이 오늘 이후인것만 필터링
          let result = projectPlanList.findWorkByName(this.currentMember);
          let data = [];
          result.forEach((element) => {
            let parentProject = projectPlanList.findProjectByWork(element);
            data.push({
              프로젝트: parentProject.title,
              업무: element.position,
              설명: element.desc,
              마감일: element.deadLine,
            });
          });
          return data;
        }
        default: {
          return [];
        }
      }
    },
  },
};
</script>
<style lang=""></style>
