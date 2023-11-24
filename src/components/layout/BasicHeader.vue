<template lang="">
  <div class="header-contanier">
    <div>
      <el-link @click="mainPage" style="font: #ecf5ff" :underline="false"
        >프로젝트 관리 프로그램</el-link
      >
    </div>
    <div>
      <span>{{ currentMember }}님, 반갑습니다!</span>
      <el-button type="primary">로그아웃</el-button>
      <notificationAlarm
        :Notification="Notification"
        @handleCommand="handleCommand"
      />
      <!-- 아래 내용은 현재 로그인한 사람을 바꾸는 기능, 로그인 기능이 존재하면 지워질 개발자 옵션임 -->
      <el-select v-model="currentMember" placeholder="회원 선택">
        <el-option
          v-for="item in currentMemberList"
          :key="item.label"
          :value="item.value"
      /></el-select>
    </div>
  </div>
</template>
<script>
import { MemberList } from "@/composables/memberList";
import { NotificationList } from "@/composables/notificationList";
import notificationAlarm from "./notificationAlarm.vue";
export default {
  name: "BasicHeader",
  data() {
    return {
      currentMember: MemberList.currentMember,

      Notification: [],
    };
  },
  components: {
    notificationAlarm,
  },
  computed: {
    currentMemberList() {
      return MemberList.List.map((member) => {
        return {
          label: member.name,
          value: member.name,
        };
      });
    },
  },
  methods: {
    mainPage() {
      this.$emit("mainPage");
    },
    handleCommand(command) {
      NotificationList.deleteListByIdx(command.idx);
      console.log(command);
      this.$emit("handleCommand", command);
    },
    updateNotification() {
      const List = NotificationList.callListByName(this.currentMember);
      console.log(List);
      const result = [];
      List.forEach((item) => {
        const content = NotificationList.callContentByType(item);
        const type = NotificationList.callIconByType(item.type);
        result.push({
          ...item,
          type: type,
          content,
        });
      });
      this.Notification = result;
    },
  },
  watch: {
    currentMember(newValue) {
      MemberList.setCurrentMember(newValue);
      this.updateNotification();
    },
  },
  mounted() {
    this.updateNotification();
  },
};
</script>
<style scoped>
h1 {
  font-size: 16px;
}
.header-contanier {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
}
.el-link {
  font-size: 20px;
  font-weight: bold;
  font: #ecf5ff;
}
</style>
