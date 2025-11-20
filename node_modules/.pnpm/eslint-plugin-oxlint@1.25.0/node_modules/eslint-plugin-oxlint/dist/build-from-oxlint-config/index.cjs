"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rules = require("./rules.cjs");
const categories = require("./categories.cjs");
const plugins = require("./plugins.cjs");
const ignorePatterns = require("./ignore-patterns.cjs");
const overrides = require("./overrides.cjs");
const configHelper = require("../config-helper.cjs");
const _extends = require("./extends.cjs");
const utilities = require("./utilities.cjs");
const path = require("node:path");
const buildFromOxlintConfig = (config) => {
  _extends.resolveRelativeExtendsPaths(config);
  const extendConfigs = _extends.readExtendsConfigsFromConfig(config);
  if (extendConfigs.length > 0) {
    _extends.handleExtendsScope(extendConfigs, config);
  }
  const rules$1 = {};
  const plugins$1 = plugins.readPluginsFromConfig(config) ?? plugins.defaultPlugins;
  const categories$1 = categories.readCategoriesFromConfig(config) ?? categories.defaultCategories;
  plugins$1.push("eslint");
  if (plugins$1.includes("react")) {
    plugins$1.push("react-hooks");
  }
  categories.handleCategoriesScope(plugins$1, categories$1, rules$1);
  const configRules = rules.readRulesFromConfig(config);
  if (configRules !== void 0) {
    rules.handleRulesScope(configRules, rules$1);
  }
  const baseConfig = {
    name: "oxlint/from-oxlint-config",
    rules: rules$1
  };
  const ignorePatterns$1 = ignorePatterns.readIgnorePatternsFromConfig(config);
  if (ignorePatterns$1 !== void 0) {
    ignorePatterns.handleIgnorePatternsScope(ignorePatterns$1, baseConfig);
  }
  const overrides$1 = overrides.readOverridesFromConfig(config);
  const configs = configHelper.splitDisabledRulesForVueAndSvelteFiles(
    baseConfig
  );
  if (overrides$1 !== void 0) {
    overrides.handleOverridesScope(overrides$1, configs, categories$1);
  }
  return configs;
};
const buildFromOxlintConfigFile = (oxlintConfigFile) => {
  const config = utilities.getConfigContent(oxlintConfigFile);
  if (config === void 0) {
    return [];
  }
  config.__misc = {
    filePath: path.resolve(oxlintConfigFile)
  };
  return buildFromOxlintConfig(config);
};
exports.buildFromOxlintConfig = buildFromOxlintConfig;
exports.buildFromOxlintConfigFile = buildFromOxlintConfigFile;
