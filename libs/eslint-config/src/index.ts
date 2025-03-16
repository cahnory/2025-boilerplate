import type { ConfigArray } from "./types.d.ts";

import { commonESLintConfig } from "./common.ts";
import { developmentESLintConfig } from "./development.ts";
import { typescriptEslintConfig } from "./typescript.ts";

export const eslintConfig = [
  ...commonESLintConfig,
  ...typescriptEslintConfig,
  {
    ...developmentESLintConfig,
    files: ["eslint.config.?([mc])[jt]s"],
  },
] as const satisfies ConfigArray;
