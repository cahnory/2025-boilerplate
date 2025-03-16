import importEslintPlugin from "eslint-plugin-import";
import { configs as typescriptEslintConfigs } from "typescript-eslint";

import type { ConfigArray } from "./types.js";

export const typescriptEslintConfig = [
  importEslintPlugin.flatConfigs.typescript,
  ...typescriptEslintConfigs.recommendedTypeChecked,
  {
    name: "@2025-boilerplate/eslint-config/typescript",

    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.js"],
        },
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/no-explicit-any": "error",
      // Avoid cases where the linter allows both top-level and inline type qualifier
      // Enforce explicit side effect imports
      "@typescript-eslint/no-import-type-side-effects": "error",
      // Disabled in favor of "unused-imports/no-unused-vars"
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      // Disabled in favor of "@typescript-eslint/dot-notation"
      "dot-notation": "off",
      // Disabled by typescript-eslint
      "no-unreachable": "warn",
      // Disabled in favor of "@typescript-eslint/no-use-before-define"
      "no-use-before-define": "off",
      // Disabled in favor of "@typescript-eslint/sort-type-constituents"
      "perfectionist/sort-union-types": ["off"],
      // Added option.markers allowing TypeScripe's triple-slash directives
      "spaced-comment": ["error", "always", { markers: ["/"] }],
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json"],
        },
      },
    },
  },
] as const satisfies ConfigArray;
