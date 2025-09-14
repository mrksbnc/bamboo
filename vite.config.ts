import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), svgLoader(), dts()],
	appType: 'custom',
	build: {
		minify: true,
		cssMinify: true,
		emptyOutDir: true,
		lib: {
			name: 'bamboo',
			cssFileName: 'lib',
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
		},
	},
	assetsInclude: ['**/*.svg'],
	mode: 'production',
	resolve: {
		external: ['vue'],
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
