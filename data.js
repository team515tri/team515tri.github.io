/* ═══════════════════════════════════════════════════════════════
   Team515 앱 데이터 — 업데이트는 이 파일만 고치면 됩니다.
   (호스팅에 올린 뒤에는 이 파일만 수정·재배포하면 모든 폰에 반영)
   날짜 형식: "YYYY-MM-DD"  / 날짜 미정이면 "2026-09-XX"
   ═══════════════════════════════════════════════════════════════ */

const DATA = {

  /* ───── 구글시트 연동 (선택) ─────
     비워두면 아래 races 기본값을 사용합니다.
     설정하면 운영진 누구나 시트만 고쳐서 레이스를 추가/수정할 수 있습니다.
     (시트 → 파일 → 공유 → 웹에 게시 → CSV → 나온 링크를 여기 붙여넣기)
     ※ 시트가 비었거나 오프라인이면 자동으로 아래 races 기본값으로 폴백
     ※ 원본 시트(편집용): https://docs.google.com/spreadsheets/d/1gKnWseD7YtM_8bCfMoAu_Ds3Gu0ieAGbOFaPefvllZw/edit
        아래 SHEET_CSV_URL은 그 시트의 "웹에 게시" 읽기전용 CSV 링크 */
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSKQU6Nw8UT2V8MVDWrVKYwwKoE4MC4-YarjCV1rX2eK7kA3jtwRntHFGg6nm_erM_wTVtWlszk__zW/pub?output=csv",

  /* ───── 레이스 캘린더 (시트 미설정 시 기본값 / 폴백) ─────
     dist: sprint | oly | half | full | marathon | etc
     members: 참가 확정/예정 멤버 (없으면 [])
     ※ 개인 기록(이름+기록)은 공개하지 않습니다 — results-private.json에 비공개 보관
        (data.js는 사이트에 그대로 서빙되므로 여기 적으면 누구나 볼 수 있음)
     major: true → 금색 👑 크라운 + 글로우로 강조 (풀아이언맨·월드마라톤메이저 등 큰 대회만)
     ※ 아래는 예시 — 실제 대회 날짜는 확인 후 입력하세요(미정은 XX 유지). */
  races: [
    { date:"2026-06-14", name:"IRONMAN 70.3 Eagleman", dist:"half", place:"Cambridge, MD",
      members:["Ray"],
      photos:["img/eagleman/01.jpg","img/eagleman/02.jpg","img/eagleman/03.jpg",
              "img/eagleman/04.jpg","img/eagleman/05.jpg","img/eagleman/06.jpg",
              "img/eagleman/07.jpg","img/eagleman/08.jpg","img/eagleman/09.jpg",
              "img/eagleman/10.jpg","img/eagleman/11.jpg","img/eagleman/12.jpg",
              "img/eagleman/13.jpg","img/eagleman/14.jpg","img/eagleman/15.jpg",
              "img/eagleman/16.jpg"] },
    { date:"2026-07-19", name:"SuperTri NJ", dist:"oly",  place:"New Jersey",
      members:["Bosco","Ray","Junho"] },
    { date:"2026-08-08", name:"2026 USA Triathlon Nationals", dist:"oly", place:"Milwaukee, WI",
      members:["Ray"] },
    { date:"2026-08-09", name:"Staten Island Triathlon", dist:"sprint", place:"Staten Island, NY",
      members:["Bosco","Nick"] },
    { date:"2026-09-19", name:"IRONMAN Maryland", dist:"full", place:"Cambridge, MD",
      members:["Junho"], major:true },
    { date:"2026-10-24", name:"IRONMAN 70.3 Jones Beach", dist:"half", place:"Jones Beach, NY",
      members:["Bosco"], note:"9/26 노리스터로 취소 → 10/24 재개최 (스윔 1500m 단축)" },
    { date:"2026-10-10", name:"Big Apple Triathlon", dist:"oly", place:"New York",
      members:["Bosco","Ray","Nick"] },
    { date:"2026-10-11", name:"Chicago Marathon", dist:"marathon", place:"Chicago, IL",
      members:["Sam"], major:true },
    { date:"2026-10-18", name:"Atlantic City Marathon", dist:"marathon", place:"Atlantic City, NJ",
      members:["John","Junho"] },
    { date:"2026-11-01", name:"TCS New York City Marathon", dist:"marathon", place:"New York, NY",
      members:["Ray"], major:true, note:"Bosco 봉사 참여 → 9+1 완료 (2027 출전권)" },
    { date:"2026-11-22", name:"Philadelphia Marathon", dist:"marathon", place:"Philadelphia, PA",
      members:["John"] },
    { date:"2026-12-13", name:"IRONMAN 70.3 Florida", dist:"half", place:"Haines City, FL",
      members:["Nick"] },
    /* ───── 2027 시즌 ───── */
    { date:"2027-03-21", name:"United Airlines NYC Half", dist:"marathon", place:"New York, NY",
      members:[], note:"하프 마라톤" },
    { date:"2027-04-18", name:"Jersey City Marathon & Half", dist:"marathon", place:"Jersey City, NJ",
      members:["Bosco"], note:"풀 / 하프 동시 개최" },
    { date:"2027-04-24", name:"Spartan Ultra 50K", dist:"etc", place:"미정",
      members:[], note:"50K · 장애물 60개" },
    { date:"2027-06-13", name:"IRONMAN 70.3 Lake George", dist:"half", place:"Lake George, NY",
      members:[], note:"★ 신규 대회 · 등록 10/29 오픈 · 70.3 월드챔피언십 슬롯 배정" },
    { date:"2027-06-13", name:"Escape the Cape Triathlon", dist:"sprint", place:"Lower Township, NJ",
      members:[], note:"페리에서 점프 입수 · 스프린트/올림픽/릴레이" },
    { date:"2027-06-26", name:"Hudson Valley Triathlon", dist:"oly", place:"Williams Lake, NY",
      members:[], note:"Alpha Win · 스프린트/올림픽 · Ashokan Reservoir 바이크" },
    { date:"2027-07-18", name:"supertri New Jersey", dist:"oly", place:"Mercer County Park, NJ",
      members:[], note:"🏆 NJ 주 챔피언십 · 슈퍼스프린트/스프린트/올림픽 · 평지 고속 코스 (입문 추천)" },
    { date:"2027-07-25", name:"IRONMAN Lake Placid", dist:"full", place:"Lake Placid, NY",
      members:["Bosco","Ray","Sam","John","Junho","Jaesun","Nick","Hugh","Zeno"],
      major:true, note:"팀 전원 참가 예정" },
    { date:"2027-08-01", name:"Atlantic City Triathlon", dist:"oly", place:"Atlantic City, NJ",
      members:[], note:"DelMo Sports · 스프린트/올림픽" },
    { date:"2027-09-04", name:"Alpha Win Lake George Triathlon", dist:"oly", place:"Lake George, NY",
      members:[], note:"🏆 USAT NY North 주 챔피언십 · 스프린트/올림픽 · 9/4-5" },
    { date:"2027-09-11", name:"TOUGHMAN Harriman", dist:"half", place:"Lake Welch Beach, Stony Point, NY",
      members:[], note:"★ 하프/올림픽/아쿠아바이크/Kids · 9/11-12 · 가족 동반 좋음" },
    { date:"2027-09-18", name:"TOUGHMAN Westchester", dist:"oly", place:"Playland Park, Rye, NY",
      members:[], note:"올림픽/아쿠아바이크/듀애슬론/릴레이 · 9/18-19" },
    { date:"2027-09-XX", name:"IRONMAN 70.3 New York", dist:"half", place:"Jones Beach, NY",
      members:[], note:"9월 말 예정 · 날짜 미발표" },
    { date:"2027-11-07", name:"TCS New York City Marathon", dist:"marathon", place:"New York, NY",
      members:["Bosco"], major:true, note:"Bosco 9+1 출전권 확보" },
    // { date:"2026-08-XX", name:"대회명", dist:"sprint", place:"장소", members:["이름","이름"] },
  ],

  /* ───── 풀 아이언맨(140.6) 뱃지 로고 (선택) ─────
     비워두면 빨간 "IRONMAN 140.6" 글자 뱃지만 표시.
     경로를 넣으면(예: "logos/mdot.png") 글자 앞에 로고 이미지가 붙음.
     ※ M-Dot은 IRONMAN(WTC) 등록상표 — 공개 사이트 사용은 상표 리스크 있음 */
  ironLogo: "",

  /* ───── 취소된 레이스 (시트에 행이 남아 있어도 앱에서 숨김) ─────
     시트 행을 지우는 게 정석. 여기 이름을 적으면 임시로 안 보이게 함. */
  hideRaces: ["IRONMAN 70.3 Musselman",
              "IRONMAN 70.3 Jones Beach|2026-09-26"],  // 노리스터로 10/24 재개최 — 옛 시트 행 숨김

  /* 시즌별 훈련 계획 — 2026-10-26 팀 공지 기준 */
  trainingSeasons: [
    { name:"겨울", label:"WINTER", icon:"ph-bicycle", focus:"실내에서 쌓는 기본기",
      sessions:[{day:"화 · 목",title:"실내 자전거 트레이너",detail:"이 중 하루는 인터벌 훈련"},
        {day:"금",title:"수영",detail:""},
        {day:"토",title:"실내 삼종 · 트런 · 로드런",detail:"날씨에 따라 훈련 방식 조정"}] },
    { name:"봄", label:"SPRING", icon:"ph-person-simple-run", focus:"레이크플래시드 · Jersey City 마라톤 대비",
      sessions:[{day:"화",title:"템포런",detail:""},{day:"목",title:"인터벌 러닝",detail:""},{day:"토",title:"롱런",detail:""}] },
    { name:"여름", label:"SUMMER", icon:"ph-barbell", focus:"각자의 루틴에 필요한 보완",
      sessions:[{day:"개인별",title:"부족한 종목 위주로 보완",detail:"자리 잡은 훈련 루틴을 이어가며 개인별로 조정"}] }
  ],
  trainingEvent: { title:"가을 중장거리 라이딩", date:"2026-11-14", status:"예정", note:"세부 내용은 훈련 일주일 전 카톡방에 다시 공지합니다." },
  trainingMessage:"레이크플래시드는 최종 목표가 아닌 하나의 마일스톤입니다. 그 과정에서 도전하고 싶은 대회가 있다면 팀원들과 공유해 주세요.",
  trainingNote: "기본 훈련 시작은 새벽 5:30 (중요한 날은 5:15) · 시즌·일출·날씨에 따라 조정 · 주 1회 이상 참여. 개별 훈련 시간과 집결 장소는 카톡 공지를 확인하세요.",

  /* ───── 팀 레벨 (아이언맨 70.3 기준) ───── */
  levels: [
    { name:"A-Team",   range:"~ 5:15:00",        color:"#ff5a3c" },
    { name:"B-Team",   range:"5:15 ~ 5:45",      color:"#ff9f43" },
    { name:"C-Team",   range:"5:45 ~ 6:15",      color:"#4d9fff" },
    { name:"철린이 Team", range:"6:15+ / 입문자",   color:"#3ec9a7" },
  ],

  /* ───── 입장/가입 핵심 규정 ───── */
  rules: [
    { t:"가입 자격", d:"365일 이내 철인대회 등록 기록, 또는 입장 후 1개월 내 대회 등록 예정" },
    { t:"인정 대회", d:"스프린트 · 올림픽 · 70.3 · 풀 아이언맨 · 기타 공식 철인경기" },
    { t:"준회원", d:"마라톤·사이클·오픈워터 수영을 진지하게 하는 선수도 환영 (운영진 승인 + 정기 훈련 참여)" },
    { t:"훈련 의무", d:"주 1회 이상 팀 훈련 참여 필수. 불참 시 팀장·부팀장에게 사전·사후 보고" },
    { t:"정리 대상", d:"관망만 / 정보만 수집 / 대회 계획 없음 — 단, 여건 되면 언제든 재가입 환영" },
    { t:"Team Kit", d:"공식 목표 대회 참가 시 Team515 공식 키트 착용 원칙" },
  ],

  /* ───── 이런 분과 함께합니다 (공개 소개 · 긍정 톤) ───── */
  welcome: [
    "트라이애슬론을 진지하게 즐기고 싶은 분",
    "함께 새벽 훈련하고 대회에 나가며 성장하고 싶은 분",
    "마라톤 · 사이클 · 오픈워터 수영을 진지하게 하는 분도 환영",
    "목표 대회를 정하고 꾸준히 준비하고 싶은 분",
  ],

  /* ───── 핵심 가치 ───── */
  values: [
    { en:"Commitment", ko:"헌신", d:"주 1회 이상, 꾸준히 함께하는 훈련" },
    { en:"Accountability", ko:"책임", d:"약속한 목표를 향해 꾸준히" },
    { en:"Respect", ko:"존중", d:"팀원과 경쟁자를 존중" },
    { en:"Growth", ko:"성장", d:"어제보다 강한 철인" },
    { en:"Team First", ko:"팀 우선", d:"혼자 빠른 선수보다 함께 강한 팀" },
  ],

  /* ───── 운영진 ───── */
  staff: [
    { role:"팀장", name:"Ray Lee" },
    { role:"부팀장", name:"Sam Han" },
    { role:"부팀장", name:"Junho Lee" },
    { role:"총무", name:"John Kim" },
    { role:"대외홍보부장", name:"Bosco Park" },
  ],

  /* ───── 창단 멤버 (2026 시즌) ─────
     rosterTitle 을 비우면 섹션 자체가 안 보임. */
  rosterTitle: "창단 멤버 · 2026",
  roster: [
    "Ray Lee", "Sam Han", "Junho Lee", "John Kim", "Bosco Park",
    "Jaesun Lee", "Hugh Shim", "Zeno Cho", "Jaeseong Park", "Nick Chung",
  ],

  /* ───── 홈 하이라이트 (공개) ─────
     사진 1장 또는 영상 1개. 비우면 섹션 자체가 안 보임.
     img: 레포 경로(예: "img/highlight.jpg") 또는 이미지 URL
     video: 유튜브/IG 링크 (있으면 영상 우선) */
  highlight: { img:"", video:"", caption:"" },

  /* ───── 외부 연결 링크 ─────
     공개 가입 동선 = 인스타 DM 문의. (오픈채팅은 운영진이 직접 초대 → 앱에 공개 안 함) */
  instagram: "https://www.instagram.com/team515_tri/",   // 공개 가입 CTA가 여기로 연결됨
  // 홈에 띄울 인스타 포스트 (최신순). 글 올린 뒤 포스트 URL 추가하면 홈에 임베드됨.
  // 예: "https://www.instagram.com/p/XXXXXXXXX/"
  instaPosts: [],
  // 카톡 오픈채팅 = 운영진이 DM으로 직접 초대 (보안상 public 소스에 링크 미보관)
};
