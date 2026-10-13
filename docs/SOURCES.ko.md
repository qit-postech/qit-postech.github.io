# 공식 자료 검증 메모

열람일: 2026-10-13. 구조화 기록: `verified-facts.json`. 내용은 홈페이지 개편 근거용이며 공개 여부와 재사용 권한은 구별한다.

## 사이트에 사용할 수 있는 확인 사실

[POSTECH 물리학과 교수 소개](https://ph.postech.ac.kr/physics/member/professor.do?articleNo=36802&mode=view)는 이승우를 전임교수로, 연구실을 Quantum Information Theory Group으로 소개한다. 공개 업무 연락처는 swleego@postech.ac.kr, 054-279-2083이고 사무실 표기는 3-417이다. 이 표기를 특정 건물명이나 학생 연구실 주소로 확장하지 않는다. 학과 공통 우편주소는 37673 경상북도 포항시 남구 청암로 77이다. 양자정보이론, 양자컴퓨팅·알고리즘·통신·센싱, 양자이론 기초를 관심 분야로 기재한다. 신뢰도 높음; 페이지 갱신일은 표시되지 않는다.

[융합대학원 양자정보과학전공 교수진](https://quantum.postech.ac.kr/faculty)에서도 물리학과 소속, 동일 업무 이메일, 양자오류정정 분야를 확인했다. 교수 개인의 현재 소속과 연구분야에 대한 독립 교차 확인이다. 학과 바깥 행정팀 주소인 지곡로 80 c5 712호를 연구실 주소로 사용하면 안 된다.

[2025년 가을 물리학과 콜로퀴움](https://ph.postech.ac.kr/physics/community/seminars-colloquiums.do?articleNo=39058&mode=view)의 영문 표기는 Seung-Woo Lee이다. 과거 행사 공지이므로 현재 세부 직급이나 구성원 명단을 증명하지는 않는다. POSTECH 생명과학과에 동명이인이 있으므로 monk@postech.ac.kr, sw_lee@postech.ac.kr 및 면역학 이력은 제외했다.

Assistant Professor 여부는 확인되지 않았다. 전임교수라는 분류를 조교수로 번역하면 안 된다. 세부 직급 대신 Professor 또는 Principal Investigator(역할 표현)를 사용하되 정교수라는 뜻의 Full Professor는 쓰지 않는다. 정확한 연구책임자의 이전·임용 날짜는 확정하지 않는다. 구성원 명단은 이후 사용자 제공 PPT·현황 설명과 아래 이전 구성원별 출처를 반영했다.

## qit.postech.ac.kr 상태

학과 소개는 이미 https://qit.postech.ac.kr/ 를 연구실 홈페이지로 연결한다. [POSTECH 산학협력단 검색 페이지](https://aif.postech.ac.kr/kor/research/researcher-search.do?articleNo=328&mode=view&title=%EC%9D%B4%EC%8A%B9%EC%9A%B0)의 검색 색인도 같은 링크와 물리학과 소속을 보여준다. 후자는 직접 열람 도구 오류가 있었으므로 학과 본문을 주 근거로 삼는다.

같은 날 공개 DNS 조회 결과 A 레코드는 141.223.5.166이고, HTTP/HTTPS 요청은 모두 404 응답이었다. 따라서 공식 링크와 DNS 레코드는 존재하지만 현재 작동하는 연구실 홈페이지는 이 조회에서 확인하지 못했다. 미할당 도메인이라거나 사용자의 변경 권한이 있다고 결론 내리지 않는다. 새 CNAME을 배포 파일에 임의로 확정하지 않는다.

## POSTECH SITES가 실제로 말하는 것

[공식 SITES 안내 및 홈 FAQ](https://sites.postech.ac.kr/guide/index.do)는 외부 제작이나 자체 제작 사이트도 개설 신청할 수 있다고 설명한다. 로그인 후 신청하고 관리자의 승인·처리를 거치며 결과가 이메일로 발송된다. 사이트 완성 후 웹 취약성 점검을 이행하는 절차다. 연구실 운영 담당자는 재학생 또는 재직 교직원이 될 수 있으며 책임자는 교직원이어야 한다. 신뢰도 높음; 현행 공개 안내 기준이다.

이는 GitHub Pages라는 외부 호스팅 서비스가 자동 허용된다는 의미가 아니다. 공개 문서에서 GitHub Pages의 승인 여부, 외부 호스팅 제한, 대학 DNS 변경 세부 절차는 확인하지 못했다. SITES 공개 문의처는 hemos@postech.ac.kr / 054-279-2513이다. 최종 도메인 연결 전에는 담당자가 해당 호스팅 방식과 기존 qit 도메인 처리 방법을 확인해야 한다.

[사이트 운영 유의사항](https://sites.postech.ac.kr/guide/use/USE0201.do)은 운영자·책임자 관리, 정보 최신성 유지, 정보기술팀의 연 1회 취약성 점검을 규정한다. [웹 정책](https://sites.postech.ac.kr/guide/gui/GUI0201.do)은 접근성·호환성·개인정보·정보보안·저작권 검토를 안내한다. 기존 인물 사진은 복제하지 않았다. POSTECH 워드마크는 이후 사용자의 명시적 요청에 따라 아래 공식 공개 자료에서 확보해 로컬 검토본에 적용했다.

## GitHub Pages 공식 기술 근거

[What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages): 사용자·조직 기본 사이트는 계정 도메인의 루트, 프로젝트 사이트는 저장소 이름을 포함한 하위 경로다. 따라서 루트 배포와 `/repositoryname/` 배포 양쪽에서 내부 링크·이미지·스크립트가 작동해야 한다.

[Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site): 저장소 Pages에서 custom domain을 지정하고 DNS 관리자 측 CNAME을 설정한다. 서브도메인의 CNAME 대상은 `<owner>.github.io`이며 저장소명은 포함하지 않는다. 도메인 검증을 권장하며, GitHub 측 설정을 먼저 한 뒤 DNS를 연결한다. HTTPS 사용도 확인한다. 이는 대학 측 승인과 별개인 기술 절차다.

[Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): 브랜치 또는 GitHub Actions를 통해 게시할 수 있다. Custom Actions 게시에서는 CNAME 파일이 무시되므로 파일 한 개를 추가해 도메인 설정을 완료했다고 보고하지 않는다. Pages 설정 또는 API 설정이 필요하다.

## 미확정 항목

- 세부 직급 및 정확한 이전·임용일.
- 현재 학생 6명의 공개 범위와 명단의 추가 변동. 이전 구성원 7명은 아래처럼 사실별 확인 수준을 구분했다.
- 건물 공식 영문명과 학생 연구실 공간.
- GitHub Pages 외부 호스팅의 POSTECH 승인 및 도메인 관리 권한.
- 향후 추가할 사진의 출처·게재 범위. 대학 UI의 사용 조건은 아래 공식 안내와 자산 기록에 별도 보존했다.

사용자 제공 사실과 공식 자료 사실은 분리한다. 특히 현재 POSTECH 소속은 공식 확인했지만, 이전일과 구성원 상태를 그로부터 추론하지 않는다.

## 공식 POSTECH 로고와 새 연구 도해

[POSTECH 로고 안내](https://www.postech.ac.kr/kor/university-introduction/logo.do)와 [POSTECH SITES 로고 타입 안내](https://sites.postech.ac.kr/guide/gui/GUI0301.do)를 확인했다. 선택한 [기본형 워드마크 PNG](https://sites.postech.ac.kr/_res/postech/guide/img/page/postech_default_logo.png)는 `public/brand/postech-wordmark.png`에 원본 바이트로 보존하고 헤더·푸터에 사용한다. 원본 733 × 62 비율과 색을 유지하며 재채색·필터·늘이기·다시 그리기를 하지 않는다. SHA-256과 확보일, 공식 사용 조건은 [로고 근거 JSON](verification/postech-logo.json)에 기록했다.

이번 적용은 사용자 요청에 따른 로컬 검토본 작업이다. 대학의 별도 승인을 받았거나 공개 배포를 완료했다는 뜻은 아니다. 공식 워드마크와 연구실이 새로 제작한 도해의 권리는 구분하며 일괄 오픈소스 라이선스를 부여하지 않는다.

연구 도해 3종은 [편집 가능한 Figma 원본](https://www.figma.com/design/08TK5X1UWkxcvjrSKRiW1e)에서 새로 만든 벡터와 텍스트다. 기존 사이트·논문의 그림을 복제하지 않았다. 개념 설명 범위와 재출력 방법은 [디자인 자산 안내](DESIGN-ASSETS.ko.md)에 정리했다.

## 이전 구성원 7명: 과거 역할과 현 소속 분리

사용자는 기존 Google 사이트의 Alumni 4명과 추가 이전 구성원 Sangjin Lee, Hyukgun Kwon, Nuri Kang의 공개 직업 정보를 사이트에 넣도록 요청했다. `people.json`의 14명 중 이전 구성원은 7명이며, 이 7명의 `approvedForPublic`은 `true`다. 현재 학생 6명의 설정은 `false`로 유지했다. 이 데이터 반영은 외부 배포 완료를 의미하지 않는다.

- [KIAS QUC 구성원](https://www.kias.re.kr/kias/cp/centrsPgmsMng/people.do?centrspgmsCd=QUC&menuNo=403016): Sangjin Lee와 Shrobona Bagchi의 QUC Research Fellow 소속을 공식 확인했다. Sangjin Lee의 한글 표기는 추정하지 않는다.
- [세종대학교 Hyukgun Kwon 프로필](https://sejong.elsevierpure.com/en/persons/hyukgun-kwon/): 물리천문학과 소속을 확인했다. [서울대학교 연구실 alumni](https://squis.snu.ac.kr/alumni/%EA%B6%8C%ED%98%81%EA%B1%B4/)의 권혁건·Assistant Professor 표기를 직급·한글 이름 근거로 함께 사용한다.
- [Yale Puri Group 현 구성원](https://purigroup.research.yale.edu/current-members): Nuri Kang의 Yale 응용물리학 박사과정 소속을 확인했다.
- [기존 Google 사이트 Alumni](https://sites.google.com/view/qitkist/group-members): Hatice Mesakkat, Wooyeong Song, Jaehak Lee, Shrobona Bagchi의 과거 역할·기간을 보존했다. Wooyeong Song의 KISTI 선임연구원, Jaehak Lee의 KIST 선임연구원은 **당시 사이트에 적힌 이동처**로 표시하고 현재성은 확정하지 않는다. Hatice Mesakkat의 현 소속은 미확인이다.

구조화 근거: [기존 Alumni 전사](verification/legacy-alumni-current.json), [기존 Alumni 소속 대조](verification/legacy-alumni-affiliations.json), [Sangjin Lee·Hyukgun Kwon 대조](verification/alumni-sangjin-hyukgun.json), [Nuri Kang 대조](verification/alumni-nuri-kang.json). 이전 구성원이라는 분류는 졸업이나 학위 취득을 뜻하지 않는다. 과거 KIST 표기의 Kwangjun Choi는 현재 POSTECH의 Kwang-Jun Choi와 중복되는 이전 구성원 항목으로 만들지 않았다.
