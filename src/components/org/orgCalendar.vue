<template lang="">
  <FullCalendar :options="calendarOption" />
  <el-button type="primary" @click="handleEvent">멤버추가</el-button>
  <arrangeEvent :Date="selectedDate" @saveEvent="saveEvent" />
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { eventList } from "@/composables/eventList";
import arrangeEvent from "./arrangeEvent.vue";
export default {
  name: "orgCalendar",
  components: {
    FullCalendar,
    arrangeEvent,
  },
  data() {
    return {
      calendarOption: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        events: [
          {
            title: "event 1",
            date: "2023-10-21",
            id: "1",
            people: ["김철수", "박영희"],
          },
          { title: "event 2", date: "2023-10-22", id: "2" },
          { title: "event 3", date: "2023-10-21T12:00:00", id: "3" },
          { title: "event 4", start: "2023-10-11", end: "2023-10-21", id: "4" },
          { title: "event 5", start: "2023-10-14", end: "2023-10-24", id: "5" },
          { title: "event 6", start: "2023-10-18T12:30:00", id: "6" },
          {
            groupId: "recur",
            daysOfWeek: [1, 3, 5],
            startTime: "10:45:00",
            endTime: "12:45:00",
            title: "recurring event",
          },
        ],
        initialEvents: this.initialEvent,
        selectable: true,
        editable: true,
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
    };
  },
  methods: {
    handleEventClick(clickInfo) {
      console.log(clickInfo);
      console.log(clickInfo.event.id);
      console.log(clickInfo.event.people);
    },
    handleEvent() {
      console.log("handleEvent");
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
      this.calendarOption.events.push({
        ...data,
        id: this.calendarOption.events.length + 1,
      });
      this.selectedDate = [];
      console.log("성공!");
    },
    initialEvent() {
      if (eventList.eventList.length > 0) {
        eventList.eventList.forEach((list) => {
          this.calendarOption.events.push(list);
        });
      } else {
        console.log("eventList가 비어있습니다");
      }
    },
  },
};
</script>
<style lang=""></style>
