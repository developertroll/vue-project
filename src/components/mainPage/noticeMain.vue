<template lang="">
  <noticeBoard
    @transition="transitionEvent"
    v-if="currentView === 'noticeBoard'"
  />
  <noticeView :item="this.item" @return="returnEvent" v-else />
</template>
<script>
import noticeBoard from "./noticeBoard.vue";
import noticeView from "./noticeView.vue";
export default {
  name: "noticeMain",
  components: {
    noticeBoard,
    noticeView,
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
