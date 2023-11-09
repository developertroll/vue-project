## 계획안

메인페이지(로그인 필요, 로그인 페이지 및 기능 구현 필요) (개인아이디에 등록되어있는 프로젝트 요약본, 결재사항, 공지사항)
프로젝트 -> 3개의 단계로 나뉘어있음(계획, 진행중, 완료). 프로젝트 라는 큰 틀 안에서 계획안은 누구나 등록할 수 있고 상급자의 결재가 진행되야 진행중, 완료 단계로 넘어갈 수 있음.
계획창은 현재 결재요청한 계획안들이 보이고 등록창을 가짐.
진행중 창은 남은 날짜와 함께 깃허브 타임라인 창을 본따 업로드된 사항과 타임라인이 보임.
완료된 프로젝트는 이 타임라인 및 진행사항들이 백업본 느낌으로 남아있게됨.
일정 캘린더 -> fullCalandar api 사용, 일정들을 달력으로 볼 수 있음. 프로젝트 생성 라인을 응용하여 휴가 결재안을 올려 그 날 누가 쉬는지를 체크할 수 있음.
공지사항 -> 어드민을 포함한 특정 상급자들만 등록 가능, 글만 보여줄 예정
마이페이지 -> 개인정보 수정, 프로젝트 참여 현황, 결재 현황, 휴가 현황, 공지사항, 로그아웃

## 필요한 db 내용

유저 : 인덱스, 상태, 아이디, 비밀번호, 등급, 전화번호
프로젝트: 인덱스, 상태, 제목, 내용, 시작날짜, 종료예정날짜(업데이트 가능), 마지막 결재일,
공지사항 게시판: 인덱스, 상태, 제목, 내용, 조회수, 게시날짜, 업데이트 날짜
일정: 인덱스, 게시 유저, 대상 유저, 시작날짜, 종료날짜, 제목, 내용, 상태
계획안: 인덱스, 게시 유저, 대상 유저, 제목, 내용, 상태, 시작날짜, 종료예정날짜, 마지막 결재일, 결재자, 결재상태
진행안: 인덱스, 게시 유저, 대상 유저, 제목, 내용, 상태, 시작날짜, 종료예정날짜, 마지막 결재일, 결재자, 결재상태
완료안: 인덱스, 게시 유저, 대상 유저, 제목, 내용, 상태, 시작날짜, 종료예정날짜, 마지막 결재일, 결재자, 결재상태
// ? 그러면 저거 3개 다 같은 db로 만들고 상태값만 줘도 되지않나?

```

## 작업일지

### 2023-10-18 계획안 작성, db 설계, 프로젝트 생성 및 기본 css 작업(Element plus 사용)
```

### 2023-10-19 프로젝트 생성 form 작성, 추후 사용 가능한 참가인원 설정 작업 완료, 계획중인 프로젝트 창에 해당 데이터를 띄울 수 있게 하는 것은 추후 db 연결 이후 진행. element plus를 통해 진행중인 프로젝트 페이지 작성 시작.

### 2023-10-19 프로젝트 진행상황으로 넘어갔을때 업무할당을 위한 공용 데이터 테이블이 존재하게 하여 해당 업무들이 완료될 시 완료 상태로 업로드가 될 수 있도록 계획, 업무 할당 페이지 작성 시작. 다른 페이지에서도 할당 가능한 common 페이지들 작성 시작. 업무할당, 프로젝트 상세사항, 공용 결재창 작성 시작.

### 2023-10-20 db연결을 기존 만들어뒀던 api를 활용하기로 결정, api 및 db를 재작업하여 이 프로젝트에서도 쓸수 있도록 할 예정. 기본 common 페이지 기본 상태 작성 이후 api 수정을 위해 다른 파일 작업. 프로젝트 진행상황 페이지 레이아웃에 대해 고민중.

### 현재 고민중인 레이아웃

현재 변경된 생각으로 타임라인의 경우 작업량이 많아질 경우 ui로써 보기 너무 불편해지기 때문. 현재 생각엔 프로젝트 담당자가 올린 계획안이 결재되었을 때 결재 완료->진행중으로 넘어가는 단계에서 업무 할당 창으로 옮겨져 진행중인 프로젝트에 각각의 업무를 할당하게 되고, 진행중 창은 크게 2가지 형태를 가지게 되는 것. 담당자는 progress를 사용하여 모든 업무가 완료되었을때 100%가 되는 업무 퍼센트, 기한일 퍼센트가 원형 형태로 보이고 이후 아래에 상세설명 및 카드 형태로 현재 할당해놓은 업무의 간단한 상태창이 배분됨. 업무 담당자 페이지는 현재 할당된 업무들의 결재요청(완성)여부에 따라 퍼센트가 보이고, 참여하는 프로젝트의 기한들이 progress형태로 보임. 그리고 아래 테이블 형태로 업무들이 나열되고 해당 업무들은 깃허브처럼 상태 업데이트, 결재요청이 가능함(삭제와 취소는 불가능). 기한 90%를 넘어가는 업무와 프로젝트들은 warning progress와 빨간글씨 등으로 강조되어 따로 분류가 가능함.

### 2023-10-20(이어서) 작은 페이지들 추가(어드민 계정이 담당할 페이지). 현재 내용은 없음. 현재 db 테이블 틀은 잡아두었고 계속하여 프로젝트의 작은 세부사항들이 바뀌는 상황이라 커밋하지 않았음. fullcalendar api 설치 완료. fullcalendar 정상작용 확인 완료. 이벤트 적용이 어렵지 않은 것을 확인해 project 페이지의 레이아웃을 확실하게 정해서 완성하는 것을 목표로 하기 시작함. 계획-완성은 거의 같은 페이지가 될 것으로 추정되기 때문에 진행페이지 완성을 목표로 함.

### 2023-10-23 진행페이지 들어갔을때 카드 형태로 프로젝트의 개요가 보이게 만듬. 상세 버튼을 누르면 해당 프로젝트만 상세하게 나오게 하였음. 현재 개요 페이지는 기한 퍼센트, 업무 진행도 퍼센트, 승인 퍼센트를 가지고 있고 상세 버튼을 누르면 프로젝트가 가진 자체 데이터와 업무 상태창이 뜨게 함. 데이터를 오고가게만 만들면 현재 페이지는 문제없어보임. 마지막으로 현 페이지들을 돌아가게 만들 개인 결재 관련 페이지 작업 시작.

다음작업까지 고민해볼 사항: projectOngoingDetail 이 필요한가? DocumentProject 페이지를 공용으로 만들어 이 페이지를 dialog로 띄워버리는게 더 나은거같기도 함. 그렇게 할 경우 DocumentProject에 특정 코드를 받느냐에 따라 보이는게 조금씩 달라져야함.
프로젝트 생성 때부터 업무를 할당하게 만들어 프로젝트 게획이 완성되고 나서 업무가 분배되어야 한다는 이상한점 해결하기.
개인 페이지에서 개인페이지에 무엇이 보여져야 하는가? 현재는 해당 member 테이블이 가진 기본값만 보여주고 있는데, 그렇게 할 경우 수정 정도를 제외하곤 너무나도 내용이 작기 때문에 무엇을 더 추가할지 고민해볼것. 휴가제출이나 특정일정 제안 등을 1개의 페이지에서 메뉴를 통해서 만들기.
layout 메뉴에 아직 추가하지않은 것들 더 만들기

### 2023-10-24 작업할당 페이지를 개선하여 새로 만듬. 간단한 데이터 전송이 가능하게 해서 참여인원이 추가됬을 때 해당 참여인원 한정으로 업무가 할당될 수 있게 드롭다운 메뉴에 들어가게 만들었음. 내일 해야할 일: 해당 값이 전송되지 않거나 변경될 때 해당 담당자들이 없어졌거나 하는 이유일때 빨간 표시를 넣어 수정해야 하게 하기(or 날아가게 하기), addMember에 잡다한 점을 수정하여 이름도 dialogMember로 바꾸기. showMember가 가진 데이터가 가지게 될 데이터가 현재 적어 createPlan 페이지에서 table 대신 다른 형태로 보여지게 할 방법 찾기. addMember를 체크박스 테이블 대신 Element-plus가 지원하는 tree 기능으로 바꾸기. AllocateWorkV2 테이블이 다좋은데 현재 콘솔창 등으로 크기가 작아질 경우 table이 고장남. 지금 생각에는 breakPoint를 이용해서 데이터가 안보이게 하고 버튼만 보이게 하면 될 것 같음. 현재 JobList같은 admin만 바꿀 수 있게 할 전역변수 선언을 더 넣을 예정. 현재로써는 member, JobList 2개가 전역변수가 될 예정이며 해당 두 데이터는 admin이 수정할 수 있게 할 예정.

### 2023-10-25 AllocateWorkV2 고장나는거는 일단 보류(반응성 페이지 문제같음). showMember와 addMember의 버전2를 만들어 개선된 형태로 새로 만들어내어 연결함. createPlan 페이지 완성. 현재는 composables에 저장되어 반응성 객체로 사용되고 있지만 추후에는 저 부분을 vuex던 api 사용이던 해서 저장이 가능한 것으로 확인됨. 큰 파트 하나가 끝나가는 느낌. 현재 그렇게 저장된 Plan들이 showPlan에 일부 필요한 것들만 보여지게 바꿈. 결재 관련 부분은 현재 큰 틀이 완성되면 짜잘한 데이터 구문 한두개 추가인 관계로 스킵중. Plan이 정상적으로 작동하는 것을 확인했으니 결재가 됬다는 가정하에 Ongoing에서 남은 날짜와 함께 업무 진행도가 보여지게 연결할 예정. 차후 common 폴더와 v1 파일들을 정리하여 보다 이름들에 맞게 분리할 예정. 현재 createPlan이 너무 하드코딩 된 부분이 많아 이 부분에 대해 컴포넌트로 이동을 시키던 코드 최적화를 하던 해서 좀 더 보기 쉽게 할 예정. 프로젝트 진행도에 따른 CRUD가 완성되는 대로 나머지 파트는 금방 만들듯?

### 2023-10-26 프로젝트 진행에서 상세 버튼을 누르면 상세 기한, 내용, 작업테이블이 보이게 바꿈. 현재로썬 OngoingDetail 페이지가 필요가 없어져 차후 삭제 예정. 이 이후부터는 총괄 결재를 만들어야 함. 결재 작업 시작. 결재 composable에는 타입과 상태를 주고받도록 List2개와 함수가 들어가있음. 현재 결재 요청 정상적으로 들어오고 테이블도 잘 들어오는거 확인했지만 dialog가 다시 눌렀을때 안켜지는 문제가 있어 내일 디버그 예정. 해당 페이지가 정상작동하게 되면 결재가 가능해질 것. 현재 joblist, memberlist, approvallist, projectPlanlist 4개의 composable은 거의 전역변수처럼 많이 쓰이고 있어 inject 기능을 이용할까 생각해볼것.

### 2023-10-27 결재 테이블 및 상세 결재 내용, 다중결재 전부 완료. dialog 관련해서는 메인페이지가 아니라 table이 가지는 값으로 바꿈. 추가로 showMemberV2가 약간 뻣뻣하게 돌아가던 사항을 수정. 이제 생성할때 결재 요청을 먼저 완료해야 진행중에서 뜨게 됨. 다만 이렇게 할 시 프로젝트 계획안 페이지에서 결재가 되지 않은 페이지는 보이지 않는다는 단점이 있음. 지금 생각으로는 planList나 approvalList 둘중 하나에 결재가 되지 않아도 미결재 사항으로 보여지게끔 할 함수 작성 예정. 추후 필요한 작업으로는 projectOngoing 페이지에서 이제 업무 진행사항 업데이트 하는 것을 요청할 수 있도록 하는 페이지 레이아웃(연결 자체는 금방 할듯)과 기한 관련해서 경고사항이 뜨거나 기한이 넘겨진 프로젝트들에 대해 어떻게 뜨게 할 것인지, 그리고 기타 페이지들 작성. showMember와 showAllocate 2개는 현재로써는 매우 자주쓸 컴포넌트가 될 가능성이 있어 composables로 바뀌거나 혹은 해당 코드로 넘어갈때 다른 composable에서 값을 미리 처리해주고 넘어갈 수 있게 할 예정.

### 2023-10-30 업무 결재 제작 시작. 현재 문제가 생겼는데 db를 쓰면 사실 index를 이용해 매우 간단해질 특정 프로젝트 내부 특정 업무 수정이 지금 너무 복잡해지고 있음. 이건 정말 추후 db api가 연결 제대로 되면 금방할 문제라고 봐서 현재로썬 대충 돌아가게만 만들고 페이지 구현에 집중해야할거같음. 결재 자체는 잘 승인되게 바꿨지만 이게 기존 데이터로 넘어가게 하는건 정말 안되고 있는중. 결재 메커니즘이 지나치게 복잡해지는 감이 있어 코드 최적화가 필요해보임. 현재 완료로 넘어가는 것 까진 가능하지만 2가지 문제점이 해결되지 않음. 1. 진행상태가 100%가 됬을때 진행 페이지에서 더이상 렌더링 하지 않는것 2. 하나의 프로젝트에서 2번째 결재가 나올때 결재 자체는 어찌 되는데 전혀 정상작동하지 않음.

### 2023-10-31 결재 문제 해결 완료. projectPlanList에서 저장 단계부터 works 와 나머지를 분리해서 집어넣음으로써 진행 단계에서 works를 보다 쉽게 불러오고 사용할 수 있도록 변경하였고 그 과정에서 수많은 시행착오 끝에 현재 정상작동함. complete로 넘어가서 뜨게는 만들었고 현재 결재 창에서만 볼 수 있는 상세 프로젝트 사항의 레이아웃과 일부 css를 수정하여 좀 더 보기 편하게 만들 예정. 그리고 해당 코드를 응용해서 완료 프로젝트에서도 사용할 수 있게 변경할 예정. 그리고 일부 버튼들이 특정 상황에서 더이상 나오지 않게 하게(프로젝트 생성하고 있을때 생성버튼같은거)하여 좀 더 쓰기 편하게 만들기. 현재 showPlan이 조금 이상한 구도로 되어있어 해당 페이지 V2가 나올수도 있음. 대신 수정 페이지, 업무보고창 좀 더 다듬기 하면 project 폴더 내부 파일은 끝이며 approval도 현재 안정적으로 돌아가고 있어 approval finished도 만들기만 하면 됨. 그게 다 되면 이제 남은 member, admin만 건들면 끝.

### 2023-11-01 삭제는 되는데 수정이 안되서 거의 6시간을 헤맴. 코드를 거의 5번정도 지우고 다시쓰고 반복한 결과 approvalList에서 projectPlanList를 쓸때 this.를 붙일 필요가 전혀 없었는데 붙이고 있던 것이 원인이 되었음. 아무런 에러도 안뜨던 상황이라 엄청나게 헤맸었는데 차후 이런 상황이 오면 try catch 를 통해서 에러를 찾으면 됨. 엄청나게 헤맸는데 알고보니 되게 단순한게 원인이어서 굉장히 허탈함. 오늘은 하루종일 이 문제때문에 다른 건 거의 건들지도 못함. 하지만 이제 수정과 삭제가 가능하니 프로젝트의 CRUD중 U에서 업무 리스트를 불러오게만 만들고 onGoing에서 아직 시작일이 되지 않은 프로젝트를 보는 페이지 1개를 만들면 됨. 현재로써는 tab 기능을 활용하려고 함. 그리고 오늘 projectPlanList같은 경우 일부 반복적으로 사용되는 기능을 간소화했는데 다른 파트들이 모두 완성되면 이러한 가독성 떨어지는 코드들을 최적화 해야할것 같음. 지금 생각해보면 삭제도 거의 동일코드 사용이었는데 어떻게 삭제가 가능했는지도 모르겠음.

### 2023-11-02 vue-cookie를 사용하여 데이터가 7일간 저장되게 만들어두었음. 테스트할때 매우매우매우 편함. 진작 이렇게 할걸 그랬음. onGoing 페이지가 tab 기능을 활용해서 시작하지 않은 프로젝트를 테이블로 볼 수 있게 했음. 이것저것 짜잘한 css를 수정해서 좀 더 보기 좋게 바꿈. showPlan의 일부 코드를 더 수정해서 common으로 격상시킬 예정.(현재는 onGoing, projectPlan 2개가 참조하지만 Completed도 참조할 예정). 이거 바꾸고 짜잘한 css들 고치면 프로젝트 쪽은 완전히 완성됬다고 볼 수있음. 이제 계획했던 admin 페이지와 Approval 페이지들 css 같은 기타 짜잘한거 수정, member 페이지 수정하면 진짜로 끝!

### 2023-11-03 memberList 와 관련해서 이것저것 본격적인 시작. 가입자가 가진 속성의 개수를 늘리고 아직 admin 한정은 아니지만 admin이 addUser를 할수있게 했음. 그리고 RankList를 통해서 항상 파트->높은직군 순으로 정렬되게 만들었고 해당 사람들이 주소록을 열어볼 수 있게 만들었음. showPlan 문제도 해결했고 personalWork까지도 잘 나옴. writeNotice, 메인페이지, 공지 composable 정도 남은듯?

### 2023-11-06 mainPage에 들어갈 공지 레이아웃 대강 구도 잡은 후 fullcalendar 사용하는 이벤트 작업 시작. 현재 생성까지 확인됬고 오늘 머리가 좀 안도는 관계로 내일 일어나서 initialEvent 관련해서 다시 정리하고 지금 확인만을 위해 만들어진 event.push들을 모두 eventList.js로 옮겨 거기서 처리하게 할 예정. 이 이벤트 중에서 반복적으로 발생하는 이벤트는 지금 현재 생각으로 별도 페이지로 분리하여 작성할 수 있게 할 예정. 해당 event만 잘 완성되면 개인 연차 같은건 순식간에 완성할 수 있는 관계로 이 eventList Js가 쉽고 간단하게 완성되어야함. 그리고 mainPage에 chart 만드는 api를 찾던 해서 완료된 업무/미완료된 업무 나 기한이 급한 업무들이 상위에 표시될 수 있도록 할 예정. 이 이후로는 단순 계획사항이고 실제로 실현되지 않을수도 있지만, header에 알람을 만들어 업무 할당이나 공지, 일정 생성 등의 특이사항이 생겼을 때 알람으로 확인할 수 있게 하는 방안 생각중.

### 2023-11-08 event 반복 이벤트 추가를 포함해서 완성. 현재 공지사항 작업 시작. 게시판과 pagination이 정상작동하면 메인페이지에 두개 넣으면서 들어갈 것임. event 쿠키는 크키가 너무 커서 문제가 발생했는데, 현재로써는 lzString으로 처리했으며 추후에는 다른 방법을 찾아가야함. 공지사항 작성이 끝나면 거의 다 완성.

### 2023-11-09 공지사항 작성 완성. 인덱스가 높을 수록 앞으로 가게 하되 내부에서 index를 따로 가져 그걸로 검색할 수 있게 해둠. mainPage 작업 시작. 현재로써 계획은 반갑습니다! 하고 4개의 카드 형식으로 페이지를 여는 당일 moment()를 이용해 해당 시간대에 포함되는 일정, 업무, 이벤트만 간략하게 보여지게 하고, 각각의 테이블은 다른 페이지로 이어지는 버튼을 넣을 예정. mainPage 완성 이후에 로그인 기능과 admin 기능 일부 건드리고 css 좀 더 손보면 진짜 끝.
