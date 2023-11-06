import { reactive } from "vue";
import VueCookies from "vue-cookies";
import { projectPlanList } from "./projectPlanList";

export const eventList = reactive({
  eventList: VueCookies.get("eventList") || [],
  detailList: VueCookies.get("detailList") || [],
  eventTemplate: {
    title: "",
    start: "",
    end: "",
    id: "",
  },
  detailTemplate: {
    id: "",
    people: [],
    description: "",
    location: "",
  },
  recurringEventTemplate: {
    groupId: "",
    startTime: "",
    endTime: "",
    title: "",
    id: "",
  },
  memberSpecificEventList: [],
  setList(name) {
    const raw = projectPlanList.findWorkByName(name);
    // const raw2 = projectPlanList.findProjectByWork(raw);
    //raw는 [{},{}]의 형태로 들어오게 되며, 새로운 리스트에 raw.deadLine이 end로 들어가는 새로운 {}를 만듬.
    const newEvent = [];
    raw.forEach((item) => {
      const parent = projectPlanList.findProjectByWork(item);
      newEvent.push({
        title: parent.title + " - " + item.position + " 마감일",
        end: item.deadLine,
        start: item.deadLine,
        allDay: true,
        backgroundColor: "#f56954",
      });
    });
    this.memberSpecificEventList = newEvent;
  },
  saveList(list) {
    if (list.id === undefined) {
      list.id = this.eventList.length + 1;
    }
    this.eventList.push(list);
    VueCookies.set("eventList", this.eventList);
  },
  setEventByProjects() {
    const rawData = projectPlanList.callPlanList();
    const result = rawData.map((item) => {
      return {
        title: item.title,
        start: item.date1[0],
        end: item.date1[1],
        projectIdx: item.index,
        id: this.eventList.length + 1,
        people: item.Partipacants,
      };
    });
    return result;
  },
});
