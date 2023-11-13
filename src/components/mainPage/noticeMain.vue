<template lang="">
  <div>
    <noticeBoard
      @transition="transitionEvent"
      @writeEmit="writeEmitEvent"
      v-if="currentView === 'noticeBoard'"
    />
    <noticeView
      :item="this.item"
      @return="returnEvent"
      v-if="currentView === 'noticeView'"
    />
    <writeNotice v-if="currentView === 'writeNotice'" @saveEmit="returnEvent" />
  </div>
</template>
<script>
import noticeBoard from "./noticeBoard.vue";
import noticeView from "./noticeView.vue";
import writeNotice from "../admin/writeNotice.vue";
export default {
  name: "noticeMain",
  components: {
    noticeBoard,
    noticeView,
    writeNotice,
  },
  methods: {
    transitionEvent(item) {
      this.item = item;
      this.currentView = "noticeView";
    },
    returnEvent() {
      this.item = {};
      this.currentView = "noticeBoard";
    },
    writeEmitEvent() {
      this.currentView = "writeNotice";
    },
  },
  data() {
    return {
      item: {},
      currentView: "noticeBoard",
    };
  },
};
</script>
<style lang=""></style>
