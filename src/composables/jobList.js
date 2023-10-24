import { reactive } from "vue";

export const JobList = reactive({
  List: ["개발", "디자인", "기획", "마케팅", "기타"],
  changeList(newList) {
    this.List = newList;
  },
});
