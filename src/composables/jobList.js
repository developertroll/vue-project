import { shallowReactive } from "vue";

export const JobList = shallowReactive({
  List: ["개발", "디자인", "기획", "마케팅", "기타"],
  workerList: ["개발자", "디자이너", "기획자", "영업", "기타"],
  changeList(newList) {
    this.List = newList;
  },
});
