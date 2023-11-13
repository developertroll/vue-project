import { reactive } from "vue";
import { JobList } from "./jobList";
import VueCookies from "vue-cookies";

export const MemberList = reactive({
  List: VueCookies.get("memberList") || [
    {
      name: "김철수",
      job: "개발자",
      rank: "사원",
      status: "재직",
      phone: "010-1234-5678",
      email: "dummy@dummy.dummy",
      address: "서울시 강남구",
      birthday: "1996-02-01",
      joinDate: "2021-01-01",
      leaveDate: "",
    },
    {
      name: "김영희",
      job: "디자이너",
      rank: "사원",
      status: "재직",
      phone: "010-1234-5678",
      email: "young@young.dummy",
      address: "서울시 강남구",
      birthday: "1996-02-01",
      joinDate: "2021-01-01",
      leaveDate: "",
    },
  ],
  memberTemplate: {
    name: "",
    job: "",
    rank: "",
    status: "",
    phone: "",
    email: "",
    address: "",
    birthday: "",
    joinDate: "",
    leaveDate: "",
  },
  memberKeyTranslate: {
    name: "이름",
    job: "직책",
    email: "이메일",
    phone: "연락처",
    status: "상태",
    rank: "직급",
    joinDate: "입사일",
    leaveDate: "퇴사일",
    address: "주소",
    birthday: "생일",
  },
  availableRank: [
    "사원",
    "대리",
    "과장",
    "차장",
    "부장",
    "이사",
    "상무",
    "전무",
    "사장",
  ],
  RankList: VueCookies.get("rankList") || [],
  changeList(newList) {
    this.List = newList;
  },
  findMemberByName(name) {
    const raw = this.List.find((list) => list.name === name);
    return raw;
  },
  setRankList() {
    const result = this.List.map((item) => {
      const jobIndex = JobList.workerList.indexOf(item.job);
      const team = JobList.List[jobIndex];
      return { name: item.name, team, rank: item.rank };
    });

    const newResult = result.reduce((acc, cur) => {
      const existingTeam = acc.find((list) => list.team === cur.team);
      if (existingTeam) {
        existingTeam.children.push({ name: cur.name, rank: cur.rank });
        existingTeam.children.sort(
          (a, b) =>
            this.availableRank.indexOf(b.rank) -
            this.availableRank.indexOf(a.rank)
        );
      } else {
        acc.push({
          team: cur.team,
          children: [{ name: cur.name, rank: cur.rank }],
        });
      }
      return acc;
    }, []);

    return newResult;
  },
  addMember(newMember) {
    this.List.push(newMember);
    this.RankList = this.setRankList();
    VueCookies.set("memberList", this.List);
    VueCookies.set("rankList", this.RankList);
    console.log(this.List, this.RankList, "멤버 추가 완료 및 리스트 확인");
  },
  searchWithNameRank(name, rank) {
    const result = this.List.find(
      (list) => list.name === name && list.rank === rank
    );
    return result;
  },
  currentMember: VueCookies.get("currentMember") || "김영희",
  setCurrentMember(name) {
    this.currentMember = name;
    VueCookies.set("currentMember", name);
  },
});
