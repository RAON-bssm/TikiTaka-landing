# TikiTaka-landing

티키타카 앱 소개 랜딩 페이지입니다.

## 스택

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`src/index.css`의 `@theme`에 디자인 토큰 정의)
- 패키지 매니저: **pnpm**

## 시작하기

```bash
pnpm install
pnpm dev
```

## 주요 명령어

- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 타입체크 후 프로덕션 빌드 (`dist/`)
- `pnpm preview`: 빌드 결과 미리보기
- `pnpm typecheck` / `pnpm lint` / `pnpm format`

## 앱 레포와 공유하는 것

- **색상 토큰**: `src/index.css`의 `--color-*` 값은 [TikiTaka-app](https://github.com/RAON-bssm/TikiTaka-app)의 `src/constants/colors.js`와 같습니다. 앱 팔레트가 바뀌면 함께 바꿔 주세요.
- **캐릭터 파츠**: `src/assets/character/`는 앱 `assets/character/`를 웹용(720px)으로 줄인 사본입니다. 레이어 순서는 앱의 `LAYERS`와 같습니다(`src/constants/character.ts`).
- **폰트**: 본문 Pretendard(npm `pretendard`), 제목 OkDanDan(`public/fonts`).
- **약관 링크**: `src/constants/links.ts` (앱 `src/constants/legal.ts`와 동일)

## 스토어 링크

`src/constants/links.ts`의 `APP_STORE_URL`이 `null`이면 "출시 예정" 배지로 보입니다. 출시 후 URL을 넣어 주세요.

## 커밋 컨벤션

앱 레포와 같습니다: `<type>:: <한글 설명>` (예: `feat::`, `design::`, `chore::`, `docs::`)
