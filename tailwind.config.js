/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [['postcss-import', {}], 'tailwindcss', ['postcss-preset-env', {}]],
};
