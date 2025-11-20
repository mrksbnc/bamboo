import { readRulesFromConfig, handleRulesScope } from "./rules.mjs";
import { readCategoriesFromConfig, defaultCategories, handleCategoriesScope } from "./categories.mjs";
import { readPluginsFromConfig, defaultPlugins } from "./plugins.mjs";
import { readIgnorePatternsFromConfig, handleIgnorePatternsScope } from "./ignore-patterns.mjs";
import { readOverridesFromConfig, handleOverridesScope } from "./overrides.mjs";
import { splitDisabledRulesForVueAndSvelteFiles } from "../config-helper.mjs";
import { resolveRelativeExtendsPaths, readExtendsConfigsFromConfig, handleExtendsScope } from "./extends.mjs";
import { getConfigContent } from "./utilities.mjs";
import path from "node:path";
const buildFromOxlintConfig = (config) => {
  resolveRelativeExtendsPaths(config);
  const extendConfigs = readExtendsConfigsFromConfig(config);
  if (extendConfigs.length > 0) {
    handleExtendsScope(extendConfigs, config);
  }
  const rules = {};
  const plugins = readPluginsFromConfig(config) ?? defaultPlugins;
  const categories = readCategoriesFromConfig(config) ?? defaultCategories;
  plugins.push("eslint");
  if (plugins.includes("react")) {
    plugins.push("react-hooks");
  }
  handleCategoriesScope(plugins, categories, rules);
  const configRules = readRulesFromConfig(config);
  if (configRules !== void 0) {
    handleRulesScope(configRules, rules);
  }
  const baseConfig = {
    name: "oxlint/from-oxlint-config",
    rules
  };
  const ignorePatterns = readIgnorePatternsFromConfig(config);
  if (ignorePatterns !== void 0) {
    handleIgnorePatternsScope(ignorePatterns, baseConfig);
  }
  const overrides = readOverridesFromConfig(config);
  const configs = splitDisabledRulesForVueAndSvelteFiles(
    baseConfig
  );
  if (overrides !== void 0) {
    handleOverridesScope(overrides, configs, categories);
  }
  return configs;
};
const buildFromOxlintConfigFile = (oxlintConfigFile) => {
  const config = getConfigContent(oxlintConfigFile);
  if (config === void 0) {
    return [];
  }
  config.__misc = {
    filePath: path.resolve(oxlintConfigFile)
  };
  return buildFromOxlintConfig(config);
};
export {
  buildFromOxlintConfig,
  buildFromOxlintConfigFile
};
