# 디자인 자산과 수정 방법

이 사이트는 공식 POSTECH 워드마크와 이번 작업에서 새로 만든 연구 도해를 사용합니다. 기존 KIST 사이트의 사진·연구 그림·저널 표지·긴 설명문은 복제하지 않았습니다. 적용 범위는 사용자가 요청한 로컬 검토본이며 공개 배포나 대학의 별도 승인 완료를 의미하지 않습니다.

## 공식 워드마크

헤더와 푸터에서 사용하는 파일은 `public/brand/postech-wordmark.png`입니다. [공식 POSTECH SITES 원본](https://sites.postech.ac.kr/_res/postech/guide/img/page/postech_default_logo.png)을 변형 없이 보존했습니다. 원본 크기는 733 × 62이며 웹에서 크기를 줄일 때도 가로세로 비율을 유지합니다. 색상 필터·불투명도 조절·재채색·자르기·왜곡·새 서체로 대체를 하지 않습니다. 밝은 단색 배경에서 주변 요소와 간격을 두되 임의 간격을 대학의 공식 수치 규정으로 설명하지 않습니다.

출처·확보일·SHA-256·공식 안내 요약은 [로고 근거 기록](verification/postech-logo.json)에 있습니다. [대학 로고 안내](https://www.postech.ac.kr/kor/university-introduction/logo.do)는 대학 UI의 상표 및 사용 조건을 설명합니다. 공식 로고에 연구실 콘텐츠의 라이선스를 일괄 적용하지 않습니다.

## 편집 가능한 연구 도해

[Figma 디자인 파일](https://www.figma.com/design/08TK5X1UWkxcvjrSKRiW1e)의 보드 `2:2`에 세 도해가 있습니다. 각 프레임 크기는 800 × 480입니다. 원본의 벡터·도형·텍스트를 편집할 수 있으며 웹 출력본은 텍스트를 윤곽선으로 변환해 외부 폰트 없이 표시합니다.

|연구 영역|Figma 프레임|웹 파일|설명 범위|
|---|---|---|---|
|양자컴퓨팅|[2:5](https://www.figma.com/design/08TK5X1UWkxcvjrSKRiW1e?node-id=2-5)|`public/research/quantum-computing.svg`|3개 와이어의 H/CNOT 회로와 개념적 오류정정 격자. 특정 코드의 완전한 회로·격자를 뜻하지 않음|
|양자통신|[2:42](https://www.figma.com/design/08TK5X1UWkxcvjrSKRiW1e?node-id=2-42)|`public/research/quantum-communication.svg`|노드·중계기·얽힘 연결과 점선 고전통신 경로|
|기초·센싱|[2:66](https://www.figma.com/design/08TK5X1UWkxcvjrSKRiW1e?node-id=2-66)|`public/research/foundations-sensing.svg`|Bloch 구면의 위상과 개념적 간섭곡선. 실험 데이터나 특정 논문의 결과가 아님|

세 도해는 한·영 Home과 Research에서 함께 사용합니다. 대체 텍스트와 캡션은 `src/data/research.json`의 대응 언어 항목에서 관리합니다. SVG 내부의 윤곽선 글자만으로 접근성을 제공한다고 가정하지 말고 의미 있는 대체 텍스트를 유지합니다.

## Figma 수정과 재출력

1. 위 Figma 파일의 해당 프레임에서 벡터와 텍스트를 수정합니다. 보드 전체 대신 800 × 480 개별 프레임을 선택합니다.
2. SVG로 내보낼 때 텍스트 윤곽선 변환을 켜 웹 폰트 의존성을 없앱니다. Figma 원본의 텍스트는 편집 가능한 상태로 남깁니다.
3. 해당 `public/research/` 파일을 같은 이름으로 교체합니다. 그림의 과학적 의미가 바뀌면 한·영 대체 텍스트와 캡션도 함께 수정합니다.
4. Home과 Research의 두 언어 화면에서 크기·잘림·글자 가독성·대체 텍스트를 확인하고 사이트의 빌드·검증 절차를 실행합니다. 현재 검수 기록은 [검수 결과](QA.ko.md)에 있습니다.

공식 대학 자산, 새 도해, 제삼자 논문 자료는 출처와 사용 조건이 서로 다릅니다. 이번에 만든 도해를 특정 논문의 재현 그림으로 표기하거나 POSTECH 공식 시각 자료라고 설명하지 않습니다. 사이트 전체에 포괄적 오픈소스 라이선스를 새로 부여하지 않았습니다.
