<template>
  <el-form :model="messageData" label-width="120px" :label-position="'left'">
    <el-form-item label="받는 사람" prop="to">
      <addMemberV2
        :parentData="messageData.to"
        @savePart="savePart"
        v-if="checkReply"
      />
      <el-input v-model="messageData.to" disabled :formatter="formatTo" />
    </el-form-item>
    <el-alert type="info" show-icon :closable="false">
      <div>자기 자신에게 보내는 메일은 자동으로 제외됩니다.</div>
    </el-alert>
    <el-form-item label="제목" prop="title">
      <el-input v-model="messageData.title" />
    </el-form-item>
    <el-form-item label="내용">
      <el-input type="textarea" v-model="messageData.content" autosize />
    </el-form-item>
    <el-form-item>
      <div class="center">
        <el-button type="primary" @click="onSubmit">보내기</el-button>
        <el-button type="warning" @click="$emit('cancel')">취소</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import addMemberV2 from "../project/addMemberV2.vue";
import { MemberList } from "@/composables/memberList";

export default {
  name: "messageCU",
  components: {
    addMemberV2,
  },
  emits: ["saveMessage"],
  props: {
    replyData: {
      type: Object,
      default: () => ({
        from: "",
        content: "",
        to: [],
        title: "",
      }),
    },
  },
  data() {
    return {
      messageData: {
        from: MemberList.currentMember,
        to: [],
        content: "",
        title: "",
      },
    };
  },
  computed: {
    arrangeTo() {
      return this.messageData.to.join(", ");
    },
    currentTo() {
      if (this.replyData.to === undefined && this.messageData.to === "") {
        return [];
      } else if (this.replyData.to === undefined) {
        return this.messageData.to;
      } else {
        return this.replyData.to;
      }
    },
    checkReply() {
      return Object.keys(this.replyData).length === 0;
    },
  },
  methods: {
    savePart(data) {
      this.messageData.to = data;
    },
    onSubmit() {
      this.messageData.to = this.messageData.to.filter(
        (item) => item.name !== MemberList.currentMember
      );
      this.messageData.content = this.preserveWhitespace(
        this.messageData.content
      );
      this.$emit("saveMessage", this.messageData);
    },
    formatTo() {
      if (!Array.isArray(this.messageData.to)) return "";
      return this.messageData.to.map((member) => member.name).join(", ");
    },
    preserveWhitespace(text) {
      return text.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
    },
    unpreserveWhitespace(text) {
      return text.replace(/<br>/g, "\n").replace(/&nbsp;/g, " ");
    },
  },
  watch: {
    replyData: {
      immediate: true,
      handler: function (val) {
        if (Object.keys(val).length === 0) {
          return; // Exit the handler if replyData is empty
        }
        this.messageData.to.push(MemberList.findMemberByName(val.from));
        this.messageData.title = `RE: ${val.title}`;
        this.messageData.content = `\n\n ------------------ \n\n받는사람:${
          val.to.name
        }(${val.to.rank})\n보낸사람:${
          val.from
        }\n내용:${this.unpreserveWhitespace(val.content)}`;
      },
      deep: true,
    },
  },
};
</script>

<style lang=""></style>
