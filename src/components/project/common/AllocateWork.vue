<template lang="">
  <div>
    <h2>업무 할당</h2>
    <el-button type="primary">추가</el-button>
    <el-button type="primary">등록</el-button>
  </div>
  <!--추가 버튼을 누를때마다 1줄씩 추가되며, 업무는 workList를 dropdown해서 설정, 업무를 진행할 인원은 parentData를 받아서 그 인원중 선택할 것, 그리고 간단한 업무 내용 작성, 시작일과 마감일" -->
  <div>
    <el-form :model="form">
      <el-form-item label="Work">
        <el-select v-model="form.work" placeholder="업무">
          <el-option
            v-for="item in workList"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="진행자">
        <!-- 프로젝트가 가진 parentdata를 받아서 체크박스 1개만 체크 가능한 addMember를 실행 -->
      </el-form-item>
      <el-form-item label="업무내용">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="진행 일정">
        <el-date-picker
          v-model="form.date1"
          type="daterange"
          range-separator="~"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "AllocateWork",
  setup() {
    const workList = ref(["업무1", "업무2", "업무3", "업무4"]);
    return {
      workList,
    };
  },
  data() {
    return {
      form: {
        work: "",
        member: [],
        date1: "",
        desc: "",
      },
    };
  },
};
</script>
<style lang=""></style>
