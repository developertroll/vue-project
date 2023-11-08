<template lang="">
  <el-dialog v-model="display" destroy-on-close>
    <template #header>
      <span>일정 만들기</span>
    </template>
    <el-form :model="form">
      <el-form-item label="일정 제목">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="일정 내용">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="참가 인원">
        <addMemberV2 @savePart="savePart" :parentData="form.member" />
        <showMemberV2 :parentData="form.member" />
      </el-form-item>
      <el-form-item label="요일">
        <el-checkbox-group v-model="form.daysOfWeek">
          <el-checkbox-button
            v-for="button in day"
            :key="button"
            :label="button"
          >
            {{ button }}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="반복 기한">
        <el-switch
          v-model="form.endRecur"
          active-text="기한 설정"
          inactive-text="무제한"
        />
        <el-date-picker
          v-if="form.endRecur"
          v-model="form.endDate"
          type="date"
          placeholder="반복일정이 끝날 날짜를 선택하세요."
          style="width: 100%"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="handleClose">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import addMemberV2 from "../project/addMemberV2.vue";
import showMemberV2 from "../project/showMemberV2.vue";
import moment from "moment";
export default {
  name: "arrangeEvent",
  components: {
    addMemberV2,
    showMemberV2,
  },
  data() {
    return {
      form: {
        title: "",
        member: [],
        desc: "",
        daysOfWeek: [],
        endRecur: false,
        endDate: "",
      },
      day: ["일", "월", "화", "수", "목", "금", "토"],
      display: false,
    };
  },
  props: {
    clicked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    savePart(data) {
      this.form.member = data;
    },
    onSubmit() {
      //this.form.day를 일->0, 토->6 식으로 변환한다.
      const newDay = this.form.daysOfWeek.map((day) => {
        return this.day.indexOf(day);
      });
      //변환한 값을 this.form.day로 대체한다.
      this.form.daysOfWeek = newDay;
      if (this.form.endRecur) {
        this.form.endRecur = moment(this.form.endDate).format("YYYY-MM-DD");
        delete this.form.endDate;
      } else {
        delete this.form.endRecur;
      }
      const newForm = {
        ...this.form,
        groupId: this.form.title,
        startRecur: moment().format("YYYY-MM-DD"),
      };
      console.log(newForm, "emit할값");
      this.$emit("saveEvent", newForm);
      this.handleClose();
    },
    handleClose() {
      (this.form = {
        title: "",
        member: [],
        desc: "",
        day: [],
        endRecur: false,
        endDate: "",
      }),
        (this.display = false);
    },
  },
  watch: {
    //Date에 변화가 생기면 display를 true로 바꿔준다.
    clicked() {
      this.display = true;
    },
  },
};
</script>
<style lang=""></style>
