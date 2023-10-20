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

### 2023-10-20 db연결을 기존 만들어뒀던 api를 활용하기로 결정, api 및 db를 재작업하여 이 프로젝트에서도 쓸수 있도록 할 예정. 기본 common 페이지 기본 상태 작성 이후 api 수정을 위해 다른 파일 작업.
