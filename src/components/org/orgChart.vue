<template lang="">
  <el-row class="card-box">
    <el-col :span="4">
      <el-card shadow="never" class="card-box-1">
        <orgTree @node-click="setMember" />
      </el-card>
    </el-col>
    <el-col :span="20" class="card-box-1">
      <el-card v-if="memberCheck" shadow="never">
        <memberPage :memberName="member" />
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import orgTree from "./orgTree.vue";
import memberPage from "../member/memberPage.vue";
// import { MemberList } from "@/composables/memberList";
export default {
  name: "orgChart",
  components: {
    orgTree,
    memberPage,
  },
  methods: {
    setMember(item) {
      console.log(item);
      if (!item.name || !item.rank) return;
      this.member = item;
      this.memberCheck = true;
      console.log(this.member);
    },
  },
  data() {
    return {
      member: [],
      memberCheck: false,
    };
  },
};
</script>
<style scoped>
.card-box {
  display: flex;
  height: 100%;
}
.card-box-1 {
  height: 100%;
}
</style>
