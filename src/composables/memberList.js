import { reactive } from "vue";

export const MemberList = reactive({
  List: [{ name: "김철수", job: "개발자" }],
  changeList(newList) {
    this.List = newList;
  },
});
