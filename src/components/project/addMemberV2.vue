<template lang="">
  <el-button type="primary" @click="shown = true" class="buttons"
    >추가</el-button
  >
  <el-dialog v-model="shown" :show-close="false">
    <template #header="{ titleId, titleClass }">
      <div class="dialogHeader">
        <h2 :id="titleId" :class="titleClass">참여인원</h2>
      </div>
    </template>
    <div class="transfer">
      <el-transfer
        v-model="member"
        :data="MemberTable"
        :titles="['직원', '참가인원']"
        filter-placeholder="직원 검색"
        filterable
      >
      </el-transfer>
    </div>
    <div class="buttons">
      <el-button type="primary" @click="Confirm">확인</el-button>
      <el-button type="warning" @click="notSave">취소</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { MemberList } from "@/composables/memberList";
export default {
  name: "addMember",
  emits: ["savePart"],
  methods: {
    Confirm() {
      this.member = this.member.map((item) => {
        const original = this.MemberList.List[item];
        return {
          name: original.name,
          job: original.job,
          rank: original.rank,
        };
      });
      this.$emit("savePart", this.member);
      this.shown = false;
    },
    notSave() {
      this.member = this.parentData;
      this.shown = false;
    },
  },
  data() {
    return {
      shown: false,
      MemberList,
      member: [],
    };
  },
  props: {
    parentData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    MemberTable() {
      return this.MemberList.List.map((item, index) => {
        return {
          key: index,
          label: `${item.name}(${item.job})`,
        };
      });
    },
  },
  watch: {
    parentData: {
      handler: function (val) {
        this.member = val;
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-bottom: 1rem;
}
.transfer {
  display: flex;
  justify-content: center;
}
.dialogHeader {
  background-color: #409eff;
  height: 2.5rem;
}
.dialogHeader h2 {
  font-size: 1.25rem;
  padding: 0.5rem;
  color: white;
  text-align: center;
}
</style>
