<template lang="">
  <el-descriptions :column="1" border>
    <el-descriptions-item
      v-for="(value, key) in memberInfo"
      :key="key"
      :label="translateKey[key]"
      label-align="left"
    >
      {{ value }}
    </el-descriptions-item>
  </el-descriptions>
</template>
<script>
import { MemberList } from "@/composables/memberList";
export default {
  name: "memberInfo",
  props: {
    memberName: {
      type: Object,
      required: true,
    },
  },
  computed: {
    memberInfo() {
      return this.memberName;
    },
  },
  data() {
    return {
      translateKey: MemberList.memberKeyTranslate,
    };
  },
};
</script>
<style scoped></style>
