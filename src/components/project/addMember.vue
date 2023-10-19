<template lang="">
  <el-button type="primary" @click="shown = true">추가</el-button>
  <el-dialog v-model="shown" width="40%">
    <showMember @savePart="savePart" :addMember="true" />
  </el-dialog>
</template>
<script>
import showMember from "./showMember.vue";
export default {
  name: "addMember",
  components: {
    showMember,
  },
  emits: ["savePart"],
  methods: {
    savePart(item) {
      this.$emit("savePart", item);
      this.shown = false;
    },
  },
  data() {
    return {
      shown: false,
    };
  },
};
</script>
<style lang=""></style>
