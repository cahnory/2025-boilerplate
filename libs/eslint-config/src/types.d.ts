import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import type { Linter } from "eslint";

export type Config = FlatConfig.Config | Linter.Config;
export type ConfigArray = Array<Config>;
