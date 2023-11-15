<template lang="">
  <el-decsriptions :col="1">
    <el-descriptions-item label="보낸 사람">
      {{ message.from }}
    </el-descriptions-item>
    <el-descriptions-item label="내용">
      {{ message.content }}
    </el-descriptions-item>
  </el-decsriptions>
  <div class="buttons">
    <el-button type="primary" @click="replyMessage">답장</el-button>
    <el-button type="warning" @click="deleteMessage">삭제</el-button>
    <el-button @click="back">목록</el-button>
  </div>
</template>
<script>
export default {
  name: "messageView",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
