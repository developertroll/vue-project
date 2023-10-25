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
