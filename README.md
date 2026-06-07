# 위드인 심리상담연구소 웹사이트

수원 광교 위드인 심리상담연구소의 소개, 상담분야, 심리검사, 상담사, 오시는 길을 담은 정적 웹사이트입니다. 별도 서버 없이 GitHub Pages에 바로 올릴 수 있도록 HTML/CSS/JS만 사용했습니다.

## 파일 구조

```text
within-website/
├─ index.html
├─ styles.css
├─ script.js
├─ data.js                 # 상담사, 상담분야, 연락처 등 유지보수용 데이터
├─ assets/
│  ├─ favicon.png
│  ├─ logos/               # 로고 이미지
│  └─ counselors/          # 상담사 사진 폴더
├─ .nojekyll
└─ README.md
```

## 수정이 가장 자주 필요한 곳

대부분의 내용은 `data.js`에서 수정하면 됩니다.

- 전화번호: `SITE.phone`
- 주소: `SITE.address`
- 블로그 링크: `SITE.blogUrl`
- 상담분야: `services`
- 심리검사 항목: `tests`
- 상담사 정보: `counselors`

## 상담사 사진 넣는 방법

1. 상담사 사진을 `assets/counselors/` 폴더에 넣습니다.
2. `data.js`에서 해당 상담사의 `image` 값을 바꿉니다.

예시:

```js
image: 'assets/counselors/jang-eunyoung.jpg'
```

## GitHub Pages 업로드 방법

1. GitHub에서 새 repository를 만듭니다.
2. 이 폴더 안의 파일을 모두 업로드합니다.
3. Repository의 `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
5. Branch를 `main`, folder를 `/root`로 선택한 뒤 저장합니다.
6. 잠시 후 표시되는 GitHub Pages 주소로 접속합니다.

## 색상

메인 컬러는 밝은 딥그린 계열인 `#0A7A43`을 사용했습니다. 전체 색상은 `styles.css` 상단의 `:root` 변수에서 한 번에 수정할 수 있습니다.
