import { reactive } from "vue";

export const NotificationList = reactive({
  List: JSON.parse(localStorage.getItem("notificationList")) || [],
  template: {
    to: "",
    from: "",
    title: "",
    type: "",
  },
  typeTemplate: ["프로젝트", "결재", "업무", "메세지", "일정"],
  iconType: ["OfficeBuilding", "Briefcase", "Document", "Message", "Calendar"],
  contentTemplate: [
    (content) => `프로젝트 ${content}에 배정되었습니다`,
    (content) => `결재 ${content}이(가) 도착했습니다`,
    (content) => `업무 ${content}이(가) 배정되었습니다`,
    (content) => `${content}님으로부터 메세지가 도착했습니다`,
    (content) => `일정 ${content}이(가) 추가되었습니다`,
  ],
  callContentByType(item) {
    const type = item.type;
    const content = item.type === "메세지" ? item.from : item.title;
    if (!type) {
      return [];
    }
    const index = this.typeTemplate.indexOf(type);
    if (index === -1) {
      return "";
    }
    return this.contentTemplate[index](content);
  },
  callIconByType(type) {
    if (!type) {
      return "";
    }
    return this.iconType[
      this.typeTemplate.findIndex((element) => element === type)
    ];
  },
  saveList(newList, type, to, from) {
    if (Array.isArray(to)) {
      to.forEach((element) => {
        if (element.name === from) return;
        this.List.push({
          title: newList.title || newList.name,
          to: element.name,
          from: from,
          type: type,
          idx: this.List.length,
        });
      });
    } else if (typeof to === "string") {
      this.List.push({
        title: newList.title || newList.name,
        to: to,
        from: from,
        type: type,
        idx: this.List.length,
      });
    } else {
      this.List.push({
        title: newList.title || newList.name,
        to: to.name,
        from: from,
        type: type,
        idx: this.List.length,
      });
    }
    console.log(this.List);
    localStorage.setItem("notificationList", JSON.stringify(this.List));
  },
  deleteListByIdx(idx) {
    this.List.slice(idx, 1);
    localStorage.setItem("notificationList", JSON.stringify(this.List));
  },
  callListByName(name) {
    return this.List.filter((element) => element.to === name);
  },
  deleteListByTitleType(title, type) {
    const idx = this.List.findIndex(
      (element) => element.title === title && element.type === type
    );
    this.List.splice(idx, 1);
    localStorage.setItem("notificationList", JSON.stringify(this.List));
  },
});
