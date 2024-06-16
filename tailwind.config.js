/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{vue,ts}'],
	theme: {
		extend: {
			width: {
				small: '10px',
				default: '14px',
				large: '18px',
			},
			height: {
				small: '10px',
				default: '14px',
				large: '18px',
			},
			fontSize: {
				small: '10px',
				default: '14px',
				large: '18px',
			},
			lineHeight: {
				small: '12px',
				default: '16px',
				large: '20px',
			},
		},
	},
	plugins: [['postcss-import', {}], 'tailwindcss', ['postcss-preset-env', {}]],
};
