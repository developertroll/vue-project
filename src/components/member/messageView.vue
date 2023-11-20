<template lang="">
  <el-row class="contanier">
    <el-col :span="4" class="label">보낸 사람</el-col>
    <el-col :span="8" class="content">{{ message.from }}</el-col>
    <el-col :span="4" class="label">보낸 시간</el-col>
    <el-col :span="8" class="content">{{ message.time }}</el-col>
  </el-row>
  <el-row class="contanier">
    <el-col :span="4" class="label">제목</el-col>
    <el-col :span="20" class="content">{{ message.title }}</el-col>
  </el-row>
  <el-row class="contanier">
    <el-col :span="4" class="label">내용</el-col>
    <el-col :span="20" class="content"
      ><div v-html="message.content"></div
    ></el-col>
  </el-row>
  <div class="buttons">
    <el-button type="primary" @click="replyMessage">답장</el-button>
    <el-button type="warning" @click="deleteMessage">삭제</el-button>
    <el-button @click="back">목록</el-button>
  </div>
</template>
<script>
export default {
  name: "messageView",
  emits: ["replyMessage", "deleteMessage", "back"],
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  methods: {
    replyMessage() {
      this.$emit("replyMessage");
    },
    deleteMessage() {
      this.$emit("deleteMessage", this.message);
    },
    back() {
      this.$emit("back");
    },
  },
};
</script>
<style>
.contanier {
  margin: 12px 0;
  border: 1px solid #ccc;
}
.label {
  border: 1px solid #ccc;
  font-weight: bold;
  text-align: center;
  height: 25px;
  line-height: 25px;
}
.content {
  border: 1px solid #ccc;
  padding-left: 10px;
}
</style>
