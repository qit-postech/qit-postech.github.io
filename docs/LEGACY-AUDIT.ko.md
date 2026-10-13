# QIT@KIST 기존 사이트 조사

확인일: 2026-10-13. 출처 상태: **legacy**. 공개 홈페이지 루트와 아래 5개 메뉴를 직접 HTTPS 조회하여 전체 텍스트, 링크, 이미지 요소 URL 및 같은 사이트 경로를 추출했다. 웹 열기 도구는 루트에서 접근 오류가 발생했지만 공개 HTML 직접 요청은 성공했다. 공개 내비게이션과 다섯 페이지 HTML에서 추가 하위 경로는 발견되지 않았다. 비공개·링크되지 않은 페이지의 부재까지 입증하는 조사는 아니다.

|페이지|내용|콘텐츠 이미지 / 전체 img 요소|이관 판단|
|---|---|---:|---|
|[Home](https://sites.google.com/view/qitkist/home)|QIT@KIST 소개, ICRCQEC, U. Chicago·Xanadu·SNU 협력 소개, 3개 메뉴 카드, KIST 주소|3 / 5|연구 주제를 참고하되 POSTECH 소속·현 협력관계와 구별|
|[Group members](https://sites.google.com/view/qitkist/group-members)|PI 이력, PI 외 7명, alumni 4명|8 / 10|모두 KIST 과거 사이트 기록으로만 사용; 현재 POSTECH 명단으로 전환 금지|
|[Researches](https://sites.google.com/view/qitkist/researches)|오류정정·내결함성, 오류억제·완화, 양자네트워크·분산계산, 정보이론·알고리즘·기초|11 / 13|연구영역 사실을 재구성 가능; 원본 그림은 권리 확인 전 재게시 금지|
|[Publications](https://sites.google.com/view/qitkist/publications)|2005–2024 논문, Recent/Full 목록, 보도 링크, PRL 표지 캡션|1 / 3|54개 고유 서지 레코드를 legacy로 보존; 19개 중복 제거|
|[Contact](https://sites.google.com/view/qitkist/contact)|KIST 주소·전화·팩스·개인 이메일·채용 공지|0 / 2|POSTECH 현재 연락처로 이관 금지; 새 공식 확인값 필요|

총 img 요소 33개, 콘텐츠 이미지 23개, 나머지는 각 페이지에 두 번 등장하는 사이트 로고이다. 위 이미지 성격은 배치·주변 텍스트에 따른 분류이며 원본 픽셀을 별도 수집하지 않았다. 원본 사진 다운로드 및 재게시를 하지 않았고, URL/alt/주변 텍스트만 JSON에 기록했다. 이미지와 원문 전체의 재사용 허락은 확인되지 않았다.

## 논문 데이터

`src/data/publications.json`: 고유 논문 54개, 원래 표시 위치 73개. `publications` 배열 항목은 `title`, `authors`(원문 문자열), `year`, `publicationInfo`, `doi`, `arxiv`, `url`, `sourceUrl`, `sourceStatus`, `sourceChecked`, `section`, `sourceOccurrences`, `verification`을 가진다. 원문 약어 SWL과 별표를 임의 확장·삭제하지 않았다. URL에 DOI가 명시된 경우에만 추출하고 DOI 미확인값은 null로 보존했다. 출판연도는 인용문의 괄호 속 연도이며, 원문 서지 오류를 임의 수정하지 않았다.

2024년 “Qudit-based variational quantum eigensolver using photonic orbital angular momentum states”는 Recent에만 있고 Full에는 없다. 두 목록의 합집합을 보존해야 한다. 홈페이지의 “Full” 표기가 전체 경력 논문의 완전성을 보장하지 않는다.

두 논문은 출판사 원문 페이지에서 제목·저자 순서/인물·연도·권호·DOI를 별도 대조했다. legacy 원문 값과 publisher 확인값을 `verification`으로 분리했다.

- [PRX Quantum 5, 030322](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.030322): 2024-08-02 출판. 2025-01-29 수식 오타 정정도 출판사 페이지에 존재한다.
- [Phys. Rev. Lett. 133, 050605](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.050605): 2024-08-01 출판. 논문 당시 Seung-Woo Lee 소속은 KIST로 표시된다.

다른 52개는 기존 사이트 전사이며 전수 출판사 검증 완료로 표시하면 안 된다. 최신 표시 논문이 2024년이라는 사실은 2025–2026 연구가 없다는 의미가 아니다.

## 인력·시점

별도 작업용 인력 근거에 PI Seung-Woo Lee, Sangjin Lee, Hyukgun Kwon, Jeonghyeon Shin, Sewon Jeong, Kwangjun Choi, Nuri Kang, Seongyeop Lim 및 alumni HATICE MESAKKAT, Wooyeong Song, Jaehak Lee, Shrobona Bagchi를 기록했다. 역할·이동처는 **기존 페이지에 적힌 내용**이며 현재 유효하다고 확인되지 않았다. 기존 페이지에는 읽을 수 있는 갱신 날짜가 없다. `sourceChecked`는 자료를 조회한 날짜이며 구성원 현황의 기준일이 아니다. 개인 전화·이메일을 people 데이터나 새 연락처로 복제하지 않았다.

## 산출물

- `legacy-inventory.json`: 5개 페이지의 경로, 이미지 URL·권리상태, 이관판단을 제공한다. 전체 추출 텍스트는 공개 소스에 포함하지 않는다.
- `src/data/publications.json`: 54개 고유 서지와 73개 원래 출현 기록, 2개 출판사 대조.
- 별도 작업용 인력 근거: 과거 사이트 명단 12명과 명시적 현재 POSTECH 상태 미확인 표시.
- 이 보고서 및 공개 HTML 근거는 작업용 폴더에만 보존. 공개 저장소에 원본 HTML과 전체 전사 JSON을 포함하지 않는다.

## 화면 확인 보완

공개 5개 경로를 실제 브라우저로 렌더링하고 페이지 전체를 확인했습니다. 이미지 요소 33개가 모두 로드됨을 확인했으며 연구 도해·구성원 사진·로고·표지의 배치를 작업용 스크린샷에서 검토했습니다. 원본 사진·도표 파일과 스크린샷은 새 사이트·배포 패키지에 포함하지 않았습니다. 인벤토리는 URL과 권리 미확인 상태만 제공합니다.
