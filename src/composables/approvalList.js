import { reactive } from "vue";
import { projectPlanList } from "./projectPlanList";
export const ApprovalList = reactive({
  requestList: [],
  completeList: [],
  request(newList, types, status) {
    const addType = { ...newList, type: types, status: status };
    this.requestList.push(addType);
  },
  completion(newList) {
    console.log(newList);
    let raw = this.requestList.find((list) => {
      if (newList.type === "업무") {
        return list.name === newList.name;
      } else {
        return list.title === newList.title;
      }
    });
    console.log(raw);
    if (raw.type === "계획") {
      projectPlanList.saveList(newList);
    }
    if (raw.type === "업무") {
      projectPlanList.workFinish(newList);
    }
    this.completeList.push(newList);
    raw = "";
  },
  type: ["계획", "업무", "휴가", "기타"],
  status: ["대기", "승인", "반려", "취소"],
  findList(item) {
    const raw = this.requestList.find((list) => list.title === item.title);
    return raw;
  },
  search(item) {
    const raw = this.requestList.find((list) => list.title === item);
    return raw;
  },
  changeStatus(item, status) {
    const raw = this.requestList.find((list) => list.title === item.title);
    raw.status = status;
  },
});
