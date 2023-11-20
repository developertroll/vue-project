<template lang="">
  <div class="button">
    <el-button type="primary" @click="create">작성</el-button>
    <el-button type="warning" @click="deleteMessage">삭제</el-button>
  </div>
  <el-table :data="messageList" border @selection-change="handleSelect">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="from" label="보낸 사람" width="150" />
    <el-table-column prop="title" label="제목">
      <template #default="scope">
        <el-link type="primary" @click="toggleCheck(scope.row)">
          {{ scope.row.title }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="time" label="시간" width="200" />
  </el-table>
</template>
<script>
import { MemberList } from "@/composables/memberList";
import { messageList } from "@/composables/messageList";
export default {
  name: "personalMessage",
  emits: ["toggleCheck", "create"],
  data() {
    return {
      selectedRow: [],
      currentMember: MemberList.currentMember,
    };
  },
  computed: {
    messageList() {
      return messageList.callListByName(this.currentMember);
    },
  },
  methods: {
    handleSelect(item) {
      this.selectedRow = item;
    },
    toggleCheck(item) {
      this.$emit("toggleCheck", item);
    },
    create() {
      this.$emit("create");
    },
    deleteMessage() {
      if (this.selectedRow.length === 0) {
        this.$message({
          message: "삭제할 메시지를 선택해주세요.",
          type: "warning",
        });
        return;
      } else {
        this.$confirm("정말 삭제하시겠습니까?", "삭제 확인", {
          confirmButtonText: "삭제",
          cancelButtonText: "취소",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "삭제되었습니다.",
            });
            this.selectedRow.forEach((item) => {
              messageList.deleteListByIdx(item.idx);
            });
            this.selectedRow = [];
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "취소되었습니다.",
            });
          });
      }
    },
  },
};
</script>
<style scoped>
.button {
  text-align: right;
  margin-bottom: 10px;
}
</style>
