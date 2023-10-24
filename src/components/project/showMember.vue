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
    <el-table-column prop="name" label="Name" width="180" />
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
          name: "Tom",
        },
        {
          name: "Mary",
        },
        {
          name: "John",
        },
        {
          name: "Jenny",
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
<style scoped></style>
