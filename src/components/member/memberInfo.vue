<template lang="">
  <el-descriptions :title="memberName.name" :column="2" border>
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
      const result = this.memberName;
      return {
        name: result.name,
        rank: result.rank,
        job: result.job,
        phone: result.phone,
        email: result.email,
      };
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
