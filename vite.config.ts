import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			tsconfigPath: './tsconfig.app.json',
		}),
		svgLoader(),
		vueDevTools(),
		tailwindcss(),
	],
	build: {
		cssMinify: true,

		lib: {
			name: 'bamboo',
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
		},
	},
	resolve: {
		external: ['vue'],
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
