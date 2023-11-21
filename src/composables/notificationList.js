import { reactive } from "vue";
import VueCookies from "vue-cookies";

export const NotificationList = reactive({
  List: VueCookies.get("notificationList") || [],
  template: {
    to: "",
    from: "",
    title: "",
    type: "",
  },
  typeTemplate: ["프로젝트", "결재", "업무", "메세지"],
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
    VueCookies.set("notificationList", this.List);
  },
  deleteListByIdx(idx) {
    this.List.splice(idx, 1);
    VueCookies.set("notificationList", this.List);
  },
  callListByName(name) {
    return this.List.filter((element) => element.to === name);
  },
  deleteListByTitleType(title, type) {
    const idx = this.List.findIndex(
      (element) => element.title === title && element.type === type
    );
    this.List.splice(idx, 1);
    VueCookies.set("notificationList", this.List);
  },
});
