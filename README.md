# POSTECH Quantum Information Theory Group

교수 검토용 Astro 정적 홈페이지입니다. 영어 기본·한국어 지원으로 Home, Research, People, Publications, News, Join Us, Contact를 제공합니다.

- 기존 5페이지 조사와 54개 과거 논문 이관 + 7개 추가 자료(총 61건, 2005–2026)
- 공식 교수 정보와 사용자 제공 인력 근거 분리
- 구성원 총 14명: 연구책임자 1명, POSTECH / KIST 학생 각 3명, 이전 구성원 7명
- 이전 구성원은 확인된 현 소속·과거 사이트 기록·미확인을 구분하며 사진·개인 연락처 미포함
- 공식 POSTECH 워드마크와 Figma에서 만든 연구 도해 3종
- 논문 검색·연도 필터, 대응 페이지 언어 전환, 모바일 메뉴
- GitHub Pages 루트 / 저장소 하위 경로 / 승인 후 사용자 도메인 지원
- 기본 `review` 모드: noindex, 출처·확인 대기 표시

## 시작

Node.js 24 이상과 npm이 필요합니다.

```sh
npm ci
npm run dev
```

표시된 로컬 주소를 브라우저에서 여세요. English는 `/en/`, 한국어는 `/ko/`입니다. 배포용 파일은 아래 명령으로 생성합니다.

```sh
npm run build
npm run verify
npm run preview
```

## 교수·운영자 검토

1. [검토서·이관표·사이트맵](docs/REVIEW.ko.md)
2. [기존 사이트 감사](docs/LEGACY-AUDIT.ko.md) / [페이지·이미지 인벤토리](docs/legacy-inventory.json)
3. [공식 정보 출처](docs/SOURCES.ko.md) / [구성원 근거](docs/PEOPLE-EVIDENCE.ko.md)
4. [콘텐츠 수정 안내](docs/CONTENT-GUIDE.ko.md)
5. [배포·도메인 안내](docs/DEPLOYMENT.ko.md)
6. [최근 논문 갱신 기록](docs/PUBLICATIONS-AUDIT.ko.md)
7. [디자인 자산·Figma 편집 안내](docs/DESIGN-ASSETS.ko.md)
8. [검수 결과](docs/QA.ko.md)

## 현재 상태

GitHub 조직 `qit-postech`의 비공개 저장소 [qit-postech.github.io](https://github.com/qit-postech/qit-postech.github.io)가 생성되었으며 관리자·쓰기 접근을 확인했습니다. 기본 브랜치는 `main`입니다. GitHub Pages는 아직 게시하지 않았고 학교 도메인 사용 승인과 DNS 변경도 진행하지 않았습니다. 향후 조직 루트 Pages 주소는 `https://qit-postech.github.io`이며 `BASE_PATH=/`를 사용합니다. 공식 학과 소개에 연결된 `qit.postech.ac.kr`은 기존 관리자와 전환을 협의해야 합니다.

기존 KIST 사이트의 사진·도표·로고·긴 원문은 복제하지 않았습니다. 사용자 요청에 따라 POSTECH 공식 공개 자료의 워드마크를 로컬 검토본 헤더와 푸터에 적용했으며 원본 색과 비율을 유지합니다. 원본 사이트의 전체 HTML, 개인 연락처, PPT는 배포 소스에 포함하지 않았습니다. 이전 구성원 7명의 공개 직업 정보는 사용자의 추가 요청을 반영해 공개 모드에 포함했습니다. 현재 학생 6명의 `approvedForPublic: false` 설정은 유지하며 공개 저장소에 올릴 자료의 범위도 함께 검토하세요. 공개 모드의 화면 필터는 저장소의 내용까지 비공개로 만들지 않습니다.

외부 폰트, 분석·추적 스크립트, 입력 정보를 전송하는 폼, 쿠키는 사용하지 않습니다. `mailto:` 링크는 사용자의 이메일 앱을 열며 사이트가 내용을 수집하지 않습니다. 연구 SVG 3종은 이 작업에서 새로 만든 개념 도해이며 한·영 Home과 Research에서 사용합니다. 편집 가능한 Figma 원본과 웹용 SVG를 함께 관리합니다. POSTECH 워드마크는 별도의 공식 대학 자산입니다. 연구실 콘텐츠에 일괄 오픈소스 라이선스를 부여하지 않았습니다.

## 설치 없이 검토하기

함께 제공한 `offline-preview/index.html`을 브라우저에서 열면 전체 페이지·언어 전환·검색을 사용할 수 있습니다. 검토용이며 정식 호스팅 파일은 `dist/`입니다. 다시 만들려면 기본 review 모드와 BASE_PATH=/에서 `npm run preview:offline`을 실행합니다.
