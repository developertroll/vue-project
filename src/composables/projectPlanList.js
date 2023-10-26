import { reactive } from "vue";

export const projectPlanList = reactive({
  List: [],
  saveList(newList) {
    this.List.push(newList);
  },
  searchList(value) {
    const result = this.List.filter((item) => item.title.includes(value));
    return result;
  },
});
