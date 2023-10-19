<template lang="">
  <div class="buttons" v-if="addMember">
    <el-button type="primary" @click="savePart">저장</el-button>
    <el-button type="warning">취소</el-button>
  </div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    @selection-change="handleSelect"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
<script>
export default {
  name: "projectPlan",
  props: {
    addMember: {
      type: Boolean,
      default: false,
    },
    parentData: {
      type: Object,
      default: () => {
        return {
          Partipacants: [],
        };
      },
    },
  },
  data() {
    return {
      currentProject: null,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      selectedRow: [],
    };
  },
  methods: {
    handleSelect(selection) {
      this.selectedRow = selection;
    },
    savePart() {
      //   console.log("savePart!", this.selectedRow);
      this.$emit("savePart", this.selectedRow);
    },
  },
  watch: {
    parentData(newVaule) {
      this.tableData = newVaule;
    },
  },
};
</script>
<style lang=""></style>
