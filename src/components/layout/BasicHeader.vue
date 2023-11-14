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
      <!-- <el-dropdown trigger="click" @command="handleCommand">
        <el-badge :value="Notification.length" :hidden="checkZero">
          <el-button type="primary" :icon="Bell" />
        </el-badge>
        <template #dropdown>
          <el-dropdown-menu v-if="Notification.length > 0">
            <el-dropdown-item
              v-for="item in Notification"
              :key="item.idx"
              :value="item.title"
              :label="item.title"
              :command="{ type: item.type, title: item.title, idx: item.idx }"
              divided
            >
              {{ item.type }} 알람: {{ item.from }}님이 {{ item.type }}에
              {{ item.to }}님을 인용하여 새로운 {{ item.type }}
              {{ item.title }} 을 작성하였습니다.
            </el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu v-else>
            <el-dropdown-item disabled>
              <span>새로운 알람이 없습니다.</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown> -->
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
import { Bell } from "@element-plus/icons";
import { MemberList } from "@/composables/memberList";
import { NotificationList } from "@/composables/notificationList";
import notificationAlarm from "./notificationAlarm.vue";
export default {
  name: "BasicHeader",
  data() {
    return {
      currentMember: MemberList.currentMember,
      Bell,
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
    Notification() {
      return NotificationList.callListByName(this.currentMember);
    },
    checkZero() {
      return this.Notification.length === 0;
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
  },
  watch: {
    currentMember() {
      MemberList.setCurrentMember(this.currentMember);
    },
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
