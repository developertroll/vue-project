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
    //List에 들어갈 rank는 availableRank에서만 가능하며, 직급은 현재 index가 낮을수록 낮은 직급으로 되어있음.
    //이 함수를 통해서 list 내의 job을 jobList에 의거하여 분류하고, jobList 내부 데이터에 따라서 높은 rank순으로 정렬됨.
    //여기서 각 List 내 직원들의 rank를 뽑고, rank를 jobList.workerList의 index를 찾아 jobList.List의 같은 index값을 가지는 값으로 변환, 그리고 그 값을 result에 push
    //newResult는 team을 기준으로 {team: "", children: [{name: "", rank: ""},{name: "", rank: ""}]} 형태로 변환되고, children은 rank 값을 availableRank의 index를 찾고 해당 index가 높은 순으로 정렬됨.
    // const rankList = this.availableRank;
    // const result = [];
    // this.List.forEach((item) => {

    //   const raw = item.job;
    //   const idx = JobList.workerList.indexOf(raw);
    //   const rank = JobList.List[idx];
    //   result.push({ name: item.name, team: rank, rank: item.rank });
    // });
    // const newResult =

    //   result
    //     .reduce((acc, cur) => {
    //       const team = cur.team;
    //       const name = cur.name;
    //       const rank = cur.rank;
    //       const idx = acc.findIndex((list) => list.team === team);
    //       if (idx === -1) {
    //         acc.push({ team: team, children: [{ name: name, rank: rank }] });
    //       } else {
    //         acc[idx].children.push({ name: name, rank: rank });
    //       }
    //       return acc;
    //     }, [])
    //     .map((item) => {
    //       const team = item.team;
    //       const children = item.children;
    //       const newChildren = children.sort((a, b) => {
    //         const idxA = rankList.indexOf(a.rank);
    //         const idxB = rankList.indexOf(b.rank);
    //         if (idxA < idxB) {
    //           return -1;
    //         }
    //         if (idxA > idxB) {
    //           return 1;
    //         }
    //         return 0;
    //       });
    //       return { team: team, children: newChildren };
    //     });
    // return newResult;
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
});
