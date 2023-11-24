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
          <!-- el-icon 도입해서 각 type마다 아이콘으로 넣기! -->
          <div v-if="item.type">
            <el-icon><component :is="item.type" /></el-icon>
          </div>
          <span class="explain">
            {{ item.content }}
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
import {
  Bell,
  OfficeBuilding,
  Message,
  Document,
  Briefcase,
  Calendar,
} from "@element-plus/icons";
import { NotificationList } from "@/composables/notificationList";
export default {
  name: "NotificationAlarm",
  components: {
    Document,
    Briefcase,
    OfficeBuilding,
    Message,
    Calendar,
  },
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
    handleTypeIcon(type) {
      return NotificationList.callIconByType(type);
    },
  },
  computed: {
    checkZero() {
      return this.Notification.length === 0;
    },
  },
  data() {
    return {
      Icon: "",
    };
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
