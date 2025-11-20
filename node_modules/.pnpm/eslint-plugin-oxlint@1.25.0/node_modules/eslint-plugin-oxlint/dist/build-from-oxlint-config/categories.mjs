import { aliasPluginNames } from "../constants.mjs";
import configByCategory from "../generated/configs-by-category.mjs";
import { isObject } from "./utilities.mjs";
const defaultCategories = {
  correctness: "warn"
};
const handleCategoriesScope = (plugins, categories, rules) => {
  for (const category in categories) {
    const configName = `flat/${category}`;
    if (categories[category] === "off" || !(configName in configByCategory)) {
      continue;
    }
    const possibleRules = configByCategory[configName].rules;
    for (const rule of Object.keys(possibleRules)) {
      for (const plugin of plugins) {
        const pluginPrefix = plugin in aliasPluginNames ? aliasPluginNames[plugin] : plugin;
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
  return "categories" in config && isObject(config.categories) ? config.categories : void 0;
};
export {
  defaultCategories,
  handleCategoriesScope,
  readCategoriesFromConfig
};
