import { reactive } from "vue";
import VueCookies from "vue-cookies";
import { projectPlanList } from "./projectPlanList";
import lzString from "lz-string";
import { MemberList } from "./memberList";
import { NotificationList } from "./notificationList";

export const eventList = reactive({
  eventList: VueCookies.get("eventList")
    ? JSON.parse(
        lzString.decompressFromEncodedURIComponent(VueCookies.get("eventList"))
      )
    : [],
  detailList: VueCookies.get("detailList")
    ? JSON.parse(
        lzString.decompressFromEncodedURIComponent(VueCookies.get("detailList"))
      )
    : [],
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
        type: "work",
        id: -1,
      });
    });
    this.memberSpecificEventList = newEvent;
  },
  saveList(list) {
    if (list.id === undefined) {
      list.id = this.eventList.length + 1;
    }
    NotificationList.saveList(
      list,
      "일정",
      list.member,
      MemberList.currentMember
    );
    this.eventList.push(list);
    console.log(this.eventList);
    const compressedEventList = lzString.compressToEncodedURIComponent(
      JSON.stringify(this.eventList)
    );
    VueCookies.set("eventList", compressedEventList);
    const savedEventList = JSON.parse(
      lzString.decompressFromEncodedURIComponent(VueCookies.get("eventList"))
    );
    console.log(savedEventList, "savedEventList");
    if (!savedEventList || savedEventList.length !== this.eventList.length) {
      console.error("Failed to save the event list to the cookie.");
    }
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
