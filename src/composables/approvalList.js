import { reactive } from "vue";
import { projectPlanList } from "./projectPlanList";
import VueCookies from "vue-cookies";
import { NotificationList } from "./notificationList";
import { MemberList } from "./memberList";
import lzString from "lz-string";

export const ApprovalList = reactive({
  requestList: VueCookies.get("requestList")
    ? JSON.parse(
        lzString.decompressFromEncodedURIComponent(
          VueCookies.get("requestList")
        )
      )
    : [],
  completeList: VueCookies.get("completeList")
    ? JSON.parse(
        lzString.decompressFromEncodedURIComponent(
          VueCookies.get("completeList")
        )
      )
    : [],
  async request(newList, types, status) {
    const ApprovalMember = await MemberList.findHighestRankMember(
      newList.Partipacants
    );
    console.log(ApprovalMember, "ApprovalMember");
    const addType = {
      ...newList,
      type: types,
      status: status,
      master: ApprovalMember,
      writer: MemberList.currentMember,
    };
    NotificationList.saveList(
      addType,
      "결재",
      ApprovalMember,
      MemberList.currentMember
    );
    this.requestList.push(addType);
    this.setCookies();
  },
  completion(newList) {
    let raw = "";
    let index = "";
    console.log(newList);
    switch (newList.type) {
      case "계획":
        raw = this.requestList.find((list) => list.title === newList.title);
        projectPlanList.saveList(newList);
        this.completeList.push(newList);
        index = this.requestList.findIndex((list) => list.title === raw.title);
        if (index !== -1) {
          this.requestList.splice(index, 1);
        }
        break;
      case "업무":
        // raw = this.requestList.find(
        //   (list) => list.name === newList.name || list.title === newList.title
        // );
        // console.log(raw);
        projectPlanList.workFinish(newList);
        this.completeList.push(newList);
        raw = this.requestList.find((list) => list.name === newList.name);
        index = this.requestList.indexOf(raw);
        this.requestList.splice(index, 1);
        // this.requestList.forEach((item) => {
        //   if (item.status === "승인") {
        //     idx = this.requestList.indexOf(item);
        //   }
        // });
        // console.log(this.requestList, idx, this.requestList[idx], "제거 가능?");
        // delete this.requestList[idx];
        // raw = "";
        break;
    }
    this.setCookies();
  },
  type: ["계획", "업무", "휴가", "기타"],
  status: ["대기", "승인", "반려", "취소"],
  findList(item) {
    const raw = this.requestList.find(
      (list) => list.title === item.title || list.name === item.name
    );
    return raw;
  },
  search(item) {
    const raw = this.requestList.find((list) => list.title === item);
    return raw;
  },
  changeStatus(item, status) {
    const raw = this.requestList.find(
      (list) => list.title === item.title || list.name === item.name
    );
    raw.status = status;
    NotificationList.saveList(raw, "결재", raw.writer, raw.master);
  },
  modifyCompletion(item) {
    try {
      const raw = this.requestList.find(
        (list) =>
          list.title === item.title ||
          list.name === item.name ||
          list.title === item.originalTitle
      );
      console.log(raw, "raw");
      if (raw === undefined) {
        console.error("No matching item found in requestList");
        return;
      }
      console.log(projectPlanList.List, "this.projectPlanList.List");
      const dataRaw = projectPlanList.List.find(
        (list) => list.index === raw.index
      );
      if (dataRaw === undefined) {
        console.error("No matching item found in projectPlanList.List");
        return;
      }
      console.log(dataRaw, "dataRaw");
      console.log(item, "item");
      projectPlanList.modifySaveList(dataRaw, item);
      this.completeList.push(raw);
      let index = this.requestList.indexOf(raw);
      if (index !== -1) {
        this.requestList.splice(index, 1);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  toJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  setCookies() {
    const compressedRequestList = lzString.compressToEncodedURIComponent(
      JSON.stringify(this.toJSON(this.requestList))
    );
    const compressedCompleteList = lzString.compressToEncodedURIComponent(
      JSON.stringify(this.toJSON(this.completeList))
    );
    VueCookies.set("requestList", compressedRequestList);
    VueCookies.set("completeList", compressedCompleteList);
  },
  // getCookies() {
  //   this.requestList = VueCookies.get("requestList");
  //   this.completeList = VueCookies.get("completeList");
  // },
  findRequestListByMember(name) {
    const raw = this.requestList.filter((list) => list.master === name);
    return raw;
  },
  findRequestListByWriter(name) {
    const raw = this.requestList.filter((list) => list.writer === name);
    return raw;
  },
  deleteRequestList(item) {
    const raw = this.requestList.find(
      (list) => list.title === item.title || list.name === item.name
    );
    const index = this.requestList.indexOf(raw);
    this.requestList.splice(index, 1);
  },
  callRequestListByMaster(name) {
    console.log(this.requestList, name); // Add this line
    const raw = this.requestList.filter(
      (list) => list.master && list.master.name === name
    );
    return raw;
  },
});
