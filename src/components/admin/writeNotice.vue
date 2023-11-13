<template lang="">
  <el-form label-position="left" v-model="form">
    <el-form-item label="제목">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="내용">
      <el-input
        type="textarea"
        v-model="form.content"
        :autosize="{ minRows: 6 }"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import moment from "moment";
import { noticeBoard } from "@/composables/noticeBoard";
export default {
  name: "writeNotice",
  emits: ["saveEmit"],
  data() {
    return {
      form: {
        title: "",
        content: "",
        update: moment().format("YYYY-MM-DD"),
        views: 0,
      },
    };
  },
  methods: {
    onSubmit() {
      this.form.content = this.preserveWhitespace(this.form.content);
      noticeBoard.saveList(this.form);
      this.$emit("saveEmit");
    },
    preserveWhitespace(text) {
      return text.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
    },
  },
};
</script>
<style lang=""></style>
