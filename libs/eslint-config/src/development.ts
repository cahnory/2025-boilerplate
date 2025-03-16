import type { Config } from "./types.d.ts";

export const developmentESLintConfig = {
  name: "@2025-boilerplate/eslint-config/development",

  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
} as const satisfies Config;
