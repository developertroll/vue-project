<template lang="">
  <el-dialog v-model="display">
    <template #header>
      <span>일정 만들기</span>
    </template>
    <el-form :model="form">
      <el-form-item label="일정 제목">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="일정 내용">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="참가 인원">
        <addMemberV2 @savePart="savePart" :parentData="form.member" />
        <showMemberV2 :parentData="form.member" />
      </el-form-item>
      <el-form-item label="기간"
        >{{ this.Date[0] }} ~ {{ this.Date[1] }}</el-form-item
      >
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="handleClose">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import addMemberV2 from "../project/addMemberV2.vue";
import showMemberV2 from "../project/showMemberV2.vue";
export default {
  name: "arrangeEvent",
  components: {
    addMemberV2,
    showMemberV2,
  },
  data() {
    return {
      form: {
        title: "",
        member: [],
        desc: "",
      },
      display: false,
    };
  },
  props: {
    Date: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    savePart(data) {
      this.form.member = data;
    },
    onSubmit() {
      const newForm = { ...this.form, start: this.Date[0], end: this.Date[1] };
      this.$emit("saveEvent", newForm);
      this.handleClose();
    },
    handleClose() {
      this.display = false;
    },
  },
  watch: {
    //Date에 변화가 생기면 display를 true로 바꿔준다.
    Date() {
      this.display = true;
    },
  },
};
</script>
<style lang=""></style>
