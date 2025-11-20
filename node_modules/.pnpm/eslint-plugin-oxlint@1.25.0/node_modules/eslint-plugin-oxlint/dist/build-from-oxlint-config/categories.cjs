"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const constants = require("../constants.cjs");
const configsByCategory = require("../generated/configs-by-category.cjs");
const utilities = require("./utilities.cjs");
const defaultCategories = {
  correctness: "warn"
};
const handleCategoriesScope = (plugins, categories, rules) => {
  for (const category in categories) {
    const configName = `flat/${category}`;
    if (categories[category] === "off" || !(configName in configsByCategory)) {
      continue;
    }
    const possibleRules = configsByCategory[configName].rules;
    for (const rule of Object.keys(possibleRules)) {
      for (const plugin of plugins) {
        const pluginPrefix = plugin in constants.aliasPluginNames ? constants.aliasPluginNames[plugin] : plugin;
        if (pluginPrefix === "" && !rule.includes("/")) {
          rules[rule] = "off";
        } else if (rule.startsWith(`${pluginPrefix}/`)) {
          rules[rule] = "off";
        }
      }
    }
  }
};
const readCategoriesFromConfig = (config) => {
  return "categories" in config && utilities.isObject(config.categories) ? config.categories : void 0;
};
exports.defaultCategories = defaultCategories;
exports.handleCategoriesScope = handleCategoriesScope;
exports.readCategoriesFromConfig = readCategoriesFromConfig;
