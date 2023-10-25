<template>
  <el-form
    :model="form"
    label-width="120px"
    :label-position="'left'"
    status-icon
    :rules="rules"
  >
    <el-form-item label="제목" prop="title">
      <el-input v-model="form.title" :disabled="PassWork" />
    </el-form-item>
    <el-divider />
    <el-form-item label="진행 날짜" prop="date1">
      <el-date-picker
        v-model="form.date1"
        type="daterange"
        range-separator="~"
        start-placeholder="Start date"
        end-placeholder="End date"
        value-format="YYYY-MM-DD"
        format="YYYY/MM/DD"
        :clearable="!PassWork"
        :disabled="PassWork"
      />
    </el-form-item>
    <el-divider />
    <el-form-item label="내용" prop="desc">
      <el-input v-model="form.desc" type="textarea" :disabled="PassWork" />
    </el-form-item>
    <el-divider />
    <el-form-item label="참가 인원" prop="Partipacants">
      <addMemberV2
        @savePart="savePart"
        :parentData="form.Partipacants"
        v-if="!PassWork"
      />
      <showMemberV2 :parentData="form.Partipacants" />
    </el-form-item>
    <el-alert type="warning" show-icon :closable="false" v-if="!PassWork">
      <div>
        업무 할당을 시작하기 위해선 모든 정보를 입력해야 하고, 해당 정보를 다시
        입력하기 위해선 업무 할당을 초기화해야 합니다
      </div>
    </el-alert>
    <div class="center">
      <el-form-item v-if="!PassWork">
        <el-button type="primary" @click="openWork">업무 할당하기</el-button>
      </el-form-item>
    </div>
    <div v-if="PassWork">
      <el-alert type="warning" show-icon :closable="false" v-if="!AllDataSaved">
        <h4>
          최소 프로젝트 참가 인원 전원이 1개 이상의 업무가 할당되어야 합니다.
          수정 후 저장 버튼을 누르면 계획안을 제출 할 수 있습니다.
        </h4>
      </el-alert>
      <el-form-item label="업무 할당">
        <AllocateWorkV2
          :Parti="form.Partipacants"
          @saveWorks="saveWork"
          :parentDate="form.date1"
          @commitEdit="changeCommit"
        />
      </el-form-item>
      <el-divider />

      <el-form-item>
        <div class="center">
          <el-button type="primary" @click="onSubmit" :disabled="!AllDataSaved"
            >완성</el-button
          >
          <el-button type="warning" @click="cancelAllocate"
            >할당 취소</el-button
          >
        </div>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import addMemberV2 from "./addMemberV2.vue";
import showMemberV2 from "./showMemberV2.vue";
import AllocateWorkV2 from "./common/AllocateWorkV2.vue";
import { projectPlanList } from "@/composables/projectPlanList";
import { ElMessageBox } from "element-plus";
export default {
  name: "createPlan",
  components: {
    addMemberV2,
    showMemberV2,
    AllocateWorkV2,
  },
  data() {
    return {
      form: {
        title: "",
        date1: [],
        works: [],
        desc: "",
        Partipacants: [],
      },
      rules: {
        title: [
          {
            required: true,
            message: "프로젝트 제목을 작성해주세요",
            trigger: "blur",
          },
        ],
        date1: [
          {
            required: true,
            message: "프로젝트 기간을 입력해주세요",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "설명을 입력해주세요",
            trigger: "blur",
          },
        ],
        // Partipacants: [
        //   {
        //     type: "array",
        //     required: true,
        //     message: "참가 인원을 입력해주세요",
        //     trigger: "change",
        //   },
        // ],
      },
      projectPlanList,
      PassWork: false,
      Committed: false,
    };
  },
  computed: {
    AllDataSaved() {
      return (
        this.form.works.length >= this.form.Partipacants.length &&
        this.Committed
      );
    },
  },
  methods: {
    onSubmit() {
      this.$message({
        type: "success",
        message: "프로젝트 계획이 작성되었습니다",
      });
      console.log("submit!");
      console.log(this.form);
      this.projectPlanList.saveList(this.form);
      console.log(this.projectPlanList.List);
    },
    savePart(item) {
      this.form.Partipacants = item;
      // console.log("savePart!", item, this.form.Partipacants);
    },
    saveWork(item) {
      this.form.works = item;
      console.log("saveWork!", item, this.form.works);
    },
    openWork() {
      if (
        this.form.title != "" &&
        this.form.date1 != [] &&
        this.form.Partipacants != []
      ) {
        this.$message({
          type: "info",
          message: "업무 할당을 시작합니다",
        });
        this.PassWork = true;
      } else {
        this.$message({
          type: "warning",
          message: "프로젝트 정보가 모두 작성되여야 합니다",
        });
      }
    },
    cancelAllocate() {
      ElMessageBox.confirm(
        "업무 할당을 취소하고 기본 정보 작성으로 돌아갑니다. 계속하시겠습니까?",
        "경고",
        { confirmButtonText: "확인", cancelButtonText: "취소", type: "warning" }
      )
        .then(() => {
          this.PassWork = false;
          this.form.works = [];
          this.$message({
            type: "info",
            message: "업무 할당이 취소되었습니다",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "업무 할당을 계속합니다",
          });
        });
    },
    changeCommit(item) {
      this.Committed = item;
    },
  },
};
</script>
<style scoped>
.buttons {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
