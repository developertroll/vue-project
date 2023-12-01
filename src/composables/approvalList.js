import { reactive } from "vue";
import { projectPlanList } from "./projectPlanList";
import { NotificationList } from "./notificationList";
import { MemberList } from "./memberList";

export const ApprovalList = reactive({
  requestList: localStorage.getItem("requestList")
    ? JSON.parse(localStorage.getItem("requestList"))
    : [],
  completeList: localStorage.getItem("completeList")
    ? JSON.parse(localStorage.getItem("completeList"))
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
      master: `${ApprovalMember.name}(${ApprovalMember.rank})`,
      writer: MemberList.currentMember,
    };
    NotificationList.saveList(
      addType,
      "결재",
      ApprovalMember,
      MemberList.currentMember
    );
    this.requestList.push(addType);
    console.log(this.requestList, "this.requestList");
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
  findList(title) {
    return this.requestList.find((list) => list.title === title);
  },
  search(item) {
    const raw = this.requestList.filter((list) => list.title === item);
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
  setCookies() {
    const compressedRequestList = JSON.stringify(this.requestList);
    const compressedCompleteList = JSON.stringify(this.completeList);
    localStorage.setItem("requestList", compressedRequestList);
    localStorage.setItem("completeList", compressedCompleteList);
  },
  findRequestListByMember(name) {
    const raw = this.requestList.filter((list) => list.master === name);
    return raw;
  },
  findRequestListByWriter(name) {
    this.requestList = JSON.parse(localStorage.getItem("requestList"));
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
    this.requestList = JSON.parse(localStorage.getItem("requestList"));
    console.log(
      this.requestList,
      "this.requestList after loading from localStorage"
    );
    const raw = this.requestList.filter(
      (list) => list.master && list.master.includes(name)
    );
    console.log(raw);

    // Check if raw contains master value
    const isMasterIncluded = raw.some((list) => list.master.includes(name));
    console.log("Is master included?", isMasterIncluded);

    return raw;
  },
  storageDebug() {
    // Check the data before saving
    console.log(this.requestList, "Data before saving");

    // Save data to localStorage
    localStorage.setItem("requestList", JSON.stringify(this.requestList));

    // Load data from localStorage
    const loadedData = localStorage.getItem("requestList");

    // Check the loaded data
    console.log(loadedData, "Loaded data");

    // Parse the loaded data
    const parsedData = JSON.parse(loadedData);

    // Check the parsed data
    console.log(parsedData, "Parsed data");
  },
});
