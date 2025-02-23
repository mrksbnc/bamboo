import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';
import tailwindcss from '@tailwindcss/vite';

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
		cssCodeSplit: true,
		target: 'esnext',
		lib: {
			name: 'bamboo',
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
		external: ['vue'],
	},
});
