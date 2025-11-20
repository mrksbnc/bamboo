import { EslintPluginOxlintConfig, OxlintConfig, OxlintConfigCategories, OxlintConfigOverride } from './types.js';
export declare const handleOverridesScope: (overrides: OxlintConfigOverride[], configs: EslintPluginOxlintConfig[], baseCategories?: OxlintConfigCategories) => void;
export declare const readOverridesFromConfig: (config: OxlintConfig) => OxlintConfigOverride[] | undefined;
