import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  // 프로젝트 룰 추가
  {
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // 코드 정리
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1) react/next가 항상 최상단
            ["^react", "^next"],

            // 2) 절대경로 alias (@/...)
            ["^@/"],

            // 3) 그 외 패키지들 (node_modules)
            ["^@?\\w"],

            // 4) 상대경로
            ["^\\."],

            // 5) 사이드이펙트 import (css 등)
            ["^\\u0000"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",

      // 타입 안정
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],

      // React / Next
      "react/jsx-key": "error",
      "react/self-closing-comp": "error",

      // 품질
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-duplicate-imports": "off",
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
