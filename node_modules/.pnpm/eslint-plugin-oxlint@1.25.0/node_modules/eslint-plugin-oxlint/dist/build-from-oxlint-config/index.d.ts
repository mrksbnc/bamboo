import { EslintPluginOxlintConfig, OxlintConfig } from './types.js';
/**
 * builds turned off rules, which are supported by oxlint.
 * It accepts an object similar to the .oxlintrc.json file.
 */
export declare const buildFromOxlintConfig: (config: OxlintConfig) => EslintPluginOxlintConfig[];
/**
 * builds turned off rules, which are supported by oxlint.
 * It accepts an filepath to the .oxlintrc.json file.
 *
 * It the .oxlintrc.json file could not be found or parsed,
 * no rules will be deactivated and an error to `console.error` will be emitted
 */
export declare const buildFromOxlintConfigFile: (oxlintConfigFile: string) => EslintPluginOxlintConfig[];
