export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

//PostCSS CSS를 자바스크립트 코드처럼 분석하고, 자동 변환해주는 도구
//Tailwind는 사실상 PostCSS 위에서 동작하는 플러그인
//index.css ─▶ PostCSS ─▶ TailwindCSS ─▶ Autoprefixer ─▶ 최종 CSS 출력

// Vite (감독) 덕분에 효율 올라감 
//  └─▶ PostCSS (CSS 변환 담당자)
//       ├─▶ Tailwind (CSS 생성기)
//       └─▶ Autoprefixer (호환성 보정)


// [ Vite / Webpack ]  ← 전체 감독
//         │
//         ▼
//    [ PostCSS ]  ← CSS 변환 엔진
//         │
//         ├── TailwindCSS (유틸리티 → 진짜 CSS)
//         └── Autoprefixer (접두사 추가)
//         │
//         ▼
//     [ 최종 CSS 결과물 ]