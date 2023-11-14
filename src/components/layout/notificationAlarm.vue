<template lang="">
  <el-dropdown trigger="click" @command="handleCommand">
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
          <h2>{{ item.type }} 알람</h2>
          <el-divider />
          <span class="explain">
            {{ item.from }}님이 {{ item.title }}을 작성하였습니다.
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
      <el-dropdown-menu v-else>
        <el-dropdown-item disabled>
          <span>새로운 알람이 없습니다.</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
import { Bell } from "@element-plus/icons";
export default {
  name: "NotificationAlarm",
  props: {
    Notification: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    handleCommand(command) {
      this.$emit("handleCommand", command);
    },
  },
  computed: {
    checkZero() {
      return this.Notification.length === 0;
    },
  },
  setup() {
    return {
      Bell,
    };
  },
};
</script>
<style scoped>
.explain {
  font-size: 12px;
  color: #606266;
}
</style>
