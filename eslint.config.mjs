import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // Don't let ESLint break production builds
      "@next/next/no-img-element": "off",

      // Allow common React/Next.js patterns
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript - don't be overly strict
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
