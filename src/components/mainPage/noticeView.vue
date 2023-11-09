<template lang="">
  <el-descriptions :column="1" border table-layout="auto">
    <el-descriptions-item label="제목" width="100px">{{
      item.title
    }}</el-descriptions-item>
    <el-descriptions-item label="작성일">{{
      item.update
    }}</el-descriptions-item>
    <el-descriptions-item label="조회수">{{ item.views }}</el-descriptions-item>
  </el-descriptions>
  <div class="content" v-html="item.content"></div>
  <div class="button">
    <el-button type="primary" @click="menu">목록</el-button>
  </div>
</template>
<script>
export default {
  name: "noticeView",
  emits: ["return"],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    menu() {
      this.$emit("return");
    },
  },
};
</script>
<style scoped>
.button {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.content {
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: bold;
}
</style>
