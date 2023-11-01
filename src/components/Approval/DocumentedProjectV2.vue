<template lang="">
  <el-button type="primary" plain @click="openDialog"
    >{{ form.title }}
  </el-button>
  <el-dialog v-model="test" append-to-body>
    <template #header="{ titleId, titleClass }">
      <div class="dialogHeader">
        <h2 :id="titleId" :class="titleClass">
          {{ form.title }}
        </h2>
      </div>
    </template>
    <!-- 프로젝트가 가진 내용물 -->
    <el-card
      border
      v-for="(value, key, index) in form"
      :key="index"
      class="card"
    >
      <template #header>
        <div class="card-header">
          {{ translateKey[key] }}
        </div>
      </template>
      <template v-if="Array.isArray(value) && key !== 'date1'">
        <showMemberV2 :parentData="value" v-if="key === 'Partipacants'" />
        <ShowAllocate :project="form" v-else />
      </template>
      <template v-else-if="key === 'date1'">
        <el-date-picker
          v-model="form.date1"
          type="daterange"
          range-separator="~"
          start-placeholder="Start date"
          end-placeholder="End date"
          readonly
        />
      </template>
      <template v-else>
        {{ value }}
      </template>
    </el-card>
  </el-dialog>
</template>
<script>
import { ApprovalList } from "@/composables/approvalList";
import showMemberV2 from "./../project/showMemberV2.vue";
import ShowAllocate from "./../project/common/ShowAllocate.vue";
export default {
  name: "DocumentedProject",
  components: {
    showMemberV2,
    ShowAllocate,
  },
  data() {
    return {
      test: false,
      Hello: "Hello",
      ApprovalList,
      data: {
        title: "",
        date1: [],
        works: [],
        desc: "",
        Partipacants: [],
        update: "",
      },
      translateKey: {
        title: "제목",
        date1: "진행 날짜",
        works: "업무",
        desc: "내용",
        Partipacants: "참가 인원",
        update: "날짜 업데이트",
        type: "결재 종류",
        status: "결재 상태",
      },
    };
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    openDialog() {
      this.test = true;
    },
  },
  computed: {
    form() {
      const newList = ApprovalList.findList(this.project);
      return newList;
    },
  },
};
</script>
<style scoped>
.dialogHeader {
  background-color: #409eff;
}
.dialogHeader h2 {
  font-size: 1.25rem;
  padding: 0.5rem;
  color: white;
  text-align: center;
}
.card {
  margin: 1rem;
}
</style>
