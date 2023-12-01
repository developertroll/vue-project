import { reactive } from "vue";
import { JobList } from "./jobList";

export const MemberList = reactive({
  List: JSON.parse(localStorage.getItem("memberList")) || [
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
    {
      name: "이영희",
      job: "디자이너",
      rank: "사원",
      status: "재직",
      phone: "010-1234-5678",
      email: "dummy3@dummy.asdf",
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
  RankList: [],
  initRankList() {
    const rankListFromStorage = JSON.parse(localStorage.getItem("rankList"));
    if (rankListFromStorage) {
      this.RankList = rankListFromStorage;
    } else {
      this.setRankList();
    }
  },
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
    localStorage.setItem("memberList", JSON.stringify(this.List));
    localStorage.setItem("rankList", JSON.stringify(this.RankList));
    console.log(this.List, this.RankList, "멤버 추가 완료 및 리스트 확인");
  },
  searchWithNameRank(name, rank) {
    const result = this.List.find(
      (list) => list.name === name && list.rank === rank
    );
    return result;
  },
  currentMember: localStorage.getItem("currentMember") || "김영희",
  currentAdmin: localStorage.getItem("currentAdmin") || "김철수",
  setCurrentMember(name) {
    this.currentMember = name;
    localStorage.setItem("currentMember", name);
  },
  //받아온 member들의 rank를 비교해 가장 높은 rank를 가진 member 반환
  findHighestRankMember(members) {
    let result = members[0];
    members.forEach((member) => {
      if (
        this.availableRank.indexOf(member.rank) >
        this.availableRank.indexOf(result.rank)
      ) {
        result = member;
      }
    });
    return result;
  },
  findIndexByRankName(rank, name) {
    return this.List.findIndex(
      (list) => list.rank === rank && list.name === name
    );
  },
});
