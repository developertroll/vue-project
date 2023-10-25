import { reactive } from "vue";

export const MemberList = reactive({
  List: [
    { name: "김철수", job: "개발자", rank: "사원" },
    { name: "김영희", job: "디자이너", rank: "사원" },
  ],
  changeList(newList) {
    this.List = newList;
  },
});
