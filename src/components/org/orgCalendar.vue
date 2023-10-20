<template lang="">
  <FullCalendar :options="calendarOption" />
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  name: "orgCalendar",
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOption: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        events: [
          { title: "event 1", date: "2023-10-21" },
          { title: "event 2", date: "2023-10-22" },
          { title: "event 3", date: "2023-10-21T12:00:00" },
          { title: "event 4", start: "2023-10-11", end: "2023-10-21" },
          { title: "event 5", start: "2023-10-14", end: "2023-10-24" },
        ],
      },
    };
  },
};
</script>
<style lang=""></style>
