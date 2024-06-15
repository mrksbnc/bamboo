/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{vue,ts}'],
	theme: {
		extend: {},
	},
	plugins: [['postcss-import', {}], 'tailwindcss', ['postcss-preset-env', {}]],
};
