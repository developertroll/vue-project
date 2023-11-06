import { reactive } from "vue";
import VueCookies from "vue-cookies";

export const noticeBoard = reactive({
  boardList: VueCookies.get("boardList") || [],
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
      this.boardList.push({ ...newList, index: idx });
    }
    VueCookies.set("boardList", this.boardList);
  },
  deleteList(idx) {
    this.boardList.splice(idx, 1);
    VueCookies.set("boardList", this.boardList);
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
});
