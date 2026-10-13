# 콘텐츠 수정 안내

별도 서버나 데이터베이스 없이 `src/data/`의 JSON 파일을 수정합니다. GitHub 웹 편집 화면에서도 바꿀 수 있습니다. 수정 후 미리보기에서 확인하고 검토 요청(Pull request)을 거쳐 반영하세요. 학생 명단 등 검토 자료는 공개 GitHub 저장소에 올리기 전에 공개 범위를 확인해야 합니다. `approvedForPublic: false`는 사이트 출력만 제한하며 저장소 원문을 숨기지 않습니다.

## 어디를 수정하나요?

| 내용 | 파일 | 중요한 필드 |
| --- | --- | --- |
| 구성원 | `src/data/people.json` | `name`, `role`, `institution`, `group`, `kind`, `affiliation`, `period`, `approvedForPublic` |
| 논문 | `src/data/publications.json` | `title`, `authors`, `year`, `venue`, `doi`, `arxiv`, `sourceStatus` |
| 뉴스 | `src/data/news.json` | `date`, `title`, `summary`, `sourceUrl`, `approvedForPublic` |
| 연구 소개 | `src/data/research.json` | 영·한 `title`, `subtitle`, `description`, `tags`, `sourceUrl` |
| 연락처·공통 정보 | `src/data/site.json` | `email`, `office`, `address`, `profileUrl`, `checked` |

JSON은 항목을 쉼표로 구분합니다. 마지막 항목 뒤에는 쉼표를 붙이지 않습니다. 문자열에는 큰따옴표를 쓰고, 영문과 국문은 `en`, `ko` 안에 함께 적습니다. 논문 제목·저자명은 원문 표기를 유지합니다.

## 구성원

기존 항목 하나를 복사하고 고유 `id`를 정합니다. `group`은 `current` 또는 `alumni`, `kind`는 `faculty`, `student`, `alumni`입니다. 학생의 `institution`은 현재 구현에서 `POSTECH` 또는 `KIST`입니다. 기관 추가 시 People 화면의 그룹 목록도 확장해야 합니다.

PPT에 나온 POSTECH 학생 3명은 `verification: "user-presentation"`, 사용자가 현재 상태를 확인한 KIST 학생 3명은 `"user-confirmed"`입니다. 이 현재 학생 6명의 `approvedForPublic: false` 설정은 이번 이전 구성원 추가에서 변경하지 않았습니다. 현재 학생의 공개 범위를 갱신할 때 해당 필드를 바꿉니다. 검토 모드에서는 미승인 항목도 근거와 함께 보이고, 공개 모드에서는 제외됩니다. 사진·개인 이메일·개인 전화는 이번 버전에 포함하지 않았습니다.

현재 데이터는 연구책임자 1명, 현재 학생 6명, 이전 구성원 7명으로 총 14명입니다. 이전 구성원 7명은 사용자가 공개 직업 정보의 추가를 명시적으로 요청해 `approvedForPublic: true`로 반영했습니다. 사진·개인 이메일을 추가한다는 의미는 아닙니다.

떠난 사람은 현재 명단에서 제거하고 확인한 범위만으로 이전 구성원 항목을 만듭니다. `alumni` 그룹은 이전 소속 기록을 뜻하며 자동으로 학위 취득을 의미하지 않습니다. 현재 POSTECH에 표시한 Kwang-Jun Choi를 과거 KIST 표기만으로 이전 구성원에 중복 등록하지 않습니다. 공식 교수 직급이 바뀌면 소개와 연락처의 출처도 갱신하세요.

이전 구성원의 `role`은 KIST 연구실 당시 역할이며, `period.en`과 `period.ko`는 출처에서 확인한 참여 기간입니다. 현재 또는 이후 소속은 `affiliation`에 별도로 기록합니다. `affiliation.status`는 `official`(현재 공식 근거), `legacy`(옛 사이트의 이동처 기록), `unverified`(미확인) 중 하나입니다. `legacy`를 현재 소속으로 바꾸려면 새 출처와 확인일이 필요합니다. 알 수 없는 기간·학위 취득·이동처는 추정하지 않습니다. 한글 이름의 근거가 없으면 한국어 화면에서도 영문 이름을 유지합니다.

## 논문

`doi`에는 `https://doi.org/`를 제외한 식별자(예: `10.1103/PRXQuantum.5.030322`)만 넣습니다. `arxiv`도 `2501.12345`와 같은 식별자만 넣습니다. 모르면 `null`로 두세요. DOI를 추정해서 만들지 않습니다. 연도는 따옴표 없는 숫자입니다. 중복 출판·프리프린트는 연결 관계를 확인해 관리하세요.

54개 기존 항목은 `sourceStatus: "legacy"`입니다. 원본 표기와 검증 자료는 유지합니다. 새 논문은 `sourceStatus: "current"`, `verification`에 대조한 출판사 URL·확인일을 기록합니다. 예를 들어 아래 구조를 사용하되 모든 예시 값을 실제 검증값으로 바꾸세요.

```json
{
  "id": "paper-unique-id",
  "title": "Verified paper title",
  "authors": "Author names as published",
  "year": 2026,
  "venue": "Verified journal citation",
  "doi": null,
  "arxiv": null,
  "link": "https://publisher.example/paper",
  "sourceUrl": "https://publisher.example/paper",
  "sourceStatus": "current",
  "sourceChecked": "2026-10-13",
  "verification": {"status": "publisher-checked"}
}
```

현재 화면의 소개는 KIST 과거 기록과 새로 확인한 논문을 구분하고 건수를 자동 계산합니다. `publicationType`은 `journal`, `preprint`, `feature`(해설·리뷰)로 구분합니다. 출판본이 생기면 기존 프리프린트 항목에 DOI·출판연도·출판일을 갱신해 중복을 피하세요. `PublicationList.astro`의 각 항목 출처 표시는 `sourceStatus`에 따라 바뀝니다.

## 뉴스

현재 뉴스에는 원문으로 확인한 2026-10-01 논문 출판 기록 1건을 넣었습니다. 새로운 소식을 실제 날짜·근거와 함께 추가합니다. 과거 연구실 이전 날짜나 채용 공고를 추정해 넣지 않습니다.

```json
{
  "id": "news-unique-id",
  "date": "2026-10-13",
  "title": {"en": "Verified announcement", "ko": "확인된 소식 제목"},
  "summary": {"en": "English summary", "ko": "한국어 요약"},
  "sourceUrl": "https://official.example/announcement",
  "approvedForPublic": false
}
```

위 예시는 템플릿일 뿐 실제 소식이 아닙니다. 승인되지 않은 뉴스는 두 모드 모두 사이트에 표시되지 않습니다.

## 수정 확인

```sh
npm run build
npm run verify
npm run preview
```

데이터 형식 오류가 있으면 빌드가 멈추며 수정할 항목을 알려줍니다. 양쪽 언어, 모바일, 논문 검색·연도, 외부 출처 링크를 확인합니다. 색·배치 수정은 `src/styles/global.css`, 본문 구조는 `src/components/PageView.astro`, 공통 상단·하단은 `src/layouts/Layout.astro`입니다.
