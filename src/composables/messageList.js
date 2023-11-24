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
    //to는 object가 들어오는 array라서 각각의 element를 처리해야함
    to.forEach((element) => {
      this.List.unshift({
        title: newList.title,
        content: newList.content,
        to: element,
        from: from,
        idx: this.List.length,
        time: moment().format("YYYY-MM-DD"),
      });
      NotificationList.saveList(newList, "메세지", element, from);
    });
    VueCookies.set(
      "messageList",
      lzString.compressToEncodedURIComponent(JSON.stringify(this.List))
    );
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
    return this.List.filter((element) => element.to.name === name);
  },
  callListByFrom(name) {
    return this.List.filter((element) => element.from === name);
  },
});
