import { developmentESLintConfig } from "./dist/development.js";
import { eslintConfig } from "./dist/index.js";

/** @satisfies {import("./src/types.d.ts").ConfigArray[][]}  */
const projectEslintConfig = [
  ...eslintConfig,
  developmentESLintConfig,
  {
    ignores: ["dist/*"],
  },
];

export default projectEslintConfig;
