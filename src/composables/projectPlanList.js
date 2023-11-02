import { reactive } from "vue";
import VueCookies from "vue-cookies";

export const projectPlanList = reactive({
  List: VueCookies.get("projectPlanList") || [],
  workList: VueCookies.get("workList") || [],
  finishedList: VueCookies.get("finishedList") || [],
  //workList는 계획단계를 넘어간 진행단계에 있는 프로젝트들의 업무가 사용할 테이블. 이렇게 하면 계획안에 있던 내용을 보면서도 진행 중간 업무가 변경되더라도 계획안이 안바뀜.
  saveList(newList, originalIdx = undefined) {
    console.log(newList);
    if (originalIdx !== undefined) {
      const idx = originalIdx;
      const workPush = {
        works: newList.works,
        parentIdx: idx,
      };
      delete newList.works;
      this.List[idx] = { ...newList, index: idx, status: "진행" };
      console.log(workPush);
      this.workList.push(workPush);
    } else {
      const idx = this.List.length;
      const workPush = {
        works: newList.works,
        parentIdx: idx,
      };
      delete newList.works;
      this.List.push({ ...newList, index: idx, status: "진행" });
      console.log(workPush);
      this.workList.push(workPush);
    }
    this.setCookies();
  },
  callWorkList(project) {
    const raw = this.workList.find((list) => list.parentIdx === project.index);
    return raw;
  },
  callPlanList() {
    const rawData = this.List;
    console.log(rawData, "rawData");
    const result = rawData.filter((list) => list.status !== "취소");
    console.log(result, "result");
    return result;
  },
  callList() {
    const rawData = this.List;
    console.log(rawData, "rawData");
    const result = rawData.filter((list) => list.status === "진행");
    console.log(result, "result");
    return result;
  },
  findParentWorkList(item) {
    const result = this.workList.find((list) => list.parentIdx === item);
    return result;
  },
  workFinish(item) {
    const parentList = this.findParentWorkList(item.parent.index);
    const raw = parentList.works.find((list) => list.name === item.name);
    raw.status = "완료";
    console.log(raw);
    if (parentList.works.every((list) => list.status === "완료")) {
      const parentProject = this.List.find(
        (list) => list.index === parentList.parentIdx
      );
      parentProject.status = "완료";
      const newList = { ...parentProject, works: parentList.works };
      this.finishedList.push(newList);
      const idx = this.workList.indexOf(parentList);
      this.workList.splice(idx, 1);
    }
    this.setCookies();
  },
  // checkEnd() {
  //   const check = this.List.forEach((list) =>
  //     list.works.forEach((list2) => list2.status === "완료")
  //   );
  //   q;
  // },
  findWorks(item) {
    console.log("입장", item);
    console.log("플젝리스트", this.List);
    console.log("업무리스트", this.workList);
    const parentProject = this.List.find(
      (list) =>
        list === item.parent || list.index === item.index || list.title === item
    );
    console.log("parentProject", parentProject);
    const result = this.workList.find(
      (list) => list.parentIdx === parentProject.index
    );
    console.log("result", result);
    const find = result.works.find((list) => list.name === item.title);
    console.log(find);
    return find;
  },
  findProject(item) {
    const raw = this.findWorks(item);
    const result = this.List.find((list) => list.index === raw.parentIdx);
    // console.log("result", result);
    return result;
  },
  findWorkAndProject(title) {
    const project = this.List.find((list) => list.title === title);
    let work;
    if (project) {
      const workList = this.workList.find(
        (list) => list.parentIdx === project.index
      );
      if (workList) {
        work = workList.works;
      }
    }
    return { work, project };
  },
  callFinishedList() {
    return this.finishedList;
  },
  findProject2(item) {
    return this.List.find((list) => list.index === item.parentIdx);
  },
  deletePlanWork(item) {
    // Filter out the item to delete from this.List
    this.List = this.List.filter((list) => list.index !== item.index);

    // Filter out the item to delete from this.workList
    this.workList = this.workList.filter(
      (list) => list.parentIdx !== item.index
    );
  },
  modifySaveList(original, newWork) {
    console.log(original, newWork);
    const originalIdx = original.index;
    this.deletePlanWork(original);
    delete newWork.originalTitle;
    this.saveList(newWork, originalIdx);
  },
  setCookies() {
    VueCookies.set("projectPlanList", this.List);
    VueCookies.set("workList", this.workList);
    VueCookies.set("finishedList", this.finishedList);
  },
  getCookies() {
    this.List = VueCookies.get("projectPlanList");
    this.workList = VueCookies.get("workList");
    this.finishedList = VueCookies.get("finishedList");
  },
});
