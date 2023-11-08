<template lang="">
  <div></div>
  <writeNotice v-if="admin" @submit="saveNotice" />
</template>
<script>
import writeNotice from "@/components/admin/writeNotice.vue";
import { noticeBoard } from "@/composables/noticeBoard";
export default {
  name: "noticeBoard",
  components: {
    writeNotice,
  },
  data() {
    return {
      admin: false,
    };
  },
  methods: {
    saveNotice(item) {
      noticeBoard.saveNotice(item);
    },
  },
};
</script>
<style lang=""></style>
