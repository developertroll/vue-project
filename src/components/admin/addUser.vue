<template lang="">
  <el-form :model="template" label-width="120px" :label-position="'left'">
    <!-- template의 형식을 빌려와서 반복문으로 el-form-item 작성 -->
    <el-form-item
      v-for="(item, index) in template"
      :key="index"
      :label="memberKeyTranslate[item.label]"
      :prop="item.prop"
    >
      <!-- template의 label이 status,birthday, joindate, leavedate인 경우 미표기 -->
      <!-- template의 label이 rank일 경우 MemberList.availableRank 리스트 내에서 선택하게 하기 -->
      <!-- template의 label이 job일경우 JobList.List에서 선택하게 하기 -->
      <el-input
        v-if="
          item.label !== 'rank' &&
          item.label !== 'job' &&
          item.label !== 'birthday'
        "
        v-model="item.value"
      ></el-input>
      <el-select v-else-if="item.label === 'rank'" v-model="item.value">
        <el-option
          v-for="(rank, index) in MemberList.availableRank"
          :key="index"
          :label="rank"
          :value="rank"
        >
        </el-option>
      </el-select>
      <el-select v-else-if="item.label === 'job'" v-model="item.value">
        <el-option
          v-for="(job, index) in JobList.workerList"
          :key="index"
          :label="job"
          :value="job"
        >
        </el-option>
      </el-select>
      <!-- item.label이 birthday인경우 datepicker -->
      <el-date-picker
        v-else-if="item.label === 'birthday'"
        v-model="item.value"
        type="date"
        placeholder="Select date"
        value-format="YYYY-MM-DD"
        :picker-options="{
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        }"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { JobList } from "@/composables/jobList";
import { MemberList } from "@/composables/memberList";
import moment from "moment";
export default {
  name: "addUser",
  components: {},
  data() {
    return {
      // template: MemberList.memberTemplate,
      JobList,
      MemberList,
      template: [],
      originalTemplate: MemberList.memberTemplate,
      memberKeyTranslate: { ...MemberList.memberKeyTranslate },
    };
  },
  mounted() {
    this.template = Object.entries(this.originalTemplate)
      .filter(([key]) => !["status", "joinDate", "leaveDate"].includes(key))
      .map(([key, value]) => ({
        label: key,
        prop: key,
        value: value,
      }));
  },
  methods: {
    onSubmit() {
      const data = this.template.reduce((obj, item) => {
        obj[item.label] = item.value || item.values;
        return obj;
      }, {});
      (data.status = "재직중"),
        (data.joinDate = moment().format("YYYY-MM-DD")),
        (data.leaveDate = ""),
        console.log(data);
      MemberList.addMember(data);
      // this.$message({
      //   message: "사원이 추가되었습니다.",
      //   type: "success",
      // });
    },
  },
};
</script>
<style lang=""></style>
