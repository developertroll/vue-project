<template lang="">
  <div>
    <el-button type="primary" @click="clicked = !clicked"
      >반복일정 추가</el-button
    >
    <FullCalendar :options="calendarOption" />
    <arrangeEvent :Date="selectedDate" @saveEvent="saveEvent" />
    <showEvent :eventData="selectedEvent" />
    <arrangeRepeat :clicked="clicked" @saveEvent="saveEvent" />
  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { eventList } from "@/composables/eventList";
import arrangeEvent from "./arrangeEvent.vue";
import showEvent from "./showEvent.vue";
import arrangeRepeat from "./arrangeRepeat.vue";
export default {
  name: "orgCalendar",
  components: {
    FullCalendar,
    arrangeEvent,
    showEvent,
    arrangeRepeat,
  },
  data() {
    return {
      calendarOption: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locale: "ko",
        events: [
          // {
          //   title: "event 1",
          //   date: "2023-10-21",
          //   id: "1",
          //   people: ["김철수", "박영희"],
          // },
          // { title: "event 2", date: "2023-10-22", id: "2" },
          // { title: "event 3", date: "2023-10-21T12:00:00", id: "3" },
          // { title: "event 4", start: "2023-10-11", end: "2023-10-21", id: "4" },
          // { title: "event 5", start: "2023-10-14", end: "2023-10-24", id: "5" },
          // { title: "event 6", start: "2023-10-18T12:30:00", id: "6" },
          // {
          //   groupId: "recur",
          //   daysOfWeek: [1, 3, 5],
          //   startTime: "10:45:00",
          //   endTime: "12:45:00",
          //   title: "recurring event",
          // },
        ],
        initialEvents: this.initialEvent,
        selectable: true,
        eventClick: this.handleEventClick,
        select: this.handleDateClick,
        eventTimeFormat: {
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
        },
      },
      currentEvent: [],
      selectedDate: null,
      lastSelectedEventId: null,
      selectedEvent: null,
      clicked: false,
    };
  },
  methods: {
    handleEventClick(clickInfo) {
      if (clickInfo.event.extendedProps.type === "work") {
        this.$message({
          message: "업무일정 수정은 해당 페이지에서 불가능합니다.",
          type: "warning",
        });
        return;
      }
      if (this.lastSelectedEventId === clickInfo.event.id) {
        this.selectedEvent = {};
        this.lastSelectedEventId = null;
        // Force Vue.js to re-render the component
        this.$nextTick(() => {
          this.selectedEvent = eventList.eventList.find(
            (list) => Number(list.id) === Number(clickInfo.event.id)
          );
          this.lastSelectedEventId = clickInfo.event.id;
        });
      } else {
        this.selectedEvent = eventList.eventList.find(
          (list) => Number(list.id) === Number(clickInfo.event.id)
        );
        this.lastSelectedEventId = clickInfo.event.id;
      }
      console.log(this.selectedEvent);
    },

    handleEvent() {
      console.log("이벤트 실행됨");
      eventList.setList("김철수");
      this.currentEvent = eventList.memberSpecificEventList;
      console.log(this.currentEvent);
      this.currentEvent.forEach((list) => {
        this.calendarOption.events.push(list);
      });
    },
    handleDateClick(selectInfo) {
      this.selectedDate = [selectInfo.startStr, selectInfo.endStr];
      console.log(this.selectedDate);
      selectInfo.view.calendar.unselect();
    },
    saveEvent(data) {
      console.log(data);
      eventList.saveList(data);
      this.updateEvent();
      console.log("성공!");
    },
    initialEvent() {
      if (eventList.eventList && eventList.eventList.length > 0) {
        eventList.eventList.forEach((list) => {
          this.calendarOption.events.push(list);
        });
        this.handleEvent();
      } else {
        console.log("eventList가 비어있습니다");
      }
    },
    updateEvent() {
      this.calendarOption.events = [];
      this.initialEvent();
    },
  },
};
</script>
<style lang=""></style>
