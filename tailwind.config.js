/* eslint-disable no-undef */

/**
 * @description
 * This file is used to configure the Tailwind CSS framework.
 *
 * @see https://tailwindcss.com/docs/configuration
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{vue,ts}'],
	theme: {
		fontFamily: {
			inter: ['InterVariable', 'Inter', 'InterDisplay'],
			graphik: ['Graphik'],
			sans: [
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
			serif: [
				'ui-serif',
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif',
			],
		},
		extend: {
			fontSize: {
				'extra-small': '10px',
				small: '12px',
				default: '14px',
				body: '16px',
				title: '32px',
				h6: '40px',
				h5: '48px',
				h4: '56px',
				h3: '64px',
				h2: '72px',
				h1: '96px',
			},
			lineHeight: {
				'extra-small': '12px',
				small: '14px',
				default: '16px',
				body: '18px',
				title: '34px',
				h6: '42px',
				h5: '50px',
				h4: '58px',
				h3: '66px',
				h2: '74px',
				h1: '98px',
			},
		},
	},
	plugins: [['postcss-import', {}], 'tailwindcss', ['postcss-preset-env', {}]],
};
