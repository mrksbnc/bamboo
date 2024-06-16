/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{vue,ts}'],
	theme: {
		extend: {
			width: {
				small: '12px',
				default: '14px',
				large: '18px',
			},
			height: {
				small: '12px',
				default: '14px',
				large: '18px',
			},
			fontSize: {
				overline: '10px',
				caption: '12px',
				default: '14px',
				body: '16px',
				h6: '20px',
				h5: '24px',
				h4: '34px',
				h3: '48px',
				h2: '60px',
				h1: '96px',
			},
			lineHeight: {
				overline: '12px',
				caption: '16px',
				default: '20px',
				body: '24px',
				h6: '32px',
				h5: '40px',
				h4: '48px',
				h3: '56px',
				h2: '64px',
				h1: '96px',
			},
		},
	},
	plugins: [['postcss-import', {}], 'tailwindcss', ['postcss-preset-env', {}]],
};
