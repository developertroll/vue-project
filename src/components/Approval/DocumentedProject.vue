<template lang="">
  <el-dialog v-model="open" width="80%" height="90%">
    <template #header="{ titleId, titleClass }">
      <div class="dialogHeader">
        <h2 :id="titleId" :class="titleClass">
          <!-- 프로젝트가 가진 제목 -->111
        </h2>
      </div></template
    >
    <!-- 프로젝트가 가진 내용물 -->
    <el-form :model="form" label-width="120px">
      <el-form-item label="제목">
        <el-input v-model="form.title" readonly :value="Hello" />
      </el-form-item>
      <el-form-item label="진행 날짜">
        <el-input v-model="form.date1" readonly :value="Hello" />
        <!-- <el-date-picker
          v-model="form.date1"
          type="daterange"
          range-separator="~"
          start-placeholder="Start date"
          end-placeholder="End date"
        /> -->
      </el-form-item>

      <el-form-item label="내용">
        <el-input v-model="form.desc" type="textarea" readonly :value="Hello" />
      </el-form-item>
      <!-- <el-form-item label="참가 인원">
        <addMember @savePart="savePart" />
        <showMember :parentData="form.Partipacants" />
      </el-form-item> -->
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: "DocumentedProject",
  data() {
    return {
      form: {
        title: "",
        date1: "",
        type: "",
        desc: "",
        Partipacants: [],
      },
      Hello: "Hello",
    };
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    open() {
      if (this.project === null) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped>
.dialogHeader {
  background-color: #409eff;
  height: 2rem;
}
</style>
