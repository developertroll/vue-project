import { reactive } from "vue";

export const ApprovalList = reactive({
  requestList: [],
  completeList: [],
  request(newList, types, status) {
    const addType = { ...newList, type: types, status: status };
    this.requestList.push(addType);
  },
  completion(newList) {
    this.completeList.push(newList);
  },
  type: ["계획", "업무", "휴가", "기타"],
});
