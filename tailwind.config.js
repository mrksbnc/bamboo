/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				18: 'repeat(18, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
};
