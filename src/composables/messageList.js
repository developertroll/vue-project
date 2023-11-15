import { reactive } from "vue";
import VueCookies from "vue-cookies";
import { NotificationList } from "@/composables/notificationList";
import lzString from "lz-string";
import moment from "moment";

export const messageList = reactive({
  List: VueCookies.get("messageList")
    ? JSON.parse(
        lzString.decompressFromEncodedURIComponent(
          VueCookies.get("messageList")
        )
      )
    : [],
  template: {
    title: "",
    content: "",
    to: "",
    from: "",
    time: "",
  },
  deletedList: VueCookies.get("deletedMessageList")
    ? JSON.parse(
        lzString.decompressFromEncodedURIComponent(
          VueCookies.get("deletedMessageList")
        )
      )
    : [],
  saveList(newList, to, from) {
    this.List.push({
      title: newList.title,
      content: newList.content,
      to: to,
      from: from,
      idx: this.List.length,
      time: moment().format("YYYY-MM-DD"),
    });
    VueCookies.set(
      "messageList",
      lzString.compressToEncodedURIComponent(JSON.stringify(this.List))
    );
    NotificationList.saveList(newList, "메시지", to, from);
  },
  deleteListByIdx(idx) {
    this.deletedList.push(this.List[idx]);
    this.List.splice(idx, 1);
    VueCookies.set(
      "messageList",
      lzString.compressToEncodedURIComponent(JSON.stringify(this.List))
    );
    VueCookies.set(
      "deletedMessageList",
      lzString.compressToEncodedURIComponent(JSON.stringify(this.deletedList))
    );
  },
  callListByName(name) {
    return this.List.filter((element) => element.to === name);
  },
  callListByFrom(name) {
    return this.List.filter((element) => element.from === name);
  },
});
