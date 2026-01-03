import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	appType: 'custom',
	plugins: [
		vue(),
		tailwindcss(),
		vueDevTools(),
		svgLoader({
			svgo: true,
			svgoConfig: {
				datauri: 'base64',
			},
		}),
		dts({ tsconfigPath: './tsconfig.app.json' }),
	],
	build: {
		minify: true,
		cssMinify: true,
		emptyOutDir: true,
		lib: {
			name: 'bamboo',
			cssFileName: 'lib',
			entry: [
				fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
				fileURLToPath(new URL('./src/core/index.ts', import.meta.url)),
			],
		},
		rolldownOptions: {
			treeshake: true,
			external: ['vue'],
			cwd: process.cwd(),
			input: {
				components: fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
				core: fileURLToPath(new URL('./src/core/index.ts', import.meta.url)),
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
