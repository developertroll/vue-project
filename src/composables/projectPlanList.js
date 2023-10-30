import { reactive } from "vue";

export const projectPlanList = reactive({
  List: [],
  workList: [],
  finishedList: [],
  //workList는 계획단계를 넘어간 진행단계에 있는 프로젝트들의 업무가 사용할 테이블. 이렇게 하면 계획안에 있던 내용을 보면서도 진행 중간 업무가 변경되더라도 계획안이 안바뀜.
  saveList(newList) {
    this.List.push({ ...newList, index: this.List.length + 1, status: "진행" });
    const workPush = {
      works: newList.works,
      parentIdx: this.List.length,
    };
    console.log(workPush);
    this.workList.push(workPush);
  },
  callList() {
    const rawData = this.List;
    console.log(rawData, "rawData");
    const result = rawData.filter((list) => list.status === "진행");
    console.log(result, "result");
    return result;
  },
  findParentWorkList(item) {
    let result = -1;
    this.workList.forEach((workListItem, workListIndex) => {
      const foundWorkListIdx = workListItem.works.findIndex((work) =>
        this.isEqualWork(work, item)
      );
      if (foundWorkListIdx !== -1) {
        result = workListIndex;
      }
    });
    return result;
  },
  workFinish(item) {
    const workListIdx = this.findParentWorkList(item);
    if (workListIdx !== -1) {
      const workIdx = this.workList[workListIdx].works.findIndex((work) =>
        this.isEqualWork(work, item)
      );
      if (workIdx !== -1) {
        this.workList[workListIdx].works[workIdx].status = "완료";
      }
    }
    const raw = this.List.find.list(
      (list) => list.index === this.workList[workListIdx].parentIdx
    );
    console.log(raw, "raw");
    const raw2 = raw.works.find((list) => list.name === item.name);
    raw2.status = "완료";
    this.finishProject(raw);
  },
  finishProject(project) {
    const totalWork = project.works.length;
    const finishedWork = project.works.filter(
      (work) => work.status === "완료"
    ).length;
    console.log(totalWork, finishedWork, "totalWork, finishedWork");
    if (finishedWork / totalWork === 1) {
      project.status = "완료";
      this.finishedList.push(project);
    }
  },
  isEqualWork(work1, work2) {
    return (
      work1.name === work2.name &&
      work1.deadline === work2.deadline &&
      work1.desc === work2.desc &&
      work1.position === work2.position &&
      work1.status === work2.status
    );
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
    const parentProject = this.List.find((list) => list === item.parent);
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
    console.log("result", result);
    return result;
  },
});
