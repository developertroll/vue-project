<template lang="">
  <el-dialog v-model="display" v-if="eventData">
    <template #header>
      <span>{{ form.title }}</span>
      <span v-if="this.eventData.start === undefined"> 반복 일정 </span>
    </template>
    <el-descriptions :column="1" border>
      <el-descriptions-item
        label="일정 제목"
        width="100px"
        label-align="center"
        >{{ form.title }}</el-descriptions-item
      >
      <el-descriptions-item label="일정 내용" label-align="center">{{
        form.desc
      }}</el-descriptions-item>
      <el-descriptions-item label="참가 인원" label-align="center">
        <showMemberV2 :parentData="form.member" />
      </el-descriptions-item>
      <el-descriptions-item
        label="기간"
        label-align="center"
        v-if="this.eventData.start !== undefined"
      >
        {{ this.eventData.start }} ~ {{ this.eventData.end }}
      </el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>
<script>
import showMemberV2 from "../project/showMemberV2.vue";
export default {
  name: "arrangeEvent",
  components: {
    showMemberV2,
  },
  data() {
    return {
      forms: {
        title: "",
        member: [],
        desc: "",
      },
      display: false,
    };
  },
  props: {
    eventData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    handleClose() {
      this.display = false;
    },
  },
  watch: {
    //Date에 변화가 생기면 display를 true로 바꿔준다.
    eventData() {
      if (Object.keys(this.eventData).length !== 0) this.display = true;
    },
  },
  computed: {
    form() {
      if (Object.keys(this.eventData).length !== 0) return this.eventData;
      else return this.forms;
    },
  },
};
</script>
<style lang=""></style>
