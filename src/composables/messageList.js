import { reactive } from "vue";
import { NotificationList } from "@/composables/notificationList";
import moment from "moment";

export const messageList = reactive({
  List: localStorage.getItem("messageList")
    ? JSON.parse(localStorage.getItem("messageList"))
    : [],
  template: {
    title: "",
    content: "",
    to: "",
    from: "",
    time: "",
  },
  deletedList: localStorage.getItem("deletedMessageList")
    ? JSON.parse(localStorage.getItem("deletedMessageList"))
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
    localStorage.setItem("messageList", JSON.stringify(this.List));
  },
  deleteListByIdx(idx) {
    this.deletedList.push(this.List[idx]);
    this.List.splice(idx, 1);
    localStorage.setItem("messageList", JSON.stringify(this.List));
    localStorage.setItem(
      "deletedMessageList",
      JSON.stringify(this.deletedList)
    );
  },
  callListByName(name) {
    return this.List.filter((element) => element.to.name === name);
  },
  callListByFrom(name) {
    return this.List.filter((element) => element.from === name);
  },
});
