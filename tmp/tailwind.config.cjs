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
				'bo-xs': '0.75rem', // 12px
				'bo-sm': '0.875rem', // 14px
				'bo-base': '1rem', // 16px
				'bo-lg': '1.125rem', // 18px
				'bo-xl': '1.25rem', // 20px
				'bo-2xl': '1.5rem', // 24px
				'bo-3xl': '1.875rem', // 30px
				'bo-4xl': '2.25rem', // 36px
				'bo-5xl': '3rem', // 48px
				'bo-6xl': '3.75rem', // 60px
				'bo-7xl': '4.5rem', // 72px
			},
			/**
			 * @description
			 * The library uses a 1.3 ratio for the line height.
			 */
			lineHeight: {
				'bo-xs': '1rem', // 16px
				'bo-sm': '1rem', // 16px
				'bo-base': '1.5rem', // 24px
				'bo-lg': '1.5rem', // 24px
				'bo-xl': '1.5rem', // 24px
				'bo-2xl': '2rem', // 32px
				'bo-3xl': '2.5rem', // 40px
				'bo-4xl': '3rem', // 48px
				'bo-5xl': '4rem', // 64px
				'bo-6xl': '5rem', // 80px
				'bo-7xl': '6rem', // 96px
			},
		},
	},
	plugins: [['postcss-import', {}], 'tailwindcss', ['postcss-preset-env', {}]],
};
