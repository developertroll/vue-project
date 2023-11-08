<template lang="">
  <el-form :label-position="left" v-model="form">
    <el-form-item label="제목">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="내용">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import moment from "moment";
export default {
  name: "writeNotice",
  data() {
    return {
      form: {
        title: "",
        content: "",
        update: moment().format("YYYY-MM-DD"),
        view: 0,
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style lang=""></style>
