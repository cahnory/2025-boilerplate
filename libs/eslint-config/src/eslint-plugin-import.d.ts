declare module "eslint-plugin-import" {
  import type { ESLint, Linter, Rule } from "eslint";

  const plugin: ESLint.Plugin & {
    configs: {
      electron: Linter.LegacyConfig;
      errors: Linter.LegacyConfig;
      react: Linter.LegacyConfig;
      "react-native": Linter.LegacyConfig;
      recommended: Linter.LegacyConfig;
      "stage-0": Linter.LegacyConfig;
      typescript: Linter.LegacyConfig;
      warnings: Linter.LegacyConfig;
    };
    flatConfigs: {
      electron: Linter.Config;
      errors: Linter.Config;
      react: Linter.Config;
      "react-native": Linter.Config;
      recommended: Linter.Config;
      "stage-0": Linter.Config;
      typescript: Linter.Config;
      warnings: Linter.Config;
    };
    meta: {
      name: string;
      version: string;
    };
    rules: {
      [key: string]: Rule.RuleModule;
    };
  };

  export = plugin;
}
