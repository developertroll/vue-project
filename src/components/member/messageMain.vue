<template lang="">
  <div v-if="view">
    <personalMessage @toggleCheck="messageChange" @create="show" />
  </div>
  <div v-else>
    <messageView
      :message="message"
      v-if="message.title !== ''"
      @replyMessage="replyMessage"
      @deleteMessage="deleteMessage"
      @back="back"
    />
    <messageCU
      :replyData="replyMessageData"
      @saveMessage="saveMessage"
      @cancel="cancel"
      v-else
    />
  </div>
</template>
<script>
import { messageList } from "@/composables/messageList";
import personalMessage from "./personalMessage.vue";
import messageView from "./messageView.vue";
import messageCU from "./messageCU.vue";
export default {
  name: "messageMain",
  components: {
    messageView,
    messageCU,
    personalMessage,
  },
  data() {
    return {
      view: true,
      message: {
        from: "",
        to: "",
        content: "",
        title: "",
      },
      replyMessageData: {},
    };
  },
  methods: {
    show() {
      this.view = !this.view;
    },
    saveMessage(data) {
      messageList.saveList(data, data.to, data.from);
      this.view = !this.view;
    },
    messageChange(item) {
      console.log(item);
      this.message = item;
      this.view = !this.view;
    },
    replyMessage() {
      console.log("replyMessage 실행됨");
      this.replyMessageData = this.message;
      this.message = {
        from: "",
        to: "",
        content: "",
        title: "",
      };
    },
    deleteMessage(item) {
      messageList.deleteListByIdx(item.index);
    },
    back() {
      this.message = {
        from: "",
        to: "",
        content: "",
        title: "",
      };
      this.view = !this.view;
    },
    cancel() {
      this.replyMessageData = {};
      this.view = !this.view;
    },
  },
};
</script>
<style lang=""></style>
