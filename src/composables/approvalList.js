import { reactive } from "vue";
import { projectPlanList } from "./projectPlanList";
import VueCookies from "vue-cookies";
import { NotificationList } from "./notificationList";
import { MemberList } from "./memberList";
export const ApprovalList = reactive({
  requestList: VueCookies.get("requestList") || [],
  completeList: VueCookies.get("completeList") || [],
  request(newList, types, status) {
    const ApprovalMember = MemberList.findHighestRankMember(
      newList.Partipacants
    );
    const addType = {
      ...newList,
      type: types,
      status: status,
      master: ApprovalMember,
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
  setCookies() {
    VueCookies.set("requestList", this.requestList);
    VueCookies.set("completeList", this.completeList);
  },
  getCookies() {
    this.requestList = VueCookies.get("requestList");
    this.completeList = VueCookies.get("completeList");
  },
});
