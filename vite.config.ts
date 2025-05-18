import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			outDir: 'dist',
			entryRoot: 'src/index.ts',
		}),
		svgLoader(),
	],
	build: {
		cssMinify: true,
		emptyOutDir: true,
		lib: {
			name: 'bamboo',
			formats: ['es'],
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
