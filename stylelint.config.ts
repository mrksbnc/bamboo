import type { Config } from 'stylelint';

const config: Config = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-standard-vue',
	],
	ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/.git/**', '**/coverage/**'],
	rules: {
		/**
		 * BEM naming
		 * - Allows block
		 * - block__element
		 * - block--modifier
		 * - block__element--modifier
		 * - Allows common state helpers: is-*, has-*
		 */
		'selector-class-pattern': [
			'^(' +
				'[a-z]([a-z0-9-]+)?' +
				'(__([a-z0-9]+-?)+)?' +
				'(--([a-z0-9]+-?)+){0,2}' +
				'|' +
				'(is|has)-[a-z0-9-]+' +
				')$',
			{
				message:
					'Expected class selector to follow BEM naming (block__element--modifier) or state naming (is-*, has-*)',
			},
		],

		/**
		 * Complexity / maintainability
		 */
		'selector-max-compound-selectors': 4,
		'max-nesting-depth': 3,
		'selector-max-specificity': '0,4,0',

		/**
		 * Custom properties
		 */
		'custom-property-pattern': null,

		/**
		 * Vue scoped styles safety
		 */
		'selector-no-qualifying-type': [
			true,
			{
				ignore: ['attribute', 'class'],
			},
		],

		/**
		 * Vendor prefixes (handled by build tools)
		 */
		'property-no-vendor-prefix': null,
		'value-no-vendor-prefix': null,

		/**
		 * SCSS rules
		 */
		'scss/at-rule-no-unknown': true,
		'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',

		/**
		 * Vue pseudo selectors
		 */
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep', 'global', 'slotted'],
			},
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
			},
		],
	},
};

export default config;
