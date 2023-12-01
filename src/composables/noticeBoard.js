import { reactive } from "vue";

export const noticeBoard = reactive({
  boardList: JSON.parse(localStorage.getItem("boardList")) || [],
  boardTemplate: {
    title: "",
    content: "",
    date: "",
    index: "",
    views: 0,
  },
  boardKeyTranslate: {
    title: "제목",
    content: "내용",
    date: "작성일",
    views: "조회수",
  },
  saveList(newList, originalIdx = undefined) {
    if (originalIdx !== undefined) {
      // 해당 인덱스에 데이터가 있다면 수정
      const idx = originalIdx;
      this.boardList[idx] = { ...newList, index: idx };
    } else {
      const idx = this.boardList.length;
      this.boardList.unshift({ ...newList, index: idx });
    }
    localStorage.setItem("boardList", JSON.stringify(this.boardList));
  },
  deleteList(idx) {
    this.boardList.splice(idx, 1);
    localStorage.setItem("boardList", JSON.stringify(this.boardList));
  },
  findListByTitle(title) {
    const raw = this.boardList.find((list) => list.title.includes(title));
    return raw;
  },
  findListByContent(content) {
    const raw = this.boardList.find((list) => list.content.includes(content));
    return raw;
  },
  findListByDate(date) {
    const raw = this.boardList.find((list) => list.date.includes(date));
    return raw;
  },
  updateView(list) {
    const idx = list.index;
    const raw = this.boardList.find((list) => list.index === idx);
    raw.views += 1;
    localStorage.setItem("boardList", JSON.stringify(this.boardList));
  },
  showPage(number) {
    //number를 5로 나눠 몫, 나머지를 찾고 몫*5를 인덱스 시작점으로, 이후 나머지 만큼 데이터를 보여줌.
    // 예시: 페이지1은 인덱스 0부터 4까지, 페이지2는 인덱스 5부터 9까지
    const startIdx = (number - 1) * 5;
    const endIdx = startIdx + 4;
    const result = this.boardList.slice(startIdx, endIdx + 1);
    return result;
  },
});
