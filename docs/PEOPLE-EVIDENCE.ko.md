# 구성원 근거: 현재 인력과 이전 구성원

확인일: 2026-10-13. `src/data/people.json`에는 **14명**이 있습니다. 연구책임자 1명, POSTECH 학생 3명, KIST 학생 3명, 이전 구성원 7명입니다. 과거 역할과 현재 소속의 근거를 분리하고 사진·개인 연락처는 복제하지 않았습니다.

## 연구책임자와 현재 학생

연구책임자 Seung-Woo Lee(이승우)의 POSTECH 물리학과 소속은 [공식 교수 소개](https://ph.postech.ac.kr/physics/member/professor.do?articleNo=36802&mode=view)를 근거로 합니다.

|기관|영문 이름|한국어 표시|역할·근거|
|---|---|---|---|
|POSTECH|Kwang-Jun Choi|최광준|박사과정·영문 이름 — 사용자 지정 PPT 2쪽; 한글 이름 — 사용자 확인|
|POSTECH|Woo-Won Seo|서우원|박사과정·영문 이름 — 사용자 지정 PPT 2쪽; 한글 이름 — 사용자 확인|
|POSTECH|Jun-Hee Cho|조준희|박사과정·영문 이름 — 사용자 지정 PPT 2쪽; 한글 이름 — 사용자 확인|
|KIST|Jeonghyeon Shin|신정현|사용자 확인 대학원생; 세부 학위과정 미확정|
|KIST|Seongyeop Lim|임성엽|사용자 확인 대학원생; 세부 학위과정 미확정|
|KIST|Sewon Jeong|정세원|사용자 확인 대학원생; 세부 학위과정 미확정|

읽기 전용으로 확인한 발표자료는 `POSTECH_QIT_Lab_Introduction_v49_QFT_Definition.pptx`의 2쪽 ‘Our Lab’입니다. SHA-256은 `2cb2e7af82b2ff2be46f0b7bc02bcdc760d021014d46b398293e1d0775cf7091`입니다. 원본 파일은 변경하거나 배포 패키지에 포함하지 않았습니다. POSTECH 학생의 한글 이름 최광준·서우원·조준희는 2026-10-13 사용자가 직접 확인했습니다. 영문 이름과 박사과정 역할은 PPT를 근거로 하며, 한글 이름을 PPT에 기재된 정보로 설명하지 않습니다. 학생 6명의 `approvedForPublic: false` 설정은 이번 이전 구성원 추가에서 변경하지 않았습니다.

## 이전 구성원 7명

사용자가 명시적으로 추가한 3명과 기존 Google 사이트의 실제 Alumni 섹션 4명을 합쳤습니다. `role`은 KIST 연구실 당시 역할이고 `affiliation`은 현재 공식 자료 또는 과거 사이트의 이동처 기록입니다. 참여 기간이 없는 경우 시작·종료일을 새로 만들지 않습니다.

|이름|당시 역할·기간|소속·역할 표시|`affiliation.status`|
|---|---|---|---|
|Sangjin Lee|박사후연구원; 기간 미확정|KIAS QUC Research Fellow|`official`|
|Hyukgun Kwon / 권혁건|박사후연구원; 기간 미확정|세종대학교 물리천문학과 조교수|`official`|
|Nuri Kang|대학원생; 기간 미확정|Yale 응용물리학 박사과정, Shruti Puri Group|`official`|
|Hatice Mesakkat|학부 연구 인턴; 2021.10–2022.02|현 소속 미확인|`unverified`|
|Wooyeong Song|박사후연구원; 2024.02까지, Y.-S. Kim과 공동 소속|KISTI 선임연구원 — 과거 사이트 표기|`legacy`|
|Jaehak Lee|연구교수; 2022.09–2024.08, 당시 SNU 소속|KIST 선임연구원 — 과거 사이트 표기|`legacy`|
|Shrobona Bagchi|박사후연구원; 2021.10–2024.08|KIAS QUC Research Fellow|`official`|

Sangjin Lee와 Shrobona Bagchi는 [KIAS QUC 구성원](https://www.kias.re.kr/kias/cp/centrsPgmsMng/people.do?centrspgmsCd=QUC&menuNo=403016), Hyukgun Kwon은 [세종대 프로필](https://sejong.elsevierpure.com/en/persons/hyukgun-kwon/)과 [서울대 연구실 alumni](https://squis.snu.ac.kr/alumni/%EA%B6%8C%ED%98%81%EA%B1%B4/), Nuri Kang은 [Yale Puri Group 현 구성원](https://purigroup.research.yale.edu/current-members)을 근거로 합니다. 권혁건 외 이전 구성원의 한글 이름은 별도 근거가 없으면 한국어 화면에서도 영문을 유지합니다.

Hatice Mesakkat, Wooyeong Song, Jaehak Lee, Shrobona Bagchi의 과거 역할·기간은 [기존 사이트 Alumni](https://sites.google.com/view/qitkist/group-members)에서 직접 읽었습니다. 과거 이동처만 있는 Wooyeong Song·Jaehak Lee를 현재 소속이 재검증된 것으로 표시하지 않습니다.

이전 구성원 7명은 사용자가 공개 직업 정보의 추가를 요청했으므로 `approvedForPublic: true`로 반영했습니다. 현재 학생의 설정과 구분하며, 외부 사이트 배포는 수행하지 않았습니다. ‘이전 구성원’은 졸업 또는 학위 취득을 뜻하지 않습니다. KIST 시절의 Kwangjun Choi 표기만으로 현재 POSTECH 학생 Kwang-Jun Choi를 이전 구성원에 중복 추가하지 않습니다.

구조화 근거 파일:

- [기존 Alumni 원문·기간](verification/legacy-alumni-current.json)
- [기존 Alumni의 이후 소속 대조](verification/legacy-alumni-affiliations.json)
- [Sangjin Lee·Hyukgun Kwon 공식 근거](verification/alumni-sangjin-hyukgun.json)
- [Nuri Kang 공식 근거](verification/alumni-nuri-kang.json)
