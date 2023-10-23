<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="제목">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="진행 날짜">
      <el-date-picker
        v-model="form.date1"
        type="daterange"
        range-separator="~"
        start-placeholder="Start date"
        end-placeholder="End date"
        value-format="YYYY-MM-DD"
        format="YYYY/MM/DD"
      />
    </el-form-item>

    <el-form-item label="내용">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="참가 인원">
      <addMember @savePart="savePart" />
      <showMember :parentData="form.Partipacants" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import addMember from "./addMember.vue";
import showMember from "./showMember.vue";
export default {
  name: "createPlan",
  components: {
    addMember,
    showMember,
  },
  emits: ["savePart"],
  data() {
    return {
      form: {
        title: "",
        date1: "",
        type: "",
        desc: "",
        Partipacants: [],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
    },
    savePart(item) {
      this.form.Partipacants = item;
      console.log("savePart!", item, this.form.Partipacants);
    },
  },
};
</script>
