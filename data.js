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
     ※ 시트가 비었거나 오프라인이면 자동으로 아래 races 기본값으로 폴백 */
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSKQU6Nw8UT2V8MVDWrVKYwwKoE4MC4-YarjCV1rX2eK7kA3jtwRntHFGg6nm_erM_wTVtWlszk__zW/pub?output=csv",

  /* ───── 레이스 캘린더 (시트 미설정 시 기본값 / 폴백) ─────
     dist: sprint | oly | half | full | etc
     members: 참가 확정/예정 멤버 (없으면 [])
     ※ 아래는 예시 — 실제 대회 날짜는 확인 후 입력하세요(미정은 XX 유지). */
  races: [
    { date:"2026-07-19", name:"SuperTri NJ", dist:"oly",  place:"New Jersey",
      members:["Bosco","Ray","Junho"] },
    { date:"2026-09-26", name:"IRONMAN 70.3 Jones Beach", dist:"half", place:"Jones Beach, NY",
      members:["Bosco"] },
    { date:"2026-10-10", name:"Big Apple Triathlon", dist:"oly", place:"New York",
      members:["Bosco","Ray"] },
    { date:"2027-07-XX", name:"IRONMAN 70.3 Musselman", dist:"half", place:"Geneva, NY",
      members:["Bosco"], note:"2027년 7월 · 날짜 미발표" },
    // { date:"2026-08-XX", name:"대회명", dist:"sprint", place:"장소", members:["이름","이름"] },
  ],

  /* ───── 주간 정기 훈련 (새벽 5:15~5:30 시작) ───── */
  training: [
    { day:"화", icon:"🚴", title:"인터벌 라이딩", type:"bike" },
    { day:"목", icon:"🏃", title:"인터벌 러닝",   type:"run" },
    { day:"금", icon:"🏊", title:"수영 / 오픈워터", type:"swim" },
    { day:"토", icon:"🚴", title:"롱 라이딩",     type:"bike" },
    { day:"일", icon:"🏃", title:"롱 런",        type:"run" },
  ],
  trainingNote: "모든 훈련 새벽 5:15~5:30 시작 · 시즌·일출·날씨에 따라 조정 · 주 1회 이상 참여 필수",

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

  /* ───── 핵심 가치 ───── */
  values: [
    { en:"Commitment", ko:"헌신", d:"훈련 참여는 선택이 아닌 기본" },
    { en:"Accountability", ko:"책임", d:"약속한 목표를 향해 꾸준히" },
    { en:"Respect", ko:"존중", d:"팀원과 경쟁자를 존중" },
    { en:"Growth", ko:"성장", d:"어제보다 강한 철인" },
    { en:"Team First", ko:"팀 우선", d:"혼자 빠른 선수보다 함께 강한 팀" },
  ],

  /* ───── 운영진 ───── */
  staff: [
    { role:"팀장", name:"Ray Lee" },
    { role:"부팀장", name:"Sam" },
    { role:"총무", name:"John Kim" },
    { role:"대외홍보부장", name:"Bosco" },
    { role:"고문", name:"Junho" },
  ],

  /* ───── 외부 연결 링크 ─────
     공개 가입 동선 = 인스타 DM 문의. (오픈채팅은 운영진이 직접 초대 → 앱에 공개 안 함) */
  instagram: "https://www.instagram.com/team515_tri/",   // 공개 가입 CTA가 여기로 연결됨
  // 카톡 오픈채팅 = 운영진이 DM으로 직접 초대 (보안상 public 소스에 링크 미보관)
};
