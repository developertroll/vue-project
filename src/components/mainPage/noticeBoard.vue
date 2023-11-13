<template lang="">
  <el-table :data="noticeList" table-layout="auto" border>
    <el-table-column label="번호" prop="index" v-if="main" />
    <el-table-column label="제목">
      <template #default="scope">
        <el-button type="primary" @click="noticeView(scope.row)" link>
          {{ scope.row.title }}
        </el-button>
      </template>
    </el-table-column>
    <el-table-column label="작성일" prop="update" />
    <el-table-column label="조회수" prop="views" />
  </el-table>
  <div class="page" v-if="main">
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      background
      @current-change="showPage"
    />
  </div>
  <el-button type="primary" @click="writeEmit" v-if="admin">글쓰기</el-button>
</template>
<script>
import { noticeBoard } from "@/composables/noticeBoard";
export default {
  name: "noticeBoard",
  emits: ["transition", "writeEmit"],

  data() {
    return {
      admin: true,
      currentPage: 1,
    };
  },
  props: {
    main: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    saveNotice(item) {
      noticeBoard.saveNotice(item);
    },
    noticeView(item) {
      console.log(item);
      noticeBoard.updateView(item);
      this.$emit("transition", item);
    },
    showPage(number = 1) {
      this.currentPage = number;
    },
    writeEmit() {
      this.$emit("writeEmit");
    },
  },
  computed: {
    noticeList() {
      return noticeBoard.showPage(this.currentPage);
    },
    total() {
      return noticeBoard.boardList.length;
    },
  },
};
</script>
<style scoped>
.page {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
