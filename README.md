# DDak Labs GitHub Pages

DDak Labs가 운영하는 앱의 안내, 고객지원, 개인정보처리방침을 제공하는 Jekyll 사이트입니다.

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve
```

기본 주소는 `http://127.0.0.1:4000`입니다.

## 문서 URL 규칙

앱 문서는 `앱 -> 문서 종류 -> 로케일` 순서로 구성합니다.

```text
/apps/{app-slug}/support/{locale}/
/apps/{app-slug}/privacy/{locale}/
```

예시:

```text
/apps/lotto-check/support/ko-kr/
/apps/lotto-check/privacy/ko-kr/
```

로케일은 URL에서 소문자 하이픈 형식을 사용하고 문서 front matter에서는 BCP 47 형식(`ko-KR`)을 사용합니다.

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/pages.yml`이 Jekyll 빌드와 GitHub Pages 배포를 수행합니다.
