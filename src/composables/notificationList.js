import { reactive } from "vue";
import VueCookies from "vue-cookies";
// import { MemberList } from "./memberList";

export const NotificationList = reactive({
  List: VueCookies.get("notificationList") || [],
  template: {
    to: "",
    from: "",
    title: "",
    type: "",
  },
  saveList(newList, type, to, from) {
    if (to.length > 1) {
      to.forEach((element) => {
        this.List.push({
          title: newList.title || newList.name,
          to: element.name,
          from: from,
          type: type,
          idx: this.List.length,
        });
      });
    } else {
      this.List.push({
        title: newList.title || newList.name,
        to: to,
        from: from,
        type: type,
        idx: this.List.length,
      });
    }
    console.log(this.List);
    VueCookies.set("notificationList", this.List);
  },
  deleteList(idx) {
    this.List.splice(idx, 1);
    VueCookies.set("notificationList", this.List);
  },
});
