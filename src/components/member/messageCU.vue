<template lang="">
  <el-form :model="messageData">
    <!-- addMemberV2를 이용해서 tree구조로 받아온 member들에게 input 창에 정리해서 뿌릴것임. -->
    <!-- 내용은 texarea로, 발송하면 currentMember가 from, addMemberV2가 받은게 to가 되어 발송 날짜가 time이 되어 저장됨 -->
    <el-form-item label="받는 사람" prop="to">
      <addMemberV2 :parentData="replyData.to" @savePart="savePart" />
      <el-input v-model="arrangedTo" disabled />
    </el-form-item>
    <el-form-item label="내용">
      <el-input type="textarea" v-model="messageData.content" autosize />
    </el-form-item>
    <el-form-item>
      <div class="center">
        <el-button type="primary" @click="onSubmit">보내기</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
import addMemberV2 from "../project/addMemberV2.vue";
export default {
  name: "messageCU",
  components: {
    addMemberV2,
  },
  props: {
    replyData: {
      type: Object,
      default: () => {
        return {
          from: "",
          content: "",
        };
      },
    },
  },
  data() {
    return {
      messageData: {
        from: "",
        to: "",
        content: "",
      },
    };
  },
  computed: {
    arrangeTo() {
      return this.messageData.to.join(", ");
    },
  },
  watch: {
    replyData: {
      handler() {
        this.messageData.from = this.replyData.to;
        this.messageData.to = this.replyData.from;
        // this.messageData.content에 this.replyData.content의 내용을 ===== 밑으로 넣어서 추가함
        this.messageData.content = `\n\n` + this.replyData.content;
      },
      deep: true,
    },
  },
  methods: {
    savePart(data) {
      this.messageData.to = data;
    },
    onSubmit() {
      this.$emit("saveMessage", this.messageData);
    },
  },
};
</script>
<style lang=""></style>
