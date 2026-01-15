import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{vue,js,ts,jsx,tsx,md}',
		'./.vitepress/**/*.{vue,js,ts,jsx,tsx}',
		'../bamboo-vue/src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;
