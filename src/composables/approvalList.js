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
    let raw = "";
    let index = "";
    switch (newList.type) {
      case "계획":
        raw = this.requestList.find((list) => list.title === newList.title);
        projectPlanList.saveList(newList);
        this.completeList.push(newList);
        index = this.requestList.indexOf(raw);
        this.requestList.splice(index, 1);
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
});
