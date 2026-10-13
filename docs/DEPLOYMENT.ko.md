# GitHub Pages 배포 안내

이 프로젝트는 Astro 정적 사이트이며 배포 산출물은 `dist/`입니다. GitHub 조직 `qit-postech`의 [qit-postech.github.io 저장소](https://github.com/qit-postech/qit-postech.github.io)가 사용자 승인으로 공개 전환되었고 관리자·쓰기 접근을 확인했습니다. 기본 브랜치는 `main`입니다. 2026-10-13 GitHub Pages 빌드·배포 성공과 실제 페이지 접속을 확인했습니다. 학교 도메인 사용 승인과 DNS 변경은 진행하지 않았습니다.

## 모드와 주소

| 변수 | 로컬 기본값 | 설정 기준 |
| --- | --- | --- |
| `PUBLICATION_MODE` | `review` | 검토용은 `review`, 내용과 주소 승인 후 `public` |
| `SITE_URL` | 없음 | 경로 없는 HTTPS origin. 이 저장소의 Pages 주소: `https://qit-postech.github.io`. `public`에서 필수 |
| `BASE_PATH` | `/` | 현재 `qit-postech.github.io` 조직 루트 저장소는 `/`. 다른 프로젝트 저장소는 `/qit-lab/`처럼 실제 저장소명. 사용자 도메인은 `/` |
| `CUSTOM_DOMAIN` | 없음 | 승인된 정식 공개 때만 호스트명 지정. `SITE_URL` 호스트와 일치해야 함 |

GitHub 워크플로의 기본값은 `PUBLICATION_MODE=public`, `SITE_URL=https://qit-postech.github.io`이며 로컬 기본값과 구분합니다. 현재 저장소를 Pages에 게시할 때는 `SITE_URL=https://qit-postech.github.io`, `BASE_PATH=/`를 사용하며 `CUSTOM_DOMAIN`은 비워 둡니다. 이 주소 설정은 학교 도메인 사용 승인을 뜻하지 않습니다. `SITE_URL`에 저장소 경로를 붙이지 마세요. `BASE_PATH`에서 지정합니다. 환경변수는 빌드와 검증에 동일하게 적용합니다. 예시는 쉘 환경변수이며 `.env` 파일을 자동으로 읽는다는 의미가 아닙니다.

검토 모드는 검색 제외용 `noindex`를 사용합니다. 이는 접근 통제나 비공개 호스팅이 아닙니다. Pages에 배포하면 URL을 아는 사람이 접근할 수 있으므로 개인정보나 비공개 연구자료는 포함하지 않습니다. 정식 공개 모드에서도 사실 확인·공개 승인을 마친 자료만 사용합니다.

## 로컬 확인

Node.js 24와 npm을 사용합니다. 저장소 루트에서 실행합니다.

```sh
npm ci
npm run build
node scripts/verify-build.mjs
npm run preview
```

현재 조직 루트 저장소의 기본 경로는 `/`입니다. 다른 프로젝트 저장소로 옮기는 경우를 위한 하위 경로 지원도 다음과 같이 확인할 수 있습니다.

```sh
export PUBLICATION_MODE=review
export BASE_PATH=/qit-lab/
npm run build
node scripts/verify-build.mjs
npm run preview
```

미리보기 주소에도 `/qit-lab/` 경로를 붙입니다. 검증기는 두 언어의 일곱 필수 경로, 언어 간 대응 경로, HTML의 로컬 `href`·`src`·`poster`·`srcset`, HTML 앵커, 모드별 검색 제외 설정을 검사합니다. 외부 링크 응답, JavaScript로 생성한 URL, CSS 내부 URL, DNS·TLS 상태를 확인하는 도구는 아닙니다. 실제 브라우저의 모바일·키보드 탐색 확인도 필요합니다.

## GitHub Pages

[GitHub 공식 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)에 따르면 GitHub Free 조직의 Pages는 **공개 저장소**에서 사용할 수 있습니다. 무료 운영을 선택할 때에는 코드뿐 아니라 데이터·문서·커밋 이력도 공개된다는 전제로 업로드 범위를 정하세요. 사이트 자체에는 분석·추적 스크립트가 없지만 GitHub 호스팅 서비스는 보안을 위해 방문 IP를 기록할 수 있습니다.

1. 공개 저장소로 올리기 전, `src/data/people.json`을 포함한 원본과 커밋 이력에서 공개 미승인 개인정보를 제거하거나 승인된 내용으로 정리합니다. `approvedForPublic: false`는 생성된 사이트에서 숨기는 설정이며 GitHub 저장소 원문이나 이력을 숨기지 않습니다. 승인된 GitHub 조직의 저장소 루트에 이 프로젝트를 넣고 `package-lock.json`까지 커밋합니다.
2. 저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 설정합니다.
3. Settings → Secrets and variables → Actions → Variables에 위 변수를 입력합니다. 현재 `qit-postech.github.io` 저장소는 `SITE_URL=https://qit-postech.github.io`, `BASE_PATH=/`입니다. 다른 프로젝트 저장소 이름이 `qit-lab`이면 `BASE_PATH=/qit-lab/`를 사용합니다.
4. `github-pages` environment에 필요한 배포 검토자·허용 브랜치를 설정합니다.
5. `main` 브랜치에 푸시하면 **Build, verify, and deploy Pages**가 실행됩니다. Actions에서 수동 실행할 수도 있습니다. 두 방식 모두 빌드·검증 후 배포를 요청합니다.
6. 빌드와 검증에 성공해야 배포가 진행됩니다. 게시 주소에서 언어 전환, 직접 하위 URL 접근, 이미지, 404 페이지를 확인합니다.

배포 작업만 `pages: write`와 `id-token: write` 권한을 사용합니다. 현재 워크플로는 GitHub 공식 액션의 버전 태그를 사용합니다. 조직 정책상 커밋 SHA 고정이 필요하면 해당 공식 릴리스의 SHA를 확인한 후 바꿉니다.

## 사용자 도메인 전환

`qit.postech.ac.kr`은 확인 당시 POSTECH 공식 페이지에서 연결된 기존 주소입니다. 확인된 HTTP 404와 기존 A 레코드 `141.223.5.166`만으로 GitHub Pages 전환 권한이나 소유·사용 승인을 추정하지 않습니다. 기존 서비스·DNS 관리자와 전환 대상, 중단 영향, 복구 방법을 먼저 합의해야 합니다.

승인 후 `PUBLICATION_MODE=public`, `SITE_URL=https://승인된호스트`, `BASE_PATH=/`, `CUSTOM_DOMAIN=승인된호스트`를 설정하고 다시 빌드합니다. 빌드 후처리는 이 조건에서만 `dist/CNAME`을 생성합니다. 검토 모드에서는 `CUSTOM_DOMAIN`을 비워 둡니다.

GitHub Actions 배포에서는 `CNAME` 파일만으로 저장소의 사용자 도메인 설정이 완료되지 않습니다. 저장소 Settings → Pages의 Custom domain을 별도로 설정하고, 공식 GitHub 안내에 따라 도메인 확인·DNS 전환·HTTPS 활성화를 진행합니다. 기존 A 레코드를 확인 없이 삭제하거나 변경하지 마세요. 공개 이후에도 원래 설정과 직전 커밋을 기록해 복구할 수 있도록 합니다.

## 공식 근거

- [Astro GitHub Pages 배포](https://docs.astro.build/en/guides/deploy/github/): `site`, 저장소 `base`, 정적 배포 설정.
- [GitHub 사용자 지정 Pages 워크플로](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): 아티팩트, 배포 권한, 환경과 빌드 의존성.
- [GitHub 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): Actions 게시 및 사용자 도메인 설정.
- [GitHub 사용자 도메인 관리](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site): 도메인·DNS 설정.
- [공식 Node 설정 액션](https://github.com/actions/setup-node): Node 버전 지정.

문서 확인일: 2026-10-13.
