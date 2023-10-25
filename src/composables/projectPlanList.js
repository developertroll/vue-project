import { reactive } from "vue";

export const projectPlanList = reactive({
  List: [],
  saveList(newList) {
    this.List.push(newList);
  },
});
