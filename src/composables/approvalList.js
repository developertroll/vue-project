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
    const raw = this.requestList.find((list) => list.title === newList.title);
    if (raw.type === "계획") {
      projectPlanList.saveList(newList);
    }
    this.completeList.push(newList);
  },
  type: ["계획", "업무", "휴가", "기타"],
  status: ["대기", "승인", "반려", "취소"],
  findList(item) {
    const raw = this.requestList.find((list) => list.title === item.title);
    // switch (raw.type) {
    //   case "계획":
    //     return projectPlanList.List.find((list) => (list.title = item.title));
    // }
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
